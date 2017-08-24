# Hashmap-for-Javascript
A hashmap data structure for Javascript with array and linked list(Same as Java).<br/>
Keys should be string. Values could be any type.

Test input:
````
 var hs = new HashMap();
    hs.put('asd', 123)
    hs.put('bqwe', 456)
    hs.put('czx', 789)
    hs.put('dcv', {a: 1, b: 2})
    hs.put('edf', 123)
    hs.put('fsdf', 456)
    hs.put('gdf', 789)
    hs.put('hds', {a: 1, b: 2})
    hs.put('idc', 123)
    hs.put('jdf', 456)
    hs.put('ker', 789)
    hs.put('lsd', [1, 2, 3])
    hs.put('mvr', {a: 1, b: 2, c: {d: 2}})
    hs.put("vvv", null)
    hs.put('', 'asdasd')
    console.log(hs.get(''))
    console.log(hs.get("qqq"))

    console.log(hs.containsKey('asd'))
    console.log(hs.get('asd'))

    hs.remove('asd')
    console.log(hs.containsKey('asd'))

    console.log(hs.containsValue({a: 1, b: 2, c: {d: 2}}))
    console.log(hs.containsValue(123))

    console.log(hs.get('asd'))
    console.log(hs.size())
    var en = hs.getEntries();

    console.log(en)

    en.forEach((item) => {
        console.log(item.key)
        console.log(item.value)
    })

    hs.clear();
    console.log(hs.isEmpty())
````

Test output:
````
asdasd
undefined
true
123
false
true
true
undefined
14
[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]

asdasd
hds
Object {a: 1, b: 2}
gdf
789
jdf
456
mvr
Object {a: 1, b: 2, c: Object}
fsdf
456
dcv
Object {a: 1, b: 2}
idc
123
bqwe
456
lsd
[1, 2, 3]
czx
789
ker
789
edf
123
vvv
null
true
````
