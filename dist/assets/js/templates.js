this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["restaurant"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <tr>\n                            <td class=\"day\">"
    + alias3(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"day","hash":{},"data":data}) : helper)))
    + "</td>\n                            <td class=\"hours\">"
    + alias3(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"start","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"end","hash":{},"data":data}) : helper)))
    + "</td>\n                        </tr>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <article class=\"review\">\n                <p class=\"review__author\" rel=\"author\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                <time class=\"review__date\">"
    + alias3((helpers.momentDate || (depth0 && depth0.momentDate) || alias1).call(depth0,(depth0 != null ? depth0.date : depth0),{"name":"momentDate","hash":{},"data":data}))
    + "</time>\n                <p class=\"review__stars\">\n                    <span class=\"sr-only\">"
    + alias3(((helper = (helper = helpers.stars || (depth0 != null ? depth0.stars : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stars","hash":{},"data":data}) : helper)))
    + " out of 5 Stars</span>\n                    "
    + alias3((helpers.reviewStars || (depth0 && depth0.reviewStars) || alias1).call(depth0,(depth0 != null ? depth0.stars : depth0),{"name":"reviewStars","hash":{},"data":data}))
    + "\n                </p>\n                <p class=\"review__text\">"
    + alias3(((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"review","hash":{},"data":data}) : helper)))
    + "</p>\n            </article>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<header class=\"page-header\">\n    <div class=\"wrapper\">\n        <h2 class=\"page-title\">\n            "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n        </h2>\n    </div>\n</header>\n\n<div class=\"wrapper\">\n    <section class=\"information\">\n        <h3 class=\"sr-only\">Information</h3>\n        <div class=\"information__img\">\n            <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.image_alt || (depth0 != null ? depth0.image_alt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_alt","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n\n        <div class=\"information__content\">\n            <section>\n                <h4><span class=\"sr-only\">Location</span> <i class=\"fa fa-location-arrow\"></i></h4>\n                <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.address_line_1 : stack1), depth0))
    + ",</p>\n                <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.area : stack1), depth0))
    + ",</p>\n                <p>Lagos, Nigeria</p>\n            </section>\n            <section>\n                <h4><span class=\"sr-only\">Cuisine</span> <i class=\"fa fa-cutlery\"></i></h4>\n                <p>"
    + alias3(((helper = (helper = helpers.cuisine || (depth0 != null ? depth0.cuisine : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cuisine","hash":{},"data":data}) : helper)))
    + "</p>\n            </section>\n            <section>\n                <h4><span class=\"sr-only\">Opening Hours</span> <i class=\"fa fa-clock-o\"></i></h4>\n                <table class=\"opening-hours\">\n                    <thead class=\"sr-only\">\n                        <tr>\n                            <th>Day</th>\n                            <th>Times</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.opening_hours : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </tbody>\n                </table>\n            </section>\n        </div>        \n    </section>\n    <ul class=\"restaurants\" id=\"restaurants\">\n        <!-- Default message -->         \n    </ul>\n</div>\n\n\n<section class=\"reviews\">\n    <div class=\"wrapper\">\n        <h3 class=\"page-title-lv2 reviews-header\">Reviews</h3>\n        <button class=\"open-review-dialog floating-btn\" type=\"button\" aria-label=\"Open Dialog to Add a Review\">\n                <i class=\"fa fa-pencil\"></i>\n            </button>\n    </div>\n\n    <div class=\"reviews-list\">\n        <div class=\"wrapper ul-reviews\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</section>\n\n";
},"useData":true});
this["MyApp"]["templates"]["restaurantSnippet"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"restaurant\">\n    <a href=\"/restaurant.html?r="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <img class=\"restaurant__img\" src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n        <h3 class=\"restaurant__name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n        <p class=\"restaurant__stars\">\n            <span class=\"sr-only\">"
    + alias3((helpers.reviewAvergaeNumber || (depth0 && depth0.reviewAvergaeNumber) || alias1).call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"reviewAvergaeNumber","hash":{},"data":data}))
    + " out of 5 Stars</span>\n            "
    + ((stack1 = (helpers.reviewAvergaeIcons || (depth0 && depth0.reviewAvergaeIcons) || alias1).call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"reviewAvergaeIcons","hash":{},"data":data})) != null ? stack1 : "")
    + "\n        </p>\n    </a>\n    <div class=\"restaurant_details\">\n        <p>\n            <span class=\"detail-icon\">\n                <span class=\"sr-only\">Location</span>\n                <i class=\"fa fa-location-arrow\"></i>\n            </span>\n            <span class=\"detail-text\">\n                "
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.area : stack1), depth0))
    + "\n            </span>\n        </p>\n        <p>\n            <span class=\"detail-icon\">\n                <span class=\"sr-only\">Cuisine</span>\n                <i class=\"fa fa-cutlery\"></i>\n            </span>\n            <span class=\"detail-text\">\n                "
    + alias3(((helper = (helper = helpers.cuisine || (depth0 != null ? depth0.cuisine : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cuisine","hash":{},"data":data}) : helper)))
    + "\n            </span>\n        </p>\n    </div>\n</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.restaurants : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});