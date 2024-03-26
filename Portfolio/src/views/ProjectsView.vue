<template>
  <div class="bg-main h-full pt-20 pb-14">
    <div>
      <h1 class="text-6xl mb-6 pl-10">Quelques uns de mes projets</h1>
    </div>
    <div class="grid grid-cols-2 gap-5 px-10">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col justify-center relative transition duration-500 ease-in-out aspect-w-1 aspect-h-1 rounded-lg"
        :style="{ backgroundColor: project.color }"
        @mouseover="hoverProject(index)"
        @mouseleave="leaveProject()"
      >
        <router-link
          :to="{ name: 'SingleProject', params: { id: project.id } }"
        >
          <h3
            class="font-semibold absolute top-8 left-6 text-3xl opacity-0"
            :class="{ 'opacity-100': hoveredProject == index }"
          >
            {{ project.name }}
          </h3>
          <p
            class="absolute top-[70px] left-6 right-6 text-lg opacity-0"
            :class="{ 'opacity-100': hoveredProject == index }"
          >
            {{ project.resume }}
          </p>
          <img
            :src="project.front_img"
            alt="Project Image"
            class="w-full h-full object-cover opacity-0 transition duration-500 ease-in-out rounded-lg"
            :class="{ 'opacity-100': hoveredProject !== index }"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase"; // Assurez-vous que le chemin d'importation est correct par rapport à l'emplacement de votre fichier supabase.js

export default {
  setup() {
    const projects = ref([]);
    const hoveredProject = ref(null);

    onMounted(async () => {
      const { data, error } = await supabase
        .from("Projets")
        .select("name, front_img, color, resume, id"); // Sélection de la colonne "name" à la place de "title"
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
