import React from 'react'
import { Discounts, Form, Image, ImageContent, Invalid } from './Discount.style'
import { useFormik } from 'formik'



const initialValues = {
    name : '',
    email: '',
    mobile : '',
    message : ''
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

const Discount = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <Discounts>
            <Image>
                <ImageContent>
                    <h2>We Have A Discount</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.
                    </p>
                    <img src="/Images/discount.png" alt="" />
                </ImageContent>
            </Image>
            <Form>
                <div>
                    <h2>Request A Discount</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" {...formik.getFieldProps('name')} placeholder="Your Name" name="name" />
                        <input type="email" {...formik.getFieldProps('email')} placeholder="Your Email" name="email" />
                        {formik.touched.email && formik.errors.email ? <Invalid>{formik.errors.email}</Invalid> : null}
                        <input type="text" {...formik.getFieldProps('mobile')} placeholder="Your Phone" name="mobile" />
                        <textarea {...formik.getFieldProps('message')} placeholder="Tell Us About Your Needs" name="message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </Form>
        </Discounts>
    )
}

export default Discount