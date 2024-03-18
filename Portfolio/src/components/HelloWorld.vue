<!-- LoadingOverlay.vue -->
<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 flex items-center justify-center bg-main-dark bg-opacity-50 z-50"
  >
    <div class="text-text text-2xl font-bold">
      <i class="fas fa-spinner fa-spin"></i> Chargement en cours...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Définir la superposition de chargement comme visible par défaut
    };
  },
  mounted() {
    // Cacher la superposition de chargement lorsque le chargement initial de la page est terminé
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>
