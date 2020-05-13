## GAS DELIVERS API

- Deploy in Heroku:
  https://morning-mesa-93259.herokuapp.com/clients

## Client Historic

- URL

/clients/:order_id

- Method:

GET

- URL Params

id=[integer]

- Required:

id=[integer]

- Data Params

None

- Success Response:

Code: 200
Content: { id : 1, name : "David Figueiredo Leite Ribeiro" }
Error Response:

Code: 404 NOT FOUND
Content: { error : "order doesnt exist" }
OR

- Sample Call:

fetch(`${config.API_ENDPOINT}clients/clientid`).then((response) =>
response.json()

- -
- -

## Client List

- URL

/clients/

- Method:

GET

- URL Params

None

- Data Params

None

- Sample Call:

fetch(`${config.API_ENDPOINT}clients/`).then((response) =>
response.json()

- -
- -

## Add Order

- URL

/clients/

- Method:

POST

- URL Params

None

- Required:

None

- Data Params

None

- Success Response:

Code: 200
Content: { id : 1, name : "David Figueiredo Leite Ribeiro" }

- Sample Call:

fetch(`${config.API_ENDPOINT}clients/`).then((response) =>
response.json()

- -
- -

## Edit Order

- URL

/clients/:order_id

- Method:

PATCH

- URL Params

id

- Required:

id=[integer]

- Data Params

None

- Success Response:

Code: 204

- Error Response:

Code: 400 BAD REQUEST
Content: { error : "Request body must contain fields" }
OR

- Sample Call:

fetch(`${config.API_ENDPOINT}clients/clientid`).then((response) =>
response.json()

- -
- -

## OrdersService queries:

- getAllOrders: returns all Orders.

- getAllClients: Return each customer's phone number only once so that a list of customers can be created using the phone number.

- getById: returns Orders by ID.

- Delete: Delete Order.

- UpdateOrder: Update Orders.

- -
- -

## Super test tests:

Some tests were done to make sure the cases passed.

ex:

- given no clients,

- client exist,

- if have 1 client

- used technology:

Node,
Express,
JavaScript,
