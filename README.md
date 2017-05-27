# urlscreenshot

A Node.js package for https://url-screenshot.com

## Usage

First, install the package using npm:


    npm install urlscreenshot --save


Then, require the package and use it like so:


```bash
    var urlScreenshot = require('urlscreenshot');

    var urlScreenshot_key = ['YOUR_API_KEY','YOUR_API_PRIVATE_KEY'];
    var urlScreenshot_data = {
      'url':'google.com',
      'thumb_width':'800'
    };

    urlScreenshot.capture(urlScreenshot_key[0],urlScreenshot_key[1], urlScreenshot_data, function(src, err) {
      if(src) console.log(src)
      else console.log(err)
    });
```


## License

Apache 2.0
