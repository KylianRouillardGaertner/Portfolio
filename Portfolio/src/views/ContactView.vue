<template>
  <main class="bg-main h-full pb-14 grid grid-cols-5 grid-rows-1">
    <div
      class="md:col-span-3 col-span-5 mt-20 text-white flex justify-center items-center flex-col"
    >
      <div>
        <div class="flex flex-row items-center mb-7">
          <img class="w-10 m-2 mr-7" src="../../public/svg/pin.svg" alt="" />
          <p class="text-base md:text-xl">
            <strong>Adresse:</strong> Xx Rue palworld boum
          </p>
        </div>
        <div class="flex flex-row items-center mb-7">
          <img class="w-10 m-2 mr-7" src="../../public/svg/phone.svg" alt="" />
          <p class="text-base md:text-xl">
            <strong>Tel:</strong> 07 67 XX XX XX
          </p>
        </div>
        <div class="flex flex-row items-center">
          <img class="w-10 m-2 mr-7" src="../../public/svg/mail.svg" alt="" />
          <p class="text-base md:text-xl">
            <strong>Mail:</strong> Exemple123@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div class="md:col-span-2 col-span-5 mx-16 mt-20">
      <form action="">
        <div class="flex flex-col mb-4 md:flex-row md:justify-between">
          <div class="flex flex-col mb-4 md:w-1/2 md:mr-2">
            <label for="prenom">Prénom:</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              class="bg-main-light rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-main-dark"
            />
          </div>
          <div class="flex flex-col md:w-1/2">
            <label for="nom">Nom:</label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              class="bg-main-light rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-main-dark"
            />
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="bg-main-light rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-main-dark"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="sujet">Sujet:</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            required
            class="bg-main-light rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:border-main-dark"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="bg-main-light rounded-md px-4 py-2 mt-1 mb-3 focus:outline-none focus:ring focus:border-white"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-main-dark font-Rounded_Bold text-xl w-full py-2 rounded-md hover:bg-[#c7a87b]"
        >
          Envoyer
        </button>
      </form>
    </div>
  </main>
</template>
