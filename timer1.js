const timers = process.argv.splice(2);
const playsound = () => process.stdout.write('\x07');
// const playsound = () => process.stdout.write('a');

// playsound();

for(timer of timers.map((timerStr) => Number(timerStr))) {
  if(timer >= 0 && timer !== NaN){
    console.log("hey")
    setTimeout(() => playsound() , timer * 1000);
  }
}

console.log(timers);


//1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.