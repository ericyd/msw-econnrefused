import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  http.get('http://localhost:8000/account', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Testeroo magoo',
    });
  }),
  http.get('http://localhost:8000/user', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Testeroo magoo 2',
    });
  }),
];


export const server = setupServer(...handlers);
