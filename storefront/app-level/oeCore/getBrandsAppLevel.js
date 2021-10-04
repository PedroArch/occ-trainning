/**
 * @fileoverview getBrandsAppLevel.
 *
 * @author pedro.franco@objectedge.com
 */
define(
	//-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccRestClient', 'ccLogger', 'ccConstants'],

	//-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function(ko, ccRestClient, ccLogger, ccConstants) {

    "use strict";

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

			onLoad: function() {
				ccLogger.info("[OECore] Loading getBrandsAppLevel")
			},

			fetchBrands: function(widget) {
				ccLogger.info("[OECore] Fetching Brands")

				var brandsAppLevel = ko.observableArray();
        var collectionsIds = widget.brandsPicked().split(',')

        var data = {}
        data[ccConstants.CATEGORY_IDS] = collectionsIds.join(',')

        ccRestClient.request(
          ccConstants.ENDPOINT_LIST_COLLECTIONS,
          data,

          // success callback
          function(response) {
            response.map(function(result) {
              brandsAppLevel.push(new brand(result.displayName, '/file' + result.categoryImages[0].path, result.route))
              widget.brands(brandsAppLevel())
            })
          },

          // error callback
          function(err) {
            ccLogger.error('Fetching not working', err)
          }
        )

        
        
			}
  	};
  }
);