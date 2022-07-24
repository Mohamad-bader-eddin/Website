import React from 'react'
import { Container, Form, Invalid, P, Subscribes } from './Subscribe.style'
import { useFormik } from 'formik'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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

const Subscribe = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
  return (
    <Subscribes>
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <EmailOutlinedIcon className='icon'/>
                <input type='text' name='email' {...formik.getFieldProps('email')} placeholder='Your Email' />
                <button type='submit'>Subscribe</button>
                {formik.touched.email && formik.errors.email ? <Invalid>{formik.errors.email}</Invalid> : null}
            </Form>
            <P>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blan dit aliquet elit, eget tincidunt.</P>
        </Container>
    </Subscribes>
  )
}

export default Subscribe