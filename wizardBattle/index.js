const gameStats = {
    gold: 0,
    staffs: 0,
    exit: false;
}

///// Staffs
const staffs = [
    {name: 'Basic Staff', cost: 0, power: 20}, 
    {name: 'Super Staff', cost: 500, power, 40}
]


/////// Random funciton
const random = (highNum) => {
    return Math.floor(Math.random(highNum));
}


/////// Game Options
const options = {
    f: () => {
        const result = random(staffs[gamesstats.staff].power);
        if(result > 10){
            alert('You have vanquished the villain');
            gameStats.gold += 100
        }else{
            alert('The enemy lives!!!');
        }
    },
    u: () => {
        if(gameStats.gold >= staffs[gameStats.staff + 1].cost){
            alert('You have upgraded');
            gameStats.staff++;
        }
    }
}
////// Game Loop

while (gameStats.play) {}