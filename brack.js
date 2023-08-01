
// for(var i = 0; i <= 20; i += 2){
//     if(i > 15){
//         break
//     }
//     console.log(i)
// }
// var i = 0
// while( i < 10){
//     console.log("rost den please")
//     i++
//     if (i < 4){
//         break
//     }
// }
var items = ["sunglass", "pen", "bottle", "notebook", "oil"]
for (var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == "notebook"){
        break
    }
    console.log(item)
}