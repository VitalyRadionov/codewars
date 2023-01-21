function recycle(array) {
  return ['paper', 'glass', 'organic', 'plastic'].map(element => array.filter(item => item.material == element || item.secondMaterial == element).map(element => element.type));
}

console.log(recycle([
  { "type": "rotten apples", "material": "organic" },
  { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
  { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
  { "type": "amazon box", "material": "paper" },
  { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" }
]));

/* output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
] */