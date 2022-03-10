import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import DashboardLayout from "../../components/dashboardLayout";
import Link from "next/link";
import TabsRender from "../../components/tab";
import Showprojects from "../../components/Showprojects";
import { useRouter } from "next/router";
function Profile({ color }) {
  const [user, setUser] = useState(null);

  const [openTab, setOpenTab] = useState(1);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "X-Auth-token": token,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Basic 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`,
        },
      };
      const login = await axios.get(
        `http://localhost:5000/api/profile/users/${id}`,
        config
      );
      console.log(login.data);
      setUser(login.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + "blue" + "-600"
                    : "text-" + "black" + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + "blue" + "-600"
                    : "text-" + "black" + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Projects
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + "blue" + "-600"
                    : "text-" + "black" + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Github
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {user && (
                    <>
                      {/* Card is full width. Use in 8 col grid for best view. */}
                      {/* Card code block start */}
                      <div className="bg-white h-[60vh] shadow rounded xl:flex lg:flex w-[60vw]">
                        <div className="xl:w-2/5 lg:w-2/5 bg-gray-50  py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
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
                              {user.bio}
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
                                  {user.github}
                                </p>
                              </div>
                            </div>
                            <div className="w-2/5 mb-16">
                              <div className="border-b pb-3">
                                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                                  Stack Overflow
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-400">
                                  {user.stackoverflow}
                                </p>
                              </div>
                            </div>
                            <div className="w-2/5 mb-16">
                              <div className="border-b pb-3">
                                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                                  LinkedIn
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-400">
                                  {user.linkedin}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card code block end */}
                    </>
                  )}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Showprojects />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                  <section className="text-gray-600 w-[60vw] body-font">
                    <div className="container px-5 py-24 mx-auto">
                      <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium">
                                Shooting Stars
                              </h2>
                            </div>
                            <div className="flex-grow">
                              <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                              </p>
                              <a className="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium">
                                The Catalyzer
                              </h2>
                            </div>
                            <div className="flex-grow">
                              <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                              </p>
                              <a className="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx={6} cy={6} r={3} />
                                  <circle cx={6} cy={18} r={3} />
                                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                </svg>
                              </div>
                              <h2 className="text-gray-900 text-lg title-font font-medium">
                                Neptune
                              </h2>
                            </div>
                            <div className="flex-grow">
                              <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                              </p>
                              <a className="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  className="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
