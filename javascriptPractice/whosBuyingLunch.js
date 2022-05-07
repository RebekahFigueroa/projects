// picks a random name from a list to identify who in the group is buying lunch todya
// written in Chrome browser

var names = ["Angela" , "Ben" , "Jenny" , "Michael" , "Chloe"];

function whosPaying (names) {
    var namesSelection = Math.random() * names.length;
    namesSelection = Math.floor(namesSelection);
    return names[namesSelection] + " is going to buy lunch today!";
}

whosPaying(names);