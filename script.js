// SUPERCLASS MEDIA
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {return this._title;}
    get isCheckedOut() {return this._isCheckedOut;}
    get ratings() {return this.ratings;}
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
    getAverageRating() {
      return this._ratings.reduce((a, b) => a+b, 0) / this._ratings.length;
    }
    toggleCheckOutStatus(isCheckedOut) {
      if (isCheckedOut === true) this._isCheckedOut = false;
      else this._isCheckedOut = true;
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  // SUBCLASS BOOK
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {return this._author;}
    get pages() {return this._pages;}
  }
  // CREATE A BOOK INSTANCE
  const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  // SUBCLASS MOVIE
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {return this._director;}
    get pages() {return this._runTime;}
  }
  // CREATE A MOVIE INSTANCE
  const speed = new Movie("Jan de Bont", "Speed", 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  // SUBCLASS CD
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {return this._artist;}
    get songs() {return this._songs;}
  }
