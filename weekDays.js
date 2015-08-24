Template.weekDays.created = function () {
    this.ar = [
        {value: 2, caption: 'пн'},
        {value: 3, caption: 'вт'},
        {value: 4, caption: 'ср'},
        {value: 5, caption: 'чт'},
        {value: 6, caption: 'пт'},
        {value: 7, caption: 'сб'},
        {value: 1, caption: 'вс'}
    ];
    this.selected = new ReactiveArray([]);
};

Template.weekDays.helpers({
    data: function () {
        return Template.instance().ar;
    },
    isSelected: function() {
        return Template.instance().selected.indexOf(this) > -1;
    }
});

Template.weekDays.events({
    'click .btn': function (e, t) {
        $(e.currentTarget).toggleClass('active');
        var v = {};
        if (t.selected.indexOf(this) > -1) {
            t.selected.remove(this);
            v.removed = this;
        }
        else {
            t.selected.push(this);
            v.added = this;
        }
        v.array = t.selected.array();
        if (t.data.field)
            Template.parentData(1)[t.data.field] = v.array;
        $(Template.instance().firstNode).trigger('weekDays.changed', v);
    }
});