const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below such that it can accept an input array and value to find, returns the position 
// of the value we are searching for, or returns '-1' if the value is not found.
const linearSearch = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
};