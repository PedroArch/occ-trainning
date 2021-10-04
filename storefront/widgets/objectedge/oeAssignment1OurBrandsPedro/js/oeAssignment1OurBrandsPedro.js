/**
 * @fileoverview oeWidget
 *
 * @author pedro.franco@objectedge.com
 */
define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout', 'ccRestClient', 'ccLogger'],
  //-------------------------------------------------------------------
  // WIDGET DEFINITION
  //-------------------------------------------------------------------
  
  function (ko, ccRestClient, ccLogger) {
    
    'use strict';

    var imgNames = [
      'logo-animalplanet',
      'logo-eagle',
      'logo-panda',
      'logo-starbucks',
    ];

    //Class
    function brand(title, image) {

      this.title = title || '';
      this.image = image;

      return this
    }

    function getImages (id, callback) {
      
      debugger

      ccRestClient.request('/ccstore/v1/images', 
        {}, callback.bind(this),
        function (err) {
          ccLogger.error('Fetch error', err);
        }
      );
    }

    return {
      
      onLoad: function (widget) {

      },

      beforeAppear: function (page) {

      },
    };
  }
)