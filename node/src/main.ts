import { createServer } from 'http';
import { parse } from 'url';

const port = 8000;

const server = createServer((request, response) => {
  const uri = parse(request.url || '').pathname;

  response.writeHead(200, {
    'Content-Type': 'application/json',
  });

  if (uri === '/') {
    response.end(
      JSON.stringify({
        message: 'Hello',
      })
    );
  }
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
