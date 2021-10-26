import clsx from "clsx"
import TrackCard from "../TrackCard/TrackCard"
import styles from "./TrackCards.module.css"

export default function TrackCards() {
  return (
    <div className={clsx(styles.root, "custom-scroll")}>
      {[1, 2, 3, 4, 5, 6, 7, 89, 9, 90, 35, 5, 345, 345, 345].map((track) => {
        return <TrackCard track={{}} />
      })}
    </div>
  )
}
