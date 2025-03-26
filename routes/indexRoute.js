const express = require("express")
const router = express.Router()

// Messages
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
]

router.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages })
})

module.exports = { router, messages }
