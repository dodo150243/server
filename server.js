var express = require("express");
const app = require("express")();
var path = require("path");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: true,
  origins: ["http://locahost:4000"],
});
app.set("socketio", io);

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/test", function (req, res, next) {
  res.sendfile(__dirname + "/index.html");
});

app.use("/product", require("./routes/productRoute"));
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "something went rely wrong",
  });
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("FromAPI", "Hello socket.io");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

httpServer.listen(4000, () => console.log("Server running on port 4000"));
