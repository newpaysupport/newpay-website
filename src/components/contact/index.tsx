'use client'

import ContactForm from './contact-form';
import TalkTheTeam from './talk-the-team';
const ContactScreen = () => {


    return (
        <div className="container mx-auto mt-16">
            <div className="bg-white rounded-xl flex justify-between gap-x-5 h-[708px] py-5 relative">
                <ContactForm />
                <TalkTheTeam />
            </div>
        </div>
    );
}

export default ContactScreen
