import Searchbox from "@/app/ui/dashboard/searchbox/searchbox";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/Backend/data";
import { deleteUser } from "@/app/Backend/formActions";

const Users = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { users, count } = await fetchUsers(query, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbox placeholder={"User"} />
        <Link href="/dashboard/users/addUser">
          <button className={styles.addButton}> ADD NEW </button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>E-Mail</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  ></Image>
                  {user.username}
                </td>
                <td>{user.email} </td>
                <td>{user.createdAt.toString().slice(4, 16)}</td>
                <td> {user.isAdmin ? "Admin" : "Client"} </td>
                <td> {user.isActive ? "Active" : "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>

                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user._id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
