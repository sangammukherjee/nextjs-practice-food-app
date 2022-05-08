import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1>Welcome User !</h1>
      <button onClick={()=>router.push('/items')} className={styles.button}>Explore</button>
    </div>
  );
}
