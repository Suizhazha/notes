function HashTale () {
  this.value = new Array();
}
HashTale.prototype.add = function (value) {
  this.value.push(value);
}
HashTale.prototype.remove = function (index) {
  this.value.splice(index, 1);
}
HashTale.prototype.contains = function (value) {
  let aValue = this.value;
  for (let index = 0; index < aValue.length; index++) {
    const element = aValue[index];
    if (value === element) {
      return true;
    }
  }
  return false;
}
HashTale.prototype.length = function (index) {
  return this.value.length;
}