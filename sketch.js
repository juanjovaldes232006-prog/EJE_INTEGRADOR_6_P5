let faceMesh;
let video;
let faces = [];
let options = {
  maxFaces: 1,
  refineLandmarks: false,
  flipHorizontal: false
};
<<<<<<< HEAD
=======
let img;
let img2;
let img3;
>>>>>>> 901b3ed93ec0be1861f6eaf5c553aa717c304f32

let triangles;

function preload() {
<<<<<<< HEAD
 
=======

img = loadImage('/assets/ojo1.png');
img2 = loadImage('/assets/pomulo1.png');
img3 = loadImage('/assets/menton1.png');
>>>>>>> 901b3ed93ec0be1861f6eaf5c553aa717c304f32
  faceMesh = ml5.faceMesh(options);
}

function setup() {
<<<<<<< HEAD
  createCanvas(640, 480);


  video = createCapture(VIDEO);
  video.size(640, 480);
=======
  createCanvas(1000, 1000);



  video = createCapture(VIDEO);
  video.size(1000, 1000);
>>>>>>> 901b3ed93ec0be1861f6eaf5c553aa717c304f32
  video.hide();

  triangles = faceMesh.getTriangles();
  faceMesh.detectStart(video, gotFaces);
<<<<<<< HEAD
=======
}

function draw() {

  image(video, 0, 0, 1000, 1000);

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
    let glabela = face.keypoints[168];
    fill(255, 0, 0); // rojo
    noStroke();
    
    //img(ojoDerechoX,ojoDerechoY,15);

    let superiorDer = face.keypoints[336];
    let inferiorDer = face.keypoints[374];
    let ojoDerechoX = (superiorDer.x + inferiorDer.x) / 2;
    let ojoDerechoY = (superiorDer.y + inferiorDer.y) / 2;
    fill(0, 0, 255); // Color azul (puedes cambiarlo)
    noStroke();
    image(img,ojoDerechoX, ojoDerechoY,100,40);
    
  //circle(ojoDerechoX, ojoDerechoY, 15);


    let nariz = face.keypoints[5];

    fill(255, 0, 0); // rojo
    noStroke();
    circle(nariz.x, nariz.y, 20);

    let boca = face.keypoints[14];
    if (boca) {
      fill(0, 0, 255); // Azul para la boca
      circle(boca.x, boca.y, 20);

      image(img,nariz.x,nariz.y,100,40);
      image(img2,nariz.x,nariz.y,100,40);
      image(img3,boca.x,boca.y,100,40);
    }
  }
}

function gotFaces(results) {
  faces = results;
>>>>>>> 901b3ed93ec0be1861f6eaf5c553aa717c304f32
}

function draw() {

  image(video, 0, 0, width, height);

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

    let nariz = face.keypoints[5];

    fill(255, 0, 0); // rojo
    noStroke();
    circle(nariz.x, nariz.y, 20);
  }
}

function gotFaces(results) {
  faces = results;
}