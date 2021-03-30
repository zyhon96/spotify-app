import React, {useRef, useEffect, useState} from 'react'
import Playlist from './Playlists';

const Categories = () => {
  const [limiter, setLimiter] = useState(0)
  const mainInnerRef = useRef()
  const dataCategories = [
    {
      id: 1,
      name: 'Focus',
      tagline: 'Music to help you concentrate'
    }, {
      id: 2,
      name: 'Mood',
      tagline: 'Playlist to match your mood'

    }, {
      id: 3,
      name: 'Soundtrack your home',
      tagline: ''

    }, {
      id: 4,
      name: 'Kick back this Sunday'
    },
  ]



  useEffect(() => {

    const handleWindowResize =()=>{
      console.log(mainInnerRef.current.getBoundingClientRect().width);
    }

    const calculation =
    Math.floor(mainInnerRef.current.getBoundingClientRect.width / 180)
setLimiter(calculation);
    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return() => window.removeEventListener('resize', handleWindowResize)


  }, [])
  console.log(mainInnerRef);






  return (<div className="mainInner" ref={mainInnerRef}>
    {dataCategories.map((category, id) => (
      <div className="cardsWrap" key={id}>
        <h2>{category.name}</h2>
        <p className="subText">Music to help you concentrate.</p>
      <Playlist category_id={category.id} limiter={limiter}/>
        
      </div>

    ))}







  </div>);
}

export default Categories;