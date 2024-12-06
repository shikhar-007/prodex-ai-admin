import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const StatusDropDown = ({ setStatus }) => {
  const handleStatus = (e) => {
    setStatus(e.target.accessKey);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronDown className="cursor-pointer" size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem accessKey="Active" onClick={handleStatus}>
            <div accessKey="Active">Active</div>
          </DropdownMenuItem>
          <DropdownMenuItem accessKey="Inactive" onClick={handleStatus}>
            <div accessKey="Inactive">Inactive</div>
          </DropdownMenuItem>
          <DropdownMenuItem accessKey="Block" onClick={handleStatus}>
            <div accessKey="Block">Block</div>
          </DropdownMenuItem>
          <DropdownMenuItem accessKey="Suspend" onClick={handleStatus}>
            <div accessKey="Suspend">Suspend</div>
          </DropdownMenuItem>
          <DropdownMenuItem accessKey="All" onClick={handleStatus}>
            <div accessKey="All">All</div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropDown;
