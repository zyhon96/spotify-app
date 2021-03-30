import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'


const Playlists = (props) => {
console.log(props.limiter);
    const dataPlaylists = [{
        id: 101,
        category_id: 3,
        name: 'Home Playlist 1',
        img: 'https://images.unsplash.com/photo-1615201427548-58316e349d8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        desc: 'Lorem ipsum',
    },
    {
        id: 102,
        category_id: 3,
        name: 'Home Playlist 2',
        img: 'https://images.unsplash.com/photo-1615141506772-90b39c01a7c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        desc: 'Lorem ipsum',
    },
    {
        id: 103,
        category_id: 3,
        name: 'Home Playlist 3',
        img: 'https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80',
        desc: 'Lorem ipsum',
    },
    {
        id: 104,
        category_id: 1,
        name: 'Home Playlist 1',
        img: 'https://images.unsplash.com/photo-1615123080419-7ea5ab9bcd87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        desc: 'Lorem ipsum',
    },
    {
        id: 105,
        category_id: 4,
        name: 'Sunday Playlist',
        img: 'https://images.unsplash.com/photo-1615048735738-fc51e7422ef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=323&q=80',
        desc: 'Lorem ipsum'
    },
    {
        id: 106,
        category_id: 2,
        name: 'Mood Playlist 1',
        img: 'https://images.unsplash.com/photo-1615048735738-fc51e7422ef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=323&q=80',
        desc: 'Lorem ipsum',
    },
    {
        id: 107,
        category_id: 2,
        name: 'Mood Playlist 2',
        img: 'https://images.unsplash.com/photo-1615048735738-fc51e7422ef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=323&q=80',
        desc: 'Lorem ipsum',
    },
    ]
    const matchedPlaylists = dataPlaylists.filter(playlists => playlists.category_id === props.category_id).slice()
    return (

        <div className="cardsWrapInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/${playlist.id} `}>
                    <div className="card" key={id}>

                        <div className="cardImage">
                            <img src={playlist.img} alt="Pic 1"></img>

                        </div>
                        <div className="cardContext">

                            <h3> {playlist.name}</h3>
                            <span>{playlist.desc}</span>
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                </Link>


            ))}




        </div>
    );
}

export default Playlists;


