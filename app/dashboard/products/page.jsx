import Searchbox from "@/app/ui/dashboard/searchbox/searchbox";
import styles from "../../ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/Backend/data";
import { deleteProduct } from "@/app/Backend/formActions";

const Products = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProducts(query, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbox placeholder={"Product"} />
        <Link href="/dashboard/products/addProduct">
          <button className={styles.addButton}> ADD NEW </button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className={styles.product}>
                <Image
                  src={product.img || "/noproduct.jpg"}
                  width={40}
                  height={40}
                  className={styles.productImage}
                ></Image>
                {product.title}
              </td>
              <td>{product.desc} </td>
              <td>{product.price}</td>
              <td>{product.createdAt.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product._id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Products;
