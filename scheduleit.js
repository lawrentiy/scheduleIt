ScheduleIt = {
    getDays: function (schedule) {
        var d = schedule.daily;
        if (!d.dayOfWeek) {
            //t.days.clear();
            return false;
        }
        var res = later.parse.recur();

        //if (d.d1) {
        //    var wom = d.d1.value;
        //    if (wom == 2) wom = [2,4];
        //    else if (wom == 3) wom = [3];
        //    else if (wom == 3) wom = [4];
        //    res = res.on(wom).weekOfMonth();
        //}

        var arr = _.map(d.dayOfWeek, function(v) { return v.value});
        arr = _.sortBy(arr, function(v){ return v });
        res = res.on(arr).dayOfWeek();

        var days = later.schedule(res).next(schedule.total || 100, schedule.start, schedule.end);
        //t.days.clear();
        //for (var i = 0; i < days.length; i++) {
        //    t.days.push(days[i]);
        //}
        return days;
    }
    // Локальная (только для клиента) коллекция
    //collection: new Meteor.Collection(null),
    //
    //throw: function(message) {
    //    ScheduleIt.collection.insert({message: message, seen: false})
    //},
    //clearSeen: function() {
    //    ScheduleIt.collection.remove({seen: true});
    //}
};