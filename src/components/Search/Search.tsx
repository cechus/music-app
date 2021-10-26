import { Icon } from "../Icon/Icon"
import styles from "./Search.module.css"

export default function Search() {
  return (
    <div className={styles.root}>
      <span className={styles.iconWrapper}>
        <Icon
          name="SEARCH"
          className={styles.icon}
          color="var(--dark-blue-grey-50)"
        />
      </span>
      <input
        type="text"
        placeholder="Search your entertainment"
        className={styles.input}
      />
    </div>
  )
}
