import { UserRepository } from './repository/UserRepository.js';
import express from 'express';
import { config } from 'dotenv';
import { getUser, ThirdwebAuth } from "@thirdweb-dev/auth/express";

config();
const app = express();
const port = 8000;
const userRepository = new UserRepository();

ThirdwebAuth(app, {
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
});

app.get('/secret', (req, res) => {
  const user = getUser(req);

  if (!user) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  return res.status(200).json({
    message: `You are ${user.address}.`,
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
