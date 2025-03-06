import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "../Card/Card.module.css";
const Card = () => {
  return (
    <div>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={25} />
        <div className={styles.texts}>
          <span className={styles.detail}>Total Users</span>
          <span className={styles.number}>12,789</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than previous
            month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
