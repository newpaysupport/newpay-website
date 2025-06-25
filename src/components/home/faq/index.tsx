import Faq from '@/components/payment/faq'
import { useLocale } from 'next-intl';
import React from 'react'
import { payment as enBlog } from '@/i18n/messages/en.json';
import { payment as ziBlog } from '@/i18n/messages/zi.json';

const FAQ = () => {
    const locale = useLocale();
    const payment = locale === 'en' ? enBlog : ziBlog;

    {/* Content Section: FAQ */ }
    const faqSection = payment.faqSection;
    const faqItems = faqSection.faqItems;

    return (
        <div className='bg-[#060606]'>
            <Faq />
        </div>
    )
}

export default FAQ
