import styles from "./Sidebar.module.css"
import { MENU } from "./rawData"
import { Icon } from "../Icon/Icon"
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import { useState } from "react"
import clsx from "clsx"

export default function Sidebar() {
  const { pathname } = useLocation()
  console.log(`pathname`, pathname)
  // const [path, setPath] = useState<string>("")
  // const getCurrentPath = () => {
  //   return
  // }
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="http://music-club.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/logo-white.png"
          alt=""
        />
      </div>
      <div>
        {MENU.map((section) => {
          return (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.items.map((item: any) => {
                return (
                  // <div className={styles.item}>
                  <Link
                    to={item.url}
                    className={clsx(styles.item, {
                      [styles.itemActive]: item.url === pathname,
                    })}
                  >
                    <span className={styles.iconWrapper}>
                      <Icon name={item.icon} className={styles.icon} />
                    </span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </Link>
                  // </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
