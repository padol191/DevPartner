// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboardLayout";
function posts(page) {
  const [userPosts, setUserPosts] = useState(null);
  const [users, setUser] = useState(null);
  const [comment, setComment] = useState(null);
  const [updt, setUpdt] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "X-Auth-token": token,
        },
      };
      const login = await axios.get("http://localhost:5000/api/posts/", config);
      console.log(login.data);
      setUserPosts(login.data);
      const users = await axios.get(
        "http://localhost:5000/api/profile/",
        config
      );
      console.log(users.data);
      setUser(users.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("comment updated")
  }, [updt]);

  function saveComment(id,e){
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "X-Auth-token": token,
      },
    };
    axios.post(`http://localhost:5000/api/posts/comment/${id}`, {
        text:comment
    },config)
    setUpdt(updt+1)
}



  return (
    <>
      {userPosts && users && (
        <div class="flex justify-around w-full">
          <div class="overflow-scroll w-[75%] bg-slate-300">
            {userPosts.map((userPost, i) => (
              <div class="flex bg-white shadow-sm rounded-lg mx-4 md:mt-6 md:mx-auto max-w-md md:max-w-xl">
                <div class="flex items-start px-4 py-6">
                  <img
                    class="max-w-[48px] rounded-full object-cover mr-4 shadow"
                    src={userPost.avatar}
                    alt="avatar"
                  ></img>
                  <div class="flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                      <h2 class="font-bold text-lg text-gray-700 -mt-1">{userPost.title}</h2>
                      <small class="text-sm text-gray-700">22h ago</small>
                    </div>
                    <p class="text-gray-500 text-sm">{userPost.name}</p>
                    <p class="my-3 text-gray-700 text-sm">{userPost.desc}</p>
                    <div class="mb-3 flex items-center">
                      <div class="flex text-gray-700 text-sm mr-3">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span>12</span>
                      </div>
                      <div class="flex text-gray-700 text-sm mr-8">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>{userPost.comments.length}</span>
                      </div>
                     
                    </div>
                    {/* Comment Input Field */}
                    <div class="flex space-x-3">
                        <textarea onChange={(e)=>setComment(e.target.value)} rows="1" class="appearance-none flex-grow-[1] block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-0 text-xs leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Your Comment"></textarea>
                        {console.log(userPost)}
                        <button onClick={()=>saveComment(userPost._id)} class="flex-grow-[3] px-3 bg-slate-700 text-white rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>    
                        </button>
                    </div>
                    {userPost.comments && 
                    <div class="mt-6">
                      {userPost.comments.map((comment, i) => (
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
                             {comment.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="flex-grow max-w-md mx-5">
            <div class="rounded-xl bg-slate-800 text-slate-100">
              <div class="h-10 ml-5 flex items-center">
                <h2>Recommended Devs</h2>
              </div>
              <div class="flex flex-col py-4 gap-y-5">
                {users.slice(0, 3).map((user, i) => (
                  <div class="flex mx-3">
                    <div>
                      <img src={user.avatar} className="w-[40px]"></img>
                    </div>
                    <div class="flex flex-col justify-center">
                      <div class="mx-2 font-semibold">{user.name}</div>
                      <div class="mx-2 text-sm">
                        Django | Flask | Flask | Flask | Flask
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default posts;
posts.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
