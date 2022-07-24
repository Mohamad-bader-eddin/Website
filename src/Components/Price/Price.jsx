import React from 'react'
import { Box, Container, Pricing, Title , Prices, Amount, Time, List, ListItem, A, Label } from './Price.style'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Price = () => {
  return (
    <Pricing>
        <Container>
            <Box>
                <Title>Basic</Title>
                <img src="/Images/hosting-basic.png" alt="" />
                <Prices>
                    <Amount>$15</Amount>
                    <Time>Per Month</Time>
                </Prices>
                <List>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 10GB HDD Space</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 5 Email Addresses</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 2 Subdomains</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 4 Databases</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; Basic Support</ListItem>
                </List>
                <A to='/'>Choose Plan</A>
            </Box>
            <Box>
                <Label>Most Popular</Label>
                <Title>Advanced</Title>
                <img src="/Images/hosting-advanced.png" alt="" />
                <Prices>
                    <Amount>$25</Amount>
                    <Time>Per Month</Time>
                </Prices>
                <List>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 20GB HDD Space</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 10 Email Addresses</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 5 Subdomains</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 8 Databases</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; Advanced Support</ListItem>
                </List>
                <A to='/'>Choose Plan</A>
            </Box>
            <Box>
                <Title>Professional</Title>
                <img src="/Images/hosting-professional.png" alt="" />
                <Prices>
                    <Amount>$45</Amount>
                    <Time>Per Month</Time>
                </Prices>
                <List>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 50GB HDD Space</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 20 Email Addresses</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 10 Subdomains</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; 20 Databases</ListItem>
                    <ListItem><RadioButtonCheckedIcon /> &nbsp; Professional Support</ListItem>
                </List>
                <A to='/'>Choose Plan</A>
            </Box>
        </Container>
    </Pricing>
  )
}

export default Price