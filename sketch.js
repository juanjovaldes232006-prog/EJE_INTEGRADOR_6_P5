let faceMesh;
let video;
let faces = [];
let options = {
  maxFaces: 1,
  refineLandmarks: false,
  flipHorizontal: false
};

let triangles;

function preload() {

  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);


  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  triangles = faceMesh.getTriangles();
  faceMesh.detectStart(video, gotFaces);
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
    let glabela = face.keypoints[168];
    fill(255, 0, 0); // rojo
    noStroke();
    circle(glabela.x, glabela.y, 20);

    let superiorDer = face.keypoints[386];
    let inferiorDer = face.keypoints[374];
    let ojoDerechoX = (superiorDer.x + inferiorDer.x) / 2;
    let ojoDerechoY = (superiorDer.y + inferiorDer.y) / 2;
    fill(0, 0, 255); // Color azul (puedes cambiarlo)
    noStroke();
    circle(ojoDerechoX, ojoDerechoY, 15);


    let nariz = face.keypoints[5];

    fill(255, 0, 0); // rojo
    noStroke();
    circle(nariz.x, nariz.y, 20);

    let boca = face.keypoints[14];
    if (boca) {
      fill(0, 0, 255); // Azul para la boca
      circle(boca.x, boca.y, 20);
    }
  }
}

function gotFaces(results) {
  faces = results;
}
