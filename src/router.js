import {createRouter, createWebHashHistory} from 'vue-router';
import HeroApp from './components/HeroApp';
import EventCalender from './components/EventCalender';


const routes = [
    { path: '/'},
    { path: '/HeroApp', component: HeroApp},
    { path: '/EventCalender', component: EventCalender}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
