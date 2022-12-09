const appConst = require("../constant");
const productSchema = require("../model/product");

const addProduct = async (req, res) => {
  const addProductData = new productSchema({
    // m_id:req.body.m_id,
    c_id:req.body.c_id,
    p_name:req.body.p_name,
  });
  try {
    const resp = await addProductData.save();
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({
        status: appConst.status.fail,
        response: null,
        message: err.message,
      });
  }
};

const getProduct = async (req, res) => {
  try {
      const resp = await productSchema.find().populate('m_id')
      res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({
        status: appConst.status.fail,
        response: null,
        message: err.message,
      });
  }
};
const deleteProduct = async (req, res) => {
  try {
    console.log("---------", req.body.id);
    console.log("---------", req.body.c_id);

    const resp = await productSchema.deleteMany({
      where: {
        c_id: req.body.c_id,
      },
    }).exec();

    res.status(201).json({
      status: appConst.status.success,
      response: null,
      message: "Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};



module.exports = { addProduct, getProduct,deleteProduct };
