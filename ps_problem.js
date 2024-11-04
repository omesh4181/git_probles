// 1.count the vowels and constants in string

str=prompt("enter the name").toLowerCase()
v=0  // v =""
c=0  //c=""
for(i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        v++  //v=v+str[i]
    }else{
        c++   //c=c+str[i]
    }
}console.log(v,c)


// 2.Wap to to calculate the sum of all multiples of 3between 1 to 30.


num=prompt("enter the number")
sum=0
for(i=0;i<num;i++){
    if(i%3==0){
        //console.log(i)
        sum+=i
    }
}console.log(sum)


// 3.check whether given is a armstrong number.


num1=prompt("enter the number")
num=num1
l=num.length
mlt=0
while(num>0){
    rem=num%10
    rem1=rem**l
    mlt=mlt+rem1
    num=parseInt(num/10)
}if(mlt==num1){
    console.log("armstrong number")
}else{
    console.log("not a armstong number")
}

// 4.wap using a for loop to find the maximum number in an array of integers.
// Input:-[3,2,6,1,4,8,2,4,3]

array=[3,2,6,1,4,8,2,4,3]
let max=array[0]
for(i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i]
    }
    
}
console.log(`maximum number in array:${max}`)


// 5.wap to calculate the mean or average of the given array of integers.
// input:-[3,2,6,1,4,8,2,4,3]

const number=[3,2,6,1,4,8,2,4,3]
var sum=0
for(i=0;i<number.length;i++){
    sum+=number[i]
}
mean=sum/number.length
console.log("mean:",mean);

