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
import ProductList from '../models/productList';

export class Sample extends BaseWidget {

  @exportToViewModel
  productsList = [
    new ProductList(
      'redirected',
      '/file/collections/trailer.png',
      'TRAILER'
    ),
    new ProductList(
      'redirected',
      '/file/collections/lightTruck.png',
      'LIGHT TRUCK'
    ),
    new ProductList(
      'redirected',
      '/file/collections/mobile.png',
      'MOBILE HOME'
    ),
    new ProductList(
      'redirected',
      '/file/collections/lawnGarden.png',
      'LAWN & GARDEN'
    ),
    new ProductList(
      'redirected',
      '/file/collections/farmIndustrial.png',
      'FARM & INDUSTRIAL'
    ),
    new ProductList(
      'redirected',
      '/file/collections/golfCart.png',
      'GOLF CART'
    ),
    new ProductList(
      'redirected',
      '/file/collections/atv_utv.png',
      'ATV & UTV'
    ),
    new ProductList(
      'redirected',
      '/file/collections/wheels_accessories.png',
      'WHEELS & ACCESSORIES'
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
