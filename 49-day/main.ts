function counting() {
    for(let i = 1; i <= 5; i++){
        let str = "";
        for(let j = 1; j <= i; j++){
            str += i;
        }
        console.log(str)
    }
}
counting();

function stars(){
    let str = ""
    for(let i = 1; i <= 10; i++){
        str += "*"
        console.log(str);
    }
}
stars();

