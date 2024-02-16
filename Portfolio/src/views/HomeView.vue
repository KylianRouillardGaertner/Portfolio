<script setup>
import { onMounted } from "vue";

const loadSplineViewerScript = async () => {
  try {
    // Charger le script SplineViewer en tant que module
    const splineViewerModule = await import(
      "https://unpkg.com/@splinetool/viewer@1.0.31/build/spline-viewer.js"
    );

    // Retourner le module complet pour que nous puissions y accéder plus tard
    return splineViewerModule;
  } catch (error) {
    console.error("Erreur lors du chargement du script SplineViewer :", error);
    throw error;
  }
};

const onSplineViewerMounted = async () => {
  try {
    // Attendre le chargement du script et récupérer le module complet de SplineViewer
    const splineViewerModule = await loadSplineViewerScript();

    // Accéder à l'initialisation de SplineViewer s'il existe
    if (splineViewerModule?.default?.initialize) {
      const viewer = await splineViewerModule.default.initialize({
        // Ajoutez ici les options spécifiques à SplineViewer
        // Consultez la documentation de SplineViewer pour plus de détails
      });

      // Ajouter le viewer à un élément du DOM
      const splineViewerContainer = document.getElementById("Spline");
      viewer.mount(splineViewerContainer);
    } else {
      console.error("SplineViewer.initialize n'est pas défini dans le module.");
    }
  } catch (error) {
    console.error("Erreur lors de l'instanciation de SplineViewer :", error);
  }
};

onMounted(() => {
  // Appeler la fonction lorsque le composant est monté
  onSplineViewerMounted();
});
</script>

<template>
  <main class="z-0">
    <div id="Spline" class="bg-gray-900 h-screen">
      <spline-viewer
        url="https://prod.spline.design/vTIodl-UoreKXge5/scene.splinecode"
      ></spline-viewer>
    </div>
  </main>
</template>

<style>
element.style {
  display: none !important;
}
</style>
