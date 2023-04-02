import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


   const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

     player.on('timeupdate', throttle(function (event) {
      const seconds = event.seconds
      localStorage.setItem('videoplayer-current-time',seconds)
    }, 1000) );

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

       const playerSeconds = JSON.parse(localStorage.getItem('videoplayer-current-time'))
  
      player.setCurrentTime(playerSeconds)