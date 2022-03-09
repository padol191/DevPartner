import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardLayout from '../components/dashboardLayout';
function posts(page) {
    const [userPosts, setUserPosts] = useState(null);
    const [users, setUser] = useState(null);
	useEffect(() => {
	  const fetchData = async () => {
		let token = localStorage.getItem("token");
		let config = {
		  headers: {
			"X-Auth-token": token,
		  },
		};
		const login = await axios.get(
		  "http://localhost:5000/api/posts/",
		  config
		);
		console.log(login.data);
		setUserPosts(login.data);
        const users =await axios.get(
            "http://localhost:5000/api/profile/",
            config
          );
          console.log(users.data);
          setUser(users.data);
	  };
	  fetchData();
	}, []);

    return(
<>
        {userPosts && users && (
        <div class="flex justify-around w-full">
            <div class="overflow-scroll w-[75%] bg-slate-300">
                
                { userPosts.map((userPost,i) => (
                <div class="flex bg-white shadow-sm rounded-lg mx-4 md:mt-6 md:mx-auto max-w-md md:max-w-xl">
                    <div class="flex items-start px-4 py-6">
                    <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src={userPost.avatar} alt="avatar">
                    </img>
                    <div class="">
                            <div class="flex items-center justify-between">
                                <h2 class="text-lg font-semibold text-gray-900 -mt-1">{userPost.name}</h2>
                                <small class="text-sm text-gray-700">22h ago</small>
                            </div>
                            <p class="text-gray-700">Joined 12 SEP 2012. </p>
                            <p class="mt-3 text-gray-700 text-sm">
                                {userPost.text}
                            </p>
                            <div class="mt-4 flex items-center">
                                <div class="flex text-gray-700 text-sm mr-3">
                                    <svg fill="none" viewBox="0 0 24 24"  class="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                    <span>12</span>
                                </div>
                                <div class="flex text-gray-700 text-sm mr-8">
                                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                    </svg>
                                    <span>{userPost.comments.length}</span>
                                </div>
                                <div class="flex text-gray-700 text-sm mr-4">
                                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                    </svg>
                                    <span>share</span>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                { userPost.comments.map((comment,i) => (
                                    <div class="flex items-start p-4">
                                        <img class="w-8 h-8 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"></img>
                                        <div class="">
                                            <div class="flex items-center justify-between">
                                                <h2 class="text-lg  font-semibold text-gray-900">Chaitanya Padol</h2>
                                                <small class="text-sm text-gray-700">22h ago</small>
                                            </div>
                                            <p class="mt-1 text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, mollitia.</p>
                                        </div>
                                    </div>
                                ))}                            
                            </div>
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
                        { users.slice(0,3).map((user,i) => (
                            <div class="flex mx-3">
                                <div>
                                    
                                    <img src={user.avatar} className="w-[40px]"></img>
                                </div>
                                <div class="flex flex-col justify-center">
                                    <div class="mx-2 font-semibold">{user.name}</div>
                                    <div class="mx-2 text-sm">Django | Flask | Flask | Flask | Flask</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}
export default posts
posts.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  }