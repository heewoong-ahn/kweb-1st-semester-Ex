const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height * Math.PI;
  },
  getPerimeter() {
    return (
      2 * Math.PI * Math.sqrt((this.width ** 2 + Math.pow(this.height, 2)) / 2)
    );
  },
  getEccentricity: function () {
    return Math.sqrt(1 - Math.pow(this.height / this.width, 2));
  },
};
