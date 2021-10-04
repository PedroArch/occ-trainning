import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class Banner {
  constructor(
    id,
    imageUrl,
    bannerText,
    hasCTA,
    CTAText,
    CTALink,
  ) {
    this.id = id  || 0;
    this.imageUrl = imageUrl || '';
    this.bannerText = bannerText || ''
    this.hasCTA = hasCTA || false;
    this.CTAText = CTAText;
    this.CTALink = CTALink || '';
  }

  gotToPage(url) {

    if (url != '') {
      window.open(
        url,
        '_blank'
      );
    }
  }
  
};
