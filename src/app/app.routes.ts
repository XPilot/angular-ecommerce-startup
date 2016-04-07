import { Homepage } from './pages/';

export default [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    useAsDefault: true,
  },

  {
    path: '/secondary',
    name: 'Secondary',
    component: Homepage,
  }
];
