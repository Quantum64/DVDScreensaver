(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(i,t,e){},104:function(i,t,e){},207:function(i,t,e){"use strict";e.r(t);var s=e(11),n=e.n(s),h=e(91),r=e.n(h),a=(e(102),e(92)),d=e(93),o=e(95),p=e(94),w=e(96),c=(e(104),e(5)),u=["up","up","down","down","left","right","left","right","b","a"],l=[["ArrowDown","down"],["ArrowUp","up"],["ArrowLeft","left"],["ArrowRight","right"],["a","a"],["b","b"]],m=function(i){function t(){var i,e;Object(a.a)(this,t);for(var s=arguments.length,n=new Array(s),h=0;h<s;h++)n[h]=arguments[h];return(e=Object(o.a)(this,(i=Object(p.a)(t)).call.apply(i,[this].concat(n)))).speed=1,e.down=1,e.right=1,e.frame=0,e.nearMissAnimation=0,e.hitAnimation=0,e.codeIndex=0,e.cheat=!1,e}return Object(w.a)(t,i),Object(d.a)(t,[{key:"componentWillMount",value:function(){var i=this;this.app=new c.Application({width:window.innerWidth,height:window.innerHeight,transparent:!1}),this.app.renderer.autoResize=!0,window.onresize=function(){i.app.renderer.resize(window.innerWidth,window.innerHeight);var t=Math.min(window.innerHeight,window.innerWidth)/800;i.sprite.width=i.swidth*t,i.sprite.height=i.sheight*t,i.nearMiss.scale=new c.Point(.5*t,.5*t),i.missedBy.scale=new c.Point(.5*t,.5*t)};for(var t=function(){var t=l[e];(function(i){var t={};t.value=i,t.isDown=!1,t.isUp=!0,t.press=void 0,t.release=void 0,t.downHandler=function(i){i.key===t.value&&(t.isUp&&t.press&&t.press(),t.isDown=!0,t.isUp=!1,i.preventDefault())},t.upHandler=function(i){i.key===t.value&&(t.isDown&&t.release&&t.release(),t.isDown=!1,t.isUp=!0,i.preventDefault())};var e=t.downHandler.bind(t),s=t.upHandler.bind(t);return window.addEventListener("keydown",e,!1),window.addEventListener("keyup",s,!1),t.unsubscribe=function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",s)},t}(t[0])).press=function(){if(u[i.codeIndex]===t[1])return i.codeIndex++,void i.checkCode();i.codeIndex=0}},e=0;e<l.length;e++)t()}},{key:"checkCode",value:function(){this.codeIndex>=u.length&&(this.cheat=!0,this.codeIndex=0,this.speed=1e3)}},{key:"injectPixiContext",value:function(i){var t=this;i&&i.children.length<=0&&(i.appendChild(this.app.view),c.loader.add("dvd","dvd.png").add("title.xml").add("text.xml").load(function(){return t.initializeRender()}))}},{key:"initializeRender",value:function(){var i=this,t=Math.min(window.innerHeight,window.innerWidth)/800,e=new c.Graphics;e.beginFill(0),e.drawRect(0,0,this.app.renderer.width,this.app.renderer.height),this.app.stage.addChild(e),this.sprite=new c.Sprite(c.loader.resources.dvd.texture),this.sprite.tint=16711680,this.sprite.x=300*Math.random(),this.sprite.y=300*Math.random(),this.swidth=this.sprite.width,this.sheight=this.sprite.height,this.sprite.width=this.swidth*t,this.sprite.height=this.sheight*t,this.app.stage.addChild(this.sprite),this.app.ticker.add(function(t){return i.tick(t)}),this.app.stage.interactive=!0,this.app.stage.mousedown=function(t){return i.nearMissAnimation<=0?i.speed=100:i.speed=1},this.app.stage.touchstart=function(t){return i.nearMissAnimation<=0?i.speed=100:i.speed=1},this.app.stage.mouseup=function(t){return i.speed=1},this.app.stage.touchend=function(t){return i.speed=1},this.nearMiss=new c.extras.BitmapText("Near Miss",{font:"110px Arcade Interlaced"}),this.nearMiss.scale=new c.Point(.5*t,.5*t),this.nearMiss.tint=13369344,this.hit=new c.extras.BitmapText("HIT",{font:"300px Arcade Interlaced"}),this.hit.scale=new c.Point(.5*t,.5*t),this.hit.tint=31232,this.removeHit(),this.removeNearMiss(),this.missedBy=new c.extras.BitmapText("",{font:"48px Arcade Normal"}),this.missedBy.scale=new c.Point(.5*t,.5*t),this.app.stage.addChild(this.nearMiss),this.app.stage.addChild(this.missedBy),this.app.stage.addChild(this.hit)}},{key:"removeNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width+3e3,this.nearMiss.y=this.app.renderer.height+3e3}},{key:"removeMissedBy",value:function(){this.missedBy.x=this.app.renderer.width+3e3,this.missedBy.y=this.app.renderer.height+3e3}},{key:"renderNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width/2-this.nearMiss.width/2,this.nearMiss.y=this.app.renderer.height/2-this.nearMiss.height/2}},{key:"renderHit",value:function(){this.hit.x=this.app.renderer.width/2-this.hit.width/2,this.hit.y=this.app.renderer.height/2-this.hit.height/2}},{key:"removeHit",value:function(){this.hit.x=this.app.renderer.width+3e3,this.hit.y=this.app.renderer.height+3e3}},{key:"renderMissedBy",value:function(i){this.missedBy.text="Missed By "+Math.round(i)+" Pixel"+(i>1?"s":""),this.missedBy.x=this.app.renderer.width/2-this.missedBy.width/2,this.missedBy.y=this.app.renderer.height/2-this.missedBy.height/2+Math.min(window.innerHeight,window.innerWidth)/800*60}},{key:"tick",value:function(i){this.frame++,this.frame%30!==0&&1!==this.nearMissAnimation&&1!==this.hitAnimation||(this.nearMissAnimation>0&&(this.nearMissAnimation%2===0||1===this.nearMissAnimation?this.renderNearMiss():(this.removeNearMiss(),this.nearMissAnimation>=6&&(this.nearMissAnimation=-1,this.removeMissedBy())),this.nearMissAnimation++),this.hitAnimation>0&&(this.hitAnimation%2===0||1===this.hitAnimation?this.renderHit():(this.removeHit(),this.hitAnimation>=8&&(this.hitAnimation=-1,this.cheat=!1,this.codeIndex=0)),this.hitAnimation++)),this.lookForward()&&(this.speed=1);for(var t=!1,e=1e3,s=0;s<this.speed;s++)this.sprite.x+=this.right,this.sprite.y+=this.down,(this.sprite.x<=0&&this.right<0||this.sprite.x>this.app.renderer.width-this.sprite.width&&this.right>0)&&(e=Math.min(this.app.renderer.height-this.sprite.height-this.sprite.y,this.sprite.y),this.right*=-1,t=!0),(this.sprite.y<=0&&this.down<0||this.sprite.y>this.app.renderer.height-this.sprite.height&&this.down>0)&&(e=Math.min(this.app.renderer.width-this.sprite.width-this.sprite.x,this.sprite.x),this.down*=-1,t=!0);if(t&&0===this.hitAnimation){e<.5?(this.hitAnimation=1,this.renderHit()):e<20&&0===this.nearMissAnimation&&!this.cheat&&(this.nearMissAnimation=1,this.renderMissedBy(e));for(var n=[],h=0;h<3;h++)n.push(128*Math.random()+128);Math.floor(Math.random()*n.length);n[Math.floor(Math.random()*n.length)]=0,this.sprite.tint=(1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]}}},{key:"lookForward",value:function(){for(var i=this.down,t=this.right,e=this.sprite.x,s=this.sprite.y,n=0;n<(this.cheat?1e3:150);n++){s+=i;var h=-1;if(((e+=t)<=0&&t<0||e>this.app.renderer.width-this.sprite.width&&t>0)&&(h=Math.min(this.app.renderer.height-this.sprite.height-s,s),t*=-1),(s<=0&&i<0||s>this.app.renderer.height-this.sprite.height&&i>0)&&(h=Math.min(this.app.renderer.width-this.sprite.width-e,e),i*=-1),h>0)return this.cheat?h<.5:h<20}return!1}},{key:"render",value:function(){var i=this;return n.a.createElement("div",{ref:function(t){return i.injectPixiContext(t)}})}}]),t}(s.Component);r.a.render(n.a.createElement(m,null),document.getElementById("root"))},97:function(i,t,e){i.exports=e(207)}},[[97,2,1]]]);
//# sourceMappingURL=main.6f9f87d3.chunk.js.map