(function(exports) {
  function ComicAPI () {

    const MARVEL = 'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288'

    ComicAPI.prototype.httpGet = function () {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', MARVEL, false); // false for synchronous request
      xmlHttp.send(null);
      return xmlHttp.responseText;
    };

    ComicAPI.prototype.comicData = function () {
      let data = this.httpGet();
      const dataJson = JSON.parse(data);
      return dataJson;
    };
  }

exports.ComicAPI = ComicAPI;

})(this);
