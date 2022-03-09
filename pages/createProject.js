import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardLayout from '../components/dashboardLayout';
function createProject(page) {
    const [projectName, setProjectName] = useState("");
    const [desc, setDesc] = useState("");
    
    const [slot1,setSlot1]=useState("");
    const [slot2,setSlot2]=useState("");
    const [slot3,setSlot3]=useState("");
    function addProject(e){
        e.preventDefault();
        const skills=slot1+","+slot2+","+slot3;
        let token = localStorage.getItem("token");
        let config = {
          headers: {
            "X-Auth-token": token,
          },
        };
        console.log('working')
        axios.post('http://localhost:5000/api/posts/', {
            title:projectName,
            desc:desc,
            stack:skills
        },config).then(alert("successfu")).catch(err => {
            console.log(err)
        })
        
}
    return(
<>
    <div class="relative">
        <form onSubmit={addProject} class="mx-auto my-10 max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">Project Name</label>
                    <input onChange={(e)=>setProjectName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required></input>
                    <p class="hidden text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-password">Project Description</label>
                    <textarea onChange={(e)=>setDesc(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="Text1" cols="40" rows="5"></textarea>
                    <p class="text-gray-600 text-xs italic">Give enough information for other collaborators to understand the project.</p>
                </div>
            </div>
            <label for="" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Tech Stack</label>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Slot 1
                    </label>
                    <div class="relative">
                        <select onChange={(e)=>setSlot1(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Empty</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>
                            <option>Next.js</option>
                            <option>React.js</option>
                            <option>Django</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>                
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Slot 2
                    </label>
                    <div class="relative">
                        <select onChange={(e)=>setSlot2(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Empty</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>
                            <option>Next.js</option>
                            <option>React.js</option>
                            <option>Django</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Slot 3
                    </label>
                    <div class="relative">
                        <select onChange={(e)=>setSlot3(e.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Empty</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>
                            <option>Next.js</option>
                            <option>React.js</option>
                            <option>Django</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        <button type='submit' className="mx-2 absolute right-0 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Create Project</button>   
        </form>    
    </div>

</>
    )
}
export default createProject
createProject.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  }