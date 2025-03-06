import { fetchProductById } from "@/app/Backend/data";
import { updateProduct } from "@/app/Backend/formActions";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";
import Image from "next/image";

const viewProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProductById(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product._id} />

          <label htmlFor="title">Title</label>
          <input name="title" type="text" placeholder={product.title} />

          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label htmlFor="size">Size</label>
          <input name="size" type="text" placeholder={product.size} />

          <label htmlFor="category">Category</label>
          <select name="category" id="">
            <option value="general">Choose A Category</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Groceries">Groceries</option>
            <option value="Medicine">Medicine</option>
          </select>

          <label htmlFor="color">Color</label>
          <input name="color" type="text" placeholder={product.color} />

          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="4"
            placeholder={product.desc}
          ></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default viewProduct;
