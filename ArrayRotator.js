class ArrayRotator {
    rotateLeft(arr, n){
    	arr.push(...arr.splice(0, n));
    	return arr;
    }
}

module.exports = ArrayRotator;