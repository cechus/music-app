import styles from "./TrackCard.module.css"

type Track = Partial<{
  id: string
  title: string
  cover: string
  liked: boolean
  duration: number
}>
interface TrackCardProps {
  track: Track
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.cover}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b2733e3fc382980680109a199208"
          alt=""
          className={styles.cover}
        />
      </div>
      <div className={styles.info}>
        <a href="#/" className={styles.artistTitle}>
          Lorem ipsum dolor sit. Lorem ipsum dolor sit.
        </a>
        <a href="#/" className={styles.trackTitle}>
          Lorem ipsum dolor sit. Lorem ipsum dolor sit.
        </a>
      </div>
    </div>
  )
}
