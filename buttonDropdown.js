Template.buttonDropdown.created = function() {
    if (this.data && _.isArray(this.data.data))
        this.ar = this.data.data;
    else
        this.ar = [];
    this.selected = new ReactiveVar(this.ar[0]);
};

Template.buttonDropdown.helpers({
    selected: function() {
        return Template.instance().selected.get();
    },
    data: function () {
        return Template.instance().ar;
    }
});

Template.buttonDropdown.events({
    'click a[role="menuitem"]': function (e, t) {
        Template.instance().selected.set(this);
        if (t.data.field)
            Template.parentData(1)[t.data.field] = this;
        $(t.firstNode).trigger('buttonDropdown.changed', this);
    }
});