const sectionOne1 = async function () {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=ac/dc",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      cardOne.innerHTML += `
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
            <img src="${songsList[0].album.cover_medium}" class="card-img-top" alt="${songsList[0].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title" id="title">${songsList[0].title}</h5>
                <p class="card-text">Album ${songsList[0].album.title}</p>
            </div>     
        </div>
        `;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=ledzeppelin",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      cardOne.innerHTML += `
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
            <img src="${songsList[3].album.cover_medium}" class="card-img-top" alt="${songsList[3].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title" id="title">${songsList[3].title}</h5>
                <p class="card-text">Album ${songsList[3].album.title}</p>
            </div>     
        </div>
        `;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=rehab",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      cardOne.innerHTML += `
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
            <img src="${songsList[0].album.cover_medium}" class="card-img-top" alt="${songsList[0].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title" id="title">${songsList[0].title}</h5>
                <p class="card-text">Album ${songsList[0].album.title}</p>
            </div>     
        </div>
        `;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=sultansofswing",
      { method: "GET" }
    );
    if (res.ok) {
      let song = await res.json();
      let songsList = song.data;
      let cardOne = document.getElementById("card-one");
      cardOne.innerHTML += `
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;">
            <img src="${songsList[0].album.cover_medium}" class="card-img-top" alt="${songsList[0].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title" id="title">${songsList[0].title}</h5>
                <p class="card-text">Album ${songsList[0].album.title}</p>
            </div>     
        </div>
        `;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

sectionOne1();

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
      <div class="carousel-caption d-none d-md-block">
        <h5>${album[10].album.title}</h5>
      </div>
            `;
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
      <div class="carousel-caption d-none d-md-block">
          <h5>${album[0].album.title}</h5>
      </div>
              `;
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
      <div class="carousel-caption d-none d-md-block">
          <h5>${album[0].album.title}</h5>
      </div>
                `;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
sectionThree3();
