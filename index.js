// code your solution here
function saturdayFun(action = 'roller-skate'){
    return (`This Saturday, I want to ${action}!`);
    console.log(`This Saturday, I want to ${action}!`); 
}
function mondayWork(activity= 'go to the office'){
    return (`This Monday, I will ${activity}.`);
    console.log(`This Monday, I will ${activity}.`); 
}
function wrapAdjective(symbol){
    return function(adjective){
        return "You are " + symbol + adjective + symbol + '!';
    };
     
}

   

