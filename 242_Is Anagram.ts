function isAnagram(s: string, t: string): boolean {
    const map1: Map<string, number> = new Map();
    const map2: Map<string, number> = new Map();
    for(const char of s) {
        const val = map1.has(char) ? map1.get(char) : 0;
        map1.set(char, val+1);
    }
    for(const char of t) {
        const val = map2.has(char) ? map2.get(char) : 0;
        map2.set(char, val+1);
    }
    // console.log(`map1 map2`, map1, map2);
    
    if(map1.size != map2.size) return false;
    for(const [str, count] of map1.entries()) {
        if(!map2.has(str) || map2.get(str) !== count)
            return false;
    }
    return true;
};

function isAnagramUsingArray(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    const charCountArray: number[] = new Array(26).fill(0);
    for(var i=0; i<s.length; i++) {
        charCountArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCountArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    console.log("charCountArray ", charCountArray);
    for(const charCount of charCountArray) {
        if(charCount !== 0)
            return false;
    }
    return true;
};


const strings: string[] = ["anagram","nagaram"];
const strings2: string[] = ["rat","car"];
console.log(isAnagramUsingArray(strings[0], strings[1]));