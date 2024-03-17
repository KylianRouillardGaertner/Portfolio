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
    <div id="Spline" class="bg-main h-screen">
      <spline-viewer
        url="https://prod.spline.design/vTIodl-UoreKXge5/scene.splinecode"
      ></spline-viewer>
    </div>
  </main>
</template>
