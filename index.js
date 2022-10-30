// code your solution here
function saturdayFun(activity) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
}

function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`
    } else {
        return 'This Monday, I will go to the office.'
    }
}


function wrapAdjective(style = '*') {
  return function innerfunction(adjective = 'special') {
    return `You are ${style} a hard worker${style}!`
  }
}




// function wrapAdjective(adjective) {
//     let (*) = 'a hard worker'; 
//     let || 
//     if (adjective === *) {
//         return `You are ${adjective} worker!`
//     } else if (adjective === || { 
//         return `You are a ${adjective} dedicated programmer!`
//     }
// }

