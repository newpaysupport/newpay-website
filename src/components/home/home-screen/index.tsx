import React from 'react'
import HomeScreenDesktop from './home-screen-desktop'
import HomeScreenMobile from './home-screen-mobile'
import HomeScreenMobileNoAnimation from './home-screen-mobile-no-animation'

const HomeScreen = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <HomeScreenDesktop />
            </div>
            <div className='lg:hidden'>
                {/* <HomeScreenMobile /> */}
                <HomeScreenMobileNoAnimation />
            </div>
        </>
    )
}

export default HomeScreen
