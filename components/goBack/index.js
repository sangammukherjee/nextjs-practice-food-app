import {useRouter} from 'next/router'
import styles from './goBack.module.css';
export default function GoBack() {
    const router = useRouter()
  return (
    <div>
      <button className={styles.button} onClick={()=>router.back()}>Go Back</button>
    </div>
  );
}
