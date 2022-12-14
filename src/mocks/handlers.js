import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        users: '1',
      }),
    );
  }),
];
