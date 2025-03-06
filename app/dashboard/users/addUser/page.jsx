import { addUser } from "@/app/Backend/formActions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          name="username"
          type="text"
          placeholder="Enter your Username"
          required
        />

        <input type="email" name="email" required placeholder="Enter E-mail" />

        <input
          type="password"
          name="password"
          required
          placeholder="Enter Password"
        />

        <input type="phone" name="phone" required placeholder="Phone Number" />

        <select name="isAdmin" required id="isAdmin">
          <option value={true}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" required id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="4"
          placeholder="Enter Address"
          required
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddUser;
