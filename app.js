const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius;
const minSpacePerPlants = 0.8;
let startingPlants = 20;
let maxCapacity = Math.floor(area / minSpacePerPlants);

console.log("\n");
console.log("Part One");

function plantsCount(week) {
  const plantTotal = startingPlants * Math.pow(2, week - 1);

  if (plantTotal > 0.8 * maxCapacity) {
    return `The plants need to be pruned since the plant count ${plantTotal} is greater than 80% of ${maxCapacity}`;
  } else if (
    plantTotal > 0.5 * maxCapacity &&
    plantTotal <= 0.8 * maxCapacity
  ) {
    return `The plants need to be Monitored since the plant count ${plantTotal} is greater than 50% but less than 80% of ${maxCapacity}`;
  } else {
    return `More plants need to be Planted since the plant count ${plantTotal} is less than 50% of ${maxCapacity}`;
  }
}

console.log("Week 1: ", plantsCount(1));

console.log("Week 2:", plantsCount(2));

console.log("Week 3:", plantsCount(3));

console.log("\n");
console.log("Part Two");

// Part two

const ptTwoInitialPlants = 100;
const weeks = 10;
const spacePerPlants = 0.8;

let ptTwoPlantsCount = ptTwoInitialPlants * Math.pow(2, weeks);

const reqdArea = ptTwoPlantsCount * spacePerPlants;

const newRadius = Math.sqrt(reqdArea / pi);

console.log(
  `After ${weeks} weeks, the plant count will be: ${ptTwoPlantsCount}`
);
console.log(
  `The required area for the ${ptTwoPlantsCount} plant is: ${reqdArea} square meters`
);
console.log(
  `The new radius of the garden will need to be approximately ${Math.floor(
    newRadius
  )}`
);

console.log("\n");
console.log("Part Three");

// Part three
// use the global const variable
const ptThreeInitialPlants = 100;
const reqdSpace = ptThreeInitialPlants * spacePerPlants;

try {
  if (reqdSpace > area) {
    throw new Error(
      `Error: The required space ${reqdSpace} is not enough to plant ${ptThreeInitialPlants} plants.`
    );
  }
  console.log(
    `Available space ${area} square meters is good for planting the plants`
  );
} catch (error) {
  console.log(error.message);
}
