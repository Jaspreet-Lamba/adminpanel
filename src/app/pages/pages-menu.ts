import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Product',
    icon: 'ion-bag',
    children: [
      {
        title: 'Add Product',
        link: '/pages/product/add',
      },
      {
        title: 'View Product',
        link: '/pages/product/view',
      },
    ],
  },{
    title: 'Category',
    icon: 'ion-ios-book-outline',
    children: [
      {
        title: 'View/Add Category',
        link: '/pages/category/view', 
      },
    ],
  },{
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
