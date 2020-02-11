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
import MenuItem from '../models/menuItem';

export class Sample extends BaseWidget {

  @exportToViewModel
  menuList = [
      new MenuItem(
        'layoutKeithGo',
        '/file/general/trailer-tires.jpg',
        'trailer'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/light-truck-tires.jpg',
        'light truck'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/mobile-home-tires.jpg',
        'mobile home'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/lawn-garden-tires.jpg',
        'lawn & garden'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/farm-industrial-tires.jpg',
        'farm & industrial'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/golf-cart-tires.jpg',
        'golf cart'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/atv-utv-tires.jpg',
        'atv & utv'
      ),
      new MenuItem(
        'layoutKeithGo',
        '/file/general/wheels-accessories.jpg',
        'wheels & accessories'
      )
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
