// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import DashboardLayout from "../components/dashboardLayout";
function recommendedCards(page) {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "X-Auth-token": token,
        },
      };
      const login = await axios.get(
        "http://localhost:5000/api/profile/",
        config
      );
      console.log(login.data);
      setCards(login.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {cards && (
        <div className=" m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-11 w-full">
          {cards.map((card, i) => (
            <div class="flex flex-col h-[30vh] justify-center items-center w-[80%] bg-white p-4 shadow rounded-lg">
              <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-20 w-20">
                <img src={card.avatar} alt="" class="h-full w-full"></img>
              </div>

              <h2 class="mt-4 font-bold text-xl">{card.name}</h2>
              <h6 class="mt-2 text-sm font-medium">
                {card.skills[0]} | {card.skills[1]} | {card.skills[2]}
              </h6>
              <Link href={`/userprofile/${card._id}`}>
                <div className="flex">
                  <button className="mx-2 px-8 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white py-2 text-xs">
                    View
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default recommendedCards;
recommendedCards.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
