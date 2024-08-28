import { createRouter, createWebHistory } from 'vue-router';
import DoctorsComponent from '../components/DoctorsComponent.vue';
import PatientsComponent from '../components/PatientsComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Doctors',
    component: DoctorsComponent,
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
