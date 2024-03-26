<template>
  <main class="bg-main h-full pt-14">
    <div class="grid md:grid-cols-2">
      <div class="grid md:grid-rows-3 mx-auto md:mx-0 mt-5 md:mt-0">
        <div class="row-start-2 h-auto">
          <h1
            class="text-5xl md:text-[8vw] text-left md:text-right"
            style="line-height: 1"
          >
            {{ project ? project.name : "Loading..." }}
          </h1>
          <div class="text-right md:text-[1.8vw]">
            <p
              class="inline-block mx-1 md:mx-[0.5vw] border-text border-2 rounded-3xl px-2 md:px-[1vw]"
            >
              {{ project ? project.annee : "Loading..." }}
            </p>
            <p
              class="inline-block mx-1 md:mx-[0.5vw] border-text border-2 rounded-3xl px-2 md:px-[1vw]"
              v-for="tag in tags"
              :key="tag.id"
            >
              {{ tag.name }}
            </p>
          </div>
        </div>
        <div class="hidden md:block row-start-3">
          <div
            class="text-right"
            v-if="project ? project.external_link !== null : 'Loading...'"
          >
            <a
              :href="project ? project.external_link : 'Loading...'"
              class="underline text-[2.5vw]"
              >Pour consulter le site c'est ici &rarr;</a
            >
          </div>
        </div>
      </div>
      <div class="my-6 md:my-10 m-auto">
        <div
          class="mx-10 md:mx-0 h-[400px] md:h-[39vw] max-w-[350px] md:w-[32vw]"
        >
          <img
            class="object-cover w-full h-full rounded-2xl"
            :src="project ? project.front_img : 'Loading...'"
            :alt="'Image ' + (project ? project.name : 'Loading...')"
          />
        </div>
      </div>
      <div class="md:hidden mb-5 mx-auto">
        <div
          class="text-right"
          v-if="project ? project.external_link !== null : 'Loading...'"
        >
          <a
            :href="project ? project.external_link : 'Loading...'"
            class="underline md:text-[2.5vw]"
            >Pour consulter le site c'est ici &rarr;</a
          >
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-[2fr,0.75fr,2fr] gap-4">
      <div class="text-center md:text-right">
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md w-[215px]"
        >
          <h4 class="text-3xl">Mission :</h4>
          <p>{{ project ? project.mission : "Loading..." }}</p>
        </div>
      </div>
      <div class="text-center">
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md w-[215px]"
        >
          <h4 class="text-3xl">Audience :</h4>
          <p>{{ project ? project.audience : "Loading..." }}</p>
        </div>
      </div>
      <div class="text-center md:text-left">
        <div
          class="inline-block text-left bg-main-dark py-2 px-5 rounded-md w-[215px]"
        >
          <h4 class="text-3xl">Solution :</h4>
          <p>{{ project ? project.solution : "Loading..." }}</p>
        </div>
      </div>
    </div>
    <div>
      <div class="grid md:grid-cols-2 gap-5 mx-10 mt-10 md:mt-24 mb-5">
        <div class="mx-auto max-h-[700px] max-w-[400px] overflow-hidden">
          <img
            class="object-contain"
            :src="project ? project.image1 : 'Loading...'"
            :alt="'Image de' + (project ? project.name : 'Loading...')"
          />
        </div>
        <div class="my-auto text-lg">
          <p>{{ project ? project.description : "Loading..." }}</p>
        </div>
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 gap-5 mx-10 mt-10 mb-5"
      v-if="project && project.image2 !== null"
    >
      <div class="hidden md:block my-auto text-lg">
        {{ project ? project.description2 : "Loading..." }}
      </div>
      <div class="max-h-[680px] max-w-[680px] mx-auto overflow-hidden">
        <img
          class="object-contain"
          v-if="project.image2"
          :src="project.image2"
          :alt="'Image de ' + project.name"
        />
      </div>
      <div class="md:hidden my-auto text-lg">
        {{ project ? project.description2 : "Loading..." }}
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 mx-10 mt-10 mb-5"
      v-if="project && project.image3 !== null"
    >
      <div class="max-h-[370px] mx-auto overflow-hidden">
        <img
          class="col-start-1"
          v-if="project.image3"
          :src="project.image3"
          :alt="'Image de ' + project.name"
        />
      </div>
    </div>
    <p
      class="mx-10 md:mx-auto my-10 max-w-[40rem] text-center text-lg md:text-2xl font-semibold underline"
    >
      Si vous êtes encore ici je vous invite à me contacter &rarr;
    </p>
    <div class="flex mx-10 my-5" v-if="project && project.image4 !== null">
      <div class="max-h-[400px] max-w-[850px] mx-auto overflow-hidden">
        <img
          class="col-start-1"
          v-if="project.image4"
          :src="project.image4"
          :alt="'Image de ' + project.name"
        />
      </div>
    </div>
    <div class="mt-10">
      <h3 class="text-xl md:text-[4vw] ml-10 mb-5" style="line-height: 1">
        Spécification du Projet
      </h3>
      <div class="h-36 text-sm md:text-lg mx-10">
        <div
          class="bg-main-dark grid grid-rows-3 h-full pt-3 md:w-[47vw] ml-auto"
        >
          <div
            class="flex justify-between mx-5 border-b-[4px] border-main-light"
          >
            <div class="my-auto">
              <p>{{ project ? tags[0]?.name : "Loading..." }}</p>
            </div>
            <div class="my-auto">
              <strong>[Type]</strong>
            </div>
          </div>
          <div class="flex my-auto justify-between mx-5">
            <div class="flex max-w-10">
              <p>{{ project ? project.outil1 : "Loading..." }}</p>
              <div v-if="project ? project.outil2 !== null : 'Loading...'">
                <p>,&nbsp;{{ project ? project.outil2 : "Loading..." }}</p>
              </div>
              <div v-if="project ? project.outil3 !== null : 'Loading...'">
                <p>,&nbsp;{{ project ? project.outil3 : "Loading..." }}</p>
              </div>
            </div>
            <div>
              <strong>[Outils]</strong>
            </div>
          </div>
          <div class="flex justify-between mx-5">
            <div>
              <p>
                {{ project ? project.annee : "Loading..." }}
              </p>
            </div>
            <div>
              <strong>[Année]</strong>
            </div>
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
