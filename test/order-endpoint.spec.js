const knex = require('knex');
const app = require('../src/app');
const { makeOrderArray } = require('./order.fixtures');

describe('orders Endpoints', function () {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });

  after('disconnect fom db', () => db.destroy());

  before('clean the table', () => db.raw('TRUNCATE clients'));

  afterEach('cleanup', () => db.raw('TRUNCATE clients'));

  describe(`GET /clients`, () => {
    context(`given no clients`, () => {
      it(`responds with 200 and empty list`, () => {
        return supertest(app).get('/clients').expect(200, []);
      });
    });
    context(`given clients`, () => {
      const testOrders = makeOrderArray();

      beforeEach('insert orders', () => {
        return db
          .into('clients')
          .insert(testOrders)
          .then(() => {
            return db.into('clients');
          });
      });

      //create a test for POST and order waiting for a 201
      it(`create order`, () => {
        return supertest(app)
          .post('/clients')
          .send({
            phone_number: '910465135',
            street: 'rua do lameiro',
            client_name: 'david',
            post_cod: '9500',
            bottle_type: 12,
            date_deliver: '05-05-2020',
            observations: 'test',
            delivered: 'false',
          })
          .set('Accept', 'application/json')
          .expect(201)
          .expect(function (res) {
            res.body.phone_number = '910465135';
            res.body.street = 'rua do lameiro';
            res.body.delivered = false;
          });
      });

      it(`responds with 200 if have 3`, () => {
        return supertest(app)
          .get('/clients')
          .expect(function (res) {
            res.body.length = 3;
          });
      });

      it(`Edit order / set deliver to true`, () => {
        return supertest(app)
          .patch('/clients/1')
          .send({
            delivered: true,
          })
          .set('Accept', 'application/json')
          .expect(204)
          .expect(function (res) {
            res.body.delivered = true;
          });
      });
      it(`delete a given id`, () => {
        return supertest(app).delete('/clients/2').expect(204);
      });
    });
  });
});
