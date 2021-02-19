var arr=[1,2,3,4,5,6,7,8,8,9,10]
for (var i of arr){
    if(arr[i]==arr[i+1]){
        console.log(arr[i])
    }
}

fetch('https://jsonplaceholder.typicode.com/photos/1 ').then(response=>response.json()).then(data=>console.log(data)).catch((err=>console.log(err)));




//solution 5

var obj =[
{id:3,name:"amit"},
{id:1,name:"mohit"},
{id:8,name:"rohit"}
 
]

obj.sort(function(a,b){
    return a.id-b.id
})

console.log(obj)