/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';
import $ from 'jquery';
import moment from 'moment'


/**
 * Models
 */
import Banner from '../models/banner';

export class oeAssignment7BannerHeroPedro extends BaseWidget {
  @exportToViewModel
  banners = ko.observableArray();

  /**
   * On load view model
   */
  constructor() {
    //Constructing the BaseWidget
    super();
    this.getBanners();
    this.startTimer(8)

    console.log('[ONLOAD] - Sample');
  }

  beforeAppear() {
    console.log('[BEFORE APPEAR] Sample');
  }

  getBanners() {
    for(let i = 1; i < 6; i++) {
      if (this.$data.hasOwnProperty('hero' + i + "Image") && this.$data['hero' + i + 'Image']() != "") {
        var bannerToAdd = new Banner (
          i,
          '/file/' + this.$data['hero' + i + 'Image'](),
          this.$data['textBox' + i](),
          this.$data['hasCTA' + i](),
          this.$data['CTAText' + i](),
          '/' + this.$data['CTALink' + i](),
          )
        this.banners.push(bannerToAdd);
      }
    }

    // console.log(this.banners())
  }

  startTimer(time) {
    var counter = 2
    setInterval(function(){
      $('#radio' + counter).prop('checked', true);
      counter++;
  
      if(counter > 5) {
        counter = 1;
      }
    }, time * 1000);
  }
}
