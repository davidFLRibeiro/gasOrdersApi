const ordersService = {
  getAllOrders(knex) {
    return knex.select('*').from('clients');
  },

  getAllClients(knex) {
    return knex.select('*').distictOn('phone_number').from('clients');
  },

  insertOrders(knex, newOrder) {
    return knex
      .insert(newOrder)
      .into('clients')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex.from('clients').select('*').where('id', id).first();
  },

  deleteOrder(knex, id) {
    return knex('clients').where({ id }).delete();
  },

  updateOrder(knex, id, newOrderFields) {
    return knex('clients').where({ id }).update(newOrderFields);
  },
};

module.exports = ordersService;
