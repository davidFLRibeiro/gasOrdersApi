const knex = require('knex');
const app = require('../src/app');

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

      it(`responds with 200 and empty list`, () => {
        return supertest(app)
          .get('/clients')
          .expect(function (res) {
            res.body.length = 1;
          });
      });
    });
  });
});
