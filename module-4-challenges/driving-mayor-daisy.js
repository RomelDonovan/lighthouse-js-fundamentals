const carPassing = function(cars, speed) {
  cars.push({
    time: Date.now(),
    speed
  });
  return cars;
};