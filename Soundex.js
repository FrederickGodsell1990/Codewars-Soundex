 var soundex = function(names) {
   
 names = names.toLowerCase();
    
let firstLet = names.split(' ').map((x,i) => x.charAt(0)) // first letters - ["s", "c"]
                                                     
let fulName = names.split(' ').map((x,i) => x.slice(1).match(/[a-gi-vx-z]/g).join(''))// first letter of every word removed + all in 'w' and 'h' removed - ["ara", "onnor"]
 
let backTog = firstLet.map((x,i) => x.concat(fulName[i])) // w + h gone but now full word - ["sara", "connor"]

let toNum = backTog.map((x,i) => x.replace(/[bfpv]/g,'1')
                              .replace(/[cgjkqsxz]/g,'2')
                               .replace(/[dt]/g,'3')
                                          .replace(/[l]/g,'4')
                                          .replace(/[mn]/g,'5')
                                          .replace(/[r]/g,'6')) // consonants replaced - ["2a6a", "2o55o6"]

let remAdj =   toNum.map((x,i) =>{let ta = [...x]; 
                                  return ta.map((x,i) => x == ta[i + 1] ? '' : x)})// reduces are identical character next to each other to a single digit ["2", "a", "6", "a"] , ["2", "o", "", "5", "o", "6"]
                                .map((x,i) => {let sp = [...x];
                                              return sp.filter(x => !x == '') // removes spaces - ["2", "a", "6", "a"] , ["2", "o", "5", "o", "6"]
                                              .join('')}) // joins - ["2a6a", "2o5o6"]   
                                

let noVow = remAdj.map((x,i) => x.charAt(0).concat(x.slice(1).replace(/[aeiouy]/g,''))) // remove all vowels of all sliced(1) - ["26", "256"]

let rep = noVow.map((x,i) => firstLet[i].toUpperCase().concat(noVow[i].slice(1))) // replace first digit and slice correctly - ["S6", "C56"]

let fin = rep.map((x,i) => x.length == 1 ? x.concat('000') :
                 x.length == 2 ? x.concat('00') :
                 x.length == 3 ? x.concat('0') :
                 x.slice(0,4)).join(',').replace(/,/g,' ')
                                          

return fin
    
}  