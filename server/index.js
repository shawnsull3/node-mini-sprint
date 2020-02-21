const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  '"You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It\'s their mistake, not my failing." -Richard Feyman',
  '"Specialization is for insects.” -Robert Anson Heinlein',
  '“A society grows great when old men plant trees in whose shade they know they shall never sit in” -Greek Proverb',
  '“For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.” -Carl Sagan',
  '“One reason we rush so quickly to the vulgar satisfactions of judgment, and love to revel in our righteous outrage, is that it spares us from the impotent pain of empathy, and the harder, messier work of understanding.” -Tim Kreider',
  '“I urge you to please notice when you are happy, and exclaim or murmur or think at some point, "If this isn\'t nice, I don\'t know what is.” -Kurt Vonnegut'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "FILL ME IN") {
    //YOUR CODE HERE

  }
  // TODO: POST/CREATE
  else if ((req.url == 'FILL ME IN' || req.url == 'FILL ME IN') && req.method == "FILL ME IN") {
    //YOUR CODE HERE
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
