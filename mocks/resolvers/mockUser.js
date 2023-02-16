const mockUser = (req, res, ctx) => {
  return res(ctx.json({ email: "some@email.com", username: null, id: 1 }));
};

exports.mockUser = mockUser;
