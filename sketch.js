let currentKey = "A";

let xpos = [];
let ypos = [];

let keyHistory = [];

let rotationAngle = [];
let angle = 0;

let textScale;
let sizeofText = [];

let BGcolorPicker;

let TYPEcolorPicker;

let typeColor;
let colorofType = [];

let rotateimg;
let resizeimg;

let textBox1;
let textBox2;
let textBox3;

let infoButton;
let infoBox;
let boxDisplay = false;

//fonts
let LemonMilk;
let Bebas;
let CodyStar;
let Bodoni;
let Monsterrat;
let OldEnglish;
let Ubuntu;
let Pyros;
let Pixel;
let Radwave;
let Zector; 
let IceDemon;
let Higher;
let Blackbird;
let Concrete;

let whatstheFont;
let chosenFont;
let fontStorage = [];

function preload() {
  LemonMilk = loadFont("LemonMilk.otf");
  Bebas = loadFont("BebasNeueRegular.otf");
  CodyStar = loadFont("CodystarRegular.ttf");
  Bodoni = loadFont("BodoniFLFBold.ttf");
  Monsterrat = loadFont("MontserratRegular.ttf");
  OldEnglish = loadFont("OldeEnglishRegular.ttf");
  Ubuntu = loadFont("UbuntuTitle.ttf");
  Pyros = loadFont("Pyros-Regular.otf")
  Pixel = loadFont("PixelOperatorSC.ttf")
  Radwave = loadFont("RadwaveFont-Demo.otf") 
  Zector = loadFont("Zector.otf")
  IceDemon = loadFont("ice demon.ttf")
  Higher = loadFont("Higher.otf")
  Blackbird = loadFont("PROJEKT Blackbird.otf")
  Concrete = loadFont("Concrete-Regular.otf")
  

  rotateimg = loadImage("rotate.png");
  resizeimg = loadImage("resize.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB);
  noCursor();
  // cursor(CROSS);


  
  
  
  //top bar words
  textBox1 = createP("TYPOGRAMED 1.0");
  textBox1.position((windowWidth / 10) * 0.15, (windowHeight / 10) * 0.1);
  textBox1.style("font-family", "helvetica");

  textBox2 = createP("RESIZE");
  textBox2.position((windowWidth / 10) * 3.84, (windowHeight / 10) * 0.09);
  textBox2.style("font-family", "helvetica");

  textBox3 = createP("ROTATE");
  textBox3.position((windowWidth / 10) * 6.09, (windowHeight / 10) * 0.09);
  textBox3.style("font-family", "helvetica");

  
  //top bar lines
  d1 = createDiv();
  d1.position(0, 0);
  d1.size((windowWidth / 10) * 1.28, (windowHeight / 10) * 0.8);
  d1.style("border", "1.5px solid black");

  d2 = createDiv();
  d2.position(0, 0);
  d2.size((windowWidth / 10) * 2, (windowHeight / 10) * 0.8);
  d2.style("border", "1.5px solid black");

  d3 = createDiv();
  d3.position(0, 0);
  d3.size((windowWidth / 10) * 3.64, (windowHeight / 10) * 0.8);
  d3.style("border", "1.5px solid black");

  d4 = createDiv();
  d4.position(0, 0);
  d4.size((windowWidth / 10) * 5.88, (windowHeight / 10) * 0.8);
  d4.style("border", "1.5px solid black");

  d5 = createDiv();
  d5.position(0, 0);
  d5.size((windowWidth / 10) * 8.09, (windowHeight / 10) * 0.8);
  d5.style("border", "1.5px solid black");

  d6 = createDiv();
  d6.position(0, 0);
  d6.size((windowWidth / 10) * 8.81, (windowHeight / 10) * 0.8);
  d6.style("border", "1.5px solid black");

  d7 = createDiv();
  d7.position(0, 0);
  d7.size((windowWidth / 10) * 9.47, (windowHeight / 10) * 0.8);
  d7.style("border", "1.5px solid black");

  d8 = createDiv();
  d8.position(0, 0);
  d8.size((windowWidth / 10) * 9.979, (windowHeight / 10) * 0.8);
  d8.style("border", "1.5px solid black");
  



  savebutton = createButton("Save");
  savebutton.position((width / 10) * 9, (height / 8) * 0.2);
  savebutton.mousePressed(saveImg);
  
  
  
  infobutton = createButton("?");
  infobutton.position((width / 10) * 9.68, (height / 8) * 0.2);
  infobutton.mousePressed(showInfoBox);
  
  infoBox = createDiv()
  infoBox.position((width / 10) * 8.105,(height / 8) * 0.67)
  infoBox.size((windowWidth / 10)*1.875,(windowHeight/10)*1.8);
  infoBox.style("border", "1.5px solid black");
 
  
  
   let infoText1 = createP('USE KEYBOARD INPUTS TO SELECT WHAT CHARACTER TO DRAW WITH')
  infoText1.position(0,10)
  infoText1.style('font-size:11px')
  infoText1.style('font-family','helvetica')
  infoText1.style('text-align','center')
  
     let infoText2 = createP('USE UP AND DOWN ARROWS TO RESIZE')
  infoText2.position(25,55)
  infoText2.style('font-size:11px')
  infoText2.style('font-family','helvetica')
  infoText2.style('text-align','center')
  
       let infoText3 = createP('USE LEFT AND RIGHT ARROWS TO ROTATE')
  infoText3.position(20,90)
  infoText3.style('font-size:11px')
  infoText3.style('font-family','helvetica')
  infoText3.style('text-align','center')
  
  
  
  infoBox.child(infoText1);
  infoBox.child(infoText2);
  infoBox.child(infoText3);
  infoBox.hide() 
  
  
  
  resetbutton = createButton("Reset");
  resetbutton.position((width / 10) * 8.3, (height / 8) * 0.2);
  resetbutton.mousePressed(reset);

  BGcolorPicker = createColorPicker("#dbdbdb");
  BGcolorPicker.position((width / 10) * 1.48, (height / 8) * 0.18);

  TYPEcolorPicker = createColorPicker("#000000");
  TYPEcolorPicker.position((width / 10) * 2.2, (height / 8) * 0.18);

  RotationSlider = createSlider(0, 360, 0, 0);
  RotationSlider.position((width / 10) * 6.65, (height / 8) * 0.2);
  RotationSlider.style("width", "183px");

  TextScaleSlider = createSlider(15, 1000, 100);
  TextScaleSlider.position((width / 10) * 4.4, (height / 8) * 0.2);
  TextScaleSlider.style("width", "187px");

  whatstheFont = createSelect();
  whatstheFont.style("width", "100px", CENTER);
  whatstheFont.position((width / 10) * 2.77, (height / 8) * 0.21);

  whatstheFont.option("Helvetica");
  whatstheFont.option("Bodoni");
  whatstheFont.option("Lemon Milk");
  whatstheFont.option("Ice Demon");
  whatstheFont.option("Bebas");
  whatstheFont.option("Radwave");
  whatstheFont.option("Higher");
  whatstheFont.option("Monsterrat");
  whatstheFont.option("Pyros");
  whatstheFont.option("Blackbird");
  whatstheFont.option("Zector");
  whatstheFont.option("CodyStar");
  whatstheFont.option("Pixel");
  whatstheFont.option("Concrete");
  whatstheFont.option("Old English");
  whatstheFont.option("Ubuntu");
  
}

function draw() {
  background(BGcolorPicker.color());

  textBox1.style("color", TYPEcolorPicker.value());
  textBox2.style("color", TYPEcolorPicker.value());
  textBox3.style("color", TYPEcolorPicker.value());

  noStroke();
  textSize(15);
  
  chosenFont = whatstheFont.value();

  //rotation of type slider
  angle = RotationSlider.value();

  //size of letter chosen / 'brush' slider
  textScale = TextScaleSlider.value();

  //this is brush - always on screen
  typeColor = TYPEcolorPicker.color();
  fill(typeColor);
  textSize(textScale);

  push();
  translate(mouseX, mouseY);
  rotate(angle);
  

  if (chosenFont === "Helvetica") {
    textFont("Helvetica");
  }
  if (chosenFont === "Monsterrat") {
    textFont(Monsterrat);
  }
  if (chosenFont === "Bodoni") {
    textFont(Bodoni);
  }
  if (chosenFont === "Lemon Milk") {
    textFont(LemonMilk);
  }
  if (chosenFont === "Bebas") {
    textFont(Bebas);
  }
  if (chosenFont === "CodyStar") {
    textFont(CodyStar);
  }
  if (chosenFont === "Old English") {
    textFont(OldEnglish);
  }
  if (chosenFont === "Ubuntu") {
    textFont(Ubuntu);
  }
  if (chosenFont === "Pyros") {
    textFont(Pyros);
  }
  if (chosenFont === "Pixel") {
    textFont(Pixel);
  }
  if (chosenFont === "Radwave") {
    textFont(Radwave);
  }
  if (chosenFont === "Zector") {
    textFont(Zector);
  }  
  if (chosenFont === "Ice Demon") {
    textFont(IceDemon);
  }  
  if (chosenFont === "Higher") {
    textFont(Higher);
  }      
  if (chosenFont === "Blackbird") {
    textFont(Blackbird);
  }       
  if (chosenFont === "Concrete") {
    textFont(Concrete);
  }         
  
  text(currentKey, 0, 0);
  pop();

  //recall from the matched arrays.
  for (let i = 0; i < xpos.length; i++) {
    // text(keyHistory[i], xpos[i], ypos[i]);
    push();
    fill(colorofType[i]);
    textSize(sizeofText[i]);
    translate(xpos[i], ypos[i]);
    rotate(rotationAngle[i]);

    if (fontStorage[i] === "Helvetica") {
      textFont("Helvetica");
    }
    if (fontStorage[i] === "Monsterrat") {
      textFont(Monsterrat);
    }
    if (fontStorage[i] === "Bodoni") {
      textFont(Bodoni);
    }
    if (fontStorage[i] === "Lemon Milk") {
      textFont(LemonMilk);
    }
    if (fontStorage[i] === "Bebas") {
      textFont(Bebas);
    }
    if (fontStorage[i] === "CodyStar") {
      textFont(CodyStar);
    }
    if (fontStorage[i] === "Old English") {
      textFont(OldEnglish);
    }
    if (fontStorage[i] === "Ubuntu") {
      textFont(Ubuntu);
    }
     if (fontStorage[i] === "Pyros") {
      textFont(Pyros);
    }
     if (fontStorage[i] === "Pixel") {
      textFont(Pixel);
    }
     if (fontStorage[i] === "Radwave") {
      textFont(Radwave);
    }
     if (fontStorage[i] === 'Zector') {
      textFont(Zector);
    }
     if (fontStorage[i] === 'Ice Demon') {
      textFont(IceDemon);
    }
     if (fontStorage[i] === 'Higher') {
      textFont(Higher);
    }               
     if (fontStorage[i] === 'Blackbird') {
      textFont(Blackbird);
    }   
     if (fontStorage[i] === 'Concrete') {
      textFont(Concrete);
    }    
        
    text(keyHistory[i], 0, 0);
    pop();
  }
  

  // KEYBOARD ROTATE INPUT
  if (keyIsPressed) {
    if (keyCode === RIGHT_ARROW) {
      // angle +=1
      if (RotationSlider.value() > 359) {
        RotationSlider.value(0);
      }
      RotationSlider.value(RotationSlider.value() + 1.2);
    }
  }

  // KEYBOARD ROTATE INPUT
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      if (RotationSlider.value() < 1) {
        RotationSlider.value(360);
      }
      RotationSlider.value(RotationSlider.value() - 1.2);
    }
  }

  //KEYBOARD SCALE INPUT
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      TextScaleSlider.value(TextScaleSlider.value() + 1.3);
    }
  }

  //KEYBOARD SCALE INPUT
  if (keyIsPressed) {
    if (keyCode === DOWN_ARROW) {
      TextScaleSlider.value(TextScaleSlider.value() - 1.3);
    }
  }
}

function mousePressed() {
  // one frame when its pressed
  // text("A",mouseX,mouseY)

  // if the mouse is less than the bottom eight of the        screen, then its ok to push the  arrays / draw .          otherwise ignore pushing
  if (mouseY > (height / 8) * 0.8) {
    // store the current position of the mouseX/Y                position in associated arrays
    xpos.push(mouseX);
    ypos.push(mouseY);

    // console.log(xpos);
    // console.log(xpos.length);

    keyHistory.push(currentKey);
    // console.log(keyHistory);

    rotationAngle.push(angle);
    //console.log(rotationAngle);

    sizeofText.push(textScale);
    // console.log(textScale);

    colorofType.push(typeColor);
    // console.log(colorofType);

    fontStorage.push(chosenFont);
    // console.log(whatstheFont.value());
  }
}

function saveImg() {
  save("sketch.png");
}

function reset() {
  fontStorage = [];
  colorofType = [];
  xpos = [];
  ypos = [];
  keyHistory = [];
  rotationAngle = [];
  sizeofText = [];
}

function showInfoBox(){
    //show/hide the info box
  
  //toggle this variable between true/false... console log it to see what's going on.
  boxDisplay = !boxDisplay
  
  if(boxDisplay === true){
      infoBox.show() 

  }else{
    infoBox.hide() 

  }
  
}


function keyPressed() {
  // if (keyCode === RIGHT_ARROW){
  // RotationSlider.value(+20)
  // }
}

function keyTyped() {
  //one frame when a key is typed

  //key stores what key was pressed, store it above so we can use it in draw.
  // (you might want to make this caps later or use a UI element to change case.)
  currentKey = key;
}
