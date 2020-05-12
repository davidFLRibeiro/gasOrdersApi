const express = require('express');
const ordersService = require('./orders-service');
const path = require('path');
const ordersRouter = express.Router();
const jsonParser = express.json();

//this method is to return all orders.
ordersRouter
  .route('/')
  .get((req, res, next) => {
    ordersService
      .getAllOrders(req.app.get('db'))
      .then((orders) => {
        res.json(orders);
      })
      .catch(next);
  })

  //method to post an order
  .post(jsonParser, (req, res, next) => {
    const {
      phone_number,
      street,
      client_name,
      post_cod,
      bottle_type,
      date_deliver,
      observations,
      delivered,
    } = req.body;

    const newOrder = {
      phone_number,
      street,
      client_name,
      post_cod,
      bottle_type,
      date_deliver,
      observations,
      delivered,
    };
    //If a value in the body is missing return error message
    for (const [key, value] of Object.entries(newOrder))
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` },
        });
      }
    ordersService
      .insertOrders(req.app.get('db'), newOrder)
      .then((order) => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `${order.id}`))
          .json(order);
      })
      .catch(next);
  });

//This method it´s to return all clients
ordersRouter.route('/clientid').get((req, res, next) => {
  ordersService
    .getAllClients(req.app.get('db'))
    .then((orders) => {
      res.json(orders);
    })
    .catch(next);
});

ordersRouter
  //In this method it to return by ID where we can get client, delete client and update client.
  .route('/:order_id')
  .all((req, res, next) => {
    ordersService
      .getById(req.app.get('db'), req.params.order_id)
      .then((order) => {
        if (!order) {
          return res.status(404).json({
            error: { message: `order doesnt exist` },
          });
        }
        req.order = order;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(req.order);
  })
  .delete((req, res, next) => {
    ordersService
      .deleteOrder(req.app.get('db'), req.params.order_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })
  //Update the Orders
  .patch(jsonParser, (req, res, next) => {
    const {
      phone_number,
      street,
      client_name,
      post_cod,
      bottle_type,
      date_deliver,
      observations,
      delivered,
    } = req.body;
    const orderToUpdate = {
      phone_number,
      street,
      client_name,
      post_cod,
      bottle_type,
      date_deliver,
      observations,
      delivered,
    };

    const numberOfValues = Object.values(orderToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: { message: `Request body must contain fields` },
      });
    }
    ordersService
      .updateOrder(req.app.get('db'), req.params.order_id, orderToUpdate)
      .then((numOfRowsAffected) => {
        res
          .location(path.posix.join(req.originalUrl, `${req.params.order_id}`))
          .status(204)
          .end();
      });
  });

module.exports = ordersRouter;
