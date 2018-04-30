/*var age = prompt("What is your age?");
var gender = prompt("What is your gender?");

if(age>=18 && genfer==="female") {
    alert("You can drink FREE as much as you can!");
}
else if(age>=18){
    alert("You can drink as much as you can! (but you'll have to pay for that later...");
}
else{
    alert("Sorry, you're too young for that");
}*/

/*var arr = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]
var sum=0;
for(var i=0;i<arr.length;i++){
    sum +=arr[i];
}
var avarage = sum/arr.length;
alert("The avarge of the arr is: " + avarage);*/
/*
var num = prompt("Please enter a number:");
var newNum="";
for(let i=0;i<num.length;i++){
    if(num[i]%2===0){
        newNum+=num[i]+"-";
    }
else {
    newNum+=num[i];
}
}
alert(newNum)*/


//PARTNER EXTENSION 1 (OPTIONAL)
/*var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count=1, maxCount=0,  maxElement=0;
    
for(let i = 0; i< array.length; i++){
    for(let j = i+1; j < array.length; j++){
        if(array[j] == array[i]){
            count++;
            // If count of current element is more than maxCount, uodate maxCount and maxElement
            if(count > maxCount){
                maxCount = count;
                maxElement = array[j];
            }
        }
    }
}
alert("Most frequently occuring item in the array is \"" + maxElement +"\" and occuring " + maxCount + " times")

//PARTNER EXTENSION 2 (OPTIONAL)
var arr = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]

   for (let i = arr.length-1; i>=0; i--){
     for(let j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           let tempNum = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = tempNum;
       }
     }
   }
    for(let i=0;i<arr.length;i++){    
      if(arr[i]!==i+1){
          alert("The missing number is " + i+1)
          break;
      }
    }

    //Second Way 
  /*  for(let i=0;i<200;i++){
        if(!arr.includes(i+1))
            {alert("The missing number is " + i+1)
            break;
        }
    }*/

//console.log("hello world");