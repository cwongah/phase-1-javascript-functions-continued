function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(word1){
    return function(word2 = "special"){
        return `You are ${word1}${word2}${word1}!`
    }
}