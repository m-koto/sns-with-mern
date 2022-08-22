const router = require("express").Router();
const User = require("../models/User");

// CRUD
// ユーザー情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try{
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      // 204ではなく200を返すようにしている
      res.status(200).json("ユーザー情報が更新されました");
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("編集権限がありません");
  }
});

// ユーザー情報の削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try{
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザー情報が削除されました");
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("削除権限がありません");
  }
});

// ユーザー情報の取得


// テスト用callback関数
router.get("/", (req, res) => {
  res.send("user router");
});

module.exports = router;
