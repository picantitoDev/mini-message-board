const express = require("express")
const app = express()

// Import router
const { router } = require("./routes/indexRoute")
const indexRoute = router
const newMessageRoute = require("./routes/newMessageRoute")
const messageDetailsRoute = require("./routes/messageDetailsRoute")

// Set up EJS
const path = require("path")
const layouts = require("express-ejs-layouts")
app.use(layouts)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// Set up encoding
app.use(express.urlencoded({ extended: true }))

// Set up static files
app.use(express.static("public"))

app.use("/", indexRoute)
app.use("/new", newMessageRoute)
app.use("/messages", messageDetailsRoute)
app.listen(8080, () => {
  console.log("Listening on port 8080...")
})
