import { fetchUserById } from "@/app/Backend/data";
import { updateUser } from "@/app/Backend/formActions";
import styles from "@/app/ui/dashboard/users/viewUser/viewUser.module.css";
import Image from "next/image";

const ViewUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchUserById(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user._id} />
          <label htmlFor="username">Username</label>
          <input name="username" type="text" placeholder={user.username} />

          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" placeholder={user.email} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="New password" />

          <label htmlFor="phone">Password</label>
          <input type="phone" name="phone" placeholder={user.phone} />

          <label htmlFor="admin">Is Admin ?</label>
          <select name="admin" id="">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="active">Is Active ?</label>
          <select name="active" id="">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="Address">Address</label>
          <textarea
            name="address"
            id=""
            rows="4"
            placeholder={user.address}
          ></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
