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

  const personSchema = new mongoose.Schema({
    first: String,
    last: String
  });

  // acts like additional property of the schema
  personSchema.virtual("fullName").
  get(function() {
    return `${this.first} ${this.last}`;
  }). 
  set(function(v){
    this.first = v.substring(0, v.indexOf(' '));
    this.last = v.substring(v.indexOf(' ') + 1);
  });

  personSchema.pre('save', async function(){
    this.first = "YO";
    this.last = "MAMA";
    console.log("ABOUT TO SAVE")
  });

  personSchema.post('save', async function(){
    console.log("JUST SAVED")
  });

  

  const Person = mongoose.model('Person', personSchema);