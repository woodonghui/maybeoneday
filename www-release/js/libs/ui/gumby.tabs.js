!function(e){function t(t){Gumby.debug("Initializing Tabs",t),this.$el=t,this.$nav=this.$el.find("> ul.tab-nav > li"),this.$content=this.$el.children(".tab-content");var n=this;this.$nav.children("a").on(Gumby.click,function(t){t.preventDefault(),n.click(e(this))}),this.$el.on("gumby.set",function(e,t){Gumby.debug("Set event triggered",n.$el),n.set(e,t)})}t.prototype.click=function(e){var t=e.parent().index();if(this.$nav.eq(t).add(this.$content.eq(t)).hasClass("active"))return;Gumby.debug("Setting active tab to "+t,this.$el),this.$nav.add(this.$content).removeClass("active"),this.$nav.eq(t).add(this.$content.eq(t)).addClass("active"),Gumby.debug("Triggering onChange event",this.$el),this.$el.trigger("gumby.onChange",t)},t.prototype.set=function(e,t){this.$nav.eq(t).find("a").trigger(Gumby.click)},Gumby.addInitalisation("tabs",function(){e(".tabs").each(function(){var n=e(this);if(n.data("isTabs"))return!0;n.data("isTabs",!0),new t(n)})}),Gumby.UIModule({module:"tabs",events:["onChange","set"],init:function(){Gumby.initialize("tabs")}})}(jQuery);