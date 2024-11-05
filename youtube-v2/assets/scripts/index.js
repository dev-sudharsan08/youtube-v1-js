
const sugTopics = [
  'Football',
  'Cricket',
  'Volleyball',
  'Tennis',
  'Basketball',
  'Hockey',
  'Racing',
  'Web series',
  'Movies',
  'Sitcoms',
];

let topicNames = sugTopics.map((e) => {
  return (
    `<li><a href="./index.html">${e}</a></li>`
  )
}).join('');

let result =  `<ul>${topicNames}</ul>`

let topics = document.getElementById('suggestedTopics');
topics.innerHTML = result;

const videos = [
  {
    title: "Cricket Highlights 2022 | Ind VS Aus | Star Sports |",
    videoThumbnailUrl: "./assets/images/cricket-yt-thumbnail.jpg",
    altImage: "Cricket Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/cricket-channel-thumbnail.jpg",
    views: "1M views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Football Highlights 2022 | Ind VS China | Star Sports |",
    videoThumbnailUrl: "./assets/images/football-yt-thumbnail.png",
    altImage: "Football Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/football-channel-thumbnail.png",
    views: "55K views",
    publishedDate: "9 weeks ago",
  },
  {
    title: "Tennis Highlights 2022 | Ind VS Singapore | Star Sports |",
    videoThumbnailUrl: "./assets/images/tennis-yt-thumbail.jpg",
    altImage: "Tennis Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/tennis-channel-thumbail.jpg",
    views: "653K views",
    publishedDate: "9 months ago",
  },
  {
    title: "Basketball Highlights 2022 | Vegas VS NY | Star Sports |",
    videoThumbnailUrl: "./assets/images/basketball-yt-thumbnail.jpg",
    altImage: "Basketball Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/basketball-channel-thumbnail.jpg",
    views: "63L views",
    publishedDate: "3 years ago",
  },
  {
    title: "Chess Highlights 2022 | Ind VS Dubai | Star Sports |",
    videoThumbnailUrl:"./assets/images/chess-yt-thumbnail.jpg",
    altImage: "Chess Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/chess-channel-thumbnail.jpg",
    views: "5.9K views",
    publishedDate: "9 minutes ago",
  },
  {
    title: "Kabaddi Highlights 2022 | Ind VS China | Star Sports |",
    videoThumbnailUrl: "./assets/images/kabaddi-yt-thumbnail.jpg",
    altImage: "Kabaddi Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/kabaddi-channel-thumbnail.jpg",
    views: "112K views",
    publishedDate: "4 weeks ago",
  },
  {
    title: "Volleyball Highlights 2022 | Vegas VS NY | Star Sports |",
    videoThumbnailUrl: "./assets/images/volleyball-yt-thumbnail.jpg",
    altImage: "Volleyball Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/volleyball-channel-thumbnail.jpg",
    views: "555K views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Hockey Highlights 2022 | Ind VS Nepal | Star Sports |",
    videoThumbnailUrl: "./assets/images/hockey-yt-thumbnail.png",
    altImage: "Hockey Highlights",
    channelName: "Channel B",
    channelThumbnailUrl: "./assets/images/hockey-channel-thumbnail.png",
    views: "39K views",
    publishedDate: "2 weeks ago",
  },
];

let gridVideos = videos.map((events) => {
  return (
    `<div>
        <a href="./video-page.html" class="thumbnail">
          <img src="${events.videoThumbnailUrl}" alt="${events.title}">
        </a>
        <div class="video-name">
          <a href="#"><img src="${events.channelThumbnailUrl}" alt="${events.altImage}"></a>
          <a href="./video-page.html">
            <h2>${events.title}</h2>
          </a>
          <span class="channel-name"><a href="#">${events.channelName}</a></span>
          <p>
            <span>${events.views}</span>
            <span>${events.publishedDate}</span>
          </p>
        </div>
      </div>`
  )
}).join('');

let videoGrid = document.querySelector('.grid-wrapper');
videoGrid.innerHTML = gridVideos;








document.getElementById('headerMic')?.addEventListener('click', function () {
document.getElementById('headerMic').disabled = true;
});