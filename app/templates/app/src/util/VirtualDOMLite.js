define(function (require, exports, module) {
  require('lib/diffDOM');

  //https://github.com/fiduswriter/diffDOM
  ;(function ($) {
    $.fn.superHtml = $.fn.html;
    $.fn.html = diffDOM
      ?function (html,diff,diffOptions) {
        if(diff && this._diffdom){
          var VDOM = this[0].cloneNode(),
            VDD = new diffDOM(diffOptions),
            VDiff;
          VDOM.innerHTML = html;
          VDiff = VDD.diff(this[0], VDOM);
          if(VDD.apply(this[0], VDiff)){
            this.eq(0).trigger('virtualdomrendered');
          }
          return this;
        }else{
          this._diffdom = 1;
          var res = this.superHtml.apply(this,arguments);
          this.eq(0).trigger('virtualdomrendered');
          return res;
        }
      }
      :$.fn.superHtml;

  })(window.Zepto);
});
