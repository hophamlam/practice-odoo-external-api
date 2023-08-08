// connect to odoo using xmlrpc

var odoo = require("odoo-xmlrpc");
var odoo = new odoo({
  url: "http://tino-1.hophamlam.com:10016",
  port: 10016,
  db: "staging",
  username: "hophamlam92@yahoo.com",
  password: "58680d37abecf090fe4ccf374db1a6b0aab9b7d9",
});

// get price list of 3 products
odoo.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Connected to Odoo server.");
  var inParams = [];
  inParams.push([1, 2, 3]); //ids
  inParams.push(["name", "list_price"]); //fields
  var params = [];
  params.push(inParams);
  odoo.execute_kw("product.product", "read", params, function (err, value) {
    if (err) {
      return console.log(err);
    }
    console.log("Result: ", value);
  });
});
