import React from 'react'
import './App.scss';
import Nav from './components/Nav';
import Categories from '../src/components/Categories'
import { Switch, Route } from 'react-router-dom'
import PlaylistPage from '../src/pages/Playlist'


const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <div className="main">
          <div className="upperNav"> Spotify </div>
          <div className="mainContent">
            <Switch>
              <Route path="/" exact component={Categories}></Route>
              <Route path="/search"> Search</Route>
              <Route path="/your-library" exact>Library</Route>

              <Route path="/playlist/:id" exact component={PlaylistPage}></Route>
            </Switch>
          </div>

        </div>
      </div>
      <div className="musicControls">music controls</div>
    </div>
  )
}

export default App;



// const Main = () => {

//   return (
//    

//   )
// }

// export default Main <div className="main">
//       <div className="upperNav"> Spotify </div>
//       <div className="mainContent">
//         <Switch>
// <Route  path="/" component={Categories}></Route>
// <Route path="/search"> Search</Route>
// <Route path="/your-library" exact>Library</Route>

// <Route path="/playlist/:id" exact component={PlaylistPage}></Route>
//         </Switch>




//       </div>

//     </div>
