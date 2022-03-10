import { useEffect, useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import DashboardLayout from "../components/dashboardLayout";
import Link from "next/link";

function editProfile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState([]);
  const [number, setNumber] = useState(0);
  const [github, setGithub] = useState("");
  const [stackoverflow, setStackoverflow] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [res, setRes] = useState(0);
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
      setGithub(login.data.github);
      setSkill(login.data.skill);
      setLinkedin(login.data.linkedin);
      setStackoverflow(login.data.stackoverflow);
    };
    fetchData();
  }, []);

  function saveChanges() {
    const userDetails = {
      skills: skill,
      github: github,
      linkedin: linkedin,
      stackoverflow: stackoverflow,
    };
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "X-Auth-token": token,
      },
    };
    axios
      .post("http://localhost:5000/api/profile/update", userDetails, config)
      .then((response) => alert("Updated Successully"));
  }

  return (
    <>
      {user && (
        <div className="flex items-center justify-center">
          <div class="xl:w-10/12 w-full px-8">
            <div class="xl:px-24">
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-2xl font-medium pr-2 leading-5 text-gray-800">
                      Personal Information
                    </h1>
                  </div>
                  {/* <p class="mt-4 text-sm leading-5 text-gray-600">
                  Information about the section could go here and a brief
                  description of how this might be used.
                </p> */}
                </div>
                <div>
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        Name
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder={user.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Tech Stack
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder={user.skills}
                        onChange={(e) => setSkill(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Password
                      </label>
                      <input
                        type="email"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder={user.password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Phone number
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder={user.number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div class="w-80">
                  <div class="flex items-center">
                    <h1 class="text-2xl font-medium pr-2 leading-5 text-gray-800">
                      Socials
                    </h1>
                  </div>
                  {/* <p class="mt-4 text-sm leading-5 text-gray-600">
                  Information about the section could go here and a brief
                  description of how this might be used.
                </p> */}
                </div>
                <div>
                  <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        Github
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="password"
                        placeholder={user.github}
                        onChange={(e) => setGithub(e.target.value)}
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="securityCode"
                      >
                        Linkedin
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder={user.linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center lg:ml-24 mt-8">
                    <div class="md:w-64">
                      <label
                        class="text-sm leading-none text-gray-800"
                        id="recoverEmail"
                      >
                        Stackoverflow
                      </label>
                      <input
                        type="name"
                        tabindex="0"
                        class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="recoveryEmail"
                        placeholder={user.stackoverflow}
                        onChange={(e) => setStackoverflow(e.target.value)}
                      />
                    </div>
                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={saveChanges}
              className="block mx-auto my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default editProfile;

editProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
