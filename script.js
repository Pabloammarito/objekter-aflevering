console.log("HEJ")

// 1.
    function clothesToWear (temperature) {
        if (temperature >= 20){
            return "Wear shorts and a t-shirt"
}
    if (temperature <= 10){
        return "Wear a jacket"

    }
}
console.log(clothesToWear(10))
console.log(clothesToWear(20));





// 2.

function rollTheDice(numOfRolls) {
let amountOfSixes =0
    for (  i = 0; i < numOfRolls; i++) {
        let randomNumber1 = Math.floor ((Math.random() * 6) + 1);

    if (randomNumber1 === 6)
       console.log("You hit "+randomNumber1+", wooo hooo")
     else
         console.log("You hit "+randomNumber1+" try again");

     if(randomNumber1 === 6){
         amountOfSixes++
         if(amountOfSixes === numOfRolls) {
             console.log("You hit a jackpot")

         }
     }

    }

}
rollTheDice(2);


//3 /%


// 4

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/










