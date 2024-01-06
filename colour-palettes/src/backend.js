const fetch = require('node-fetch');
const sharp = require('sharp');

// Takes a string input and returns a list of 2 palettes. Output format: [[1,1,1,1,1], [2,2,2,2,2]] where 1 and 2 represent hex formatted colors from palette 1 and palette 2.
// Can be changed to return 1 palette by tweaking extractDominantColors().
function getPaletteFromText(input) {
    query({ "inputs": "Color Palette - " + input })
        .then(extractDominantColors)
        .then(colors => {
            return colors; 
        })
        .catch(console.error);
}

// Takes RGB color as input and returns a hex palette. Input format: [[x,y,z], "N", "N", "N", "N"] Output format: [0,1,2,3,4]
//Can be used in 1 of 2 cases:
// Case 1: User selects a single color to generate a palette from. Input format (RGB): [[x,y,z], "N", "N", "N", "N"] Output format (Hex): [0,1,2,3,4]
// Case 2: User locks in multiple colors to regenerate a palette. Input format (RGB): [[x,y,z], [x,y,z], [x,y,z], "N", "N"] Output format (Hex): [0,1,2,3,4]
async function getPaletteFromColor(input) {
    const url = 'http://colormind.io/api/';
    const data = {
      model: 'default',
      input: input,
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const result = await response.json();
    //console.log(result)
    return result.result.map(color => rgbToHex(...color));
}
  

//Takes no input and generates a random 5 color palette in hex. Output format: [0,1,2,3,4]
async function getRandomPalette() {
    const url = 'http://colormind.io/api/';
    const data = {
      model: 'default',
    };
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const result = await response.json();
    console.log(result)
    return result.result.map(color => rgbToHex(...color));
}

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/KappaNeuro/color-palette",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const buffer = await response.buffer();
    return buffer;
}

async function extractDominantColors(buffer) {
    const metadata = await sharp(buffer).metadata();
    const bottomHeight = Math.floor(metadata.height * 0.05);

    // Divide the image into segments and extract the dominant color from each
    const swatchWidth = Math.floor(metadata.width / 10);
    const colors = [];

    for (let i = 0; i < 10; i++) {
        // Extract a strip from each color swatch
        const stripBuffer = await sharp(buffer)
            .extract({
                left: i * swatchWidth,
                top: metadata.height - bottomHeight,
                width: swatchWidth,
                height: bottomHeight
            })
            .toColorspace('srgb')
            .resize(1, 1, { fit: 'cover' })
            .raw()
            .toBuffer();

        // Convert the single pixel to RGB hex
        const [r, g, b] = stripBuffer;
        colors.push(rgbToHex(r, g, b));
    }


    // return [colors[0], colors[2], colors[4], colors[6], colors[8]]; // if we only want 1 palette, uncomment this line

    // Rearrange the colors into two palettes
    const palette1 = [colors[0], colors[2], colors[4], colors[6], colors[8]];
    const palette2 = [colors[1], colors[3], colors[5], colors[7], colors[9]];
    const twoPalettes = [palette1, palette2];

    return twoPalettes;

    
}

// Helper function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}
