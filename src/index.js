
// You should implement your task here.

module.exports = function towelSort (matrix) {
   return (matrix == undefined) ? [] : array = matrix.reduce(
    (arr, el, i) => { return arr.concat((i%2) ? el.reverse() : el) } , []
    );
 
}
