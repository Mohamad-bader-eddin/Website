import React from 'react'
import { Box, Container, WorkSteps } from './Work.style'
import MainTitle from '../MainTitle/MainTitle'
import { WorkData } from './WorkData'

const Work = () => {
  return (
    <WorkSteps>
        <MainTitle text='HOW IT WORKS ?' />
        <Container>
            <img src="/Images/work-steps.png" alt="" />
            <div>
                {
                    WorkData.map( work => <Box key={work.id}>
                        <img src={work.src} alt="" />
                        <div>
                            <h3>{work.title}</h3>
                            <p>{work.text}</p>
                        </div>
                    </Box>)
                }
            </div>
        </Container>
    </WorkSteps>
  )
}

export default Work