import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Latest Transactions</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              {" "}
              <img
                src="/noavatar.png"
                height={40}
                width={40}
                className={styles.userImage}
              />
              Joe Biden
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14/01/2023</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td className={styles.user}>
              {" "}
              <img
                src="/noavatar.png"
                height={40}
                width={40}
                className={styles.userImage}
              />
              Narendra Modi
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14/01/2023</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td className={styles.user}>
              {" "}
              <img
                src="/noavatar.png"
                height={40}
                width={40}
                className={styles.userImage}
              />
              Rahul Gandhi
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14/01/2023</td>
            <td>$30.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
