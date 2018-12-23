var title, description, link, picture, itemID;
var curItem = 0;

var items = [
{
    title: "Bluetooth Wireless Headphones",
    description: "Cheap Wireless Headphones (Blue)",
    link: "https://www.amazon.co.uk/dp/B0775ZNZ37/ref=twister_B0775TDZ45?_encoding=UTF8&th=1",
    picture: "https://images-na.ssl-images-amazon.com/images/I/415W1Bz2r2L._SL1000_.jpg"
},
{
    title: "Bluetooth Wireless Headphones 2",
    description: "Cheap Wireless Headphones (Pink)",
    link: "https://www.amazon.co.uk/dp/B0775V1B7V/ref=twister_B0775TDZ45?_encoding=UTF8&psc=1",
    picture: "https://images-na.ssl-images-amazon.com/images/I/61aRYTXKS0L._SL1500_.jpg"
}];

//reference HTML elements
var curTitle = document.getElementById("itemtitle");
var curDesc = document.getElementById("description");
var curLink = document.getElementById("link");
var curPic = document.getElementById("picture");

// run present picker
document.getElementById("new item").onclick = changeItem;


function changeItem(){
    //update item number
    if(itemID < items.length-1){
        itemID = curItem + 1;
    }
    else{
        itemID = 0;
    }
    
    curItem = itemID;
    itemInfo = items[curItem];
    
    console.log("New item is: " + itemID + " of a total of " + items.length);

    
    //populate item info from items array
    title = itemInfo.title;
    description = itemInfo.description;
    link = itemInfo.link;
    picture = itemInfo.picture;

    //update item info in HTML
    curTitle.innerHTML = title;
    curDesc.innerHTML = description;
    curPic.innerHTML = "<img src=" + picture + "\>" ;
    curLink = "<a href=" + link + " target = '_blank' >Link here to buy it</a>"

    console.log("Changed item");
    
}