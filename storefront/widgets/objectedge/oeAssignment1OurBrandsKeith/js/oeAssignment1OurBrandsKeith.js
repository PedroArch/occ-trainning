/**
 * @fileoverview oeAssignment1OurBrandsKeith.
 *
 * @author keith.sarate@objectedge.com
 */
define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccLogger', 'ccRestClient'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function (ko, ccLogger, ccRestClient) {

    "use strict";

    const collectionIds = [
      'keith_centenial',
      'keith_gbc',
      'keith_greenball',
      'keith_kanat'
    ]

    //CLASS
    function brand(title, image) {

      this.title = title || '';
      this.image = image;

      return this;
    }

    function getCollection(id, callback) {

      ccRestClient.request('/ccstore/v1/collections/' + id,
        {},
        callback.bind(this),
        function (error) {
          //callback(null, error);
          ccLogger.error('Error trying to fretch product information:', error);
        }
      );
    }

    return {

      /**
       * This function will run just on time when the widget was loaded the first time
       */

      onLoad: function (widget) {

        ccLogger.info("[OE][onLoad] Loading oeAssignment1OurBrandsKeith");

        widget.brands = ko.observableArray();

        collectionIds.map(function (id) {

          getCollection(id, function(collection){

            widget.brands.push(new brand(collection.displayName,
                                         collection.categoryImages[0].path));
          });
        });

      },

      /**
       * This function will run whe the widget was loaded and every page change
       */
      beforeAppear: function (page) {

      }
    };
  }
);
