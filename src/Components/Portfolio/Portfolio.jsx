import React, { useState } from 'react'
import { Box, Caption, ImgsContainer, More, Portfolioes, Shuffle } from './Portfolio.style'
import { Container } from '../../Style/Container'
import MainTitle from '../MainTitle/MainTitle'
import { ImageData } from './ImageData'
import { ShuffleItem } from './ShuffleItem'

const Portfolio = () => {
    const [images , setImages] = useState(ImageData)
    const [shuffle , setShuffle] = useState(ShuffleItem)
    const handleFilter = id =>{
        const newShuffle =shuffle.map(item =>{
            if(item.id === id){
                item.active = true
                if(item.name === 'All'){
                    setImages(ImageData)
                }else{
                    const newImages = ImageData.filter( img => img.type === item.name)
                    setImages(newImages)
                }
            }else{
                item.active =false
            }
            return item
        })
        setShuffle(newShuffle)
    }
    return (
        <Portfolioes>
            <Container>
                <MainTitle text='portfolio' />
                <Shuffle>
                    {
                        shuffle.map(item => (
                            <li key={item.id} className={item.active ? 'active' : ''} onClick={() => handleFilter(item.id)}>{item.name}</li>
                        ))
                    }
                </Shuffle>
            </Container>
            <ImgsContainer>
                {
                    images.map(imge => (
                        <Box key={imge.id}>
                            <img src={imge.src} alt="" />
                            <Caption>
                                <h4>Awesome Image</h4>
                                <p>Photography</p>
                            </Caption>
                        </Box>
                    ))
                }
            </ImgsContainer>
            <More to="/">More</More>
        </Portfolioes>
    )
}

export default Portfolio