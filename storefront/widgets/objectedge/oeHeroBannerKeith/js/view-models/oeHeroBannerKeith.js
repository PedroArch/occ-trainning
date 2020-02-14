/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import $ from 'jquery';
import ko from 'knockout';

/**
 * Models
 */
import Banner from '../models/banner';

export class OeHeroBannerKeith extends BaseWidget {

  @exportToViewModel
  config = ko.observable();

  @exportToViewModel
  banners = ko.observableArray(); 

  /**
   * On load view model
   */
  constructor() {
    //Constructing the BaseWidget
    super();

    this.config = this.getConfig();
    this.getBanners();

    $("#myCarousel").carousel()
  }

  beforeAppear() {
    console.log('[BEFORE APPEAR] Sample');
  }

  getBanners() {

    for (let i = 0; i < 6; i++) {
      if (this.$data.hasOwnProperty('banner' + i + '_imageUrl') && this.$data['banner' + i + '_imageUrl']() != "") {
        this.banners.push(new Banner(
          '/file/' + this.$data['banner' + i + '_imageUrl'](),
          '/file/' + this.$data['banner' + i + '_imageUrlMobile'](),
          this.$data['banner' + i + '_Link'](),
          this.$data['banner' + i + '_startDate'](),
          this.$data['banner' + i + '_endDate'](),
          this.$data['banner' + i + '_text'](),
        ));
      }
    }
  }

  getConfig() {
    var config = {
      timeSwitchImage: this.$data.hasOwnProperty('timeSwitchImage') && this.$data['timeSwitchImage']() && !isNaN(this.$data['timeSwitchImage']()) ? parseInt(this.$data['timeSwitchImage']()) * 1000 : 4000,
      boolLoopCarousel: this.$data.hasOwnProperty('boolLoopCarousel') ? this.$data['boolLoopCarousel']() : false,
      boolAutoplayCarousel: this.$data.hasOwnProperty('boolAutoplayCarousel') ? this.$data['boolAutoplayCarousel']() : false
    };

    return config
  } 
}

