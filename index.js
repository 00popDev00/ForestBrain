const app = require("express")();
app.listen(8080, () => {
  console.log("user connected");
});

app.get(`/listen`, (req, res, next) => {
  res.send("response");
});
