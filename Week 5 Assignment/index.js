class foodItem
{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }
}

class order
{
    constructor(order)
    {
        this.order = [];
    }
    
    addItem(item)
    {
        this.order.push(item);
    }
    deleteItem(delItem)
    {
        this.order.splice(delItem,1);
        console.log("Item: "+ delItem +" has been removed")
    }
    completeOrder()
    {
        var total = 0;
        for (var i = 0; i <this.order.length;i++)
        {
            total += Object.values(this.order[i])[1] ;
        }  
        console.log("Your total is: $" +total)  
    }
    returnOrder()
    {
        for (var i = 0; i <this.order.length;i++)
        {
            console.log("Item Name: " + Object.values(this.order[i])[0] +"\n" + "Item Price: " +Object.values(this.order[i])[1] ) ;
        }       
    }
}

var menu1 = new order()
var burger = new foodItem("Burger",4)
var fries = new foodItem("Fries",2)
var soda = new foodItem("Soda",1)

/*
menu1.addItem(burger)
menu1.addItem(fries)
menu1.addItem(soda)

menu1.returnOrder()
menu1.deleteItem(1)
console.log("hi")
menu1.returnOrder()
menu1.completeOrder()
*/
var input; 
while (input != 0)
{
    input = prompt(`
    Hello welcome to Stan Burger! 
    What would you like to do?
    1) Burger $4
    2) Fries  $2
    3) Soda   $1
    4) View Order
    5) Delete item
    6) Complete Order
    `);
    if(input == 1)
    {
        menu1.addItem(burger) 
    }
    else if(input == 2)
    {
        menu1.addItem(fries) 
    }
    else if(input == 3)
    {
        menu1.addItem(soda) 
    }
    else if(input == 4)
    {
        menu1.returnOrder() 
    }
    else if(input == 5)
    {
        menu1.returnOrder() 
       var input2 = prompt(`
    What would you like to remove from your order?
    `);
        menu1.deleteItem(input2)
    }
    else if(input == 6)
    {
        menu1.completeOrder() 
        input = 0
        console.log("Thank you for ordering")
    }
    else
    {
        alert("Not a valid choice")
    }
            
}