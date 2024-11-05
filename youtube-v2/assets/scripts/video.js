const asideVideos = [
  {
    title: "Football Highlights of 2022 | France VS Spain",
    videoThumbnailUrl: "./assets/images/football-yt-thumbnail.png",
    channelName: "Channel A",
    views: "1M views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Tennis Highlights of 2022 | Ind VS Aus",
    videoThumbnailUrl: "./assets/images/tennis-yt-thumbail.jpg",
    channelName: "Channel B",
    views: "26M views",
    publishedDate: "8 months ago",
  },
  {
    title: "Volleyball Highlights of 2022 | China VS Singapore",
    videoThumbnailUrl: "./assets/images/volleyball-yt-thumbnail.jpg",
    channelName: "Channel C",
    views: "7k views",
    publishedDate: "6 hours ago",
  },
  {
    title: "Hockey Highlights of 2022 | Ind VS Korea",
    videoThumbnailUrl: "./assets/images/hockey-yt-thumbnail.png",
    channelName: "Channel D",
    views: "896K views",
    publishedDate: "1 month ago",
  },
  {
    title: "Cricket Highlights of 2022 | NZ VS Aus",
    videoThumbnailUrl: "./assets/images/cricket-yt-thumbnail.jpg",
    channelName: "Channel E",
    views: "190K views",
    publishedDate: "60 minutes ago",
  },
  {
    title: "Best video of 2022 | Nat-Geo Wild",
    videoThumbnailUrl: "./assets/images/nat-geo-thumbnail.png",
    channelName: "Channel F",
    views: "1M views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Chess Highlights of 2022 | Ind VS Aus",
    videoThumbnailUrl: "./assets/images/chess-yt-thumbnail.jpg",
    channelName: "Channel G",
    views: "1M views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Football Highlights of 2022 | France VS Spain",
    videoThumbnailUrl: "./assets/images/football-yt-thumbnail.png",
    channelName: "Channel H",
    views: "10M views",
    publishedDate: "2 weeks ago",
  },
  {
    title: "Cricket Highlights of 2022 | NZ VS Aus",
    videoThumbnailUrl: "./assets/images/cricket-yt-thumbnail.jpg",
    channelName: "Channel I",
    views: "190K views",
    publishedDate: "60 minutes ago",
  },
  {
    title: "Best video of 2022 | Nat-Geo Wild",
    videoThumbnailUrl:"./assets/images/nat-geo-thumbnail.png",
    channelName: "Channel F",
    views: "1M views",
    publishedDate: "2 weeks ago",
  }
];


let asideVid = asideVideos.map((event) => {
  return (
     `<div class="side-video">
     <div><a href="#">
         <img src="${event.videoThumbnailUrl}" alt="${event.title}">
       </a></div>
     <div class="aside-video-name"><a href="#">
         <h3>${event.title}</h3>
         <p>${event.channelName}</p>
         <p>
           <span>${event.views}</span>
           <span>${event.publishedDate}</span>
         </p>
       </a>
     </div>
   </div>`
  )
}).join('');

let sideVideo = document.querySelector('.video-page');
sideVideo.innerHTML = asideVid;


