import { UserRepository } from './repository/UserRepository.js';
import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
const port = 8000;
const userRepository = new UserRepository();

app.get('/secret', (req, res) => {
  // const user = getUser(req);

  // if (!user) {
  //   return res.status(401).json({
  //     message: "Not authorized.",
  //   });
  // }

  return res.status(200).json({
    message: "This is a secret... don't tell anyone.",
  });
});

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello',
  });
});

app.get('/createUser', (req, res) => {
  userRepository.create().then((result) => res.status(200).send(result));
});

app.get('/readUser', (req, res) => {
  userRepository.read().then((result) => res.status(200).send(result));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
