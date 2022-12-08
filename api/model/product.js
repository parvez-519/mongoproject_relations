const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let category = require("./category");

const productSchema = new Schema({
  m_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'master'
  },
  c_id: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  p_name: {
    type: String,
    require: true,
  },
  // category: [{ type: Schema.Types.ObjectId, ref: "category",required: true }],
});

const product = mongoose.model("product", productSchema);
module.exports = product;
