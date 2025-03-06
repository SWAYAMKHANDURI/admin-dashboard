"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectMongo } from "./utils";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const addProduct = async (formData) => {
  const productData = Object.fromEntries(formData);
  try {
    connectMongo();
    const newProduct = new Product(productData);
    await newProduct.save();
  } catch (err) {
    throw new Error("Failed to add Product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectMongo();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to Delete Product");
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectMongo();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addUser = async (formData) => {
  const { username, email, password, isAdmin, isActive, phone, address } =
    Object.fromEntries(formData);

  var bcrypt = require("bcryptjs");
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(password, salt);

  try {
    connectMongo();
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      isAdmin,
      isActive,
      phone,
      address,
    });
    await newUser.save();
  } catch (err) {
    throw new Error("Failed to create User");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectMongo();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete User");
  }

  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectMongo();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const user = await signIn("credentials", { username, password });
    console.log(user);
  } catch (error) {
    if (error) {
      if (error.type === "CredentialsSignin") {
        return "Invalid credentials.";
      }
      throw error;
    }
  }
};
