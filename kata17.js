//we will be given a url encoded string of key-value pairs. TUrn it into an object
const urlDecode = function(text) {
  const dataObject = {}; //where the final output is stored
  text = text.replace(/%20/g, " "); //replace all %20 with a space
  text = text.split("&"); //split the string at & into an array
  for (let i = 0; i < text.length; i++) {
    let newArray = text[i].split("="); //split the string in each index at "="
    dataObject[newArray[0]] = newArray[1]; //set the first string as key and second string as value
  }
  return dataObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);