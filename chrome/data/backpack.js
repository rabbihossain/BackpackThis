window.addEventListener("load", function(){
//Creating The Elements
var backpackThis = document.createElement("div");
var backpackThisLink = document.createElement("a");
var backpackThisImg = document.createElement("img");
var backpackThisText = document.createElement("p");

//Crafting DOM Elements
backpackThisLink.href = "https://backpackbang.com/item?ASIN=" + ue_pti; //"ue_pti" is a variable on Amazon.com which returns Product Id.
backpackThisLink.target = "_blank";
backpackThisLink.style.textDecoration = "none";

backpackThisImg.src = "http://2hr.me/backpack.png";
backpackThisImg.className = "backpack-image";

backpackThisText.className = "backpack-text";
backpackThisText.textContent = "Backpack This";

backpackThis.id = "backpack-this";


backpackThisLink.appendChild(backpackThis);
backpackThis.appendChild(backpackThisImg);
backpackThis.appendChild(backpackThisText);
document.querySelector(".a-button-stack").appendChild(backpackThisLink);
console.log("Product ID:" + ue_pti);
});
