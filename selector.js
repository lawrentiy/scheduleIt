function selectRow($row) {
    $row.siblings('.selected')
        .removeClass('selected')
        .addClass('inactive')
        .find('input[type="checkbox"]').each(function (i, v) {
            if (v.switcher.isChecked())
                v.switcher.setPosition(true);
        });
    $row
        .addClass('selected')
        .removeClass('inactive')
        .find('input[type="checkbox"]').each(function (i, v) {
            if (!v.switcher.isChecked())
                v.switcher.setPosition(true);
        });
}

Template.scheduleItSelector.created = function () {
    this.days = new ReactiveArray([]);
    if (this.data) {
        _.defaults(this.data, {
            daily: {active: true},
            monthly1: {},
            monthly2: {},
            yearly1: {},
            yearly2: {}
        });
    }
};

Template.scheduleItSelector.rendered = function () {
    this.$('.js-switch').each(function(i,v){
        v.switcher = new Switchery(v, {
            size: 'small'
        });
    });
};

Template.scheduleItSelector.helpers({
    data: function () {
        return [
            {template: 'daily', caption: lang.dailyWeekly},
            {template: 'monthly1', caption: lang.monthly},
            {template: 'monthly2'},
            {template: 'yearly1', caption: lang.yearly},
            {template: 'yearly2'}
        ]
    },
    //days: function () {
    //    return Template.instance().days.list();
    //},
    dateFormat: function(context, block) {
        var f = block || "DD.MM.YYYY HH:mm:ss";
        return moment(context).format(f);
    }
});

Template.sitItem.helpers({
    value: function() {
        return Template.parentData(1)[this.template];
    },
    isChecked: function () {
        return Template.parentData(1)[this.template].active === true ? 'checked': null;
    }
});

Template.scheduleItSelector.events({
    'buttonDropdown.changed .dropdown, weekDays.changed .week-days': function (e, t) {
        var days = ScheduleIt.getDays(t.data);
        t.$(t.firstNode).trigger({type: 'change', value: days})
    },
    'focus input': function (e) {
        this.active = true;
        selectRow($(e.currentTarget).closest('.selectable'));
    },
    'click .selectable': function (e) {
        if (this.template != 'daily') return;
        this.active = true;
        selectRow($(e.currentTarget));
    }
});




var chisla = [];
for (var i = 1; i <= 31; i++) {
    chisla.push({value: i, caption: i});
}

var d1 = [
    {value: 1, caption: '&#160;'},
    {value: 2, caption: 'вторую'},
    {value: 3, caption: 'третью'},
    {value: 4, caption: 'четвертую'}
];

var d2 = [
    {value: 'first', caption: '&#160;'},
    {value: 'second', caption: 'второй'},
    {value: 'third', caption: 'третий'},
    {value: 'fourth', caption: 'четвертый'}
];

var d3 = chisla;

var d4 = [
    {value: 1, caption: 'понедельник'},
    {value: 2, caption: 'вторник'},
    {value: 3, caption: 'среда'},
    {value: 4, caption: 'четверг'},
    {value: 5, caption: 'пятница'},
    {value: 6, caption: 'субботу'},
    {value: 7, caption: 'воскресенье'}
];

var d5 = [
    {value: 'first', caption: '&#160;'},
    {value: 'second', caption: 'второго'},
    {value: 'third', caption: 'третьего'},
    {value: 'fourth', caption: 'четвертого'}
];

var d6 = [
    {value: 'january', caption: 'января'},
    {value: 'february', caption: 'февраля'},
    {value: 'march', caption: 'марта'},
    {value: 'april', caption: 'апреля'},
    {value: 'may', caption: 'мая'},
    {value: 'june', caption: 'июня'},
    {value: 'july', caption: 'июля'},
    {value: 'august', caption: 'августа'},
    {value: 'september', caption: 'сентября'},
    {value: 'october', caption: 'октября'},
    {value: 'november', caption: 'ноября'},
    {value: 'december', caption: 'декабря'}
];

Template.daily.helpers({
    d1: function () {return d1;}
});
Template.monthly1.helpers({
    d2: function () {return d2;},
    d3: function () {return d3;}
});
Template.monthly2.helpers({
    d2: function () {return d2;},
    d4: function () {return d4;},
    d5: function () {return d5;}
});
Template.yearly1.helpers({
    d3: function () {return d3;},
    d6: function () {return d6;}
});
Template.yearly2.helpers({
    d2: function () {return d2;},
    d4: function () {return d4;},
    d6: function () {return d6;}
});