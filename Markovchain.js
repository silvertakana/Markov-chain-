class Mchain{
  constructor(){
    this.elem = []
    this.words = []
    
  }
  add(word){
    this.elem.push(
      {mame:word,
      chances:createArray(this.words.length)})
    this.words.push(word);
    for(var i in this.elem){
      this.elem[i].chances.push(0);
    }
  }
  train(text){
    let wi = 5
    let wordss = text.split("");
    let words = []
    for(let j = 0;j<wordss.length/wi;j++){
      words[j] = wordss[j*wi]
      for(let i = 1;i<wi;i++){
        if(wordss[j*wi+i]) words[j]= words[j] +""+wordss[j*wi+i]  
      }
      
      
    }
    
    let k = -1
    for(let i of words){
      if(!this.words.includes(i)){
        this.add(i)
      }
      let iindex = this.words.indexOf(i);
      if(k>=0){
        this.elem[k].chances[iindex] +=1;
      }
      
      k = this.words.indexOf(i);
    }
    let iindex = this.words.indexOf(words[0]);
      
        this.elem[k].chances[iindex] +=1;
      
  
  }
  generate(word){
    
    let index = this.words.indexOf(word);
    let elem = this.elem[index]
    let chooseBoard = []
    
    for(let i in elem.chances){
      
      for(let j = 0;j < elem.chances[i];j++){
        chooseBoard.push(i);
      }
    }
    let r = Math.round(Math.random()*(chooseBoard.length-1));
    
    return this.words[chooseBoard[r]];
  }
  
  
}
function createArray(len,val = 0){
  let arr = []
  for(let i = 0;i<len;i++){
    arr[i] = val
  }
  return arr;
}