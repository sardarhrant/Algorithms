function bubbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i > 0 ; i--) {
        noSwap = true;
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false
            }
            if(noSwap) break;
        }
    }

    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7])