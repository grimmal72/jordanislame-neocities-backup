//var img = document.createElement("img");

//function randomizer() {
//    integer = 0;
//    if (integer == 0) {
//        img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
//        document.getElementById("diceplace") = img.src;
//    }
//    if (integer == 1) {
//        img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
//        document.getElementById("diceplace") = img.src;
//    }
//}
//
//randomizer();

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
    img.width = 100;
    img.height = 100;
    img.alt = "too bad";

    let randomNumber = Math.floor(Math.random() * 6);

    switch (randomNumber) {
        case 0:
            img.src = "dieface1.png";
            break;
        case 1:
            img.src = "dieface2.png";
        break;
        case 2:
            img.src = "dieface3.png";
        break;
        case 3:
            img.src = "dieface4.png";
        break;
        case 4:
            img.src = "dieface5.png";
        break;
        case 5:
            img.src = "dieface6.png";
        break;
    }

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}