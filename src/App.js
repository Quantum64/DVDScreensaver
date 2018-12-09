import React, { Component } from 'react';
import './App.css';

import * as PIXI from "pixi.js";

const near = 20;
const scaleFactor = 800;

class App extends Component {
  speed = 1;
  down = 1;
  right = 1;
  frame = 0;
  nearMissAnimation = 0;

  componentWillMount() {
    this.app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, transparent: false });
    this.app.renderer.autoResize = true;
    window.onresize = () => {
      this.app.renderer.resize(window.innerWidth, window.innerHeight);
      const scale = Math.min(window.innerHeight, window.innerWidth) / scaleFactor;
      this.sprite.width = this.swidth * scale;
      this.sprite.height = this.sheight * scale;
    }
  }

  injectPixiContext(element) {
    if (element && element.children.length <= 0) {
      element.appendChild(this.app.view);
      PIXI.loader.add("dvd", "dvd.png").add("title.xml").add("text.xml").load(() => this.initializeRender());
    }
  }

  initializeRender() {
    const scale = Math.min(window.innerHeight, window.innerWidth) / scaleFactor;
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x000000);
    graphics.drawRect(0, 0, this.app.renderer.width, this.app.renderer.height);
    this.app.stage.addChild(graphics);
    this.sprite = new PIXI.Sprite(PIXI.loader.resources["dvd"].texture);
    this.sprite.tint = 0xff0000;
    this.sprite.x = Math.random() * 300;
    this.sprite.y = Math.random() * 300;
    this.swidth = this.sprite.width;
    this.sheight = this.sprite.height;
    this.sprite.width = this.swidth * scale;
    this.sprite.height = this.sheight * scale;
    this.app.stage.addChild(this.sprite);
    this.app.ticker.add((delta) => this.tick(delta));
    this.app.stage.interactive = true;
    this.app.stage.mousedown = event => this.speed = 100;
    this.app.stage.touchstart = event => this.speed = 100;
    this.app.stage.mouseup = event => this.speed = 1;
    this.app.stage.touchend = event => this.speed = 1;
    this.nearMiss = new PIXI.BitmapText("Near Miss", { font: "110px Arcade Interlaced" });
    this.nearMiss.scale = new PIXI.Point(0.5, 0.5);
    this.nearMiss.tint = 0xcc0000;
    this.removeNearMiss();
    this.missedBy = new PIXI.BitmapText("", { font: "48px Arcade Normal" });
    this.missedBy.scale = new PIXI.Point(0.5, 0.5);
    this.app.stage.addChild(this.nearMiss);
    this.app.stage.addChild(this.missedBy);
  }

  removeNearMiss() {
    this.nearMiss.x = this.app.renderer.width + 3000;
    this.nearMiss.y = this.app.renderer.height + 3000;
  }

  removeMissedBy() {
    this.missedBy.x = this.app.renderer.width + 3000;
    this.missedBy.y = this.app.renderer.height + 3000;
  }

  renderNearMiss() {
    this.nearMiss.x = (this.app.renderer.width / 2) - (this.nearMiss.width / 2);
    this.nearMiss.y = (this.app.renderer.height / 2) - (this.nearMiss.height / 2);
  }

  renderMissedBy(offset) {
    this.missedBy.text = "Missed By " + Math.round(offset) + " Pixels"
    this.missedBy.x = (this.app.renderer.width / 2) - (this.missedBy.width / 2);
    this.missedBy.y = (this.app.renderer.height / 2) - (this.missedBy.height / 2) + 60;
  }

  tick(delta) {
    this.frame++;
    if (this.frame % 30 === 0 || this.nearMissAnimation === 1) {
      if (this.nearMissAnimation > 0) {
        if (this.nearMissAnimation % 2 === 0 || this.nearMissAnimation === 1) {
          this.renderNearMiss();
        } else {
          this.removeNearMiss();
          if (this.nearMissAnimation >= 8) {
            this.nearMissAnimation = -1;
            this.removeMissedBy();
          }
        }
        this.nearMissAnimation++;
      }
    }
    if (this.lookForward()) {
      this.speed = 1;
    }
    let bounce = false;
    let hit = false;
    let offset = 1000;
    for (let i = 0; i < this.speed; i++) {
      this.sprite.x += this.right;
      this.sprite.y += this.down;
      if ((this.sprite.x <= 0 && this.right < 0) || (this.sprite.x > this.app.renderer.width - this.sprite.width && this.right > 0)) {
        offset = Math.min(this.app.renderer.height - this.sprite.height - this.sprite.y, this.sprite.y);
        this.right *= -1;
        bounce = true;
      }
      if ((this.sprite.y <= 0 && this.down < 0) || (this.sprite.y > this.app.renderer.height - this.sprite.height && this.down > 0)) {
        offset = Math.min(this.app.renderer.width - this.sprite.width - this.sprite.x, this.sprite.x);
        if (bounce) {
          hit = true;
        }
        this.down *= -1;
        bounce = true;
      }
    }
    if (bounce) {
      if (!hit) {
        if (offset < near && this.nearMissAnimation === 0) {
          this.nearMissAnimation = 1;
          this.renderMissedBy(offset);
        }
      }
      const rgb = [];
      for (let i = 0; i < 3; i++) {
        rgb.push((Math.random() * 128) + 128);
      }
      const index = Math.floor(Math.random() * rgb.length);
      rgb[index] = rgb[index] - 128;
      this.sprite.tint = ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]);
    }
  }

  lookForward() {
    let down = this.down;
    let right = this.right;
    let x = this.sprite.x;
    let y = this.sprite.y;
    for (let i = 0; i < 100; i++) {
      x += right;
      y += down;
      let offset = -1;
      if ((x <= 0 && right < 0) || (x > this.app.renderer.width - this.sprite.width && right > 0)) {
        offset = Math.min(this.app.renderer.height - this.sprite.height - y, y);
        right *= -1;
      }
      if ((y <= 0 && down < 0) || (y > this.app.renderer.height - this.sprite.height && down > 0)) {
        offset = Math.min(this.app.renderer.width - this.sprite.width - x, x);
        down *= -1;
      }
      if (offset > 0) {
        return offset < near;
      }
    }
    return false;
  }

  render() {
    return (
      <div ref={element => this.injectPixiContext(element)} />
    );
  }
}

export default App;
