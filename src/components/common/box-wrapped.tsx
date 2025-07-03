import React from 'react'

const BoxWrapped = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`${className} w-full min-between1280and1440:max-w-[1280px] min-1440px:max-w-[1440px] 2xl:max-w-[1440px] mx-auto`}>
            {children}
        </div>
    )
}

export default BoxWrapped
