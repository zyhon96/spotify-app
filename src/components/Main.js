import React from 'react'
import Categories from './Categories'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import PlaylistPage from '../pages/Playlist'
const Main = () => {

  return (
    <Router>
    <div className="main">
      <div className="upperNav"> Spotify </div>
      <div className="mainContent">
        <Switch>
<Route  path="/" component={Categories}></Route>
<Route path="/search"> Search</Route>
<Route path="/your-library" exact>Library</Route>
<Route path="/playlist/:id" exact component={PlaylistPage}></Route>
        </Switch>


       
        
      </div>

    </div>
    </Router>

  )
}

export default Main
