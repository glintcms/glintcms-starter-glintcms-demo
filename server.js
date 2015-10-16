var schedule = require('node-schedule');
var sh = require('shelljs');

var j = schedule.scheduleJob('* */15 * * * *', function() {

  if (sh.exec('npm run restore').code !== 0) {
    console.error('cleanup task not successful ' + new Date());
  } else {
    console.log('cleanup task successful ' + new Date());
  }

});