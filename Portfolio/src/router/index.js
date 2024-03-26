import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import SingleProjectView from '../views/SingleProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: "Contact de Kylian Rouillard--Gaertner",
        description: "N'hésiter pas à me contacter, j'espère que nous pourrons collaborer ensemble !"
      },
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title || 'Titre par défaut';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', to.meta.description || 'Description par défaut');
        }
        next();
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Qui est Kylian Rouillard--Gaertner ?",
        description: "Je suis développeur web et mobile. J'espère que vous trouverez ce que vous cherchez sur mon Portfolio."
      },
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title || 'Titre par défaut';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', to.meta.description || 'Description par défaut');
        }
        next();
      },
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: "Portfolio de Kylian Rouillard--Gaertner",
        description: "Bienvenue sur mon Portfolio, je suis Kylian Rouillard--Gaertner, développeur web et mobile. n'hésiter pas à me contacter pour de futur collaboration."
      },
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title || 'Titre par défaut';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', to.meta.description || 'Description par défaut');
        }
        next();
      },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
      meta: {
        title: "Liste des projets de Kylian Rouillard--Gaertner",
        description: "Vous retrouverez ici la liste de mes projets, n'hésiter pas à me contacter s'ils vous plaisent."
      },
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title || 'Titre par défaut';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', to.meta.description || 'Description par défaut');
        }
        next();
      },
    },
    {
      path: '/single_project/:id',
      name: 'SingleProject',
      component: SingleProjectView,
      meta: {
        title: "Page d'un des projets de Kylian Rouillard--Gaertner",
        description: "Si jamais ce projet vous plait n'hésiter pas à en regarder d'autres !"
      },
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title || 'Titre par défaut';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', to.meta.description || 'Description par défaut');
        }
        next();
      },
    },
  ]
})

export default router
