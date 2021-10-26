import TrackCards from "../../components/TrackCards/TrackCards"
import { TracksTable } from "../../components/TracksTable/TracksTable"
import styles from "./Discover.module.css"
export default function Discover() {
  return (
    <div className={styles.root}>
      <h2>Featured Tracks</h2>
      <TrackCards />
      <div className={styles.title}>
        <h2>Top Tracks</h2>
      </div>
      <TracksTable />
    </div>
  )
}
