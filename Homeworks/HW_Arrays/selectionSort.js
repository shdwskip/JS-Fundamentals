function selectionSort(arr) {    

    let unsorted = arr[0].split('\n'),
        sortedArr = [],
        min,
        index,
        len = +unsorted[0];

       

    for(let i = 0; i < len; i += 1){

        tempMin = Math.min(parseInt(unsorted[i]), parseInt(unsorted[i+1]));
        min = Math.min(...unsorted);
        index = unsorted.indexOf(String(min));
    
        if (index > -1) {
            unsorted.splice(index, 1);           
        }

        sortedArr.push(min);
    }

    console.log(sortedArr.join('\n'));
    
}
let arr = Array;
arr[0] = '10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20';

selectionSort(arr);