//=============  Rest Paramters Syntax =============  

//Ex - Function有不確定參數或無限參數，可用Rest Parameters。參數為Array型式，用instanceof判斷
const print = function(... Args){
    console.log(typeof Args);
    console.log(Args instanceof Array);
    console.log(Args[0]);
    console.log(Args[1]);
    console.log(Args[2]);
    console.log(Args.join());
}

print("昔人已乘黃鶴去", "此地空餘黃鶴樓", "黃鶴一去不復返", "雲千載空悠悠");



//Ex - 用reduce方法計算陣列總和
function sum(...Args) {
    var sum = Args.reduce((total, current) => {
        return total + current;
    });

    return sum;
}

console.log(sum(1, 3, 5, 7, 9, 11, 13, 15));   //64