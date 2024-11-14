const express = require("express");
require("dotenv").config();
const ChatRouter = require("./controllers/conversation");
const MessageRouter = require("./controllers/message");
const UserRouter=require('./controllers/user')
const mongoose = require("mongoose");
const cors=require('cors');

const app = express();

app.use(express.json());
app.use(cors())
mongoose
  .connect(process.env.mongooseUrl)
  .then(() => {
    console.log("mongoose is connected properly");
  })
  .catch((error) => console.log(error));
app.use("/api/user",UserRouter)
app.use("/api/chat", ChatRouter);
app.use("/api/message",MessageRouter)
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
