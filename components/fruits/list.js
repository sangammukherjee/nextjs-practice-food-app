import ListItem from "./listItem";
import { useRouter } from "next/router";
import styles from './fruits.module.css'
import GoBack from "../goBack";
const List = ({ list }) => {
  console.log(list);
  const router = useRouter();

  const handleFilterChange = (event)=>{
      const {value} = event.target;
      router.push(`items/filteredByCategory/${value}`)
      
  }
  return (
    <div className={styles.wrapper}>
      <GoBack/>
      <div>
          <select className={styles.select} onChange={handleFilterChange}>
              <option id="select" value={''}>Select</option>
              <option id="fruit" value={'fruit'}>Fruits</option>
              <option id="Vegetable" value={'Vegetable'}>Vegetables</option>
          </select>
      </div>
      <div className={styles.itemsWrapper}>
      {list.map((item) => (
        <ListItem item={item} />
      ))}
      </div>
    </div>
  );
};

export default List;
