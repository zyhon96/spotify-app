import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../svgs/note.svg'

const PlaylistPage = () => {

    let { id } = useParams()

    return (

        <div className="playlistPage">
            <div className="mainInner">
                <div className="playlistPageInfo">

                    <div className="playlistPageImage">
                        <img src="https://images.unsplash.com/photo-1615141506772-90b39c01a7c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="pic" />
                    </div>
                    <div className="playlistPageContent">
                        <p className="smallText uppercase bold">Playlist</p>
                        <h1>A Perfect Day</h1>
                        
                            <p className="tagline"> this is an individual playlist {id}</p>
                            <div className="playlistPageDesc">
                                 <p className="spotify">Spotify</p>
                                 <span> 699,428 like</span>
                                 <span>4hr 35 mins</span>
                            </div>
                           

                        
                    </div>
                </div>

                <div className="playlistPageSongs">
                    <div className="playlistButtons">

                    <span className="playIcon">
                            <PlayIcon />
                        </span>
                    <div className="icons">
                            <div className="icon iconsHeart">
                            <HeartIcon />
                            </div>
                            <div className="icon iconsDots"></div>
                            </div>
                    </div>
                    
                    <ul className="songList">

                        <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/>  
                         

                            </div>
                            <div className="songDetails">

                            <h3>
                             Olofofo ft. Wizkid
                                </h3>
                                <span>Ice Prince</span>
                            </div>
                            <div className="songTime">
                            <span> 4:07</span>

                            </div>
                            </li>
                            <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/> 

                            </div>
                            <div className="songDetails">

                            <h3>
                             Man with the Gun
                                </h3>
                                <span>Vector</span>
                            </div>
                            <div className="songTime">
                            <span> 4:07</span>

                            </div>
                            </li> <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/> 

                            </div>
                            <div className="songDetails">

                            <h3>
                             Closed on Sunday
                                </h3>
                                <span>Kanye West</span>
                            </div>
                            <div className="songTime">
                            <span> 4:28</span>

                            </div>
                            </li> <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/> 

                            </div>
                            <div className="songDetails">

                            <h3>
                             Butterfly Effect
                                </h3>
                                <span>Travis Scott</span>
                            </div>
                            <div className="songTime">
                            <span> 4:07</span>

                            </div>
                            </li> <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/> 

                            </div>
                            <div className="songDetails">

                            <h3>
                             DNA
                                </h3>
                                <span>Kendrick Lamar</span>
                            </div>
                            <div className="songTime">
                            <span> 2:58</span>

                            </div>
                            </li> <li>
                            <div className="songIcon">  
                            <NoteIcon className="noteI"/>  
                           <PlayIcon className="playI"/> 

                            </div>
                            <div className="songDetails">

                            <h3>
                             Heaven
                                </h3>
                                <span>Davido</span>
                            </div>
                            <div className="songTime">
                            <span> 3:09</span>

                            </div>
                            </li>



                    </ul>


                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;