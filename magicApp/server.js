const mtg = require('mtgsdk')







mtg.card.all({name: 'Demotion'}).on('data', function(card){
    console.log(card.imageUrl)
})