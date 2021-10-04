/**
 * @fileoverview oeAssignment10AppLevelPedro.
 *
 * @author pedro.franco@objectedge.com
 */
 define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccLogger', 'ccRestClient', 'ccConstants', 'ccResourceLoader!global/oeCore'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function (ko, ccLogger, ccRestClient, ccConstants, oeCore) {

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

        ccLogger.info("[OE][onLoad] Loading oeAssignment10AppLevelPedro");

        widget.brands = ko.observableArray();
        widget.brandsPicked = ko.observable(widget.brandsPicked())

        oeCore.getBrandsAppLevel.fetchBrands(widget);
        

        console.log(widget.brands())
      },
      beforeAppear: function (page) {
      }
    };
  }
);
