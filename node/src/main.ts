import { createServer } from 'http';
import { parse } from 'url';
import { UserRepository } from './repository/UserRepository.js';

const port = 8000;
const userRepository = new UserRepository();

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
  } else if (uri === '/createUser') {
    // ユーザ作成
    userRepository.create().then((result) => response.end(result));
  } else if (uri === '/readUser') {
    // ユーザ取得
    userRepository.read().then((result) => response.end(result));
  } else if (uri === '/createQuestion') {
    // 質問作成
    response.end(
      JSON.stringify({
        message: 'succeeded',
      })
    );
  } else if (uri === '/readQuestion') {
    // 質問取得
    response.end(
      JSON.stringify({
        message: 'succeeded',
      })
    );
  } else if (uri === '/readQuestions') {
    // 質問一覧取得
    response.end(
      JSON.stringify({
        message: 'succeeded',
      })
    );
  }
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
