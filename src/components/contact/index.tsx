'use client'

import ContactForm from './contact-form';
import TalkTheTeam from './talk-the-team';
const ContactScreen = () => {


    return (
        <div className="mt-16 container mx-auto xl:px-20">
            <div className="bg-white rounded-xl flex flex-col xl:flex-row xl:justify-between gap-5 h-full pt-8 pb-12 px-5 xl:px-0 lg:py-5 relative">
                <ContactForm />
                <TalkTheTeam />
            </div>
        </div>
    );
}

export default ContactScreen
