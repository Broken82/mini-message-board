const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  try {
    const { text, user } = req.body;

    messages.push({ text: text, user: user, added: new Date() });

    res.redirect("/");
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = indexRouter;
