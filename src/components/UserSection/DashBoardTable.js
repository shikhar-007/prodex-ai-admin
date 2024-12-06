import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserAction from "../UserAction";
import { useSelector } from "react-redux";
import { useGetAllUserQuery } from "@/services/admin";
import { useRouter } from "next/router";
import { ROUTES } from "@/utils/routes";
import StatusDropDown from "../StatusDropDown/StatusDropDown";

const DashBoardTable = () => {
  const router = useRouter();
  const { authToken } = useSelector((state) => state.global);
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: userData, isLoading } = useGetAllUserQuery(
    {
      page,
      limit,
      status: status,
    },
    { skip: !authToken }
  );
  useEffect(() => {
    if (!authToken) {
      router.push(ROUTES.LOGIN);
    }
  }, [authToken]);

  return (
    <div className="max-h-[450px] overflow-y-auto rounded-xl mb-2 scroll-hidden">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%]">
              <div className="flex  gap-2">
                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                  User
                </span>
                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                  Name
                </span>
              </div>
            </TableHead>
            <TableHead className="w-[25%]">
              <div className="flex  gap-2">
                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                  Email
                </span>
                <span className="font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase">
                  Id
                </span>
              </div>
            </TableHead>
            <TableHead className="w-[25%]">
              <div className="flex items-center gap-2 font-noto text-[12px] first-letter:text-[14px] leading-[19px] font-normal uppercase text-left">
                Status <StatusDropDown setStatus={setStatus} />
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
          {userData?.data?.users?.map((row, index) => (
            <TableRow key={index} className="text-white border-b-[1px]">
              <TableCell>
                <div className="font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal">
                  {row?.name}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal">
                  {row?.email}
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit font-noto text-[14px] first-letter:text-[15px] leading-[19px] font-normal px-[25px] py-[5px] bg-white-1 rounded-2xl">
                  <span>{row.status}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <UserAction data={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashBoardTable;
