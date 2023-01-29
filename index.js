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
        <div class="card col col-2 col-md-2 m-2 p-0" style="width: 15rem;" id="first-cards">
            <img src="${songsList[i].album.cover_medium}" class="card-img-top" alt="${songsList[i].title} pic" style="height: 65%">
            <div class="card-body d-flex flex-column justify-content-around">
                <h5 class="card-title song" id="title" songRank="${songsList[i].rank}">${songsList[i].title}</h5>
                <p class="card-text" id="album">Album ${songsList[i].album.title}</p>
            </div> 
            <div class="card-footer d-flex flex-column justify-content-around">
                <audio controls id="audio">
                  <source  src="${songsList[i].preview}"
                     type="audio/mpeg">
                </audio>
            </div>
        </div>
        `;
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
            <h5 class="card-title song" songRank="${song[0].rank}">${song[0].title}</h5>
            <p class="card-text pb-0"><small class="text-muted text-light">${song[0].artist.name}</small></p>
            <p class="card-text pt-0" id="album"><small class="text-muted text-light">Album ${song[0].album.title}</small></p>
            <p class="card-text">Written by John Fogerty and performed by Creedence Clearwater Revival. The song is about the
                uncertainty and change in life, and how it can often be hard to understand or predict. The lyrics ask the question
                "have you ever seen the rain, coming down on a sunny day?" which is a metaphor for unexpected changes in life.
            </p>
        </div>
        <div class="card-footer d-flex flex-column justify-content-around">
            <audio controls id="audio">
              <source  src="${song[0].preview}"
                type="audio/mpeg">
            </audio>
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
      <div class="carousel-caption d-none d-md-block bg-danger  bg-opacity-25">
        <h5>Album ${album[10].album.title}</h5>
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
      <div class="carousel-caption d-none d-md-block bg-danger  bg-opacity-25">
          <h5>Album ${album[0].album.title}</h5>
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
      <div class="carousel-caption d-none d-md-block bg-danger bg-opacity-25">
          <h5>Album ${album[0].album.title}</h5>
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

const songs = () => {
  let songs = document.querySelectorAll(".song");
  let songTitles = [];
  songs.forEach((title) => {
    songTitles.push({
      title: title.innerText,
      rank: Number(title.getAttribute("songRank"))
    });
  });
  return songTitles;
};

const songsRank = () => {
  let songsList = songs();
  let sorted = songsList.sort((a, b) => {
    return a.rank - b.rank;
  });
  let alert = document.querySelector(".alert ul.rank-songs");
  alert.innerHTML = "";
  sorted.forEach((song) => {
    alert.innerHTML += `<li class='list-group-item'>
    ${song.rank} - ${song.title}
      </li>`;
  });
  alert.parentElement.classList.toggle("d-none");
};

const titles = () => {
  let h5 = document.querySelectorAll("h5");
  let id = document.querySelectorAll("#album");
  let allTitles = [];
  h5.forEach((title) => {
    allTitles.push(title.innerText);
  });
  id.forEach((title) => {
    allTitles.push(title.innerText);
  });
  let alphabeticalTitles = allTitles.sort();
  let modal = document.querySelector(".modal-body");
  modal.innerHTML = "";
  alphabeticalTitles.forEach((tuttiTitoli) => {
    modal.innerHTML += `
      <p class='list-group-item'>
        ${tuttiTitoli}
      </p>`;
  });
};
