"use client";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handlePageChange = (type) => {
    if (type === "prev") {
      params.set("page", parseInt(page) - 1);
    } else {
      params.set("page", parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePageChange("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
