import React from "react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboardLayout";

function organization() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "X-Auth-token": token,
        },
      };
      const login = await axios.get(
        "http://localhost:5000/api/profile/post",
        config
      );
      console.log(login.data);
      setUserPosts(login.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {userPosts && (
        <div class="max-w-6xl mx-auto">
          <div class="p-4 max-w-6xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Organizations
              </h3>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="w-[800px] divide-y divide-gray-200 dark:divide-gray-700"
              >
                {userPosts.map((userPost, i) => (
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <Link
                          href={`/projects/${userPost.post._id}`}
                          class="text-sm font-medium text-gray-900 truncate dark:text-white"
                        >
                          {userPost.post.title}
                        </Link>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          3 Members
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        timestamp
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default organization;

organization.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
