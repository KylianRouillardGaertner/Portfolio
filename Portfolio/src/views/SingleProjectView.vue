<template>
  <main class="bg-main h-full pt-14">
    <div class="grid grid-cols-2">
      <div class="grid grid-rows-3">
        <div class="row-start-2 h-auto">
          <h1 class="text-8xl text-right">
            {{ project ? project.name : "Loading..." }}
          </h1>
          <div class="text-right text-lg">
            <p class="inline-block mx-2 border-text border-2 rounded-3xl px-4">
              {{ project ? project.annee : "Loading..." }}
            </p>
            <p
              class="inline-block mx-2 border-text border-2 rounded-3xl px-4"
              v-for="tag in tags"
              :key="tag.id"
            >
              {{ tag.name }}
            </p>
          </div>
        </div>
        <div class="row-start-3">
          <div
            class="text-right"
            v-if="project ? project.external_link !== null : 'Loading...'"
          >
            <a
              :href="project ? project.external_link : 'Loading...'"
              class="underline text-3xl"
              >Pour consulter le site c'est ici &rarr;</a
            >
          </div>
        </div>
      </div>
      <div class="py-10 m-auto">
        <div class="h-[600px] w-[500px]">
          <img
            class="object-cover w-full h-full rounded-2xl"
            :src="project ? project.front_img : 'Loading...'"
            :alt="'Image ' + (project ? project.name : 'Loading...')"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-[2fr,1fr,2fr]">
      <div class="text-right">
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md max-w-[215px]"
        >
          <h4 class="text-3xl">Mission :</h4>
          <p>{{ project ? project.mission : "Loading..." }}</p>
        </div>
      </div>
      <div class="text-center">
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md max-w-[215px]"
        >
          <h4 class="text-3xl">Audience :</h4>
          <p>{{ project ? project.audience : "Loading..." }}</p>
        </div>
      </div>
      <div>
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md max-w-[215px]"
        >
          <h4 class="text-3xl">Solution :</h4>
          <p>{{ project ? project.solution : "Loading..." }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-5xl ml-10 mb-5">Spécification du Projet</h3>
      <div class="h-60">
        <div class="bg-white grid grid-rows-3 h-full w-[50rem] ml-auto mr-10">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <div>
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
    <p>{{ project ? project.annee : "Loading..." }}</p>
    <div v-for="tag in tags" :key="tag.id">
      {{ tag.name }}
    </div>
    <p>{{ project ? project.outil1 : "Loading..." }}</p>
    <div v-if="project ? project.outil2 !== null : 'Loading...'">
      <p>{{ project ? project.outil2 : "Loading..." }}</p>
    </div>
    <div v-if="project ? project.outil3 !== null : 'Loading...'">
      <p>{{ project ? project.outil3 : "Loading..." }}</p>
    </div>
    <div v-if="project ? project.image1 !== null : 'Loading...'">
      <img
        :src="project ? project.image1 : 'Loading...'"
        :alt="'Image de' + (project ? project.name : 'Loading...')"
      />
    </div>
  </div> -->
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
