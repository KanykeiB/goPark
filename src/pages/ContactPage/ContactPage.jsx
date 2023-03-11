import React from "react";

import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="container" >
            <h2 className="contacts-title">
                Вы можете связаться с нами по следующим данным:
            </h2>
            <a href="/" className="example-mail">example.mail@gmail.com</a>
        </div>
    )
}

export default ContactPage;