import React from 'react'
import searchIcon from "@/images/faq-help/search-icon.svg";
import Image from 'next/image';

const BreadCrumbSearch = ({ placeHolder, articleSearch, setArticleSearch }: { placeHolder: string; articleSearch: string; setArticleSearch: (value: string) => void; }) => {
    return (
        <div className='lg:w-[200px] h-[56px] box-border p-4 pr-6 flex items-center space-x-[10px] bg-white/8 rounded-2xl'>
            <figure className='w-6 min-w-6 h-6'>
                <Image src={searchIcon} alt='' />
            </figure>
            <input
                type="text"
                placeholder={placeHolder}
                onChange={e => setArticleSearch(e.target.value)}
                value={articleSearch}
                className='-tracking-[0.24px] w-full grow outline-none border-none text-white text-base font-medium placeholder:text-[#848484] placeholder:font-normal' />
        </div>
    )
}

export default BreadCrumbSearch
