function myFunc() {
    console.log('i am global');

    function localFu() {
        console.log(myFunc)
    }
    localFu()
}
myFunc()