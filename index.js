const express = require("express")
const app = express()

// Import router
const newMessageRoute = require("./routes/newMessageRoute")

app.get("/", (req, res) => {
  res.send("Testing...")
})

app.use("/new", newMessageRoute)

app.listen(8080, () => {
  console.log("Listening on port 8080...")
})
