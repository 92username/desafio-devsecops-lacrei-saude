const request = require('supertest');
const app = require('./health'); // substitua pelo caminho do app

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});