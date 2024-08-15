import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Ref from '../components/Ref.vue'
import Reactive  from '../components/Reactive.vue'
import ToRefs from '../components/ToRefs.vue'
import Method from '../components/Method.vue'
import Computed from '../components/Computed.vue'
import WatchEffect from '@/components/WatchEffect.vue'
import Watch from '@/components/Watch.vue'


const routes = [
  { 
    path: '/helloworld', 
    component: HelloWorld ,
    name:'helloworld',
  },
  { 
    path: '/ref', 
    component: Ref ,
    name:'ref',
  },
  { 
    path: '/reactive', 
    component: Reactive ,
    name:'reactive',
  },
  { 
    path: '/torefs', 
    component: ToRefs ,
    name:'torefs',
  },
  { 
    path: '/method', 
    component: Method,
    name:'method',
  },
  { 
    path: '/computed', 
    component: Computed,
    name:'computed',
  },
  { 
    path: '/watcheffect', 
    component: WatchEffect,
    name:'watcheffect',
  },
  { 
    path: '/watch', 
    component: Watch,
    name:'watch',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

