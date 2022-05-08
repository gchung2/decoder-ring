// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const caesarModule = (function () {
  // you can add any code you want within this function scope
function caesar(input, shift, encode = true)
{
  if (!shift || shift >25 || shift <-25)
  {
    return false;
  }
  let newInput = input.toLowerCase();
  let finalOutput = '';
  if (!encode) shift *= -1;
  for (let i = 0; i < newInput.length; i++) 
  {
    if (newInput.charCodeAt(i) < 97) 
    {
      finalOutput += newInput[i];
      continue;
    }
    let charCode = newInput.charCodeAt(i) + shift;
    if (charCode > 122) charCode -= 26;
    else if (charCode < 97) charCode += 26;
    finalOutput += String.fromCharCode(charCode);
  }

  return finalOutput;
}
  return {
    caesar
  };
})();


module.exports = { caesar: caesarModule.caesar };
