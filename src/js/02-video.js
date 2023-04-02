// Импортирую библиотеку
import throttle from 'lodash.throttle';
//Импортирую библиотеку
import Player from '@vimeo/player';


   const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    /* Применяю событие  "timeupdate" , библиотеку  lodash 
    и сохраняю время воспроизведения в локальное хранилище */
     player.on('timeupdate', throttle(function (event) {
      const seconds = event.seconds
      localStorage.setItem('videoplayer-current-time',seconds)
    }, 1000) );

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

// Получаю значения  из локального хранилища
const playerSeconds = JSON.parse(localStorage.getItem('videoplayer-current-time'))

  /* Применяю метод setCurrentTime при условии ,
   если значение в локальном хранилище было больше 0 */
function onSeconds() { 
  if (playerSeconds) { 
    player.setCurrentTime(playerSeconds)
  }
}
onSeconds();