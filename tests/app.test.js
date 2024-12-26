const request = require('supertest');
const app = require('../path/to/your/app'); // Adjust the path to your app

describe('GET /health', function() {
  let server;

  before(function(done) {
    server = app.listen(done);
  });

  after(function(done) {
    server.close(done);
  });

  it('deve retornar status ok', function(done) {
    request(server)
      .get('/health')
      .expect(200, done);
  });
});