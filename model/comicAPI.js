(function(exports) {

  function ComicAPI () {

    ComicAPI.prototype.getComic = function () {
      var request = require('request');
      request
        .get('http://google.com/img.png')
        .on('response', function (response) {
          console.log(response.statusCode); // 200
          console.log(response.headers['content-type']); // 'image/png'
        })
        .pipe(request.put('http://mysite.com/img.png'))
    };

    ComicAPI.prototype.renderComic = function () {
      comic = new Comic(comicData)

      return comic;
    };

  }

exports.ComicAPI = ComicAPI;

})(this);
