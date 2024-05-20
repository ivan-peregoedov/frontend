import Main from "@/pages/Main.vue" 
import { createRouter, createWebHistory } from "vue-router"
import OrganizerPage from "@/pages/OrganizerPage.vue"
import ClientPage from "@/pages/ClientPage.vue"

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },

    {
        path: '/organizer',
        name: 'OrganizerPage',
        component: OrganizerPage
    },

    {
        path: '/client',
        name: 'ClientPage',
        component: ClientPage
    },

    
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;