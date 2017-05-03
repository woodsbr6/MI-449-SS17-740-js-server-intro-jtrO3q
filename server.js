
var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/about') {
    response.end('<h1>About</h1>')
  } else {
    response.end('<h1>Page Not Found</h1>')
  }
})

var port = process.env.PORT || 8080

console.log('Server running at http://localhost:' + port + '/')
