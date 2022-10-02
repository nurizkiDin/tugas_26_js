function finite(){
    const arr1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

    for(i=0;i<arr1.length;i++){
        if(isFinite(arr1[i])){
            console.log("Angka "+arr1[i]+" NOT Infinity")
        }else{
            console.log("Angka "+arr1[i]+" Infinity")
        }
    }
}

finite()
