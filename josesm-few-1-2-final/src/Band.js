import React from 'react'
import Likes from './Like'
import data from './metal.json'

function Band(props) {
    let i = data.length
    const { band_name, fans, formed, origin,split} = props
    
    let a = <Likes/>;

  return (
    <div>
        Name: { band_name}<br></br>
        Formed: {formed}<br></br>
        Origin: {origin}<br></br>
        Fans: {fans}<br></br>

        <Likes/>
        <br></br>

    </div>
  )
}

export default Band