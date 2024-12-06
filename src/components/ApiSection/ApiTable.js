import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from 'next/image';

const ApiTable = () => {

    const tableData = [
        { api: "czvfnwtrekdxfphlkmvevsbntamrnngw", platform: "CoinMarketCap" },
        { api: "jklzopqwertyuiasdfghxcvbnm123456", platform: "Binance" },
        { api: "mnopqrstvuwxyzabcdefgh123456789", platform: "CoinGecko" },
        { api: "abcdefghijklmnopqrstuvwxyz12345", platform: "Kraken" },
        { api: "qwertyuiopasdfghjklzxcvbnm098765", platform: "Bitfinex" },
        { api: "asdfghjklzxcvbnm1234567890qwerty", platform: "CryptoCompare" },
        { api: "zxcvbnmasdfghjklqwertyuiop098765", platform: "Gemini" },
        { api: "plmoknijbuhvygctfxrdzeswaq123456", platform: "Huobi" },
    ];
    

    return (
        <div className="max-h-[500px] overflow-y-auto rounded-xl mb-5 scroll-hidden">

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow className=" bg-[#FFFFFF0A]">
                        <TableHead className="w-[25%]">
                            <div className="flex  gap-2">
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Api
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Key
                                </span>
                            </div>
                        </TableHead>
                        <TableHead className="w-[25%]">
                            <div className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase text-left">
                                Platforms
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase text-right">
                                Action
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((row, index) => (
                        <TableRow key={index} className="text-white border-b-[1px]">
                            <TableCell>
                                <div className="font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal">{row.api}</div>
                            </TableCell>
                            <TableCell>
                                <div className='w-fit font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal px-[25px] py-[5px] bg-white-1 rounded-2xl'>
                                    <span>{row.platform}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <span className=' w-full justify-end flex gap-2 '>
                                    <Image className=' cursor-pointer' src={"/svg/eye.svg"} alt={"view"} width={20} height={20} />
                                    <div className='w-[1px] bg-white opacity-40'></div>
                                    <Image className=' cursor-pointer' src={"/svg/edit.svg"} alt={"edit"} width={20} height={20} />
                                    <div className='w-[1px] bg-white opacity-40'></div> 
                                    <Image className=' cursor-pointer' src={"/svg/stats.svg"} alt={"stats"} width={20} height={20} />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApiTable;
