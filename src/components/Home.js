import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";

function Home() {
  const [RoomCode, setRoomCode] = useState("");
  console.log(RoomCode);

  const navigate = useNavigate();
  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <section>
      <Nav />
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-500  mt-20 mb-48 animate__animated animate__bounceInRight">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <img
              class="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <p class="mt-1 text-center text-gray-500 dark:text-gray-200">
            Create or Join Room
          </p>

          <form action="" onSubmit={submitCode}>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-800 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                required
                placeholder="Create Class"
                aria-label="Email Address"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Create Class Room
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Home;
