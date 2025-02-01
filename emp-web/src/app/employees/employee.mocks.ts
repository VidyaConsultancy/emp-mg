import { Navs } from '../shared/components/sidebar/sidebar.types';

export const mockNavs: Navs[] = [
  {
    label: 'Employee',
    icon: 'badge',
    childs: [
      {
        label: 'List',
        url: '/employees/list',
        icon: 'list',
      },
    ],
  },
];
