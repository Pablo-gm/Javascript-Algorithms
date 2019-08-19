/*
<p>Write a recursive function called <strong>reverse</strong> which accepts a string and returns a new string in 
reverse.</p>
*/

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if( str.length === 1) return str[0];
    return reverse(str.slice(1)) + str[0];
}
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  // instructor
  function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}