import clsx from "clsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Albums from "./sections/Albums/Albums"
import Artists from "./sections/Artists/Artists"
import Discover from "./sections/Discover/Discover"
import Songs from "./sections/Songs/Songs"

function App() {
  return (
    <div className="App">
      <Router>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.bodyWrapper}>
            <Header />
            <div className={clsx(styles.body, 'custom-scroll')}>
              <Switch>
                <Route exact path="/artists">
                  <Artists />
                </Route>
                <Route exact path="/albums">
                  <Albums />
                </Route>
                <Route exact path="/songs">
                  <Songs />
                </Route>
                <Route exact path="/">
                  <Discover />
                </Route>
              </Switch>
            </div>
          </div>
          {/* <Header /> */}
        </div>
      </Router>
    </div>
  )
}

export default App
