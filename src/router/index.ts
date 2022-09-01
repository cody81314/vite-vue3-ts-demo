import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import AttributeBindings from "../components/attribute-bindings.vue";
import EventListeners from "../components/event-listeners.vue";
import FormBindings from "../components/form-bindings.vue";
import ConditionalRendering from "../components/conditional-rendering.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "helloWorld",
    component: HelloWorld,
    props: {
      msg: 'Vite + Vue'
    }
  },
  {
    path: "/attribute-bindings",
    name: "attributeBindings",
    component: AttributeBindings
  },
  {
    path: "/event-listeners",
    name: "eventListeners",
    component: EventListeners
  },
  {
    path: "/form-bindings",
    name: "formBindings",
    component: FormBindings
  },
  {
    path: "/conditional-rendering",
    name: "conditionalRendering",
    component: ConditionalRendering
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;