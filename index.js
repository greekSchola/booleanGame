/// this uses boolean logic by using one and two read your mind

const numbers = [
    
    {
        name: 1,
        even:2,
        odd:1,
        lessFive: 1,
        lessEight:1,
        Five:2,
        sqroot:1
        
    },
    
    
     {
        name: 2,
        even:1,
        odd:1,
        lessFive: 1,
        lessEight:1,
        Five:2,
        sqroot:2
        
    },
    
     {
        name: 3,
        even:2,
        odd:2,
        lessFive: 1,
        lessEight:1,
        Five:2,
        sqroot:2
        
    },
    
      {
        name: 4,
        even:1,
        odd:2,
        lessFive: 1,
        lessEight:1,
        Five:2,
        sqroot:1
        
    },
      {
        name: 5,
        even:2,
        odd:2,
        lessFive: 2,
        lessEight:1,
        Five:1,
        sqroot:2
        
    },

    {
        name: 6,
        even:1,
        odd:2,
        lessFive: 2,
        lessEight:1,
        Five:2,
        sqroot:2
        
    },
    {
        name: 7,
        even:2,
        odd:2,
        lessFive: 2,
        lessEight:1,
        Five:2,
        sqroot:2
        
    },
    {
        name: 8,
        even:1,
        odd:2,
        lessFive: 2,
        lessEight:2,
        Five:2,
        sqroot:2
        
    },
    {
        name: 9,
        even:2,
        odd:2,
        lessFive: 2,
        lessEight:2,
        Five:2,
        sqroot:1
        
    },
    
    
    ];
    var intro = prompt("Iam bored with computer architecture so i have decided to use Boolean logic to create this mind game , play it if you think you can beat my Mind ")
var int = prompt("Think of a number that is less than 10 and i will read your mind;  press enter once you done!");
var q1 = parseInt(prompt("is the number even ? choose 1 for yes and 2 for no "));
var q2 = parseInt(prompt("is the number less than 5 ? choose 1 for yes and 2 for no "));
var q3 = parseInt(prompt("is the number less than three? choose 1 for yes and 2 for no "));
var q4 = parseInt(prompt("is the number less than eight? choose 1 for yes and 2 for no "));
var q5 = parseInt(prompt("is the number  five? choose 1 for yes and 2 for no "));
var q6 = parseInt(prompt("does the number have a simple square root? choose 1 for yes and 2 for no "));


for(i =0; 1 < numbers.length; i++){
    if(q1 == numbers[i].even && q2 == numbers[i].lessFive){
        if(q3 == numbers[i].odd){
            
       if(q4 == numbers[i].lessEight && q5 == numbers[i].Five){
        if(q6 == numbers[i].sqroot){
            alert('The number you thought is ' + numbers[i].name)
        }
       }
        }
    }
}

alert('i can beat you at this game, if you doubt refresh and play again')

