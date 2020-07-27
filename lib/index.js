"use strict";

const request = require("request")
    , querystring = require("querystring")
    ;

module.exports = class TerratekTopupAPI {
    /**
     * TerratekTopupAPI
     * Creates the instance of the `TerratekTopupAPI` class.
     *
     * @name TerratekTopupAPI
     * @function
     * @param {Object} options An object containing:
     *
     *  - `companyId` (String): TerratekTopup API companyId credentials (mandatory).
     *  - `secret` (String): TerratekTopup API secret credentials (mandatory).
     *  - `host` (String): TerratekTopup API host (Optional default: `https://www.terratekph.ph/topup/api`).
     *  - `timeout` (Integer): integer containing the number of milliseconds to wait for a server to send response headers (and start the response body) before aborting the request.  (Optional default: 60000).
     */
    constructor (options) {

        this.companyId = options.companyId;
        this.secret = options.secret;
        this.host = options.host || "https://www.terratekph.ph/topup/api";
        this.timeout = options.timeout || 60*1000;
        this.request = request;
    }

    /**
     * balance
     * Send balance message request to TerratekTopupAPI
     *
     * @name balance
     * @function
     * @param {Function} cb The callback function.
     */
    balance (cb) {
        return this._request({
            url: "Company/Balance",
        }, cb);
    }

    /**
     * settings
     * Send settings message request to TerratekTopupAPI
     *
     * @name settings
     * @function
     * @param {Function} cb The callback function.
     */
    settings (cb) {
        return this._request({
            url: "Company/Settings",
        }, cb);
    }

    /**
     * update
     * Send update message request to TerratekTopupAPI
     *
     * @name update
     * @function
     * @param {Object} data. To be passed by the client. (mandatory)
     * @param {Function} cb The callback function.
     */
    update (data, cb) {
        return this._request({
            url: "Company/Update",
            method: "post",
            data: data
        }, cb);
    }

    /**
     * skus
     * Send skus message request to TerratekTopupAPI
     *
     * @name skus
     * @function
     * @param {Function} cb The callback function.
     */
    skus (cb) {
        return this._request({
            url: "Topup/SKUs",
        }, cb);
    }

    /**
     * topUp
     * Send topUp message request to TerratekTopupAPI
     *
     * @name topUp
     * @function
     * @param {Object} data. To be passed by the client. (mandatory)
     * @param {Function} cb The callback function.
     */
    topUp (data, cb) {
        return this._request({
            url: "Topup/TopUp",
            method: "post",
            data: data
        }, cb);
    }

    /**
     * getByTransactionId
     * Send getByTransactionId message request to TerratekTopupAPI
     *
     * @name getByTransactionId
     * @function
     * @param {Object} tranId. To be passed by the client. (mandatory)
     * @param {Function} cb The callback function.
     */
    getByTransactionId (tranId, cb) {
        return this._request({
            url: "Topup/getbytransactionid?TransactionId="+tranId,
            removeTrailingSlash: true
        }, cb);
    }

    /**
     * getByReferenceNumber
     * Send getByReferenceNumber message request to TerratekTopupAPI
     *
     * @name getByReferenceNumber
     * @function
     * @param {Object} refNo. To be passed by the client. (mandatory)
     * @param {Function} cb The callback function.
     */
    getByReferenceNumber (refNo, cb) {
        return this._request({
            url: "Topup/GetByReferenceNumber?ReferenceNumber="+refNo,
            removeTrailingSlash: true
        }, cb);
    }    
    /**
     * _request
     * Low level function for making requests to the API endpoints.
     *
     * @name _request
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - `url` (String): The api endpoint.
     *  - `method` (String): The request method (default: `get`).
     *  - `query` (Object): The query object.
     *  - `data` (Object): The POST data object.
     *  - `version` (String): API Version. If not specified your pinned verison is used.
     *
     * @param {Function} cb The callback function.
     */
    _request (options, cb) {
        let _url = options.url
          , method = options.method || "get"
          , query = options.query || {}
          , data = options.data
          , timeout = this.timeout
          , qs = querystring.stringify(query)
          , removeTrailingSlash = options.removeTrailingSlash || false
          , url = this.host + "/" + _url + (removeTrailingSlash ? "" : "/") + (qs ? "?" + qs : "")
          ;
          console.log(options);
          
        return request({
            url: url
          , method: method
          , timeout: timeout
          , headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Basic ' + (new Buffer(this.companyId+':'+this.secret).toString('base64')) 
            }
          , json: data ? data : true
        }, (err, res) => {
            if (res && res.body ) 
                cb(err, res.body, res); 
            else 
                cb(err, null, res)
        })
    }
};