import Main from './pages/Main.vue';
import Actual from './pages/Actual.vue';
import Complited from './pages/Complited.vue';
import Universities from './pages/Universities';

export default[
  {
    path: '/',
    component: Main
  },
  {
    path: '/completed',
    component: Complited
  },
  {
    path: '/actual',
    component: Actual
  },
  {
    path: '/universities',
    component: Universities
  }
]

