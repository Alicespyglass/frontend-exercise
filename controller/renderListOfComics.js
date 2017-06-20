(function(exports) {

  function renderListOfComics() {
    const listOfComics = comicList.listOfComics;
    let numberOfComics = listOfComics.length;

    addComicListDiv();

    listofComics.forEach(function (comic) {
      setUpComicDiv(comic)
    })

  }

})(this);
