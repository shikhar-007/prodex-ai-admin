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

const PresetTable = () => {

    const tableData = [
        {
            query: `How do I reset my pas`,
            score: 70,
            timeStamp: "2024-11-11 14:30",
            suggestedRes: `Lorem ipsum dolor sit`,
            idealRes: `Lorem ipsum dolor sit`
        },
        {
            query: `What is the refund policy?`,
            score: 85,
            timeStamp: "2024-11-11 15:10",
            suggestedRes: `Refunds are processed within 7 days`,
            idealRes: `Refunds are processed within 7 days`
        },
        {
            query: `How can I update my profile?`,
            score: 78,
            timeStamp: "2024-11-11 16:45",
            suggestedRes: `Go to account settings and click update`,
            idealRes: `Go to account settings and click update`
        },
        {
            query: `What are the shipping options?`,
            score: 92,
            timeStamp: "2024-11-11 17:20",
            suggestedRes: `We offer standard and expedited shipping`,
            idealRes: `We offer standard and expedited shipping`
        },
        {
            query: `Where can I find my order history?`,
            score: 88,
            timeStamp: "2024-11-11 18:00",
            suggestedRes: `Order history is under 'My Orders'`,
            idealRes: `Order history is under 'My Orders'`
        },
        {
            query: `Can I change my payment method?`,
            score: 75,
            timeStamp: "2024-11-11 18:45",
            suggestedRes: `You can update payment methods in settings`,
            idealRes: `You can update payment methods in settings`
        }
    ];



    return (
        <div className="max-h-[350px] overflow-y-auto rounded-xl mb-5 scroll-hidden">

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow className=" bg-[#FFFFFF0A]">
                        <TableHead className="w-[20%]">
                            <div className="flex  gap-2">
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Query
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Text
                                </span>
                            </div>
                        </TableHead>
                        <TableHead className="w-[10%]">
                            <div className="flex  gap-2">
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Confidence
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Score
                                </span>
                            </div>
                        </TableHead>
                        <TableHead className="w-[10%] ">
                            <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase text-left">
                                Timestamp
                            </span>
                        </TableHead>
                        <TableHead className="w-[25%]">
                            <div className="flex  gap-2 justify-start">
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Suggested
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Response
                                </span>
                            </div>
                        </TableHead>
                        <TableHead className="w-[20%]">
                            <div className="flex  gap-2 justify-start">
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Ideal
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Response
                                </span>
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
                                <div className="font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal">{row.query}</div>
                            </TableCell>
                            <TableCell>
                                <div className='w-fit font-noto text-[14px] leading-[19px] font-normal '>
                                {`${row.score}%`}
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className=' text-nowrap'>{row.timeStamp}</span>
                            </TableCell>
                            <TableCell>
                                <div className='w-fit font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal'>
                                    {`"${row.suggestedRes} ..."`}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className='w-fit font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal'>
                                    {`"${row.idealRes} ..."`}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <span className=' w-full justify-end flex gap-2 '>
                                    <Image className=' cursor-pointer' src={"/svg/flag.svg"} alt={"flag"} width={20} height={20} />
                                    <div className='w-[1px] bg-white opacity-40'></div>
                                    <Image className=' cursor-pointer' src={"/svg/edit.svg"} alt={"edit"} width={20} height={20} />
                                    <div className='w-[1px] bg-white opacity-40'></div>
                                    <Image className=' cursor-pointer' src={"/svg/add.svg"} alt={"add"} width={20} height={20} />
                                    <div className='w-[1px] bg-white opacity-40'></div>
                                    <Image className=' cursor-pointer' src={"/svg/eye.svg"} alt={"view"} width={20} height={20} />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PresetTable;
