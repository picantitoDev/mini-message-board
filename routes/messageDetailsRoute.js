const express = require("express")
const router = express.Router()
const { messages } = require("./indexRoute")

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)

  if (id >= 0 && id < messages.length) {
    console.log(id)
    let message = {}
    for (let i = 0; i < messages.length; i++) {
      if (parseInt(id) === i) {
        message.user = messages[i].user
        message.text = messages[i].text
        message.added = messages[i].added
      }
    }
    res.render("message", { title: "View Message Details", message })
  } else {
    res.status(404).render("error", { title: "Message not Found" })
  }
})

module.exports = router
