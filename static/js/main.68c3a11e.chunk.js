(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,i,t){},104:function(e,i,t){},207:function(e,i,t){"use strict";t.r(i);var n=t(11),s=t.n(n),r=t(91),a=t.n(r),h=(t(102),t(92)),o=t(93),d=t(95),p=t(94),c=t(96),l=(t(104),t(6)),u=function(e){function i(){var e,t;Object(h.a)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(i)).call.apply(e,[this].concat(s)))).speed=1,t.down=1,t.right=1,t.frame=0,t.nearMissAnimation=0,t}return Object(c.a)(i,e),Object(o.a)(i,[{key:"componentWillMount",value:function(){l.settings.SCALE_MODE=l.SCALE_MODES.NEAREST,this.app=new l.Application({width:window.innerWidth,height:window.innerHeight,transparent:!1})}},{key:"injectPixiContext",value:function(e){var i=this;e&&e.children.length<=0&&(e.appendChild(this.app.view),l.loader.add("dvd","dvd.png").add("title.xml").add("text.xml").load(function(){return i.initializeRender()}))}},{key:"initializeRender",value:function(){var e=this,i=new l.Graphics;i.beginFill(0),i.drawRect(0,0,this.app.renderer.width,this.app.renderer.height),this.app.stage.addChild(i),this.sprite=new l.Sprite(l.loader.resources.dvd.texture),this.sprite.tint=16711680,this.sprite.x=300*Math.random(),this.sprite.y=300*Math.random(),this.app.stage.addChild(this.sprite),this.app.ticker.add(function(i){return e.tick(i)}),this.app.stage.interactive=!0,this.app.stage.mousedown=function(i){return e.speed=100},this.app.stage.touchstart=function(i){return e.speed=100},this.app.stage.mouseup=function(i){return e.speed=1},this.app.stage.touchend=function(i){return e.speed=1},this.nearMiss=new l.BitmapText("Near Miss",{font:"110px Arcade Interlaced"}),this.nearMiss.scale=new l.Point(.5,.5),this.nearMiss.tint=13369344,this.removeNearMiss(),this.missedBy=new l.BitmapText("",{font:"48px Arcade Normal"}),this.missedBy.scale=new l.Point(.5,.5),this.app.stage.addChild(this.nearMiss),this.app.stage.addChild(this.missedBy)}},{key:"removeNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width,this.nearMiss.y=this.app.renderer.height}},{key:"removeMissedBy",value:function(){this.missedBy.x=this.app.renderer.width,this.missedBy.y=this.app.renderer.height}},{key:"renderNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width/2-this.nearMiss.width/2,this.nearMiss.y=this.app.renderer.height/2-this.nearMiss.height/2}},{key:"renderMissedBy",value:function(e){this.missedBy.text="Missed By "+Math.round(e)+" Pixels",this.missedBy.x=this.app.renderer.width/2-this.missedBy.width/2,this.missedBy.y=this.app.renderer.height/2-this.missedBy.height/2+60}},{key:"tick",value:function(e){this.frame++,this.frame%30!==0&&1!==this.nearMissAnimation||this.nearMissAnimation>0&&(this.nearMissAnimation%2===0||1===this.nearMissAnimation?this.renderNearMiss():(this.removeNearMiss(),this.nearMissAnimation>=8&&(this.nearMissAnimation=-1,this.removeMissedBy())),this.nearMissAnimation++),this.lookForward()&&(this.speed=1);for(var i=!1,t=!1,n=1e3,s=0;s<this.speed;s++)this.sprite.x+=this.right,this.sprite.y+=this.down,(this.sprite.x<=0&&this.right<0||this.sprite.x>this.app.renderer.width-this.sprite.width&&this.right>0)&&(n=Math.min(this.app.renderer.height-this.sprite.height-this.sprite.y,this.sprite.y),this.right*=-1,i=!0),(this.sprite.y<=0&&this.down<0||this.sprite.y>this.app.renderer.height-this.sprite.height&&this.down>0)&&(n=Math.min(this.app.renderer.width-this.sprite.width-this.sprite.x,this.sprite.x),i&&(t=!0),this.down*=-1,i=!0);if(i){t||n<20&&0===this.nearMissAnimation&&(this.nearMissAnimation=1,this.renderMissedBy(n));for(var r=[],a=0;a<3;a++)r.push(128*Math.random()+128);var h=Math.floor(Math.random()*r.length);r[h]=r[h]-128,this.sprite.tint=(1<<24)+(r[0]<<16)+(r[1]<<8)+r[2]}}},{key:"lookForward",value:function(){for(var e=this.down,i=this.right,t=this.sprite.x,n=this.sprite.y,s=0;s<100;s++){n+=e;var r=-1;if(((t+=i)<=0&&i<0||t>this.app.renderer.width-this.sprite.width&&i>0)&&(r=Math.min(this.app.renderer.height-this.sprite.height-n,n),i*=-1),(n<=0&&e<0||n>this.app.renderer.height-this.sprite.height&&e>0)&&(r=Math.min(this.app.renderer.width-this.sprite.width-t,t),e*=-1),r>0)return r<20}return!1}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:function(i){return e.injectPixiContext(i)}})}}]),i}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,i){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),i&&i.onUpdate&&i.onUpdate(e)):(console.log("Content is cached for offline use."),i&&i.onSuccess&&i.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(s.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DVDScreensaver",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var i="".concat("/DVDScreensaver","/service-worker.js");w?(function(e,i){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,i)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(i,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):f(i,e)})}}()},97:function(e,i,t){e.exports=t(207)}},[[97,2,1]]]);
//# sourceMappingURL=main.68c3a11e.chunk.js.map