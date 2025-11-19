// 最終課題を制作しよう
//演習問題3-2の進化版。海の中です


//魚用の変数
let fishX, fishY; //魚の位置
let fishVx;//魚の速度

//エサの変数
let foodX, foodY;
let foodVy;

function setup(){
  createCanvas(windowWidth, windowHeight);

// 魚の初期位置と速度
  fishX = 100;                // 左端からスタート
  fishY = height * 0.5;       // 海の中を泳ぐ位置
  fishVx = 5;                 // 右向きに進むスピード

}

function draw(){
  background(64, 192, 64);

//魚の大きさ
  const size = height * 0.1;

//海を描く
 const groundY = height * 0.3;
  fill(160, 192, 255);
  rect(0, groundY, width, height - groundY);

// もしエサが落ちていたら動かす
  if(foodFalling){
    foodY += foodVy;
    }

// エサを描く
    fill(255, 255, 0);
    ellipse(foodX, foodY, 20);


 // 魚を動かす（エサがあるときはエサへ向かう）
  if(foodFalling){
      fishVx = (foodX - fishX) * 0.05; // エサと魚の距離×0.05の速度。エサに近づくほどスピードがゆっくりになる
    } 
  }

 fishX += fishVx;

// エサを食べた判定 
    let d = dist(fishX, fishY, foodX, foodY);
    if(d < size * 0.6){   // 距離が近い
      foodFalling = false; // エサを消す
    }
  


 
 // 魚を描く
  drawFish(fishX, fishY, size, fishVx);


// 尾びれつき魚を描く関数
function drawFish(cx, cy, size, vx){

  // 魚の色
  fill(255, 100, 100);

  // 魚の向きに応じて反転（左向きなら体を反転）
  push();
  translate(cx, cy); //魚の中心を原点にしている
  if(vx < 0){  // 魚が左向きに進んでいたら反転　
    scale(-1, 1);
  }

  // 体（楕円）
  ellipse(0, 0, size * 1.3, size);

  // 尾びれ（三角形）
  fill(255, 80, 80);
  triangle(
    -size * 0.5, 0,// 尾の先端
    -size * 0.9, -size * 0.3,// 上の付け根
    -size * 0.9, size * 0.3// 下の付け根
  );

  // 目
  fill(0);
  ellipse(size * 0.4, -size * 0.1, size * 0.12);

  pop();
}

// スペースキーでエサを落とす
function keyPressed(){
  if(key === " "){
    foodX = random(width);
    foodY = 0;
    foodVy = 5;
    foodFalling = true;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);



}
