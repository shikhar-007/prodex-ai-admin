import React from 'react'
import ContentTable from './ContentTable';

const ContentSection = () => {

    return (
        <div className=' w-full h-full flex flex-col gap-6 pt-4 '>
            <h1 className=' text-white font-parsi text-[32px] leading-[30px] font-bold'>Content Management</h1>

            <div className=' w-full backdrop-blur-[15px] dash-card rounded-xl'>
                <h1 className=' text-white font-parsi text-[24px] leading-[22px] font-bold pl-5 pt-2 mb-5'>Project Management</h1>
                <ContentTable />
            </div>
        </div>
    )
}

export default ContentSection;