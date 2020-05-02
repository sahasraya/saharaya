odoo.define('modifier_clickworks_login_tutorial.modifier_clickworks_login_tutorial', function (require) {
    "use strict";

    var planner = require('web.planner.common');

    planner.PlannerDialog.include({

        start: function() {
             var self = this;
             var rrr = this._super.apply(this, arguments);
             $(".progress").click();
             return rrr;
            // return this._super.apply(this, arguments).then(function() {
            //     self.$res.find('.o_planner_page').andSelf().filter('.o_planner_page').each(function(index, dom_page) {
            //         var page = new Page(dom_page, index);
            //         self.pages.push(page);
            //     });
            //
            //
            //     var $menu = self.render_menu();  // wil use self.$res
            //     self.$('.o_planner_menu ul').html($menu);
            //     self.menu_items = self.$('.o_planner_menu li');
            //
            //     self.pages.forEach(function(page) {
            //         page.menu_item = self._find_menu_item_by_page_id(page.id);
            //     });
            //     self.$el.find('.o_planner_content_wrapper').append(self.$res);
            //
            //     // update the planner_data with the new inputs of the view
            //     var actual_vals = self._get_values();
            //     self.planner.data = _.defaults(self.planner.data, actual_vals);
            //     // set the default value
            //     self._set_values(self.planner.data);
            //     // show last opened page
            //     self._show_last_open_page();
            //     self.prepare_planner_event();
            // });
        },
    });

});

