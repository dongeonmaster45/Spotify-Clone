let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let mybar = document.getElementById("mybar");
let songItems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "kali kali zulfon",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "ae wadan shikan",
    filePath: "songs/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "aesa banna sawarna",
    filePath: "songs/3.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "husn walo se allah bachaye",
    filePath: "songs/4.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "kehna galat galat",
    filePath: "songs/5.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "sochta hu ke wo ",
    filePath: "songs/6.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "tumhe dillagi",
    filePath: "songs/7.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "unke dar pe ",
    filePath: "songs/8.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "unki taraf se ",
    filePath: "songs/9.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "ye jo halka halka",
    filePath: "songs/10.mp3",
    coverPath: "cover/1.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  mybar.value = progress;
});

mybar.addEventListener("change", () => {
  audioElement.currentTime = (mybar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 10) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 10;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
