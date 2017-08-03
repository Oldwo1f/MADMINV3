var parser = require('ua-parser-js');

module.exports = function(req, res, next) {
 


    
      var ua = parser(req.headers['user-agent']);

      console.log(ua);


		

      if(ua.device.type ==="mobile")
      {
            res.redirect('homeMobile');
      }
      else{
        next();
      }













};
