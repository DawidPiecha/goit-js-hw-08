import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';
const throttleDelay = 1000;

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem(localStorageKey, time.seconds);
  }, throttleDelay)
);

player.setCurrentTime(localStorage.getItem(localStorageKey));
