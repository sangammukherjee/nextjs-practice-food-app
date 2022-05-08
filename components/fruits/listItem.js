import { useRouter } from "next/router";
import styles from './fruits.module.css';
const ListItem = ({ item }) => {
  const router = useRouter();

  const handlenavigate = (id) => {
    // router.push({
    //     pathname : '/fruits/[listDetailById]',
    //     query : {listDetailById : id}
    // });

    router.push(`/items/${id}`);
  };
  return (
    <div className ={styles.listItemWrapper} key={item.id}>
      <p>{item.name}</p>
      <button className ={styles.listItemButton} onClick={() => handlenavigate(item.id)}>Check Details</button>
    </div>
  );
};

export default ListItem;
