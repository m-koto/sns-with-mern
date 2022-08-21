const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

// DB接続
mongoose
.connect(process.env.MONGOURL)
.then(() => {
  console.log("DBと接続中…")
})
  .catch((err) => {
    console.log(err)
});

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// テスト用callback関数
app.get("/", (req, res) => {
  res.send("hello express");
});


app.listen(PORT, () => console.log("サーバーが起動しました"));
