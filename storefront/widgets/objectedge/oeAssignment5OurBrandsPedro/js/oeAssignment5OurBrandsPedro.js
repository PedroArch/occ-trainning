/**
 * @fileoverview oeAssignment5OurBrandsPedro.
 *
 * @author pedro.franco@objectedge.com
 */
 define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccLogger', 'ccRestClient', 'ccConstants'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function (ko, ccLogger, ccRestClient, ccConstants) {

    "use strict";


    //CLASS
    function brand(title, image, url) {

      this.title = title || '';
      this.image = image;
      this.url = url;

      this.goToPage = function(url) {
        window.location.assign(
          url
        )
      }

      return this;
    }

    return {

      onLoad: function (widget) {

        ccLogger.info("[OE][onLoad] Loading oeAssignment4OurBrandsPedro");

        widget.brands = ko.observableArray();
        widget.brandsPicked = ko.observable(widget.brandsPicked())

        console.log("BRANDS PEGAS")
        
        var collectionIds = widget.brandsPicked().split(',')
        console.log(collectionIds)

        var data = {}
        data[ccConstants.CATEGORY_IDS] = collectionIds.join(',')


        ccRestClient.request(
          ccConstants.ENDPOINT_LIST_COLLECTIONS,
          data,

          // success callback
          function(response) {
            response.map(function(result) {
              widget.brands.push(new brand(result.displayName, '/file' + result.categoryImages[0].path, result.route))
            })
          },

          // error callback
          function(err) {
            ccLogger.error('Fetching not working', err)
          }
        )

      },
      beforeAppear: function (page) {

      }
    };
  }
);
