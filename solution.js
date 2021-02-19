// solution 1


var arr=[1,2,3,4,5,6,7,85,6,4,90,23,12,34,45]
for(var i in  arr){
    if(i==11){
        break

    }else{
        
        console.log(arr[i])
    }
    
}





// solution 2

var a=[1,0,0,0,1,1,1,0,1,1]


var count=0
var maxCount=0

for (var i in  a) {
    if(a[i] == 1) {
        count += 1;
        
    } else {
        count = 0;
    }
    maxCount =Math.max(maxCount,count)


}

console.log("consecuitve 1s are",maxCount)
