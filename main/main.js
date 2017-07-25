let buildItems = (inputs) =>{
  let cartItems = [];
  let allItems = loadAllItems();

  for (let input of inputs){
    let splitInput = input.split("-");
    let count = parseFloat(splitInput[1]||1);
    let barcode = splitInput[0];

    let cartItem = cartItems.find(cartItem => cartItem.item.barcode === barcode);
    if(cartItem){
      cartItem.item.count += count;
    }
    else{
      let item = allItems.find(item => item.barcode  === barcode);
      cartItems.push({item:item,count:count});
    }
    console.log(cartItems);
  return cartItems;

  }
}
