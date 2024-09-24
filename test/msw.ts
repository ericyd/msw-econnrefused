import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const handler = [
  http.get('http://localhost:8000/account', () => {
    return HttpResponse.json({
      id: 1,
      name: 'Testeroo magoo',
    });
  }),
];


export const server = setupServer(...handler);
