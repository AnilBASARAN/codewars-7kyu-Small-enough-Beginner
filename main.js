let smallEnough=(a, limit)=> a.every(x=> x <= limit)

/*

7kyu-Small enough? - Beginner

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value.

If they are, return true. Else, return false.

You can assume all values in the array are numbers.

https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript


BEST SOLUTİONS

--------------------------------------------------------------------------------------

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}



--------------------------------------------------------------------------------------

function smallEnough(a, limit){
  for(var i of a){
    if(i > limit)
      return false;
  }
  return true;
}

--------------------------------------------------------------------------------------