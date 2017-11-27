function combinationSum(candidates, target) {
    var result = [];

    if (candidates == null || candidates.length == 0) return result;

    var current = [];
    candidates.sort();

    combinationSumHelper(candidates, target, 0, current, result);

    return result;
}

function combinationSumHelper(candidates, target, j, curr, result) {
    if (target == 0) {
        var temp = curr.slice();
        result.push(temp);
        return;
    }

    for (var i = j; i < candidates.length; i++) {
        if (target < candidates[i])
            return;
        curr.push(candidates[i]);
        combinationSumHelper(candidates, target - candidates[i], i, curr, result);
        curr.pop();
    }
}

console.log(combinationSum([2, 5, 7], 2000).length);