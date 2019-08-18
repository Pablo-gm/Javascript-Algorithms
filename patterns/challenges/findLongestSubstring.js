/*
<p>Write a function called <b>findLongestSubstring, </b>which accepts a string and returns the length of the 
longest substring with all distinct characters.</p>
Time complexity O(n)
('') // 0
('rithmschool') // 7
('thisisawesome') // 6
*/

// instructor is better
function findLongestSubstring(word){
    // add whatever parameters you deem necessary - good luck!
    if (!word.length) {
        return 0;
    }

    let start = 0;
    let finish = 0;
    let maxL = 0;
    let wordChars = {};

    while( finish < word.length) {
        if(!wordChars[word[finish]]) {
            wordChars[word[finish]] = 1;
        } else {
            if( maxL < finish - start) {
                maxL = finish - start;
            }
            while(word[start] != word[finish]) {
                wordChars[word[start]] = 0;
                start++;
            }
            start++;
        }
        finish++;
    }
    if( maxL < finish - start) {
        maxL = finish - start;
    }
    return maxL;
}

// instructor
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }