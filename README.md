GAS DELIVERS API

In this API we have an Orders router with 7 methods:

.get: returns all Orders.
.post: insert Orders.
.all: give back by ID.
.patch: Orders update.

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

deploy in Heroku:

used technology:

Node,
Express,
JavaScript,
