export default class CategoryItem {
  constructor(url, img, title) {
    this.url = url;
    this.img = img;
    this.title = title;
  }

  goToPage(url) {
    window.open(
      url
    )
  }
};
