const carNoise = 'vroom vroom';
const goFast = speed => {
  const makeNoise = sound => {
    console.log(`My speed is ${speed}, time to ${sound}`);
  }
  makeNoise(carNoise);
}

if(confirm('Are you sure you want to go fast?')) {
  goFast(100);
}