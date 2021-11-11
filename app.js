let str = 'aaasssdfaddgh'


//counting elem
function counting(str,num=1){
  reg = new RegExp(`.{${num}}`,'g')  
  const obj = {}
    for (let i=0;i<num;i++){
      const regarr = str.slice(i).match(reg)
      regarr.forEach(e=>obj[e]?obj[e]++:obj[e]=1)
     }  
  return obj
  }


console.log(counting(str, 4))