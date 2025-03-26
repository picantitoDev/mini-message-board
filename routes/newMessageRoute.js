const express = require("express")
const router = express.Router()
const { messages } = require("./indexRoute")

router.get("/", (req, res) => {
  res.render("form", { title: "New Message!" })
})

router.post("/", (req, res) => {
  const { text, user } = (req.body = req.body)
  messages.push({ text: text, user: user, added: new Date() })
  res.redirect("/")
})

module.exports = router
