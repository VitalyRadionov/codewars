class File {
  constructor(fullName, data) {
    this._fullName = fullName;
    this.data = data;
    this.dataArr = [...this.data.split('\n')];
    this.count = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._fullName.replace(/\.[^/.]+$/g, '');
  }

  get extension() {
    return this._fullName.match(/(\w+$)/g)[0];
  }

  getContents() {
    return this.data;
  }

  write(str) {
    this.dataArr.push(str);
    return this.data = this.data ? this.data + "\n" + str : this.data + str;
  }

  gets() {
    this.dataArr = this.dataArr.filter(n => n);
    return this.dataArr.shift();
  }

  getc() {
    return this.data[this.count++];
  }
}

let myFile = new File("hello.txt", "Hello World");
console.log(myFile.fullName); // hello.txt
myFile.fullName = "goodbye.txt"; // Reassignment should fail
console.log(myFile.fullName); // still "hello.txt"

myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
console.log(myFile.gets()); // "Line 1"
console.log(myFile.gets()); // "Line 2"
console.log(myFile.gets()); // "Line 3"
console.log(myFile.gets()); // "Line 4"
console.log(myFile.gets()); // "Line 5"
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined