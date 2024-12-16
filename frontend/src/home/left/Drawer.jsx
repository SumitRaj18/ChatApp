import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaEllipsisV } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'
export default function Example() {
  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("token");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className='mt-4'>
      <FaEllipsisV className='text-xl' />
      </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-600  shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
        <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Support
            </a>
          </MenuItem>
            <MenuItem>
              <button
               onClick={handleLogout}
                className="block w-full px-4 py-2 text-left rounded-md text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Sign out
              </button>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
