function createSecretHolder(secret) {
  return {
    a: secret,
    getSecret() {
      return this.a;
    },
    setSecret(n) {
      this.a = n;
    },
  }
}

let obj = createSecretHolder(5);
console.log(obj.getSecret()); // # returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // # returns 2