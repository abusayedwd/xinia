 

import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../public/image/logo.png'
// import logo from '../../public/image/logo.png'
import { FaDollarSign, FaPersonRunning, FaSackDollar, FaUser, FaUsers, FaUsersLine } from "react-icons/fa6";
import { MdCategory, MdOutlineMedicalServices, MdSubscriptions } from "react-icons/md";
import { BiMenu, BiSolidDashboard } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { PiGitPullRequestDuotone } from "react-icons/pi";
import { RiAdminLine, RiSecurePaymentFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Swal from "sweetalert2";
import { SiMagento } from "react-icons/si";
import { BsExclude } from "react-icons/bs";
import { TbTestPipe2 } from "react-icons/tb";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000
        });
        navigate('/');
      }
    });
  };

  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] border-r-2 border-[#d8d0d0] w-[120px] flex flex-col justify-between bg-primaryBg h-full min-h-screen rounded-md">
      <div>
        <div className="p-[10px] grid justify-items-stretch  sm:p-[16px]">
          <img className="h-16 rounded-lg justify-self-center" src={logo} alt="Logo" />
         
          {/* <hr className="w-full mt-4 text-[#54D496] hidden sm:block" /> */}
        </div>
        <div className="ml-5 mt-8">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#d8d0d0] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="user"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#d8d0d0] text-[#193664] rounded-lg"
                  : "flex text-[#000] p-[10px] m-[6px] cursor-pointer items-center font-medium  rounded-lg"
              }
            >
              <FaUsers className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Users Management</span>
            </NavLink>

            <NavLink
              to="admin"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#d8d0d0] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] font-medium p-[10px]  m-[6px] rounded-lg"
              }
            >
             <RiAdminLine className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Admin</span>
            </NavLink>

           

            <NavLink
              to="labtest"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#d8d0d0] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] font-medium p-[10px]   m-[6px] rounded-lg"
              }
            >
             <TbTestPipe2 className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Labs Test</span>
            </NavLink>
 
           
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#d8d0d0] text-[#193664] rounded-lg"
                  : "flex text-[#000] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium   rounded-lg"
              }
            >
              <FaDollarSign className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Subscription</span>
            </NavLink>


            {/* <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#d8d0d0] text-[#193664] rounded-lg"
                  : "flex text-[#000] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium   rounded-lg"
              }
            >
              <CiSettings className="h-8 w-8 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Settings</span>
            </NavLink> */}

          </ul>
        </div>
      </div>
      {/* <div className="mb-[60px] mt-2">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#942020] font-medium"
        >
          <HiLogout className="h-8 w-8 lg:h-5 lg:w-5" />
          <span className="hidden sm:block text-[20px]">Log Out</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;