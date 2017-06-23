(function(exports) {
  function ComicAPI () {

    const MARVEL = 'https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288';
    const COMICRAW = '';
    const COMICLIST = [];

    ComicAPI.prototype.httpGet = function () {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', MARVEL, false); // false for synchronous request
      xmlHttp.send(null);
      return xmlHttp.responseText;
    };

    ComicAPI.prototype.comicData = function () {
      let data = this.httpGet();
      const dataJson = JSON.parse(data);
      this.COMICRAW = dataJson;
    };

    ComicAPI.prototype.filterData = function () {
      let data = this.COMICRAW;
      debugger;
      for (let i = 0; i < 10; i++) {
        COMICLIST.push([data.data.results[i].title, data.data.results[i].thumbnail.path]);
        debugger;
      }


    };
  }

exports.ComicAPI = ComicAPI;

})(this);
