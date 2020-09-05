import Main from './pages/Main.vue';
import Actual from './pages/Actual.vue';
import Complited from './pages/Complited.vue';

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
  }
]

