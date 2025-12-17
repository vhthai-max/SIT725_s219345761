const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('Books API', function () {
  it('GET /api/books should return 200 and a JSON body', async function () {
    const res = await request(app).get('/api/books');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('statusCode');
    expect(res.body).to.have.property('data');
  });

  it('GET /api/books/:id for a non-existing id should return 404', async function () {
    const res = await request(app).get('/api/books/this-id-should-not-exist');
    expect(res.status).to.equal(404);
  });
});
