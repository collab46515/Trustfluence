const request = require('supertest');
const app = require('../server');

test('POST /api/auth/login returns 200 on valid credentials', async () => {
  const res = await request(app)
    .post('/api/auth/login')
    .send({ email: 'admin@trustfluence.com', password: 'admin123' });
  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
});
