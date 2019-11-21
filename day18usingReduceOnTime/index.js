const timeNodes = [...document.querySelectorAll('[data-time]')];

const timeStamp = timeNodes.map(tNode => tNode.dataset.time)
                           .map(timeCode => {
                               const [mins, secs] = timeCode.split(':').map(parseFloat);
                               return (mins * 60) + secs;
                               console.log(mins, secs);
                           })
                           .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = timeStamp;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minss = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
