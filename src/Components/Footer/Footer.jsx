import React from 'react'
import { A, Copyright, Footers, P, Social } from './Footer.style'
import { Container } from '../../Style/Container'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Footers>
        <Container>
            <P>WE ARE SOCIAL</P>
            <Social>
                <li className='facebook'><A to='/'><FacebookIcon fontSize='large'/></A></li>
                <li className='twitter'><A to='/'><TwitterIcon fontSize='large'/></A></li>
                <li className='youtube'><A to='/'><YouTubeIcon fontSize='large'/></A></li>
            </Social>
            <Copyright>&copy; 2022 Made With <span>MBE</span></Copyright>
        </Container>
    </Footers>
  )
}

export default Footer