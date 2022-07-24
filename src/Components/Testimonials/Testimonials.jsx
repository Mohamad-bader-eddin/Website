import React from 'react'
import { Box, Container, JobPosition, Testimonial } from './Testimonials.style'
import MainTitle from '../MainTitle/MainTitle'
import { ImageData } from './ImageData'
import StarIcon from '@mui/icons-material/Star';

const countSatr = (rate) => {
    let count = []
    for (let i = 1; i <= 5; i++) {
        if (i < rate) {
            count.push(true)
        }
        else {
            count.push(false)
        }
    }
    return count
}

const Testimonials = () => {
    return (
        <Testimonial>
            <MainTitle text='Testimonial' />
            <Container>
                {
                    ImageData.map(img => <Box key={img.id}>
                        <img src={img.src} alt="" />
                        <h3>{img.name}</h3>
                        <JobPosition>{img.jobPosition}</JobPosition>
                        <div>
                            {
                                countSatr(img.rate).map((el, index) => <span key={index}>
                                    {el ? <StarIcon style={{ color: '#ffc107' }} /> : <StarIcon style={{ color: '#b9b4b4' }} />}
                                </span>)
                            }
                        </div>
                        <p>{img.title}</p>
                    </Box>)
                }
            </Container>
        </Testimonial>
    )
}

export default Testimonials