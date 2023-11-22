let canvas;
let img;
let input;
let button;

function setup() {
    canvas = createCanvas(350, 350);
    canvas.style("display", "block");

    input = createFileInput(handleInput);
    input.position(0, 0);
    input.size(500);

    button = createButton("Convert to CSV");
    button.position(0, 20);
    button.size(100);
    button.mousePressed(convertToCSV);
}

function draw() {
    background("#434343");

    //Display the uploaded image
    if (img) image(img, 0, 0, width, height);
}

//Handle the file input of images
function handleInput(file) {
    //If the file that has been upload is an image load it, if not then set img to null
    if (file.type === "image") {
        img = loadImage(file.data, "");
    } else {
        img = null;
    }
}

//Convert the image to csv
function convertToCSV() {
    if (!img) alert("Please select an image"); //If there's no image, ask the user to select one

    console.log(img);
    let array = image_processing.makeAnEmpty2DArray(img);
    array = image_processing.ConvertBlackAndWhiteImageToAnArray(array, img);
    image_processing.convertArrayToCSV(array);
}
