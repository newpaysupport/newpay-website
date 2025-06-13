import React from 'react'

const BoxWrapped = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`${className} w-full lg:max-w-[1200px] 2xl:max-w-[1440px] mx-auto`}>
            {children}
        </div>
    )
}

export default BoxWrapped
