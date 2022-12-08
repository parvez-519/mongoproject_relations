const mongoose = require("mongoose");
const product = require("./product");
const Schema=mongoose.Schema;

const categorySchema = new Schema({
  m_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'master'
  },
  c_name: {
    type: String,
    require: true,
  },
  // product:{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'product'
  // },
  // product:[{ type: Schema.Types.ObjectId, ref: "product" }]
});

const category = mongoose.model("category", categorySchema);
module.exports=category
