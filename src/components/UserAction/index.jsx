import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useDeleteUserMutation,
  useUpdateUserStatusMutation,
} from "@/services/admin";
import toast from "react-hot-toast";

const UserAction = ({ data }) => {
  const [updateUserStatus, { isLoading }] = useUpdateUserStatusMutation();
  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();
  const handleUpdate = async (e) => {
    try {
      const response = await updateUserStatus({
        email: data?.email,
        status: e.target.accessKey,
      }).unwrap();
      console.log("response", response);
      if (response) {
        toast.success(response?.message);
      }
    } catch (error) {
      console.log("handleUpdate error", error);
      toast.error(error?.message);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await deleteUser({
        email: data?.email,
      }).unwrap();
      console.log("response", response);
      if (response) {
        toast.success(response?.message);
      }
    } catch (error) {
      console.log("handleUpdate error", error);
      toast.error(error?.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="py-[5px] cursor-pointer">...</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuGroup>
          <DropdownMenuItem
            accessKey={data?.status === "Block" ? "Inactive" : "Block"}
            onClick={handleUpdate}
            disabled={isLoading}
          >
            <span accessKey={data?.status === "Block" ? "Inactive" : "Block"}>
              {data?.status === "Block" ? "Unblock" : "Block"}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            accessKey={data?.status === "Suspend" ? "Inactive" : "Suspend"}
            onClick={handleUpdate}
            disabled={isLoading}
          >
            <span
              accessKey={data?.status === "Suspend" ? "Inactive" : "Suspend"}
            >
              {data?.status === "Suspend" ? "Unsuspend" : "Suspend"}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={deleteLoading} onClick={handleDelete}>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAction;
