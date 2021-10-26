import clsx from "clsx"
import { Icon } from "../Icon/Icon"
import styles from "./TrackRow.module.css"
interface TrackRowProps {
  index: number
  track: any // change type
}

export default function TrackRow({ index, track }: TrackRowProps) {
  const { title, artists,  duration } = track
  return (
    <div className={clsx(styles.root, { [styles.rootActive]: index === 5 })}>
      <div className={styles.index}>{index}</div>
      <div>
        <Icon name="LIKE" />
      </div>
      <div>{title}</div>
      <div>{artists}</div>
      <div>{duration}</div>
      <div className={styles.options}>
        <Icon name="DOWNLOAD_FOLDER" />
        <Icon name="SHARE" />
        <Icon name="MENU" />
      </div>
    </div>
  )
}
