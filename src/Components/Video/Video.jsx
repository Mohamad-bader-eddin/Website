import React, { useState } from 'react'
import { Text, Videos } from './Video.style'

function Video() {
    const [click , setClick] = useState(true)
    return (
        <Videos>
            <video autoPlay muted loop src={click ? '/Videos/video-1.mp4' : '/Videos/video-2.mp4'} />
            <Text>
                <h2>SUPER AWESOME VIDEO HERE</h2>
                <p>Its All You Need</p>
                <button type='button' onClick={() => setClick(!click)}>See More</button>
            </Text>
        </Videos>
    )
}

export default Video