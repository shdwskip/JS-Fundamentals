function solve(arr) {
    const el = arr[0];
    arr.removeEl(el);

    for (let i = 0, len = arr.length; i < len; i += 1) {
        console.log(arr[i]);
    }
}
if (!Array.hasOwnProperty('removeEl')) {
    Array.prototype.removeEl = function(el) {
        let i,
            len = this.length;

        for (i = 0; i < len; i += 1) {
            if (this[i] === el) {
                this.splice(i, 1);
                i -= 1;
                len -= 1;
            }
        }
    };
}

const arr = ['1', '2', '3', '2', '1', '2', '3', '2'];
solve(arr);
