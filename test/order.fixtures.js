function makeOrderArray() {
  return [
    {
      id: 1,
      phone_number: 910465135,
      street: 'Rua do lameiro n 11',
      client_name: 'David Ribeiro',
      post_cod: 9500,
      bottle_type: '12kg',
      date_deliver: '2019-01-03T01:00:00.000Z',
      observations: 'teste',
      delivered: false,
    },
    {
      id: 2,
      phone_number: 910465135,
      street: 'Rua do lameiro n 11',
      client_name: 'David Ribeiro',
      post_cod: 9500,
      bottle_type: '12kg',
      date_deliver: '2019-01-03T01:00:00.000Z',
      observations: 'teste',
      delivered: false,
    },
  ];
}

module.exports = {
  makeOrderArray,
};
