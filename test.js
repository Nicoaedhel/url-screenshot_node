var urlScreenshot = require('./index');

var urlScreenshot_key = ['YOUR_API_KEY','YOUR_API_PRIVATE_KEY'];
var urlScreenshot_data = {
  'url':'google.com',
  'thumb_width':'800'
};

urlScreenshot.capture(urlScreenshot_key[0],urlScreenshot_key[1], urlScreenshot_data, function(src, err) {
  if(src) console.log(src)
  else console.log(err)
});
