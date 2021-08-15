var m
function generate(){
  var minimum = document.getElementById("minimum").value
  m = new Mchain();
text = document.getElementById("myText").value

m.train(text);
console.log(m)
let k = m.words[0]
let result = k
for(let i =0;true;i++){
  k = m.generate(k)
  result = result +""+k
  if(k === m.words[m.words.length-1]&&i>minimum) break;
}
document.getElementById("text").innerHTML = result  
}