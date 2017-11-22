function solve(arr) {
    var el = arr[0];
    if (!Array.hasOwnProperty('removeEl')) {
        Array.prototype.removeEl = function(el){
            var i,
                len = this.length;
            
            for(i = 0; i < len; i += 1){
                if (this[i] === el) {
                    this.splice(i, 1);
                    i -= 1;
                    len -= 1;
                }
            }
        }        
    }
    arr.removeEl(el);

    for(var i = 0, len = arr.length; i < len; i += 1){
        console.log(arr[i]);
    }
}

var arr = [ '_h/_',
  '^54F#',
  'V',
  '^54F#',
  'Z285',
  'kv?tc`',
  '^54F#',
  '_h/_',
  'Z285',
  '_h/_',
  'kv?tc`',
  'Z285',
  '^54F#',
  'Z285',
  'Z285',
  '_h/_',
  '^54F#',
  'kv?tc`',
  'kv?tc`',
  'Z285' ];
solve(arr);