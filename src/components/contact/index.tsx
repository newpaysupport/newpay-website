'use client'

import BoxWrapped from '../common/box-wrapped';
import ContactForm from './contact-form';
import TalkTheTeam from './talk-the-team';
const ContactScreen = () => {


    return (
        <div className="mt-16">
            <BoxWrapped>
                <div className='xl:px-20'>
                    <div className="bg-white rounded-xl flex flex-col xl:flex-row xl:justify-between gap-5 h-full pt-8 pb-12 px-5 xl:px-0 lg:py-5 relative">
                        <ContactForm />
                        <TalkTheTeam />
                    </div>
                </div>
            </BoxWrapped>
        </div>
    );
}

export default ContactScreen
