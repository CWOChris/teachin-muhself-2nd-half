function countDown (num){
    console.log(num);
    num = num -1;
    if (num === 0) {
        return
    }
    countDown(num);
}

countDown(10);