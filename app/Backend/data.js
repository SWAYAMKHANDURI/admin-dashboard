import { Product, User } from "./models";
import { connectMongo } from "./utils";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectMongo();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { users, count };
  } catch (error) {
    throw new Error("Failed to Fetch User");
  }
};

export const fetchUserById = async (id) => {
  try {
    connectMongo();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to Fetch User");
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectMongo();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { products, count };
  } catch (error) {
    throw new Error("Failed to Fetch Product");
  }
};

export const fetchProductById = async (id) => {
  try {
    connectMongo();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to Fetch Product");
  }
};
