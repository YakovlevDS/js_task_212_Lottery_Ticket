// solution 1
const bingo=(ticket, win)=>
    (ticket.filter(a => a[0]
        .split('')
        .some(b => b.charCodeAt(0) == a[1]))
        .length >= win)?
       "Winner!"
   :
       "Loser!"

// // solution 2
//   const bingo = (ticket, win) =>  ticket.reduce((s,[e,c])=> [...e].some(l=> l.charCodeAt(0) == c) ? s+1: s  ,0) >= win ? "Winner!" : "Loser!";
// // solution 3
// function bingo(ticket, win){
//     let count=0;
//      for(let i in ticket){
//        let word = ticket[i][0];
//        let mini = ticket[i][1];
//        count+=[...word].find(e=>e.charCodeAt()==mini)?1:0;  
//      }
     
//      if(count>=win){
//        return "Winner!"
//      }
     
//      return "Loser!"
   
//    }
// // solution 4


//    const bingo = (ticket, win) => `${
//     win <= ticket.filter(tic => tic[0].includes(String.fromCharCode(tic[1]))).length
//     ? "Winner" : "Loser"
//     }!`

// // solution 5
// const bingo = (ticket, win) => ticket
//   .map(([a, b]) => a.includes(String.fromCharCode(b)))
//   .filter(Boolean).length 
//    >= win ? 'Winner!' : 'Loser!'

// // solution 6

//    function bingo(a, k){
//     let z = 0;
//     a.forEach(a=>z+=[...a[0]].some(x=>x.charCodeAt(0)==a[1]));
//     return z<k?'Loser!':'Winner!';
//   }

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
