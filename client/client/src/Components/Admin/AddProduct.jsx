import { useState } from "react";
import { VStack, Input, Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/actionproduct";

import "./AddProduct.css";
import axios from "axios";
import StarRating from "./StarRating";

const AddProduct = () => {
  const [nameProd, setNameProd] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [sold, setSold] = useState("");
  const [quantity, setQuantity] = useState("");

console.log(image)

  const fileSelectedHandler = async (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload/up", fd, config);

      setImage(data);
      image && console.log(image);
    } catch (error) {
      console.log("multur  error",error);
    }
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    /////upload image
    const fd = new FormData();
    fd.append("image", setImage(image));

    const newProduct = {
      nameProd,
      price,
      category,
      image,
      description,
      rating,
      sold,
      quantity,
    };
    dispatch(addProduct(newProduct));
    setNameProd("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
    setSold("");
    setRating("");
    setQuantity("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Product</h2>
      <VStack spacing={4}>
        <div className="input-group">
          <label htmlFor="nameProd">Product Name</label>
          <Input
            id="nameProd"
            placeholder="Product Name"
            value={nameProd}
            onChange={(e) => setNameProd(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <Input
            id="price"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <Input
            id="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="image">Image URL</label>
          <Input
            id="image"
            placeholder="Image URL"
            type="file"
            onChange={fileSelectedHandler}
            variant="filled"
            name="image"

          />
                
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group star-rating">
  <label htmlFor="rating">Rating</label>
  <StarRating rating={rating} onRatingChange={setRating} />
</div>


        <div className="input-group">
          <label htmlFor="sold">Sold</label>
          <Input
            id="sold"
            type="number"
            placeholder="Sold"
            value={sold}
            onChange={(e) => setSold(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantity">Quantity</label>
          <Input
            id="quantity"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="button-container">
          <Button type="submit" colorScheme="blue">
            Add Product
          </Button>
        </div>
      </VStack>
    </form>
  );
};

export default AddProduct;
