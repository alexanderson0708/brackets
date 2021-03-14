module.exports = function check(str, bracketsConfig) {
  let a = false
  str = str.split('');
  brackets(str, bracketsConfig)  
  function brackets(str){
    if(str.length == 0){
      a = true;
      } else {
        for (let i = 0; i < str.length; i++){
          for (let j = 0; j < bracketsConfig.length; j++){
            if(str[i] == bracketsConfig[j][0] && str[i+1] == bracketsConfig[j][1]){
              str.splice(i, 2);
              brackets(str);
            }
          }
        }
      }
    }
    return a;
}