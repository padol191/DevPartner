import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Showprojects() {
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
        <div class="flex justify-around w-full">
          <div class="overflow-scroll w-[60vw] bg-slate-50 overflow-scroll h-[60vh]">
            {userPosts.map((userPost, i) => (
              <div class="flex bg-white shadow-sm rounded-lg mx-4 md:mt-6 md:mx-auto w-[80%] ">
                <div class="flex items-start px-4 py-6">
                  <img
                    class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                    src={userPost.post.avatar}
                    alt="avatar"
                  ></img>
                  <div class="">
                    <div class="flex items-center justify-between">
                      <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                        {userPost.post.title}
                      </h2>
                      <small class="text-sm text-gray-700">22h ago</small>
                    </div>
                    <p class="text-gray-700">Joined 12 SEP 2012. </p>
                    <p class="mt-3 text-gray-700 text-sm">
                      {userPost.post.desc}
                    </p>

                    <div class="mt-6">
                      {userPost.comments &&
                        userPost.comments.map((comment, i) => (
                          <div class="flex items-start p-4">
                            <img
                              class="w-8 h-8 rounded-full object-cover mr-4 shadow"
                              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              alt="avatar"
                            ></img>
                            <div class="">
                              <div class="flex items-center justify-between">
                                <h2 class="text-lg  font-semibold text-gray-900">
                                  Chaitanya Padol
                                </h2>
                                <small class="text-sm text-gray-700">
                                  22h ago
                                </small>
                              </div>
                              <p class="mt-1 text-gray-700 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Assumenda, mollitia.
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Showprojects;
