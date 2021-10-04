import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class ProductsList {
  constructor(url, img, title) {
    this.url = url;
    this.img = img;
    this.title = title;
  }

  goToPage(url) {
    window.open(
      url,
      '_blank'
    );
  }
};
