import response from './response-middleware';

test("sample test", () => {
  const ctx = {
    state: {
      stateA: 'a',
      stateB: 'b'
    },
    response: {
      body: {}
    }
  }
  const context = response(ctx);

  expect(ctx.response.body).toMatchObject(ctx.state);
});