<template>
  <div>
    <h1>{{ project ? project.name : "Loading..." }}</h1>
    <p>{{ project ? project.resume : "Loading..." }}</p>
    <img
      :src="project ? project.front_img : 'Loading...'"
      :alt="'Image ' + (project ? project.name : 'Loading...')"
    />
    <div v-if="project ? project.external_link !== null : 'Loading...'">
      <a
        :href="project ? project.external_link : 'Loading...'"
        class="underline"
        >Lien vers le site !</a
      >
    </div>
    <p>{{ project ? project.mission : "Loading..." }}</p>
    <p>{{ project ? project.audience : "Loading..." }}</p>
    <p>{{ project ? project.solution : "Loading..." }}</p>
    <p>{{ project ? project.description : "Loading..." }}</p>
    <div v-for="tag in tags" :key="tag.id">
      {{ tag.name }}
    </div>
    <!-- Afficher d'autres détails du projet selon votre besoin -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "@/supabase";

export default {
  setup() {
    const project = ref(null);
    const tags = ref([]);
    const route = useRoute();
    const projectId = route.params.id;

    onMounted(async () => {
      const { data: projectData, error: projectError } = await supabase
        .from("Projets")
        .select("*")
        .eq("id", projectId)
        .single();

      if (projectError) {
        console.error(projectError);
      } else {
        project.value = projectData;

        // Récupérer les données de tous les tags associés au projet
        const tagIds = [projectData.tag1, projectData.tag2, projectData.tag3];
        for (const tagId of tagIds) {
          if (tagId) {
            const { data: tagData, error: tagError } = await supabase
              .from("tags")
              .select("*")
              .eq("id", tagId)
              .single();

            if (tagError) {
              console.error(tagError);
            } else {
              tags.value.push(tagData);
            }
          }
        }
      }
    });

    return {
      project,
      tags,
    };
  },
};
</script>
