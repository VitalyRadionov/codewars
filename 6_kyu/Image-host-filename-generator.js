function generateName() {
  const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return [...new Array(6)].map(_ => b[Math.floor(Math.random() * b.length)]).join('');
}

console.log(generateName());