"use strict";

const TerratekTopupAPI = require("../lib");

var client = new TerratekTopupAPI({
    companyId: "yourcompanyId"
  , secret: "yoursecret"
});

client.balance((err,body,result)=>{
	console.log(result.toJSON());
});
