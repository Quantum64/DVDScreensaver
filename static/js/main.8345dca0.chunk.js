(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(i,e,t){},104:function(i,e,t){},207:function(i,e,t){"use strict";t.r(e);var n=t(11),s=t.n(n),r=t(91),h=t.n(r),a=(t(102),t(92)),o=t(93),d=t(95),p=t(94),c=t(96),l=(t(104),t(7)),u=function(i){function e(){var i,t;Object(a.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(d.a)(this,(i=Object(p.a)(e)).call.apply(i,[this].concat(s)))).speed=1,t.down=1,t.right=1,t.frame=0,t.nearMissAnimation=0,t}return Object(c.a)(e,i),Object(o.a)(e,[{key:"componentWillMount",value:function(){var i=this;this.app=new l.Application({width:window.innerWidth,height:window.innerHeight,transparent:!1}),this.app.renderer.autoResize=!0,window.onresize=function(){i.app.renderer.resize(window.innerWidth,window.innerHeight);var e=Math.min(window.innerHeight,window.innerWidth)/800;i.sprite.width=i.swidth*e,i.sprite.height=i.sheight*e}}},{key:"injectPixiContext",value:function(i){var e=this;i&&i.children.length<=0&&(i.appendChild(this.app.view),l.loader.add("dvd","dvd.png").add("title.xml").add("text.xml").load(function(){return e.initializeRender()}))}},{key:"initializeRender",value:function(){var i=this,e=Math.min(window.innerHeight,window.innerWidth)/800,t=new l.Graphics;t.beginFill(0),t.drawRect(0,0,this.app.renderer.width,this.app.renderer.height),this.app.stage.addChild(t),this.sprite=new l.Sprite(l.loader.resources.dvd.texture),this.sprite.tint=16711680,this.sprite.x=300*Math.random(),this.sprite.y=300*Math.random(),this.swidth=this.sprite.width,this.sheight=this.sprite.height,this.sprite.width=this.swidth*e,this.sprite.height=this.sheight*e,this.app.stage.addChild(this.sprite),this.app.ticker.add(function(e){return i.tick(e)}),this.app.stage.interactive=!0,this.app.stage.mousedown=function(e){return i.speed=100},this.app.stage.touchstart=function(e){return i.speed=100},this.app.stage.mouseup=function(e){return i.speed=1},this.app.stage.touchend=function(e){return i.speed=1},this.nearMiss=new l.BitmapText("Near Miss",{font:"110px Arcade Interlaced"}),this.nearMiss.scale=new l.Point(.5,.5),this.nearMiss.tint=13369344,this.removeNearMiss(),this.missedBy=new l.BitmapText("",{font:"48px Arcade Normal"}),this.missedBy.scale=new l.Point(.5,.5),this.app.stage.addChild(this.nearMiss),this.app.stage.addChild(this.missedBy)}},{key:"removeNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width+3e3,this.nearMiss.y=this.app.renderer.height+3e3}},{key:"removeMissedBy",value:function(){this.missedBy.x=this.app.renderer.width+3e3,this.missedBy.y=this.app.renderer.height+3e3}},{key:"renderNearMiss",value:function(){this.nearMiss.x=this.app.renderer.width/2-this.nearMiss.width/2,this.nearMiss.y=this.app.renderer.height/2-this.nearMiss.height/2}},{key:"renderMissedBy",value:function(i){this.missedBy.text="Missed By "+Math.round(i)+" Pixels",this.missedBy.x=this.app.renderer.width/2-this.missedBy.width/2,this.missedBy.y=this.app.renderer.height/2-this.missedBy.height/2+60}},{key:"tick",value:function(i){this.frame++,this.frame%30!==0&&1!==this.nearMissAnimation||this.nearMissAnimation>0&&(this.nearMissAnimation%2===0||1===this.nearMissAnimation?this.renderNearMiss():(this.removeNearMiss(),this.nearMissAnimation>=8&&(this.nearMissAnimation=-1,this.removeMissedBy())),this.nearMissAnimation++),this.lookForward()&&(this.speed=1);for(var e=!1,t=!1,n=1e3,s=0;s<this.speed;s++)this.sprite.x+=this.right,this.sprite.y+=this.down,(this.sprite.x<=0&&this.right<0||this.sprite.x>this.app.renderer.width-this.sprite.width&&this.right>0)&&(n=Math.min(this.app.renderer.height-this.sprite.height-this.sprite.y,this.sprite.y),this.right*=-1,e=!0),(this.sprite.y<=0&&this.down<0||this.sprite.y>this.app.renderer.height-this.sprite.height&&this.down>0)&&(n=Math.min(this.app.renderer.width-this.sprite.width-this.sprite.x,this.sprite.x),e&&(t=!0),this.down*=-1,e=!0);if(e){t||n<20&&0===this.nearMissAnimation&&(this.nearMissAnimation=1,this.renderMissedBy(n));for(var r=[],h=0;h<3;h++)r.push(128*Math.random()+128);var a=Math.floor(Math.random()*r.length);r[a]=r[a]-128,this.sprite.tint=(1<<24)+(r[0]<<16)+(r[1]<<8)+r[2]}}},{key:"lookForward",value:function(){for(var i=this.down,e=this.right,t=this.sprite.x,n=this.sprite.y,s=0;s<100;s++){n+=i;var r=-1;if(((t+=e)<=0&&e<0||t>this.app.renderer.width-this.sprite.width&&e>0)&&(r=Math.min(this.app.renderer.height-this.sprite.height-n,n),e*=-1),(n<=0&&i<0||n>this.app.renderer.height-this.sprite.height&&i>0)&&(r=Math.min(this.app.renderer.width-this.sprite.width-t,t),i*=-1),r>0)return r<20}return!1}},{key:"render",value:function(){var i=this;return s.a.createElement("div",{ref:function(e){return i.injectPixiContext(e)}})}}]),e}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(i,e){navigator.serviceWorker.register(i).then(function(i){i.onupdatefound=function(){var t=i.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(i)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(i)))})}}).catch(function(i){console.error("Error during service worker registration:",i)})}h.a.render(s.a.createElement(u,null),document.getElementById("root")),function(i){if("serviceWorker"in navigator){if(new URL("/DVDScreensaver",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/DVDScreensaver","/service-worker.js");w?(function(i,e){fetch(i).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(i){i.unregister().then(function(){window.location.reload()})}):g(i,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,i),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(e,i)})}}()},97:function(i,e,t){i.exports=t(207)}},[[97,2,1]]]);
//# sourceMappingURL=main.8345dca0.chunk.js.map