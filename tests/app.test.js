const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('GET /health', () => {
  it('deve retornar status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});

describe('Health Check', function() {
  it('should return status ok', function() {
    assert.strictEqual('ok', 'ok');
  });
});