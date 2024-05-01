function solution(s, skip, index) {
  var answer = "";

  for (const word of s) {
    let ascii = word.charCodeAt();

    for (let i = 0; i < index; i++) {
      ascii++;

      if (ascii > 122) {
        ascii = 97;
      }

      while (skip.includes(String.fromCharCode(ascii))) {
        ascii++;

        if (ascii > 122) {
          ascii = 97;
        }
      }
    }

    answer += String.fromCharCode(ascii);
  }

  return answer;
}
