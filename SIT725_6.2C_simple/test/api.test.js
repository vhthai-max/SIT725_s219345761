const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('GET /api/hello', function () {
  it('should return 200 and hello message', async function () {
    const res = await request(app).get('/api/hello');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Hello SIT725');
  });
});
