import React from 'react';
import s from './Contacts.module.css'
import SC from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={SC.container}>
                <div>
                    <h3>My contacts:</h3>
                    <div>email: blabla@gmail.com</div>
                    <div>
                        <a href="tel:+971589757057">Contact me by phone</a>
                    </div>
                </div>
                <div>
                    <p>Or just send me an email straight through here:</p>
                    <fieldset className={s.contactForm}>
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