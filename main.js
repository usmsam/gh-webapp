let tabs = document.querySelectorAll(".button"),
  panels = document.querySelectorAll(".panel");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    panels.forEach((panel) => panel.classList.remove("active"));
    panels[index].classList.add("active");
  });
});

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
const data = [
  "5uZlfK5L0bk",
  "RM6Iuz8IrDk",
  "uKySmivbcI0",
  "wEa3JBzzKVA",
  "kB9IGpmvUQM",
  "6o2xxhgaGiI",
  "4B8AbL3jGlU",
  "p84uGg-2WrU",
  "DMi1o9KPqxc",
  "ZUFv5BPzwp8",
];
let videosBox = document.querySelector(".panel-videos");

function onYouTubePlayerAPIReady() {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", el);
    div.setAttribute("class", "videoElement");
    videosBox.appendChild(div);

    new YT.Player(el, {
      height: "360",
      width: "640",
      videoId: el,
    });
  });
}
