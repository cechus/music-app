import clsx from "clsx"
import TrackRow from "../TrackRow/TrackRow"
import styles from "./TracksTable.module.css"
export const TracksTable = () => {
  return (
    <div className={clsx(styles.root, "custom-scroll")}>
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Daily Plays</th>
            <th>Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody> */}
      <div className={styles.header}>
        <div className={styles.index}>#</div>
        <div></div>
        <div>Song</div>
        <div>Artists</div>
        <div>Duration</div>
        <div></div>
      </div>
      {[
        121, 21, 211, 21, 2, 1, 4, 123, 123, 12312, 312, 312, 12, 413, 432,
        5151, 4, 23, 123, 123, 123, 12, 21, 312, 312, 432, 543, 64, 56, 4235, 2,
        123, 1, 3, 12,
      ].map((track, index) => {
        return (
          <TrackRow
            track={{
              title: "teftsdf",
              artists: "fsdfsdf",
              duration: 10,
            }}
            index={index}
          />
        )
      })}
      {/* </tbody>
      </table> */}
    </div>
  )
}
