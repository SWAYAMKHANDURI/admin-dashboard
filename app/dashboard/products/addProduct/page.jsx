import { addProduct } from "@/app/Backend/formActions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="title"
          required
        />
        <select name="category" required id="">
          <option value="general">Choose A Category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Groceries">Groceries</option>
          <option value="Medicine">Medicine</option>
        </select>
        <input type="number" name="price" required placeholder="Price" />
        <input type="text" name="stock" required placeholder="Stock" />
        <input type="text" name="size" required placeholder="Size" />
        <input type="text" name="color" required placeholder="Color" />
        <textarea
          name="desc"
          id=""
          rows="10"
          placeholder="Description"
          required
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddProduct;
