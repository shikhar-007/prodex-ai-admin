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

const ContentTable = () => {

    const tableData = [
        { projectName: "project name _1" },
        { projectName: "project name _2" },
        { projectName: "project name _3" },
        { projectName: "project name _4" },
        { projectName: "project name _5" },
        { projectName: "project name _6" },
        { projectName: "project name _7" },
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
                                    Project
                                </span>
                                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                                    Name
                                </span>
                            </div>
                        </TableHead>
                        <TableHead className="w-[25%]">
                            <div className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase text-left">
                                Links
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
                                <div className="font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal capitalize">{row.projectName}</div>
                            </TableCell>
                            <TableCell>
                                <span className=' w-full flex gap-2 '>
                                    <Image className=' cursor-pointer' src={"/svg/twitter.svg"} alt={"twitter"} width={20} height={20} />
                                    <Image className=' cursor-pointer' src={"/svg/github.svg"} alt={"github"} width={20} height={20} />
                                    <Image className=' cursor-pointer' src={"/svg/discord.svg"} alt={"discord"} width={20} height={20} />
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className=' flex justify-end'>
                                    <Image className=' cursor-pointer' src={"/svg/eye.svg"} alt={"view"} width={20} height={20} />
                                </div>                            
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ContentTable;
