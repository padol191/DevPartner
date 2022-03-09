import { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import DashboardLayout from '../components/dashboardLayout';
import Link from 'next/link'
function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "X-Auth-token": token,
        },
      };
      const login = await axios.get(
        "http://localhost:5000/api/auth/login",
        config
      );
      console.log(login.data);
      setUser(login.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {user && (
        <>
          {/* Card is full width. Use in 8 col grid for best view. */}
          {/* Card code block start */}
          <div className="bg-white h-[80vh] shadow rounded xl:flex lg:flex w-full">
            <div className="xl:w-2/5 lg:w-2/5 bg-gray-100  py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="h-60 w-60 rounded-full mb-3">
                  <img
                    className="h-full w-full object-cover rounded-full shadow"
                    src={user.avatar}
                    alt
                  />
                </div>

                <p className="mb-6 text-lg text-gray-700 dark:text-gray-500">
                  {user.email}
                </p>
                <p className="mb-6 text-sm text-center px-20 text-black-700 dark:text-black">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className="bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none">
                  <Link href="/editProfile">Edit Profile</Link>
                </button>
              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5 px-6 py-8 flex justify-around items-center">
              <div className="flex flex-wrap justify-around items-center w-[80%]">
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Name
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      {user.name}
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Phone Number
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      {user.number}
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Email
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Github
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      Darsh09
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Stack Overflow
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      Darsh09
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-16">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      LinkedIn
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-400">
                      Darsh09
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card code block end */}
      </> 
      )}
    </>
  );
}
export default Profile;

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};