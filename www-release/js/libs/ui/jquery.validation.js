!function(e){function t(e,t){Gumby&&Gumby.debug("Initializing Validation",e),this.$this=e,this.$field=this.$this.parents(".field"),this.req=t||function(){return!!this.$this.val().length};var n=this;this.$this.is("[type=checkbox], [type=radio]")?(this.$field=this.$this.parent("label"),this.$field.on("gumby.onChange",function(){n.validate()})):this.$this.is("select")?(this.$field=this.$this.parents(".picker"),this.$field.on("change",function(){n.validate()})):this.$this.on("blur",function(e){e.which!==9&&n.validate()})}t.prototype.validate=function(){var e=this.req(this.$this);return e?this.$field.removeClass("danger").addClass("success"):this.$field.removeClass("success").addClass("danger"),e},e.fn.validation=function(n){var r=e.extend({submit:!1,fail:!1,required:[]},n),i=[];return this.each(function(){if(!r.required.length)return!1;var n=e(this),s=r.required.length,o;for(o=0;o<s;o++)i.push(new t(n.find('[name="'+r.required[o].name+'"]'),r.required[o].validate||!1));n.on("submit",function(e){var t=!1;if(!n.data("passed")){e.preventDefault();var s=i.length,o;for(o=0;o<s;o++)i[o].validate()||(t=!0);if(!t){if(r.submit&&typeof r.submit=="function"){r.submit(n.serializeArray());return}n.data("passed",!0).submit()}else if(r.fail&&typeof r.fail=="function"){r.fail();return}}})})}}(jQuery);