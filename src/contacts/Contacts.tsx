import React from 'react';
import s from './Contacts.module.scss'
import SC from "../common/styles/Container.module.scss";
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

const Contacts = () => {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        validate:(values) =>{
            const errors:FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Please enter your name';
            } else if (values.name.length <= 2) {
                errors.name = 'Minimum 2 symbols required';
            }
            if (!values.message) {
                errors.message = 'Seems like you forgot to write a message';
            } else if (values.message.length <= 2) {
                errors.message = 'Minimum 2 symbols required';
            }
            return errors
        },
        onSubmit:(values) => {
            console.log(values)
            formik.resetForm()
        }

    })

    return (
        <div className={s.contactsBlock} id = 'contacts'>
            <div className={SC.container}>
                <div className={s.myContacts}>
                    <h3>My contacts:</h3>
                    <p><a href="mailto: ekaterina.sunday@gmail.com">ekaterina.sunday@gmail.com</a></p>
                    <div>
                        <a href="tel:+971589757057">Contact me by phone</a>
                    </div>
                </div>
                <div className={s.contactForm}>
                    <p>Or just send me an email straight through here:</p>

                        <fieldset >
                            <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="name"  >Name</label>
                            <input type="text" id="name" {...formik.getFieldProps('name')}/>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" {...formik.getFieldProps('email')}/>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" {...formik.getFieldProps('message')} > </textarea>
                            <input id="submit" type='submit' name="submit" value="Send Email" />
                            </form>
                        </fieldset>


                </div>

            </div>
        </div>
    );
};

export default Contacts;