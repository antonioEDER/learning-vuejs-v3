import Tarefa from "@/views/Tarefas.vue"
import Projetos from "@/views/Projetos.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tarefas',
        component: Tarefa,
    },
    {
        path: '/projetos',
        name: 'projetos',
        component: Projetos,
    }
]

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas,
})

export default roteador