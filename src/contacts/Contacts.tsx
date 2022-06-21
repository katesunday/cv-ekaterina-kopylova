import React from 'react';
import s from './Contacts.module.scss'
import SC from "../common/styles/Container.module.scss";

const Contacts = () => {
    return (
        <div className={s.contactsBlock} id = 'contacts'>
            <div className={SC.container}>
                <div className={s.myContacts}>
                    <h3>My contacts:</h3>
                    <p>email: blabla@gmail.com</p>
                    <div>
                        <a href="tel:+971589757057">Contact me by phone</a>
                    </div>
                </div>
                <div className={s.contactForm}>
                    <p>Or just send me an email straight through here:</p>
                    <fieldset >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                        <input id="submit" type="submit" name="submit" value="Send Email"/>
                    </fieldset>
                </div>

            </div>
        </div>
    );
};

export default Contacts;