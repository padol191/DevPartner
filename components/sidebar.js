import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { connect } from "react-redux";
import { logout } from "./actions/auth";
import logo from "./Logo-02.png";
import defaultimg from "./default.png";

function Sidebar({ logout }) {
  let menuArray = [true, false, false];
  const [menu, setMenu] = useState(menuArray);
  const [show, setShow] = useState(true);

  const setMenuValue = (props) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  };
  const [resData, setresData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.ful.io/v1/user-profile/");
      const data = await res.data;
      console.log(data);
      setresData(data);
    };
    fetchData();
  }, []);
  const onlogout = async () => {
    await logout();
    <Redirect to="/"></Redirect>;
  };
  return (
    <div>
      {resData && (
        <>
          <div className="rounded-r bg-gray-900 flex justify-between w-full h-12 md:h-20 p-6 items-center absolute left-0 top-auto z-50">
            <div className="flex justify-between  items-center space-x-3">
              <Link
                to="/"
                className="flex text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 justify-between  items-center space-x-3"
              >
                <svg
                  className="w-24 h-14 text-indigo-600 fill-current"
                  // viewBox="0 0 194 116"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 414.06 173.62"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".cls-1{fill:#2d2d2d;}.cls-2{fill:url(#linear-gradient);}.cls-3{fill:url(#linear-gradient-2);}",
                      }}
                    />
                    <linearGradient
                      id="linear-gradient"
                      x1="283.7"
                      y1="126.51"
                      x2="299.03"
                      y2="126.51"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#fb4b50" />
                      <stop offset={1} stopColor="#f23c99" />
                    </linearGradient>
                    <linearGradient
                      id="linear-gradient-2"
                      x1="10.03"
                      y1="1.04"
                      x2="148.64"
                      y2="178.49"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#5f6ae6" />
                      <stop offset={1} stopColor="#403ade" />
                    </linearGradient>
                  </defs>
                  <path
                    className="cls-1"
                    d="M192.84,50.65a5.88,5.88,0,0,1,2.49.52,6.78,6.78,0,0,1,2,1.39,6.18,6.18,0,0,1,1.36,2,6.51,6.51,0,0,1,.49,2.52,6.25,6.25,0,0,1-1.82,4.56,6.05,6.05,0,0,1-4.52,1.84H165V85.64h19.08a6.29,6.29,0,0,1,6.4,6.4,5.77,5.77,0,0,1-1.84,4.43,6.46,6.46,0,0,1-4.56,1.71H165v28.91a6,6,0,0,1-.52,2.52,6.23,6.23,0,0,1-1.39,2,6.53,6.53,0,0,1-4.56,1.81,6.28,6.28,0,0,1-5.91-3.85,6.11,6.11,0,0,1-.49-2.49V56.86a6.91,6.91,0,0,1,.36-2.14,5.62,5.62,0,0,1,1.13-2,6.1,6.1,0,0,1,2-1.49,6.67,6.67,0,0,1,2.94-.58Z"
                  />
                  <path
                    className="cls-1"
                    d="M195.62,78.78a6,6,0,0,1,1.87-4.53,6.39,6.39,0,0,1,4.59-1.81,6.31,6.31,0,0,1,4.53,1.81,6,6,0,0,1,1.88,4.52v24.8a23.52,23.52,0,0,0,1,7,15.88,15.88,0,0,0,2.75,5.36,12.15,12.15,0,0,0,4.33,3.46,13.16,13.16,0,0,0,5.79,1.22,14.18,14.18,0,0,0,6-1.26,14.41,14.41,0,0,0,4.78-3.52,16.18,16.18,0,0,0,3.17-5.29,18.8,18.8,0,0,0,1.14-6.65V79a6.29,6.29,0,0,1,6.4-6.4,6.46,6.46,0,0,1,2.49.49,6.16,6.16,0,0,1,2.07,1.36,6.85,6.85,0,0,1,1.39,2,6.25,6.25,0,0,1,.51,2.53v48.11a6.17,6.17,0,0,1-.51,2.52,6.37,6.37,0,0,1-1.43,2,6.87,6.87,0,0,1-2.1,1.39,6.29,6.29,0,0,1-2.55.52,5.93,5.93,0,0,1-4.5-1.89,6.47,6.47,0,0,1-1.77-4.61v-.91a28.35,28.35,0,0,1-7.77,5.39,20.64,20.64,0,0,1-8.79,2,23.17,23.17,0,0,1-10.28-2.26,23.79,23.79,0,0,1-8-6.27,29,29,0,0,1-5.14-9.51,37.91,37.91,0,0,1-1.81-12Z"
                  />
                  <path
                    className="cls-1"
                    d="M273.42,127.09a6.1,6.1,0,0,1-1.85,4.53,6.28,6.28,0,0,1-4.56,1.81,6.39,6.39,0,0,1-4.59-1.81,6,6,0,0,1-1.87-4.53V57a6,6,0,0,1,1.87-4.53A6.35,6.35,0,0,1,267,50.65a6.24,6.24,0,0,1,4.56,1.81A6.1,6.1,0,0,1,273.42,57Z"
                  />
                  <path
                    className="cls-2"
                    d="M284.31,123.53a7.77,7.77,0,0,1,4.08-4.1,7.14,7.14,0,0,1,2.94-.62,7.37,7.37,0,0,1,3,.62,8,8,0,0,1,2.42,1.65,7.89,7.89,0,0,1,1.65,2.45,7.45,7.45,0,0,1,0,5.95,7.82,7.82,0,0,1-1.65,2.46,8,8,0,0,1-2.42,1.65,7.36,7.36,0,0,1-3,.61,7.14,7.14,0,0,1-2.94-.61,7.92,7.92,0,0,1-2.43-1.65,7.82,7.82,0,0,1-1.65-2.46,7.56,7.56,0,0,1,0-5.95Z"
                  />
                  <path
                    className="cls-1"
                    d="M311.12,55.73a7.4,7.4,0,0,1,1.55-2.3,7.15,7.15,0,0,1,10.09,0,7.4,7.4,0,0,1,1.55,2.3,6.86,6.86,0,0,1,.58,2.81,6.66,6.66,0,0,1-.58,2.78,7.45,7.45,0,0,1-1.55,2.26,7.15,7.15,0,0,1-10.09,0,7.45,7.45,0,0,1-1.55-2.26,6.66,6.66,0,0,1-.58-2.78A6.86,6.86,0,0,1,311.12,55.73ZM324.18,127a6.29,6.29,0,0,1-6.4,6.4,6.46,6.46,0,0,1-2.49-.49,6.09,6.09,0,0,1-2.07-1.35,6.83,6.83,0,0,1-1.39-2,6.08,6.08,0,0,1-.52-2.52V78.91a6,6,0,0,1,.52-2.52,6.35,6.35,0,0,1,1.42-2A7.45,7.45,0,0,1,315.32,73a6.39,6.39,0,0,1,5.05,0,6.46,6.46,0,0,1,2,1.39,6.46,6.46,0,0,1,1.81,4.56Z"
                  />
                  <path
                    className="cls-1"
                    d="M333.2,91.36a31.15,31.15,0,0,1,16.46-16.43,30.86,30.86,0,0,1,24,0,31.17,31.17,0,0,1,9.77,6.63,31.6,31.6,0,0,1,6.59,9.8,30.82,30.82,0,0,1,0,24,31.05,31.05,0,0,1-16.36,16.43,30.86,30.86,0,0,1-24,0,31.15,31.15,0,0,1-16.46-16.43,30.94,30.94,0,0,1,0-24Zm11.93,19a18.14,18.14,0,0,0,9.54,9.54,17.89,17.89,0,0,0,14,0,18.16,18.16,0,0,0,5.69-3.85,17.81,17.81,0,0,0,5.21-12.64,17.66,17.66,0,0,0-1.39-7,17.78,17.78,0,0,0-9.51-9.47,18.25,18.25,0,0,0-14,0A18,18,0,0,0,349,90.71a18.49,18.49,0,0,0-3.85,5.66,17.82,17.82,0,0,0,0,13.94Z"
                  />
                  <path
                    className="cls-3"
                    d="M117,23.74H37.07A23.11,23.11,0,0,0,14,46.86v79.9a23.1,23.1,0,0,0,23.11,23.11h29.2q-7.48-11.73-15-23.48l0,0Q39.51,108,27.76,89.53c-5.33-8.38-3.46-18.51,4.85-24Q51.75,53,71.23,40.94a16.94,16.94,0,0,1,23.65,5.39C100,54.4,97.79,64.47,89.56,70c-5.35,3.6-10.87,7-16.31,10.46-5.16,3.31-6,7.09-2.78,12.4.56.92,1.17,1.81,1.7,2.75,1.38,2.48.86,5.08-1.28,6.48a4.84,4.84,0,0,1-6.38-1C55,89.3,58.78,77.8,68.31,72.14c5.22-3.09,10.27-6.47,15.37-9.76,4.18-2.7,5.49-7.05,3.31-10.81s-6.88-4.89-11.06-2.29Q57,61.07,38.31,73.28c-4.52,3-5.14,7.16-2.24,11.71q20.64,32.46,41.34,64.88H95.58c-5.4-8.53-10.87-17-16.27-25.53-5.62-8.86-3.49-18.83,5.28-24.53C90.5,96,96.4,92.1,102.45,88.5a16.89,16.89,0,0,1,21.89,4.17,17.13,17.13,0,0,1-1.16,22.54,11.68,11.68,0,0,1-2,1.7c-5.34,3.46-10.65,7-16.06,10.31-2.9,1.8-5.29,1.27-6.85-1.23s-.89-4.88,1.93-6.71c4.75-3.09,9.58-6.09,14.34-9.18,4-2.62,5.2-7.28,2.84-10.93A7.86,7.86,0,0,0,106.48,97Q98,102.22,89.65,107.73c-4.35,2.88-5.08,7.31-2.1,12,5.54,8.77,11.23,17.45,16.66,26.29a17.37,17.37,0,0,1,1.77,3.83h11a23.11,23.11,0,0,0,23.11-23.11V46.86A23.12,23.12,0,0,0,117,23.74Z"
                  />
                </svg>
              </Link>
            </div>
            <div
              aria-label="toggler"
              className="flex justify-center items-center"
            >
              <button
                aria-label="open"
                id="open"
                onClick={() => setShow(true)}
                className={`${
                  show ? "hidden" : ""
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="close"
                id="close"
                onClick={() => setShow(false)}
                className={`${
                  show ? "" : "hidden"
                } focus:outline-none focus:ring-2`}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="Main"
            className={`${
              show ? "flex" : "hidden"
            } absolute xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full z-40  w-full sm:w-64 bg-gray-900 flex-col`}
          >
            <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
              <Link
                to="/"
                className="flex text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 justify-between  items-center space-x-3"
              >
                <img
                  className="w-24 h-12 text-indigo-600 fill-current"
                  src={logo}
                ></img>
              </Link>
            </div>

            <div className="pb-8 mx-6 mt-6 pt-6 flex justify-start items-center space-x-2 ">
              <div>
                <img
                  src={
                    resData.profile_photo ? resData.profile_photo : defaultimg
                  }
                  className="w-12 h-12 rounded-full"
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col jusitfy-start items-start space-y-1">
                <p className="cursor-pointer text-base leading-4 text-white">
                  {resData.username}
                </p>
                <p className="cursor-pointer text-xs leading-3 text-indigo-200">
                  {resData.email}
                </p>
              </div>
            </div>
            <div className="   mt-4 flex flex-col px-6 justify-start items-center  px-4 w-full   ">
              <button className="focus:outline-none focus:text-white  flex justify-start items-center space-x-6   hover:text-white  text-indigo-200 hover:text-white rounded  py-3    w-full ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link
                  to="/user/profile"
                  className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white"
                  onClick={() => setShow(false)}
                >
                  Profile
                </Link>
              </button>

              <button className="focus:outline-none focus:text-white  flex jusitfy-start  hover:text-white   text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                <MdOutlineSecurity size={24} />

                <Link
                  to="/user/security"
                  className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  "
                  onClick={() => setShow(false)}
                >
                  Security
                </Link>
              </button>
              <button className="focus:outline-none focus:text-white  flex jusitfy-start  hover:text-white   text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p
                  className=" leading-4 border-b border-transparent  hover:border-white focus:border-white lg:text-lg text-sm"
                  onClick={() => setShow(false)}
                >
                  Settings
                </p>
              </button>
              <button className="focus:outline-none focus:text-white  flex jusitfy-start  hover:text-white   text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className=" leading-4 border-b border-transparent  hover:border-white focus:border-white lg:text-lg text-sm">
                  API
                </p>
              </button>
            </div>
            <div className="px-6 my-4 w-full">
              <hr className="border-indigo-400  w-full" />
            </div>

            <div className="  mt-4 flex flex-col px-6 justify-start items-center  px-4 w-full   ">
              <button className="focus:outline-none focus:text-white  flex justify-start items-center space-x-6  hover:text-white   text-indigo-200 hover:text-white rounded  py-3    w-full ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12H21M21 12L18 9M21 12L18 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <button
                  onClick={() => {
                    onlogout();
                  }}
                  className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  "
                >
                  Logout
                </button>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default connect(null, { logout })(Sidebar);
