'use strict';

const AWS = require("aws-sdk");

const tn = process.env.TABLE_NAME

module.exports.create = async (event, context, callback) => {
  const data = (event.body === undefined ? {id: "1", whatever:"No-data"} : JSON.parse(event.body));

  const params = {
      TableName: tn,
      Item: {
          id: data.id,
          whatever: data.whatever
      }
  }

  try {
      const dynamoDb = new AWS.DynamoDB.DocumentClient();
      await dynamoDb["put"](params).promise();

      console.log("success")

      const response = {
        statusCode: 200,
        body: JSON.stringify({
          data: data
        }),
      };

      callback(null, response);

    } catch (e) {
      console.log(e)
      callback(null);
    }
}