const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Oh No Error!!!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  onSale: {
    type: Boolean,
    default: false
  }
});

const Product = new mongoose.model("Product", productSchema);
const bike = new Product({ name: "Bike Helmet", price: 29.50 });
bike
  .save()
  .then((data) => {
    console.log("It worked");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no error");
    console.log(err);
  });
