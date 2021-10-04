/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';

/**
 * Models
 */
import CategoryItem from '../models/categoryItem';

export class Sample extends BaseWidget {

  @exportToViewModel
  categoriesList = [
    new CategoryItem(
      'pedroDevices',
      '/file/general/devices.png',
      'DEVICES'
    ),
    new CategoryItem(
      'pedroAccessories',
      '/file/general/accessories.png',
      'ACCESSORIES'
    ),
    new CategoryItem(
      'pedroSoftwares',
      '/file/general/softwares.png',
      'SOFTWARES'
    ),
  ];

  /**
   * On load view model
   */
  constructor() {
    //Constructing the BaseWidget
    super();

    console.log('[ONLOAD] - Sample');
  }

  beforeAppear() {
    console.log('[BEFORE APPEAR] Sample');
  }
}
