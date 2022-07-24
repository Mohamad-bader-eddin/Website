import React, { useEffect, useRef, useState } from 'react'
import { Container, Description, Dots, Event, Form, Info, Invalid, Subscribe, Time, Title, Unit } from './Events.style'
import MainTitle from '../MainTitle/MainTitle'
import { useFormik } from 'formik'

const initialValues = {
    email: ''
}

const onSubmit = values => {
    console.log(values);
}

const validate = values => {
    let errors = {}
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    return errors
}

let countDownDate = new Date('Dec 31, 2022 23:59:59').getTime()


const Events = () => {
    const [days , setDays] = useState(0)
    const [hours , setHours] = useState(0)
    const [minutes , setMinutes] = useState(0)
    const [seconds , setSeconds] = useState(0)
    const [diff , setDiff] = useState(1)
    const intervalRef = useRef(null)
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    useEffect(() =>{
        intervalRef.current = setInterval(()=>{
            let dateNow = new Date().getTime()

            let dateDiff = countDownDate - dateNow
        
            setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))
            setMinutes(Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60))))
            setSeconds(Math.floor((dateDiff % (1000 * 60) / (1000))))
            setDiff(dateDiff)
        },1000)

        return () =>{
            clearInterval(intervalRef.current)
        }
    },[])

    if(diff === 0){
        clearInterval(intervalRef.current)
    }
  return (
    <Event>
        <Dots className='dots-up' />
        <Dots className='dots-down' />
        <MainTitle text='LATEST EVENTS' />
        <Container>
            <img src="/Images/events.png" alt="" />
            <Info>
                <Time>
                    <Unit>
                        <span>{days}</span>
                        <span>Days</span>
                    </Unit>
                    <Unit>
                        <span>{hours}</span>
                        <span>Hours</span>
                    </Unit>
                    <Unit>
                        <span>{minutes}</span>
                        <span>Minutes</span>
                    </Unit>
                    <Unit>
                        <span>{seconds}</span>
                        <span>Seconds</span>
                    </Unit>
                </Time>
                <Title>Tech Masters Event 2022</Title>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</Description>
            </Info>
            <Subscribe>
                <Form onSubmit={formik.handleSubmit}>
                    <input type="email" name='email' {...formik.getFieldProps('email')} placeholder="Enter Your Email" />
                    <button type='submit'>Subscribe</button>
                    {formik.touched.email && formik.errors.email ? <Invalid>{formik.errors.email}</Invalid> : null}
                </Form>
            </Subscribe>
        </Container>
    </Event>
  )
}

export default Events