class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, val){
        var index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,val]);
    }
    get(key){
        var index = this._hash(key);
        var result = undefined;
        if(this.keyMap[index]){
            for(var i = 0; i < this.keyMap[index].length; i++){
                if(key === this.keyMap[index][i][0]){
                    console.log(this.keyMap[index][i][0]);
                    result = this.keyMap[index][i];
                    break;
                }
            }
        }
        return result;
    }
    // no duplicates version
    keys(){
        var result = [];
        for(var i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                this.keyMap[i].forEach(element => {
                    if(!result.includes(element[0])){
                        result.push(element[0]);
                    }
                });
            }
        }
        return result;
    }
    values(){
        var result = [];
        for(var i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                this.keyMap[i].forEach(element => {
                    if(!result.includes(element[1])){
                        result.push(element[1]);
                    }
                });
            }
        }
        return result;
    }
}

var ht = new HashTable();
ht.set("hola",1);
ht.set("hola",2);
ht.set("helado",3);