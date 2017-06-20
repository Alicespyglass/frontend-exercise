(function(exports) {

  function ComicAPI () {

    ComicAPI.prototype.getComic = function () {
      // make API call
    };

    ComicAPI.prototype.renderComic = function () {
      comic = new Comic(comicData)

      return comic;
    };

  }

exports.ComicAPI = ComicAPI;

})(this);
