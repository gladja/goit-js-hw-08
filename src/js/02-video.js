import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_LOCAL_TIME = "videoplayer-current-time";
const time = localStorage.getItem(STORAGE_LOCAL_TIME)

player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {});

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  // console.log(Math.round(data.seconds));
  localStorage.setItem(STORAGE_LOCAL_TIME, Math.round(data.seconds))
}





// player.on('timeupdate', function(data) {
//   console.log(data.seconds);
//   localStorage.setItem(STORAGE_LOCAL_TIME, data.seconds)
//
// });