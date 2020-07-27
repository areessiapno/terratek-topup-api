## Documentation

You can see below the API reference of this module.

### `TerratekTopupAPI(options)`
Creates the instance of the `TerratekTopupAPI` class.

#### Params 

- **Object** `options`: An object containing:
 - `companyId` (String): TerratekTopup API companyId credentials (mandatory).
 - `secret` (String): TerratekTopup API secret credentials (mandatory).
 - `host` (String): TerratekTopup API host (Optional default: `https://www.terratekph.ph/topup/api`).
 - `timeout` (Integer): integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.  (Optional default: 60000).
 
 ### `balance(cb)`
 Get remaining balance of the company.
 
 #### Params
 
 - **Function** `cb`: The callback function.
 
 ### `settings(cb)`
 Get Callback URL for the Topup status changes and Secret key used for Authorization parameter when calling the CallbackEventURL.
 
 #### Params
 
 - **Function** `cb`: The callback function.
 
 ### `update(data, cb)`
 Update Callback URL for the Topup status changes and Secret key used for Authorization parameter when calling the CallbackEventURL.
 
 #### Params
 
 - **Object** `data`: The Update object as documented [here](https://www.terratekph.ph/topup/api/swagger/ui/index#!/Company/Company_Update).
 - **Function** `cb`: The callback function.
 
 ### `skus(cb)`
 Get a list of load product.
 
 #### Params
 
 - **Function** `cb`: The callback function.
 
 ### `topUp(data, cb)`
 Create topUp request.
 
 #### Params
 
 - **Object** `data`: The topUp object as documented [here](https://www.terratekph.ph/topup/api/swagger/ui/index#!/Topup/Topup_TopUp).
 - **Function** `cb`: The callback function.
 
 ### `getByTransactionId(params, cb)`
 Get topup transaction by TransactionId.
 
 #### Params
 
 - **Object** `params`: The query params documented [here](https://www.terratekph.ph/topup/api/swagger/ui/index#!/Topup/Topup_GetByTransactionId).
 - **Function** `cb`: The callback function.
 
 ### `getByReferenceNumber(params, cb)`
 Get topup transaction by ReferenceNumber.
 
 #### Params
 
 - **Object** `data`: The query params documented [here](https://www.terratekph.ph/topup/api/swagger/ui/index#!/Topup/Topup_GetByReferenceNumber).
 - **Function** `cb`: The callback function.
