// code your solution here

// function superbowlWin(record){
//     for(let item of record){
//         if(item.result === "W"){
//             return item.year
//         }
//         else{
//             return "sadly, undefined"
//         }
//     }
// }

function superbowlWin(record){
    let win = record.find(function(item){
        return item.result === "W";
    })
        if (win){
            return win.year;
        }
        else {
            return undefined
        }
    } 