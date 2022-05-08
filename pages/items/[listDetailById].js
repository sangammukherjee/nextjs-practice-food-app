import { useRouter } from "next/router";
import { data } from "../../utils/dummyData";
import { useEffect, useState } from "react";
import styles from "./items.module.css";
import GoBack from "../../components/goBack";

export default function ListDetailById() {
  const [item, setitem] = useState(null);
  const router = useRouter();
  const { listDetailById } = router.query;

  useEffect(() => {
    if (listDetailById) {
      const filteitem = data.find(
        (item) => item.id === parseInt(listDetailById)
      );
      setitem(filteitem);
    }
  }, [listDetailById]);

  console.log(item && item.img);

  return (
    <div className={styles.listByIdItemWrapper}>
      <GoBack />

      {item !== null ? (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <img src={item.img.src} style={{ width: 250, height: 250 }} />
        </div>
      ) : null}
    </div>
  );
}
