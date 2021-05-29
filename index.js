var paystack = require("paystack-api")(
  "sk_test_7fd46ffa992c6ac27768f15f2be5f2d0dcada565"
);

// paystack.{resource}.{method}
paystack.customer
  .list()
  .then(function (body) {
    console.log(body);
  })
  .catch(function (error) {
    console.log(error);
  });

/* paystack.transactions.list({ perPage: 20 }).then(function (error, body) {
  console.log(error);
  console.log(body);
}); */
