let songs = [];
let albums = [];

const sectionOne = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=ac/dc",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      for (let i = 0; i < 4; i++) {
        cardOne.innerHTML += `
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
            <img src="${songsList[i].album.cover_medium}" class="card-img-top" alt="${songsList[i].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title" id="title">${songsList[i].title}</h5>
                <p class="card-text">Album ${songsList[i].album.title}</p>
            </div>     
        </div>
        `;
        songs.push(songsList[i].title);
        albums.push(songsList[i].album.title);
      }
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionOne();

const sectionTwo = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=haveyoueverseentherain",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteSong = await res.json();
      let song = favouriteSong.data;
      let cardTwo = document.getElementById("card");
      cardTwo.innerHTML += `
        <div class="col-md-3">
            <img src="${song[0].album.cover_big}" class="img-fluid rounded-start" alt="${song[0].title}">
        </div>
        <div class="col-md-8">
            <div class="card-body ">
            <h5 class="card-title">${song[0].title}</h5>
            <p class="card-text pb-0"><small class="text-muted">${song[0].artist.name}</small></p>
            <p class="card-text pt-0"><small class="text-muted">Album ${song[0].album.title}</small></p>
            <p class="card-text">Written by John Fogerty and performed by Creedence Clearwater Revival. The song is about the
                uncertainty and change in life, and how it can often be hard to understand or predict. The lyrics ask the question
                "have you ever seen the rain, coming down on a sunny day?" which is a metaphor for unexpected changes in life.
            </p>
        </div>
        </div>
          `;
      songs.push(song[0].title);
      albums.push(song[0].album.title);
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionTwo();

const sectionThree1 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=zucchero",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let fristLabel = document.getElementById("first-label");
      fristLabel.innerHTML += `
      <img src="${album[10].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
      <div class="carousel-caption d-none d-md-block bg-secondary  bg-opacity-50">
        <h5>${album[10].album.title}</h5>
      </div>
            `;
      albums.push(album[10].album.title);
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionThree1();

const sectionThree2 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=thedarksideofthemoon",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let secondLabel = document.getElementById("second-label");
      secondLabel.innerHTML += `
      <img src="${album[0].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
      <div class="carousel-caption d-none d-md-block bg-secondary  bg-opacity-50">
          <h5>${album[0].album.title}</h5>
      </div>
              `;
      albums.push(album[0].album.title);
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionThree2();

const sectionThree3 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=abbeyroad",
      { method: "GET" }
    );
    if (res.ok) {
      let favouriteAlbum = await res.json();
      let album = favouriteAlbum.data;
      let thirdLabel = document.getElementById("third-label");
      thirdLabel.innerHTML += `
      <img src="${album[0].album.cover_big}" class="d-block w-100" alt="${album[10].album.title}">
      <div class="carousel-caption d-none d-md-block bg-secondary bg-opacity-50">
          <h5>${album[0].album.title}</h5>
      </div>
                `;
      albums.push(album[0].album.title);
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
sectionThree3();

songs.sort((a, b) => a.rank - b.rank);
console.log(typeof songs);
