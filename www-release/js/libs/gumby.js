/**
* Gumby Framework
* ---------------
*
* Follow @gumbycss on twitter and spread the love.
* We worked super hard on making this awesome and released it to the web.
* All we ask is you leave this intact. #gumbyisawesome
*
* Gumby Framework
* http://gumbyframework.com
*
* Built with love by your friends @digitalsurgeons
* http://www.digitalsurgeons.com
*
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

!function(e){function t(){this.$dom=e(document),this.$html=this.$dom.find("html"),this.isOldie=!!this.$html.hasClass("oldie"),this.click="click",this.onReady=this.onOldie=this.onTouch=!1,this.autoInit=e("script[gumby-init]").attr("gumby-init")==="false"?!1:!0,this.debugMode=Boolean(e("script[gumby-debug]").length),this.touchDevice=!!(Modernizr.touch||window.navigator.userAgent.indexOf("Windows Phone")>0),this.gumbyTouch=!1,this.touchEvents="js/libs",this.breakpoint=Number(e("script[gumby-breakpoint]").attr("gumby-breakpoint"))||768,this.touchEventsLoaded=!1,this.uiModulesReady=!1,this.uiModules={},this.inits={};var t=e("script[gumby-touch]").attr("gumby-touch"),n=e("script[gumby-path]").attr("gumby-path");t==="false"?this.touchEvents=!1:t?this.touchEvents=t:n&&(this.touchEvents=n),this.touchDevice&&(this.click+=" tap"),this.touchDevice&&e(window).width()<this.breakpoint?(this.$html.addClass("gumby-touch"),this.gumbyTouch=!0):this.$html.addClass("gumby-no-touch"),this.debugMode&&this.debug("Gumby is in debug mode")}t.prototype.init=function(e){var t=this,n=e?e:{};return this.$dom.ready(function(){n.debug&&(t.debugMode=!0),t.debug("Initializing Gumby");var e=n.uiModules?n.uiModules:!1;t.initUIModules(e),t.onReady&&t.onReady(),t.isOldie&&t.onOldie&&t.onOldie(),Modernizr.touch&&t.onTouch&&t.onTouch()}),this},t.prototype.helpers=function(){this.onReady&&this.onReady(),this.isOldie&&this.onOldie&&this.onOldie(),Modernizr.touch&&this.onTouch&&this.onTouch()},t.prototype.ready=function(e){return e&&typeof e=="function"&&(this.onReady=e),this},t.prototype.oldie=function(e){return e&&typeof e=="function"&&(this.onOldie=e),this},t.prototype.touch=function(e){return e&&typeof e=="function"&&(this.onTouch=e),this},t.prototype.console=function(e,t){if(!this.debugMode||!window.console)return;console[console[e]?e:"log"](t.length>1?Array.prototype.slice.call(t):t[0])},t.prototype.log=function(){this.console("log",arguments)},t.prototype.debug=function(){this.console("debug",arguments)},t.prototype.warn=function(){this.console("warn",arguments)},t.prototype.error=function(){this.console("error",arguments)},t.prototype.dump=function(){return{$dom:this.$dom,isOldie:this.isOldie,touchEvents:this.touchEvents,debugMode:this.debugMode,autoInit:this.autoInit,uiModules:this.uiModules,click:this.click}},t.prototype.selectAttr=function(){var e=0;for(;e<arguments.length;e++){var t=arguments[e],n="data-"+arguments[e],r="gumby-"+arguments[e];if(this.is("["+n+"]"))return this.attr(n)?this.attr(n):!0;if(this.is("["+r+"]"))return this.attr(r)?this.attr(r):!0;if(this.is("["+t+"]"))return this.attr(t)?this.attr(t):!0}return!1},t.prototype.addInitalisation=function(e,t){this.inits[e]=t},t.prototype.initialize=function(e,t){if(typeof e=="object"){var n=0;for(n;n<e.length;n++){if(!this.inits[e[n]]||typeof this.inits[e[n]]!="function"){this.error("Error initializing module: "+e[n]);continue}this.inits[e[n]](t)}}else this.inits[e]&&typeof this.inits[e]=="function"?this.inits[e](t):this.error("Error initializing module: "+e);return this},t.prototype.UIModule=function(e){var t=e.module;this.uiModules[t]=e},t.prototype.initUIModules=function(e){var t,n,r=this.uiModules;e&&(r=e);for(t in r)n=e?r[t]:t,this.uiModules[n].init()},window.Gumby=new t}(jQuery);