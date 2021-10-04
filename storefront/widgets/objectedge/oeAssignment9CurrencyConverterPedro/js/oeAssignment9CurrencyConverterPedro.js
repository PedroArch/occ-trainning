/**
 * @fileoverview oeAssignment10AppLevelPedro.
 *
 * @author pedro.franco@objectedge.com
 */
 define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccLogger', 'ccRestClient', 'ccConstants', 'jquery'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function (ko, ccLogger, ccRestClient, ccConstants, $) {

    "use strict";

    // "/ccstorex/custom/curencyConverter"

    // var originalCurrency = 0;
    // var newCurrency = 0;
    // var amount = 0;

   

    return {

      getNewCurrency: function (widget) {
        var amountCurrency = $('#number-input').val();
        var originalCurrency = $('#current-select').val();
        var newstCurrency = $('#new-select').val();
        // widget.result = ko.observable()
  
        ccRestClient.request(
          "/ccstorex/custom/curencyConverter",
          {
            original: originalCurrency,
            new: newstCurrency
          },
  
          // success callback
          function(response) {
            ccLogger.info("Sucesso!!!")
            var converted = JSON.stringify(response[originalCurrency+ '_' + newstCurrency] * amountCurrency)
            widget.result(converted)
            console.log(widget.result())
          },
  
          // error callback
          function(err) {
            ccLogger.error('App not responding', err)
          }
        )

      },

      onLoad: function (widget) {

        widget.result = ko.observable('10')
        ccLogger.info("[OE][onLoad] Loading oeAssignment9CurrencyConverter");  

      },
      beforeAppear: function (page) {
      }
    };
  }
);
