import React from 'react'
import { DesignDiv, Image, Text } from './Design.style'
import HomeMaxIcon from '@mui/icons-material/HomeMax';

function Design() {
    return (
        <DesignDiv>
            <Image>
                <img src="/Images/mobile.png" alt="" />
            </Image>
            <Text>
                <h2>OUR DESIGN COMES WITH...</h2>
                <ul>
                    <li><HomeMaxIcon className='icon'/> Responsive Design</li>
                    <li><HomeMaxIcon className='icon'/> Modern And Clean Design</li>
                    <li><HomeMaxIcon className='icon'/> Clean Code</li>
                    <li><HomeMaxIcon className='icon'/> Browser Friendly</li>
                </ul>
            </Text>
        </DesignDiv>
    )
}

export default Design