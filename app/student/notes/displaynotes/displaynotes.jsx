import React from "react";

const Displaynotes = () => {
  return (
    <div className="flex flex-col">
      <div className=" dm-sans justify-center flex-row items-center flex ml-64 mt-10">
        <div className=" w-[800px] gap-5 items-center p-5 flex flex-row h-24 border shadow-md rounded-md">
          <div>
            <label
              for="first_name"
              class="block mb-2 ml-16 text-sm font-medium text-gray-900 dark:text-white"
            >
              Create Note
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] ml-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="need to add the reference letter"
              required
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="w-fit mt-5 rounded-lg text-sm px-3 py-1 focus:outline-none h-[43px] border bg-green-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
              type="button"
            >
              <div className="flex gap-2 items-center">Create note</div>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="container mx-auto px-4 py-8 max-w-md">
          <div class="grid w-[700px] grid-cols-4 gap-6">
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white">
              <h2 class="text-xl font-semibold mb-2">Tarjeta 1</h2>
              <p class="text-gray-200">Contenido de la tarjeta 1...</p>
            </div>

            <div class="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
              <h2 class="text-xl font-semibold mb-2">Tarjeta 2</h2>
              <p class="text-gray-200">Contenido de la tarjeta 2...</p>
            </div>

            <div class="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
              <h2 class="text-xl font-semibold mb-2">Tarjeta 3</h2>
              <p class="text-gray-200">Contenido de la tarjeta 3...</p>
            </div>

            <div class="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
              <h2 class="text-xl font-semibold mb-2">Tarjeta 4</h2>
              <p class="text-gray-200">Contenido de la tarjeta 4...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displaynotes;
