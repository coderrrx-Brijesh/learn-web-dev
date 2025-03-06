function isAnagram(str1, str2) {
  let freq_1 = new Array(1000).fill(0);
  let freq_2 = new Array(1000).fill(0);
  
  for (let c of str1) freq_1[c.toLowerCase().charCodeAt(0)]++;
  for (let c of str2) freq_2[c.toLowerCase().charCodeAt(0)]++;
  
  for (let i = 0; i < 10000; i++) {
      if (freq_1[i] !== freq_2[i]) {
          return false;
      }
  }
  
  return true;
}

module.exports = isAnagram;