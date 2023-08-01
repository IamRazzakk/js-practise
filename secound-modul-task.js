// var mode = "Aj ke amar mon valo nei"
// for (var i= 1; i <= 39; i++){
//     console.log(mode + " " +i)
// }
// var i = 1
// while(i <= 39){
//     console.log(i + "Ajke amar mon valo nei")
//     i++
// }
// var arr = ["movile","pen", "sunglass", "leptop", "mouse"]
// for(i = 0; i< arr.length; i++){
//     if(arr[i] == "sunglass"){
//         break
//     }
//     console.log(arr);
// }

// for(var i = 412; i <= 1000;i++ ){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// for (var i = 412; i < 1000; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// var i = 412;
// while(i<=456){
//     if(i % 2 == 0){
//         console.log(i)
//     }
//     i++
// }
// for(var i = 581; i <= 623; i++ ){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }
// var i = 581;
// while(i <= 623){
//     if(i % 2 !==0){
//         console.log(i)
//     }
//     i++
// }
// var i = ["html","html5", "css", "css3", "tailwind css", "daisy ui", "js"]
// Complite problem 7

// for(var i = 30; i < 86; i++){
//     if(i >= 44){
//         break
//     }
//     console.log(i)
// }

// var i = 30;
// while(i < 86){
//     if(i > 46){
//         break
//     }
//     i++
//     console.log(i);
// }
var booksPrice = [110,130,190,200,250,350, 30.10, 100,90]
for(var i = 0; i < booksPrice.length; i++){
    if(booksPrice[i] >= 200){
        continue
    }
    console.log(booksPrice[i]);
}