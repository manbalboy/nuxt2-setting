import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
  rest.get('http://localhost:3000/users', (req, res, ctx) => {
    return res(
      ctx.json({
        users: 'Lord of the Rings',
        author: 'J. R. R. Tolkien',
      }),
    );
  }),
);
