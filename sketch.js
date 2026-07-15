let faceMesh;
let video;
let faces = [];
let options = {
  maxFaces: 1,
  refineLandmarks: false,
  flipHorizontal: false
};

let ojoDer = [];
let pomuloDer = [];
let mentonDer = [];

let ojoIzq = [];
let pomuloIzq = [];
let mentonIzq = [];

let indiceOjoDer = 0;
let indicePomuloDer = 0;
let indiceMentonDer = 0;

let indiceOjoIzq = 0;
let indicePomuloIzq = 0;
let indiceMentonIzq = 0;

let fuente;


let estado =0;
let boton;
let triangles;

let fotofinal;

function preload() {

fuente= loadFont("assets/BebasNeue-Regular.ttf");

 ojoDer.push(loadImage("assets/ojoDer1.png"));
  ojoDer.push(loadImage("assets/ojoDer2.png"));
 /* ojoDer.push(loadImage("assets/ojo3.png"));
  ojoDer.push(loadImage("assets/ojo4.png"));
  ojoDer.push(loadImage("assets/ojo5.png"));*/

  pomuloDer.push(loadImage("assets/pomuloDer1.png"));
  pomuloDer.push(loadImage("assets/pomuloDer2.png"));
  /*pomuloDer.push(loadImage("assets/pomulo3.png"));
  pomuloDer.push(loadImage("assets/pomulo4.png"));
  pomuloDer.push(loadImage("assets/pomulo5.png"));*/

  mentonDer.push(loadImage("assets/mentonDer1.png"));
  mentonDer.push(loadImage("assets/mentonDer2.png"));
  /*mentonDer.push(loadImage("assets/menton3.png"));
  mentonDer.push(loadImage("assets/menton4.png"));
  mentonDer.push(loadImage("assets/menton5.png"));*/

  ojoIzq.push(loadImage("assets/ojoIzq1.png"));
  ojoIzq.push(loadImage("assets/ojoIzq2.png"));
 /* ojoIzq.push(loadImage("assets/ojoIzq3.png"));
  ojoIzq.push(loadImage("assets/ojoIzq4.png"));
  ojoIzq.push(loadImage("assets/ojoIzq5.png"));*/

  pomuloIzq.push(loadImage("assets/pomuloIzq1.png"));
  pomuloIzq.push(loadImage("assets/pomuloIzq2.png"));
  /*pomuloIzq.push(loadImage("assets/pomuloIzq3.png"));
  pomuloIzq.push(loadImage("assets/pomuloIzq4.png"));
  pomuloIzq.push(loadImage("assets/pomuloIzq5.png"));*/

  mentonIzq.push(loadImage("assets/mentonIzq1.png"));
  mentonIzq.push(loadImage("assets/mentonIzq2.png"));
  /*mentonIzq.push(loadImage("assets/mentonIzq3.png"));
  mentonIzq.push(loadImage("assets/mentonIzq4.png"));
  mentonIzq.push(loadImage("assets/mentonIzq5.png")); */

  // cargar imagenes de rasgos 
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(windowWidth,windowHeight);



  video = createCapture(VIDEO);
  video.size (windowWidth,windowHeight);
  video.hide();

  triangles = faceMesh.getTriangles();
  faceMesh.detectStart(video, gotFaces);

  boton = createButton("¿Listo?");
boton.position(width/2,600);
boton.mousePressed(finalizar);
  
}

function draw() {

  image(video, 0, 0, windowWidth,windowHeight);

  for (let i = 0; i < faces.length; i++) {

    let face = faces[i];
    for (let j = 0; j < triangles.length; j++) {

      let indices = triangles[j];

      let pointAIndex = indices[0];
      let pointBIndex = indices[1];
      let pointCIndex = indices[2];

      let pointA = face.keypoints[pointAIndex];
      let pointB = face.keypoints[pointBIndex];
      let pointC = face.keypoints[pointCIndex];

      noFill();
      stroke(0, 0, 0);
      strokeWeight(0);

      triangle(
        pointA.x, pointA.y,
        pointB.x, pointB.y,
        pointC.x, pointC.y
      );
    }
    
    let ojo1 = face.keypoints[151];
    let pomulo1 = face.keypoints[197];
    let menton1 = face.keypoints[2];
     

    let ojo2 = face.keypoints[151];
    let pomulo2 = face.keypoints[197];
    let menton2 = face.keypoints[2];


    /*let ojo3 = face.keypoints[9];
    let pomulo3 = face.keypoints[197];
    let menton3 = face.keypoints[164];
     

    let ojo4 = face.keypoints[71];
    let pomulo4 = face.keypoints[35];
    let menton4 = face.keypoints[138];


    let ojo5 = face.keypoints[9];
    let pomulo5 = face.keypoints[168];
    let menton5 = face.keypoints[0];*/


    let ojoIzq1 = face.keypoints[103];
    let pomuloIzq1 = face.keypoints[143];
    let mentonIzq1 = face.keypoints[147];
     

    let ojoIzq2 = face.keypoints[103];
    let pomuloIzq2 = face.keypoints[143];
    let mentonIzq2 = face.keypoints[147];


    /*let ojoIzq3 = face.keypoints[263];
    let pomuloIzq3 = face.keypoints[168];
    let mentonIzq3 = face.keypoints[0];
     

    let ojoIzq4 = face.keypoints[263];
    let pomuloIzq4 = face.keypoints[35];
    let mentonIzq4 = face.keypoints[138];*/

    let anchocara = dist(ojo1.x, ojo1.y,ojoIzq1.x,ojoIzq1.y);
    let anchoojo = anchocara*0.50;
    let ancho = anchocara*1.40;
    let alto = ancho*0.55;

    let anchocara2 = dist(pomulo1.x, pomulo1.y,pomuloIzq1.x,pomuloIzq1.y);
    let anchopomulo = anchocara2*0.50;
    let ancho2 = anchocara2*1.25;
    let alto2 = ancho2*0.50;

    let anchocara3 = dist(pomulo1.x, pomulo1.y,pomuloIzq1.x,pomuloIzq1.y);
    let anchomenton = anchocara3*0.50;
    let ancho3 = anchocara3*1.35;
    let alto3 = ancho3*0.65;
    //rasgos
    image(ojoDer[indiceOjoDer], ojo1.x, ojo1.y,ancho, alto);
    image(pomuloDer[indicePomuloDer],pomulo1.x,pomulo1.y,ancho2,alto2);
    
    image(mentonDer[indiceMentonDer],menton1.x,menton1.y,ancho3,alto3);
    
    image(ojoIzq[indiceOjoIzq],ojoIzq1.x,ojoIzq1.y,ancho,alto);
    
    image(pomuloIzq[indicePomuloIzq],pomuloIzq1.x,pomuloIzq1.y,ancho2,alto2);
    
    image(mentonIzq[indiceMentonIzq],mentonIzq1.x,mentonIzq1.y,ancho3,alto3);
    
    if(estado == 0){//camara

}
if(estado == 1){    
background(0);
if(fotofinal){
     imageMode(CENTER);
        image(fotofinal,400,height/2, 700,500);
    fill(255);
textFont(fuente);
textAlign(CENTER,CENTER);
textSize(45);
text("Que bien te ves, Frankenstein!",1000,height/2);
        
    }

}

  }
}

function finalizar(){
   fotofinal = get ();
   boton.hide();
   saveCanvas('ElRostroDeMisSueños','png');
estado = 1;
}

function gotFaces(results) {
  faces = results;
}

function mousePressed(){

    if(faces.length == 0) return;

    let face = faces[0];

    let ojo1 = face.keypoints[9];

    if(
        mouseX > ojo1.x &&
        mouseX < ojo1.x + 180 &&
        mouseY > ojo1.y &&
        mouseY < ojo1.y + 60
    ){

        indiceOjoDer++;

        if(indiceOjoDer >= ojoDer.length){
            indiceOjoDer = 0;
        }

    }

    let pomulo1 = face.keypoints[197];
    if(
        mouseX > pomulo1.x &&
        mouseX < pomulo1.x + 180 &&
        mouseY > pomulo1.y &&
        mouseY < pomulo1.y + 60
    ){
        indicePomuloDer = (indicePomuloDer + 1) % pomuloDer.length;
    }

    let menton1 = face.keypoints[0];
     if(
        mouseX > menton1.x &&
        mouseX < menton1.x + 180 &&
        mouseY > menton1.y &&
        mouseY < menton1.y + 60
    ){
        indiceMentonDer = (indiceMentonDer + 1) % mentonDer.length;
    }

    let ojoIzq1 = face.keypoints[21];
    if(
        mouseX > ojoIzq1.x &&
        mouseX < ojoIzq1.x + 180 &&
        mouseY > ojoIzq1.y &&
        mouseY < ojoIzq1.y + 60
    ){
        indiceOjoIzq = (indiceOjoIzq + 1) % ojoIzq.length;
    }

    let pomuloIzq1 = face.keypoints[116];
    if(
        mouseX > pomuloIzq1.x &&
        mouseX < pomuloIzq1.x + 180 &&
        mouseY > pomuloIzq1.y &&
        mouseY < pomuloIzq1.y + 60
    ){
        indicePomuloIzq = (indicePomuloIzq + 1) % pomuloIzq.length;
    }

    let mentonIzq1 = face.keypoints[213];
    if(
        mouseX > mentonIzq1.x &&
        mouseX < mentonIzq1.x + 180 &&
        mouseY > mentonIzq1.y &&
        mouseY < mentonIzq1.y + 60
    ){
        indiceMentonIzq = (indiceMentonIzq + 1) % mentonIzq.length;
    }

    
}
    

// falta crear cada mouse para cada rasgo
