Package.describe({
  name: 'lawrentiy:scheduleit',
  version: '0.0.1',
  summary: 'Scheduler using bootstrap and all features',
  // URL to the Git repository containing the source code for this package.
  git: 'lawrentiy/scheduleit',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('pinglamb:bootstrap3', 'client'); //!!!!!!!!!!! нужно выбрать правильный пакет?
  api.use('rajit:bootstrap3-datepicker', 'client');
  api.use(['manuel:reactivearray', 'reactive-var', 'minimongo', 'mongo-livedata', 'templating', 'momentjs:moment', 'abpetkov:switchery', 'mrt:later'], 'client');
  api.use('less', 'client');

  api.addFiles(['scheduleIt.less'], 'client');
  api.addFiles(['lang.js'], 'client');
  api.addFiles(['buttonDropdown.html', 'buttonDropdown.js'], 'client');
  api.addFiles(['weekDays.html', 'weekDays.js'], 'client');
  api.addFiles(['selector.html', 'selector.js'], 'client');
  api.addFiles(['scheduleit.js'], 'client');

  if (api.export) {
    api.export(['ScheduleIt'], 'client');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lawrentiy:scheduleit');
  api.addFiles('tests/scheduleit-tests.js', 'client');
});