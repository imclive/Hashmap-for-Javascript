function HashMap(){

    //初始大小
    var size = 0;

    //数组
    var table = [];

    //初始数组长度为16
    var length = 2 << 3;

    //数组扩容临界值为12
    var threshold = 0.75 * length;

    //hash值计算
    this.hash = function(h) {
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }

    //返回HashMap的size
    this.size = function(){
        return size;
    }

    //是否包含某个key
    this.containsKey = function(key) {
        if(key == null || key == undefined)
            return false;
        else {
            var hashCode = this.hashCode(key);
            var hash = this.hash(hashCode);
            var index = this.indexFor(hash, length)
            for(var e = table[index]; e != null && e != undefined; e = e.next){
                if(e.key === key){
                    return true;
                }
            }
            return false;
        }
    }

    //是否包含某个value
    this.containsValue = function(value) {
        for(var index = 0; index < table.length; index++) {
            for (var e = table[index]; e != null && e != undefined; e = e.next) {
                if (JSON.stringify(e.value) === JSON.stringify(value)) {
                    return true;
                }
            }
        }
        return false;
    }

    //HashMap是否为空
    this.isEmpty = function(){
        return size === 0;
    }

    //计算HashCode值，不同的key有不同的HashCode，这里使用字符串转ASCII码并拼接的方式
    this.hashCode = function(key){
        var hashcode = '';
        for(var i=0 ;i< key.length; i++){
            hashcode += key.charCodeAt(i);
        }
        return hashcode;
    }

    //向HashMap中存放值
    this.put = function(key, value){
        if(key == null || key == undefined)
            return
        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash, length)
        for(var e = table[index]; e != null && e != undefined; e = e.next){
            if(e.key === key){
                var oldValue = e.value;
                e.value = value;
                return oldValue;
            }
        }
        this.addEntry(key, value, index)
    }

    //从HashMap中获取值
    this.get = function(key){
        if(key == null || key == undefined)
            return undefined
        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash, length)
        for(var e = table[index]; e != null && e != undefined; e = e.next){
            if(e.key === key){
                return e.value;
            }
        }
        return undefined;
    }

    //从HashMap中删除值
    this.remove = function(key){
        if(key == null || key == undefined)
            return undefined
        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash, length)
        var prev = table[index];
        var e = prev;
        while(e != null && e!= undefined){
            var next = e.next;
            if(e.key === key){
                size--;
                if(prev == e){
                    table[index] = next;
                }
                else{
                    prev.next = next;
                }
                return e;
            }
            prev = e;
            e = next;
        }
        return e == null||e == undefined? undefined: e.value;
    }

    //清空HashMap
    this.clear = function() {
        table = [];
        // 设置size为0
        size = 0;
        length = 2 << 3;
    }

    //根据hash值获取数据应该存放到数组的哪个桶(下标)中
    this.indexFor = function(h, length) {
        return h & (length-1);
    }

    //添加一个新的桶来保存key和value
    this.addEntry = function(key, value, bucketIndex) {
        // 保存对应table的值
        var e = table[bucketIndex];
        // 然后用新的桶套住旧的桶，链表
        table[bucketIndex] = { key: key, value: value, next: e}
        // 如果当前size大于等于阈值
        if (size++ >= threshold)
        // 调整容量
        {
            length = length << 1;
            threshold = 0.75 * length;
        }
    }

    //获取HashMap中所有的键值对
    this.getEntries = function(){
        var entries = [];
        for(var index = 0; index < table.length; index++) {
            for (var e = table[index]; e != null && e != undefined; e = e.next) {
                entries.push({key: e.key, value: e.value})
            }
        }
        return entries;
    }

}