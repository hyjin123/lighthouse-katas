//write a function that will check a collection of air samples
const checkAir = function (samples, threshold) {
  let dirtySampleCount = 0; //keeping count of dirty air samples
  let cleanSampleCount = 0; //keeping count of clean air samples
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "clean") {
      cleanSampleCount++; //add 1 if we encounter clean air sample
    } else if (samples[i] === "dirty") {
      dirtySampleCount++; //add 1 if we encounter dirty air sample
    }
  }
  const totalCount = dirtySampleCount + cleanSampleCount; //combine the total number of air samples
  if ((dirtySampleCount / totalCount) < threshold) {
    return "Clean"; //if dirty air sample percentage is below the threshold, return clean;
  } else {
    return "Polluted"; //if it is above threshold, return polluted;
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'dirty', 'clean', 'dirty', 'clean', 'dirty'],
  0.5
));