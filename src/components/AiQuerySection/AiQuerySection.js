import React, { useState } from 'react'
import AiQueryTable from './AiQueryTable';
import { IoSearchOutline } from 'react-icons/io5';
import Image from 'next/image';

const AiQuerySection = () => {

    const [tab, setTab] = useState({
        monitoring: true,
        customize: false
    });

    const handleTabChange = (tabName) => {
        setTab({
            monitoring: tabName === 'monitoring',
            customize: tabName === 'customize',
        });
    };

    return (
        <div className=' w-full h-full flex flex-col gap-6 pt-4 '>
            <h1 className=' text-white font-parsi text-[32px] leading-[30px] font-bold'>AI Query System Management</h1>

            <div className=' w-full tab-border p-2 backdrop-blur-md flex gap-6'>
                <div className={` px-28 py-4 text-white flex justify-center items-center rounded-lg cursor-pointer ${tab?.monitoring ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" : "bg-[#00000033]"}`}
                    onClick={() => handleTabChange('monitoring')}
                >
                    Monitoring AI Model Performance
                </div>
                <div className={` px-28 py-4 text-white flex justify-center items-center rounded-lg cursor-pointer  ${tab?.customize ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" : "bg-[#00000033]"}`}
                    onClick={() => handleTabChange('customize')}
                >
                    Customizable Responses
                </div>

            </div>

            <div className=' w-full flex gap-6 '>
                <div className=' w-[28%] h-[200px] rounded-2xl backdrop-blur-[14px] relative tab-border !px-4 !py-5 flex flex-col gap-1 '>
                    <div className=' flex  gap-5 items-center '>
                        <Image src={"/svg/clock.svg"} alt={"filter"} width={24} height={24} />
                        <p className="text-white font-parsi text-[20px] leading-[30px] font-bold">Response Time</p>
                    </div>
                    <Image className=' absolute right-0 bottom-0 z-[-10]' src={"/svg/response_chart.svg"} alt={"filter"} width={310} height={90} />
                </div>
                
                <div className=' w-[28%] h-[200px] rounded-2xl backdrop-blur-[14px] relative tab-border !px-4 !py-5 flex flex-col gap-1 '>
                    <div className=' flex  gap-5 items-center '>
                        <Image src={"/svg/accuracy.svg"} alt={"filter"} width={24} height={24} />
                        <p className="text-white font-parsi text-[20px] leading-[30px] font-bold">Query Accuracy</p>
                    </div>
                    <Image className=' absolute left-20 bottom-2 z-[-10]' src={"/svg/accuracy_chart.svg"} alt={"filter"} width={250} height={90} />
                </div>
                
                <div className=' w-[28%] h-[200px] rounded-2xl backdrop-blur-[14px] relative tab-border !px-4 !py-5 flex flex-col gap-1 '>
                    <div className=' flex  gap-5 items-center '>
                        <Image src={"/svg/volume.svg"} alt={"filter"} width={24} height={24} />
                        <p className="text-white font-parsi text-[20px] leading-[30px] font-bold">Query Volume</p>
                    </div>
                    <Image className=' absolute  left-20 bottom-2 z-[-10]' src={"/svg/volume_chart.svg"} alt={"filter"} width={200} height={90} />
                </div>
            </div>

            <div className=' w-full backdrop-blur-[15px] tab-border rounded-xl'>
                <div className=' w-full flex justify-between items-center'>
                    <h1 className=' text-white font-parsi text-[24px] leading-[22px] font-bold pl-5 pt-2 mb-5'>List of Preset Querries</h1>
                    <div className=' flex gap-5 items-center'>
                        <div className="flex items-center justify-between px-5 rounded-lg py-1 my-5 bg-inputBg input-border">
                            <div className="flex items-center gap-2 w-full">
                                <IoSearchOutline className="text-white" />
                                <input
                                    type="text"
                                    placeholder="Search History"
                                    className="w-full h-full py-1 outline-none text-white/70 bg-transparent text-xs"
                                />
                            </div>
                        </div>

                        <div className="flex items-center p-2 justify-between rounded-md bg-inputBg input-border cursor-pointer">
                            <Image src={"/svg/filter.svg"} alt={"filter"} width={20} height={20} />
                        </div>

                    </div>
                </div>
                <AiQueryTable />
            </div>
        </div>
    )
}

export default AiQuerySection;