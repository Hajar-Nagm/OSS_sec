var n = 1 * prompt("enter array size");
var arr = [];
for (var i = 0; i < n; i++) {
  var num = 1 * prompt();
  arr.push(num);
}
arr.sort();
for (var i = 0; i < n + 1; i++) {
  if (arr[i] != i + 1) {
    alert(i + 1);
    break;
  }
}

/*from line 7
var sortedArray=arr.sort();
if(arr[0]!=1)
alert(1);
else{
    for(var i=1;i<arr.length;i++){
    if(arr[i]!=(i+1)){
    alert(i+1);
    break;
    }
    }
    if(i==arr.length)
    alert(i+1);
}
*/
