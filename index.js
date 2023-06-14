// code your solution here
function saturdayFun(task = 'roller-skate') {
    return `This Saturday, I want to ${task}!`;
}

function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(sign) {
    if (sign == '*' || sign =='||') {
        return function wrap(adjective) {
            return `You are ${sign}${adjective}${sign}!`;
        }
    }
    
}
