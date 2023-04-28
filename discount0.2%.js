/**
 * Implement a 20% discount on all prices above $100 of the goods in "shopItems" object below
 */
 
 const shopItems = {
     "beads": "250",
     "Remote": "50.12",
     "Tv": "600.76",
     "Spray": "450.99",
     cooker: 4633,
     "mat": "70.89"
 };
 
 let  itemKeys = Object.keys(shopItems);
 console.log({itemKeys})
 //result: [ 'beads', 'Remote', 'Tv', 'Spray' ]
    for(i = 0; i < itemKeys.length; i++){
        let itemName = itemKeys[i];
    
        let price = Number(shopItems[itemName]);
        
        if(price > 100){
            shopItems[itemName] = price - (price * 0.2);
        }
    }
    console.log('shopItems:', shopItems)
