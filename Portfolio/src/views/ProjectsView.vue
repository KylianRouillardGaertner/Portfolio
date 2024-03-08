<template>
  <div class="bg-gray-900 h-full pt-20 pb-14">
    <div class="grid grid-cols-3" style="grid-auto-rows: 1fr">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-cover bg-center flex flex-col justify-center items-center text-white relative transition duration-500 ease-in-out"
        style="padding-bottom: 100%"
        :style="{ backgroundColor: project.color }"
        @mouseover="hoverProject(index)"
        @mouseleave="leaveProject()"
      >
        <h3 class="text-black font-semibold absolute top-8 left-6 text-3xl">
          {{ project.name }}
        </h3>
        <p class="text-black absolute top-[70px] left-6 text-lg">
          {{ project.resume }}
        </p>
        <img
          :src="project.front_img"
          alt="Project Image"
          class="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 ease-in-out"
          :class="{ 'opacity-100': hoveredProject !== index }"
        />
        <div
          class="absolute inset-0 bg-white opacity-0 transition duration-500 ease-in-out"
          :class="{ 'opacity-[0.4]': hoveredProject !== index }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase"; // Assurez-vous que le chemin d'importation est correct par rapport à l'emplacement de votre fichier supabase.js

export default {
  setup() {
    const projects = ref([]);
    const hoveredProject = ref(null);

    onMounted(async () => {
      const { data, error } = await supabase
        .from("Projets")
        .select("name, front_img, color, resume"); // Sélection de la colonne "name" à la place de "title"
      if (error) {
        console.error(error);
      } else {
        projects.value = data;
      }
    });

    const hoverProject = (index) => {
      hoveredProject.value = index;
    };

    const leaveProject = () => {
      hoveredProject.value = null;
    };

    return {
      projects,
      hoveredProject,
      hoverProject,
      leaveProject,
    };
  },
};
</script>

<style scoped>
/* Ajustez la transparence de l'image pour afficher la couleur en arrière-plan */
.bg-cover img {
  opacity: 0; /* Définit l'opacité initiale de l'image à 0 */
}

/* Ajoutez la transition pour une animation fluide */
.bg-cover img.opacity-100 {
  opacity: 1; /* Lorsque la classe "opacity-100" est appliquée, l'opacité de l'image est réglée à 1 */
}
</style>
