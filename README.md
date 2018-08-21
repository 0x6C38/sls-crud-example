# Dynamodb CRUD on API Gateway & AWS Lambda with Serverless Framework
This repository contains infrastructure code as well as lambda function code for performing create, read, update and delete operations on a Dynamodb table.

## Requirements
- Have nodejs v8.10+ and npm installed
- Have serverless framework installed (`npm install -g serverless`)
- Have your aws credentials [setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/)


## Set up
1. Clone this repository
2. Install the dependencies (`npm install`)
3. Go into `serverless.yml` and change `nm` (or alternatively `tn`) to whatever you want.
4. Deploy using `serverless deploy`.

## Usage
After the deployment's finished, you can send http requests to each endpoint like so:

### Create
This will insert an item to your dynamodb table. This endpoint expects a json object with an `id`.

```
curl -X POST ENDPOINT_URL/create 
  -H 'Content-Type: application/json' \
  -d '{ "id": "1", "whatever":"whatever"}'
```

### Read
This will fetch an item from your table. This endpoint expects the `id` of the object to be pased in the URL.

```
curl -X GET ENDPOINT_URL/read/1
```

### Update
This will fetch update an item on your table. This endpoint expects an updated version of the object in JSON format in the body of the request.

```
curl -X PUT ENDPOINT_URL/update \
  -H 'Content-Type: application/json' \
  -d '{
    "id": "1",
    "whatever": "updated"
}'
```

### Delete
This will delete an item on your table. This endpoint expects a JSON object containing an `id` to be passed in JSON format in the body of the request.

```
curl -X DELETE ENDPOINT_URL/delete \
  -H 'Content-Type: application/json' \
  -d '{"id": "1"}'
```


## Clean up
You can use `serverless remove` to clean up all resources provisioned by this project as stated in the serverless framework [documentation](https://serverless.com/framework/docs/providers/aws/guide/quick-start/#cleanup). Alternatively you can delete the stack on cloudformation.