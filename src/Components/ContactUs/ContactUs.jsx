import React from 'react'
import { Contact, Container, Form, H2, Invalid } from './ContactUs.style'
import { useFormik } from 'formik'


const initialValues = {
  username : '',
  email: '',
  phone : '',
  subject : '',
  message : ''
}

const onSubmit = (values ,  submitProps) => {
  console.log(values);
  submitProps.resetForm()
}

const validate = values => {
  let errors = {}
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format'
  }
  return errors
}

const ContactUs = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
  return (
    <Contact>
        <Container>
            <H2>Contact Us</H2>
            <Form onSubmit={formik.handleSubmit}>
                <div className="left">
                        <input type="text" {...formik.getFieldProps('username')} placeholder="Your Name" name="username" />
                        <input type="text" {...formik.getFieldProps('phone')} placeholder="Your Phone" name="phone" />
                        <input type="text" {...formik.getFieldProps('subject')} placeholder="Subject" name="subject" />
                        <input type="email" {...formik.getFieldProps('email')} placeholder="Your Email" name="email" />
                        {formik.touched.email && formik.errors.email ? <Invalid>{formik.errors.email}</Invalid> : null}
                    </div>
                    <div className="right">
                        <textarea name="message" {...formik.getFieldProps('message')} placeholder="Your Message"></textarea>
                        <input type="submit" value="Send" />
                    </div>
            </Form>
        </Container>
    </Contact>
  )
}

export default ContactUs