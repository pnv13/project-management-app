import { lazy } from 'react';

const Welcome = lazy(() => import('../pages/Welcome'));
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Board = lazy(() => import('../pages/Board'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = [
  {
    id: 1,
    path: '/',
    component: <Home />,
  },
  {
    id: 2,
    path: '/aboutUs',
    component: <AboutUs />,
  },
  {
    id: 3,
    path: '/boards/:id',
    component: <Board />,
  },
  {
    id: 4,
    path: '/profile',
    component: <UserProfile />,
  },
  {
    id: 5,
    path: '/404',
    component: <NotFound />,
  },
];

export const welcomeRoutes = [
  {
    id: 1,
    path: '/welcome',
    component: <Welcome />,
  },
  {
    id: 2,
    path: '/signUp',
    component: <SignUp />,
  },
  {
    id: 3,
    path: '/signIn',
    component: <SignIn />,
  },
];
