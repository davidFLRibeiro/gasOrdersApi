GAS DELIVERS API

deploy in Heroku:
https://morning-mesa-93259.herokuapp.com/clients

GET /client In this API we have an Orders router with 7 methods:

POST /client at this endpoint we create the orders

GET / client:id at this endpoint, we get a certain order

PATCH /client:id at this endpoint, we can make necessary changes to the order

In OrdersService we have queries:

-getAllOrders: returns all Orders.

-getAllClients: Return each customer's phone number only once so that a list of customers can be created using the phone number.

-getById: returns Orders by ID.

-Delete: Delete Order.

-UpdateOrder: Update Orders.

Super test tests:

Some tests were done to make sure the cases passed.

ex: given no clients,

client exist,

if have 1 client

used technology:

Node,
Express,
JavaScript,
