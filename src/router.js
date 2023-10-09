import {createRouter, createWebHistory} from 'vue-router';
import HeroApp from './components/HeroApp';
import homePage from './components/homePage';
import EventCalender from './components/EventCalender';


const routes = [
    { path: '/', component: homePage},
    { path: '/HeroApp', component: HeroApp},
    { path: '/EventCalender', component: EventCalender}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
