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
import moment from 'moment';

/**
 * Models
 */
import Banner from '../models/banner';

export class OeHeroBannerKeith extends BaseWidget {

  @exportToViewModel
  config = ko.observable();

  @exportToViewModel
  banners = ko.observableArray();

  @exportToViewModel
  isMobile = ko.observable();

  /**
   * On load view model
   */
  constructor() {
    //Constructing the BaseWidget
    super();

    this.isMobile(this.$data.isPhone() || this.$data.isTablet());

    this.config(this.getConfig());
    this.getBanners();

    $("#myCarousel").carousel()
  }

  beforeAppear() {
    console.log('[BEFORE APPEAR] Sample');
  }

  getBanners() {

    for (let i = 0; i < 6; i++) {
      if (this.$data.hasOwnProperty('banner' + i + '_imageUrl') && this.$data['banner' + i + '_imageUrl']() != "") {

        var bannerToAdd = new Banner(
          this.isMobile() ?  '/file/' + this.$data['banner' + i + '_imageUrlMobile']() : '/file/' + this.$data['banner' + i + '_imageUrl'](),
          this.$data['banner' + i + '_Link'](),
          this.getDate(this.$data['banner' + i + '_startDate']()),
          this.getDate(this.$data['banner' + i + '_endDate']()),
          this.$data['banner' + i + '_text'](),
        );

        if ((!bannerToAdd.startDate && !bannerToAdd.endDate)
          || moment(new Date()).isBetween(bannerToAdd.startDate, bannerToAdd.endDate)
          || (!bannerToAdd.startDate && moment(new Date()).isSameOrBefore(bannerToAdd.endDate))
          || (!bannerToAdd.endDate && moment(new Date()).isSameOrAfter(bannerToAdd.startDate))
        ) {
          this.banners.push(bannerToAdd);
        }
      }
    }
  }

  getConfig() {

    var config = {
      timeSwitchImage: parseInt(this.$data['timeSwitchImage']()) * 1000,
      boolLoopCarousel: this.$data.hasOwnProperty('boolLoopCarousel') ? this.$data['boolLoopCarousel']() : false,
      boolAutoplayCarousel: this.$data.hasOwnProperty('boolAutoplayCarousel') ? this.$data['boolAutoplayCarousel']() : false
    };

    return config
  }

  getDate(date) {
    if (date) {
      var splitDate = date.split('/')

      return new Date(splitDate[1] + '/' + splitDate[0] + '/' + splitDate[2]);
    }
    else
      return date;
  }
}

