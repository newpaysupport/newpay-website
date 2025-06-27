"use client"
import React, { useState } from 'react'
import NeedAHand from './need-a-hand'
import TopViewedArticles from './slug/top-viewed-articles'
import FaqInfo from './faq-info'

const FaqHelpScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <NeedAHand searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <div className='py-10 bg-[#060606] px-6 lg:px-[120px]'>
                <TopViewedArticles />
                <FaqInfo searchTerm={searchTerm} />
            </div>
        </div>
    )
}

export default FaqHelpScreen
