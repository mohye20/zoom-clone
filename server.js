import express from "express";
import { createServer } from "http";
import { v4 as uuidv4 } from "uuid";
const app = express();

const server = createServer(app);

app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(3000, () => {
  console.log("Server Running");
});
