import React from 'react'
import MediaEn from "@/markdown/media/en/media.mdx"
import MediaChina from "@/markdown/media/china/media-china.mdx"

import { useLocale } from 'next-intl'
import { defaultLocale } from '@/i18n/config'


const BlogDetailSlug = ({ slug }: { slug: string }) => {

    const locale = useLocale();



    return (
        <div>
            <div className='py-[120px] container mx-auto'>
                <div className='w-[780px]'>
                    {locale !== defaultLocale ? <MediaChina /> : <MediaEn />}
                </div>
            </div>
        </div>
    )
}

export default BlogDetailSlug;
