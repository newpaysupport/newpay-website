import React from 'react'
import HomeScreenDesktop from './home-screen-desktop'
import HomeScreenMobile from './home-screen-mobile'

const HomeScreen = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <HomeScreenDesktop />
            </div>
            <div className='lg:hidden'>
                <HomeScreenMobile />
            </div>
        </>
    )
}

export default HomeScreen
