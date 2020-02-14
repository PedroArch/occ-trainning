import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class Banner {
    constructor(imageUrl,
        mobileImageUrl,
        bannerLink,
        startDate,
        endDate,
        bannerText) {
        this.imageUrl = imageUrl || '';
        this.mobileImageUrl = mobileImageUrl || '';
        this.bannerLink = bannerLink || '';
        this.startDate = startDate;
        this.endDate = endDate;
        this.bannerText = bannerText || '';
    }

    goToPage(url) {

        if (url != '') {
            window.open(
                url,
                '_blank'
            );
        }
    }
};
