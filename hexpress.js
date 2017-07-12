const http = require('http')

module.exports = function(){
  return {
    listen: function(port, callback){
      const server = http.createServer(function(request,response){
        //request.url
        //request.method

        //response.writeHead(statusCode, [headerObj])
        //response.end([body])
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({key:'value'}))
      })

      server.listen(port, function(){
        if(callback){
          callback()
        }
      })
      //start up an http server
      //listen on the port specified
      //executed the callback provided 
      //once the server has been started

    }
  }
}