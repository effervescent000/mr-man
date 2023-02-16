const { rest } = require("msw");
const { mockUser } = require("./resolvers/mockUser");

const handlers = [
  rest.post("http://127.0.0.1:8000/auth/", mockUser),
  rest.post("http://127.0.0.1:8000/auth/login", mockUser),
];

exports.handlers = handlers;
