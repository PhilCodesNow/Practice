////////// cards

const cardArray = [
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/925/3C__99122.1440113509.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/927/5S__90574.1440113521.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/928/6D__92916.1440113530.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/929/7C__93490.1440113539.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/930/8S__27839.1440113555.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/931/9D__67286.1440113561.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/932/10H__11470.1440113568.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/923/JC__86231.1440113428.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/934/QD__14920.1440113588.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/933/KH__01216.1440113580.480.480.png?c=2",
    "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/935/AS__68652.1440113599.480.480.png?c=2",
]
//////// create first div
const $newDiv = $('<div>');
const $divP =  $('<p>').addClass('cardP').text('Add a Card');
$newDiv.append($divP);
$('#cards').append($newDiv);

//////// reset function
const reset = () =>{
    $('.card').remove();
}


/////// make delete card function
const deleteCard = (event) =>{
    const $img = event.target;
    console.log('deleteCard called')
    $img.remove();
}



//////// create new card function
const newCard = (event) =>{
    $div = event.currentTarget;
    $newImg = $('<img>').attr('src', cardArray[Math.floor(Math.random () * cardArray.length)]).addClass('card');
    $newImg.on('click', deleteCard);
    $('#cards').append($newImg);
}

$newDiv.on('click', newCard);