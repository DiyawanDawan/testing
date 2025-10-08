import request from 'supertest';
import app from './index.js';

describe('Server Express Test', () => {
  test('GET / harus mengembalikan pesan sukses', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('🚀 Express Docker Testing di localhost:3000');
  });
});
