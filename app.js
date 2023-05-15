class Casino {
    // Write code here
    constructor(name){
        this.name=name;
        this.timesPlayed=0;
        this.winnings=0;        
    }

    playGame(betAmount){
        this.timesPlayed+=1;
        let test=Math.random();
        if (test > 0.5){
            console.log("Congrats, you won: "+betAmount*(this.timesPlayed)+" dollars from "+this.name);
            
        } else {
            console.log(this.name+" WINS!");
            this.timesPlayed=0;
            this.winnings=0;
        }
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
