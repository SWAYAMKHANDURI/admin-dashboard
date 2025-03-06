"use client";

import styles from "./searchbox.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Searchbox = ({ placeholder }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      if (e.target.value.length > 2) params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className={styles.container}>
      <div className={styles.search} onChange={handleSearch}>
        <MdSearch />
        <input
          type="text"
          placeholder={`Search for a ${placeholder}`}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default Searchbox;
