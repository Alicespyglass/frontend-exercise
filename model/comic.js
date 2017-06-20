(function (exports) {
  function Comic(comicData) {
    this.title = comicData.title;
    this.image = '';
  }

  Comic.prototype.generateImage = function () {
    div = document.createElement('div');
    try {
      imageurl = div.getElementsByTagName('img')[0].src;
    }
    catch(error) {
      imageurl = 'oops something went wrong';
    }
    this.image = imageurl;
    div.innerHTML = this.image;
  };
})
