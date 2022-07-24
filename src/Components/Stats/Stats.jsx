import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Stat, Title } from './Stats.style'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PublicIcon from '@mui/icons-material/Public';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';



const Stats = React.forwardRef((props, ref) => {
    const clientsRef = useRef(null)
    const projectsRef = useRef(null)
    const countriesRef = useRef(null)
    const moneyRef = useRef(null)
    const [start, setStart] = useState(false)
    const [clients, setClients] = useState(0)
    const [projects, setProjects] = useState(0)
    const [countries, setCountries] = useState(0)
    const [money, setMoney] = useState(0)

    useEffect(() => {
        if (props.scroll && !start) {
            setStart(true)
            clientsRef.current = setInterval(() => {
                setClients(prev => prev + 1)
            }, 2000 / 300)
            projectsRef.current = setInterval(() => {
                setProjects(prev => prev + 1)
            }, 2000 / 400)
            countriesRef.current = setInterval(() => {
                setCountries(prev => prev + 1)
            }, 2000 / 12)
            moneyRef.current = setInterval(() => {
                setMoney(prev => prev + 1)
            }, 2000 / 500)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.scroll])

    if (clients === 300) {
        clearInterval(clientsRef.current)
    }

    if(projects === 400){
        clearInterval(projectsRef.current)
    }

    if(countries === 12){
        clearInterval(countriesRef.current)
    }

    if(money === 500){
        clearInterval(moneyRef.current)
    }

    return (
        <Stat ref={ref}>
            <Title>Our Awesome Stats</Title>
            <Container>
                <Box>
                    <PersonOutlineOutlinedIcon fontSize='large' />
                    <span className='number'>{clients}</span>
                    <span>Clients</span>
                </Box>
                <Box>
                    <CodeOffIcon fontSize='large' />
                    <span className='number'>{projects}</span>
                    <span>Projects</span>
                </Box>
                <Box>
                    <PublicIcon fontSize='large' />
                    <span className='number'>{countries}</span>
                    <span>Countries</span>
                </Box>
                <Box>
                    <LocalAtmIcon fontSize='large' />
                    <span className='number'>{money}</span>
                    <span>Money</span>
                </Box>
            </Container>
        </Stat>
    )
})

export default Stats