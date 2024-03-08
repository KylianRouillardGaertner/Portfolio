<template>
  <main class="bg-gray-900 h-full pb-14 grid grid-cols-5 grid-rows-1">
    <div
      class="md:col-span-3 col-span-5 mt-20 text-white flex justify-center items-center flex-col"
    >
      <div>
        <div class="flex flex-row items-center mb-7">
          <div class="bg-gray-500 rounded-full mr-5">
            <img class="w-10 m-2" src="../../public/svg/pin.svg" alt="" />
          </div>
          <p class="text-base md:text-xl">
            <strong>Adresse:</strong> Xx Rue palworld boum
          </p>
        </div>
        <div class="flex flex-row items-center mb-7">
          <div class="bg-gray-500 rounded-full mr-5">
            <img class="w-10 m-2" src="../../public/svg/phone.svg" alt="" />
          </div>
          <p class="text-base md:text-xl">
            <strong>Tel:</strong> 07 67 XX XX XX
          </p>
        </div>
        <div class="flex flex-row items-center">
          <div class="bg-gray-500 rounded-full mr-5">
            <img class="w-10 m-2" src="../../public/svg/mail.svg" alt="" />
          </div>
          <p class="text-base md:text-xl">
            <strong>Mail:</strong> Exemple123@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div class="md:col-span-2 col-span-5 mx-16 mt-20">
      <form action="">
        <div
          class="flex flex-col mb-4 text-white md:flex-row md:justify-between"
        >
          <div class="flex flex-col mb-4 md:w-1/2 md:mr-2">
            <label for="prenom">Prénom:</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              class="bg-gray-800 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-gray-200"
            />
          </div>
          <div class="flex flex-col md:w-1/2">
            <label for="nom">Nom:</label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              class="bg-gray-800 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-gray-200"
            />
          </div>
        </div>
        <div class="flex flex-col mb-4 text-white">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="bg-gray-800 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-gray-200"
          />
        </div>
        <div class="flex flex-col mb-4 text-white">
          <label for="sujet">Sujet:</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            required
            class="bg-gray-800 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-gray-200"
          />
        </div>
        <div class="flex flex-col mb-4 text-white">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="bg-gray-800 rounded-md px-4 py-2 mt-1 mb-3 focus:outline-none focus:ring focus:border-blue-300 text-gray-200"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  </main>
</template>
