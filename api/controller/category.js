const appConst = require("../constant");
const categorySchema = require("../model/category");
const productSchema = require("../model/product");

const addCategory = async (req, res) => {
  const addCategoryData = await categorySchema.create({
    m_id: req.body.m_id,
    c_name: req.body.c_name,
    product: req.body.product,
  });

  try {
    const resp = await addCategoryData.save();
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const resp = await categorySchema.findOne();

    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    let take = req.body.limit;
    let offset = req.body.skip;
    const resp = await categorySchema
      .find()
      .populate("m_id")
      .limit(take)
      .skip(offset)
      .exec();
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};
const deleteCategory = async (req, res) => {
  try {
    console.log("---------", req.body.id);
    console.log("---------", req.body.c_id);

    const resp = await categorySchema
      .deleteOne({
        where: {
          id: req.body.id,
        },
      })
      .exec();

    const resp2 = await productSchema.deleteMany({
      where: {
        id: req.body.id,
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
module.exports = { addCategory, getCategory, getCategories, deleteCategory };
