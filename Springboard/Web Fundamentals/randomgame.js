function randomGame() {
    let num;
    let counter = 0;
    let randomNumber = setInterval(function() {
    num = Math.random();
    console.log(num);
    counter ++;
    if (num > 0.75) {
        clearInterval(randomNumber);
        console.log(`It took you ${counter} tries to get a number greater than 0.75!`)
    }
    }, 1000)
};
