function averageInArray(arr){
    let average = 0;
    for ( let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return average / arr.length
}

averageInArray([2,4,5,7,8]);