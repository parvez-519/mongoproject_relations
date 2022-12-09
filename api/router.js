const category = require("./controller/category");
const product = require("./controller/product");
const master = require("./controller/masterlist");

const router = require("express").Router();

//MASTER
router.post("/addmaster", master.addmaster);
router.delete("/deletemaster", master.deletemaster);

// CATEGORY
router.post("/addcategory", category.addCategory);
router.get("/getcategoryies/:m_id", category.getCategories);
router.get("/getcategory/:id", category.getCategory);
router.delete("/deletecategory", category.deleteCategory);

//PRODUCT
 router.post("/addproduct", product.addProduct);
 router.get("/getproduct/:m_id", product.getProduct);
 router.delete("/deleteproduct", product.deleteProduct);

module.exports = router;
