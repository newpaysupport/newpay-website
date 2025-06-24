'use client'

import ContactForm from './contact-form';
import TalkTheTeam from './talk-the-team';
const ContactScreen = () => {


    return (
        <div className="container mx-auto mt-16">
            <div className="bg-white rounded-xl flex flex-col lg:flex-row lg:justify-between gap-x-5 lg:h-[708px] pt-8 pb-12 px-5 lg:px-0 lg:py-5 relative">
                <ContactForm />
                <TalkTheTeam />
            </div>
        </div>
    );
}

export default ContactScreen
