const express = require("express")
const app = express()

// Import router
const newMessageRoute = require("./routes/newMessageRoute")
const indexRoute = require("./routes/indexRoute")

// Set up EJS
const path = require("path")
const layouts = require("express-ejs-layouts")
app.use(layouts)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRoute)
app.use("/new", newMessageRoute)

app.listen(8080, () => {
  console.log("Listening on port 8080...")
})
