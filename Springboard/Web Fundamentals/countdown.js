function countDown(counter) {
    let countInterval = setInterval(function() {
    console.log(counter--);
    if (counter <= 0) {
        clearInterval(countInterval);
        console.log("DONE!")
    }
  }, 1000)
}




