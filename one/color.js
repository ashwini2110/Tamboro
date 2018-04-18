var vectorvalue = [['195°', '11%', '12%'], ['37°', '13%', '76%'], ['15°', '11%', '12%']];
var pairvector = [];
var initalindex = 0


for (var i=1; i<vectorvalue.length;i++){

    var checkvalue =parseInt(vectorvalue[initalindex][0]) - parseInt(vectorvalue[i][0]);
    if(checkvalue==180){
        pairvector.push(vectorvalue[initalindex])
        pairvector.push(vectorvalue[i])
    }


}

console.log(pairvector);