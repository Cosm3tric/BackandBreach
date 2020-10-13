console.log('check')
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

var procedes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var key = {
    "1A" : ["5", "3"],
    "2A" : ["5", "3"],
    "3A" : ["2", "9"],
    "4A" : ["8"]
}

var flipValues = {
    "1A": "off",
    "2A": "off",
    "3A": "off",
    "4A": "off"
} 

shufProcedes = shuffle(procedes);

procLen = shufProcedes.length; //Asks for the length of list of images


for (i = 0; i < procLen; i++) {
    var img = document.createElement("img"); // Creates Element img
    img.src = `./img/Procedures/${shufProcedes[i]}.png `;  //Image Src
    img.setAttribute("onclick", `processThis(${shufProcedes[i]})`) //Sets click attribute and ties it to the processThis function
    if (i < 4) {
    document.getElementById("Procedures4").appendChild(img);
    } else {
        document.getElementById("ProceduresRest").appendChild(img);}
};

function processThis(text){
    console.log(text);
    tex = text.toString();
    for (each in flipValues){
        if (flipValues[each] == "off"){
            currentKey = key[each]
            if (currentKey.includes(tex)) {
                var card = document.getElementById(each);
                card.src= `./img/AtkCards/Scene2/${each}.png`;
                flipValues[each] = "on"
            }
            break
            }
    }

}