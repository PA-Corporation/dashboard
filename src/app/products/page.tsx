import InputSearch from "@/components/inputs/input_search";
import styles from "./styles.module.css";

export default function Products() {
  return (
    <main className="page">
      <section className={styles["section-search"]}>
        <InputSearch />
      </section>
      <section>
        <h2>Items lists</h2>
      </section>
    </main>
  );
}
