//Tinytest.add("Test 1", function(test) {
//  test.equal(Bla.do(), 1);
//});
//
//Tinytest.add("ScheduleIt collection works", function(test) {
//  test.equal(ScheduleIt.collection.find({}).count(), 0);
//
//  ScheduleIt.throw('A new error!');
//  test.equal(ScheduleIt.collection.find({}).count(), 1);
//
//  ScheduleIt.collection.remove({});
//});
//
//Tinytest.addAsync("ScheduleIt template works", function(test, done) {
//  ScheduleIt.throw('A new error!');
//  test.equal(ScheduleIt.collection.find({seen: false}).count(), 1);
//
//  // отрисовываем шаблон
//  UI.insert(UI.render(Template.meteorErrors), document.body);
//  // ждем несколько миллисекунд
//  Meteor.setTimeout(function() {
//    test.equal(ScheduleIt.collection.find({seen: false}).count(), 0);
//    test.equal(ScheduleIt.collection.find({}).count(), 1);
//    ScheduleIt.clearSeen();
//
//    test.equal(ScheduleIt.collection.find({seen: true}).count(), 0);
//    done();
//  }, 500);
//});