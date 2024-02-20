const Product = require("../modules/product");

exports.addProducts = async (req, res) => {
    const { nameProd, price, category, image, description, rating, sold, quantity } = req.body;
    try {
        const newProduct = new Product({
            nameProd,
            price,
            category,
            image,
            description,
            rating,
            sold,
            quantity
        });
        await newProduct.save();
        if (newProduct) {
            res.status(200).json(newProduct);
        } else {
            res.status(401).json({ msg: "create product error" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getAllProduct = async (req, res) => {
    try {
        const allProducts = await Product.find();
        if (allProducts) {
            res.status(200).json(allProducts);
        } else {
            res.status(401).json({ msg: "getAll errors" });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.updateProduct = async(req,res)=>{
    try {
        const updateProduct=await Product.findByIdAndUpdate(req.params._id,{...req.body},{new:true});
        res.status(201).send(updateProduct);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
};
exports.deleteProduct = async(req,res)=>{
    try {
        const deleteProduct=await Product.findByIdAndDelete(req.params._id);
        res.status(201).json({msg:'product deleted successfully'})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

//get one product
exports.getOneProduct=async (req, res) => {
    try {
      const oneProduct=await Product.findById(req.params._id);
      oneProduct
        ? res.status(201).send(oneProduct)
        : res.status(401).json({ msg: "get one product error" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
    
//   ///////get product women
  
  exports.getWomenProducts = async (req, res) => {
    try {
      const womenProducts = await Product.find({category:"women"});
      womenProducts
        ? res.status(201).json(womenProducts)
        : res.status(401).json({ msg: "get women Products error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };
  
//   //get product men
  exports.getMenProducts = async (req, res) => {
    try {
      const menProducts = await Product.find({category:"men"});
      menProducts
        ? res.status(201).json(menProducts)
        : res.status(401).json({ msg: "get Men Products error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };
  
  //get product Kids
  exports.getKidsProducts = async (req, res) => {
    try {
      const kidsProducts = await Product.find({category:"kids"});
      kidsProducts
        ? res.status(201).json(kidsProducts)
        : res.status(401).json({ msg: "get kids Products error" });
    } catch (error) {
      res.status(501).json({ msg: error.message });
    }
  };
  