const mongoose = require("mongoose");
const options = {};
mongoose
  .connect("mongodb://0.0.0.0:27017/youtubejs", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successfull done`);
  })
  .catch((e) => {
    console.log(e);
  });
