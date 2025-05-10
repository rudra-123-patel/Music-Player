var arr = [
  {
    songName: "Jale 2",
    url: "./songs/youtubemusic_songs_Jale 2.mp3",
    img: "./images/jale.jpg",
  },
  {
    songName: "Pehle Bhi Main",
    url: "./songs/youtubemusic_songs_Pehle Bhi Main.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Ram Siya Ram",
    url: "./songs/youtubemusic_songs_Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
  {
    songName: "Arjan Valley",
    url: "./songs/youtubemusic_songs_Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (elem, index) {
    clutter += `
                <div class="song-card" id=${index}>
                    <div class="part1">
                        <img src=${elem.img} alt="" srcset="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`;
  });

  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;

  mainFunction();
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  flag = 1;
  audio.play();
});

var flag = 0;

play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function (dets) {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", function (dets) {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
  } else {
    backward.style.opacity = 0.4;
  }
});
