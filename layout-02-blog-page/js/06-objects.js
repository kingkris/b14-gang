

var marks = {
  kannada:50,
  english:30,
  science:10,
  maths:45,
  total:function () {
    return this.kannada + this.english + this.science + this.maths;
  }
};

console.log(marks.english);
console.log(marks.total());
