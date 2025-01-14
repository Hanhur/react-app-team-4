import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('../pages/ExercisesPage/ExercisesPage'));

import { Welcome } from '../Welcome';
import { SignUp } from '../SignUp';
import { SignIn } from '../SignIn';

const routes = {
  MAIN_ROUTE: '/',
  WELCOME_ROUTE: '/welcome',
  SIGNUP_ROUTE: '/signup',
  SIGNIN_ROUTE: '/signin',
  PROFILE_ROUTE: '/profile',
  DIARY_ROUTE: '/diary',
  PRODUCTS_ROUTE: '/products',
  EXERCISES_ROUTE: '/exercises',
};


const appRoutes = [
  {
    path: routes.MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: routes.WELCOME_ROUTE,
    element: (
      <MainPage>
        <Welcome />
      </MainPage>
    ),
  },
   {
    path: routes.SIGNUP_ROUTE,
    element: (
      <MainPage>
        <SignUp />
      </MainPage>
    ),
  },
    {
    path: routes.SIGNIN_ROUTE,
    element: (
      <MainPage>
        <SignIn />
      </MainPage>
    ),
  },
  {
    path: routes.PROFILE_ROUTE,
    element: <ProfilePage />,
  },
    {
    path: routes.DIARY_ROUTE,
    element: <DiaryPage />,
  },
      {
    path: routes.PRODUCTS_ROUTE,
    element: <ProductsPage />,
  },
    {
    path: routes.EXERCISES_ROUTE,
    element: <ExercisesPage />,
  },
]

export default appRoutes;
