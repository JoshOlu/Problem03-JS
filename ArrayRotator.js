class ArrayRotator {
    rotateLeft(arr, n){
    	for (let i = 0; i < n; i++) {
    		arr.push(arr.shift());
    	}
    	return arr;
    }
}

module.exports = ArrayRotator;