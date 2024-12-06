import Image from 'next/image';
import React from 'react'

const Card = ({ title, value, icon, graph, arrow }) => {
    return (
        <div className="w-[30%] h-[200px] backdrop-blur-[10px]  relative dash-card">
            {graph && <Image className="absolute z-[-11] bottom-0 right-0" src={graph} alt="active user" width={300} height={90} />}
            <div className="flex flex-col py-6 pl-6 gap-3">
                <div className="flex gap-4">
                    <Image src={icon} alt={title} width={24} height={24} />
                    <p className="text-white font-parsi text-[20px] leading-[30px] font-bold">{title}</p>
                    {arrow &&<Image src={arrow} alt="down" width={17} height={11} />}
                </div>
                <p className="font-noto text-[56px] text-white leading-[76px] font-extrabold">{Number(value).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Card