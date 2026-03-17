export const users: any[] = [
  {
    id: 1,
    email: 'admin@test.com',
    password: '123456',
    role: 'admin',
    permissions: ['dashboard.view', 'users.view', 'reports.view'],
  },
  {
    id: 2,
    email: 'agent@test.com',
    password: '123456',
    role: 'agent',
    permissions: ['dashboard.view'],
  },
  {
    id: 3,
    email: 'agent@test1.com',
    password: '123456',
    role: 'agent',
    permissions: ['dashboard.view'],
  },
];
