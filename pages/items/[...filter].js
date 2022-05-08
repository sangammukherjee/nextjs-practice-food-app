import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import ListItem from "../../components/fruits/listItem";
import GoBack from "../../components/goBack";
import { data } from "../../utils/dummyData";
import styles from "./items.module.css";

export default function Filter() {
  const [item, setitem] = useState([]);

  const router = useRouter();
  console.log(router.query);
  const { filter } = router.query;

  useEffect(() => {
    if (filter && filter.length) {
      console.log(filter[1]);
      const filteitem = data.filter(
        (item) => item.category === filter[1].toLowerCase()
      );
      console.log(filteitem, data);
      setitem(filteitem);
    }
  }, [filter]);

  return (
    <div className={styles.filterMainWrapper}>
      <GoBack />

      {item && item.length
        ? item.map((singleItem) => <ListItem item={singleItem} />)
        : null}
    </div>
  );
}
