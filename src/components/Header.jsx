import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LinkIcon, LogOut } from "lucide-react";
import { UrlState } from "@/context/Context";
import useFeatchApi from "@/hooks/useFeatchApi";
import { logout } from "@/db/apiAuth";

const Header = () => {
  const navigate = useNavigate();
  const { loading, fn: fnLogout } = useFeatchApi(logout);

  const { user, fetchUser } = UrlState();
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to={"/"}>
        <img src="/logo.svg" alt="logo" className="w-10" />
      </Link>
      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-8 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src={user?.user_metadata?.profile_pic} />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {" "}
                {user?.user_metadata?.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/dashboard"} className="flex items-center">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  My Links
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-400"
                onClick={() => {
                  fnLogout().then(() => {
                    fetchUser();
                    navigate("/auth");
                  });
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
