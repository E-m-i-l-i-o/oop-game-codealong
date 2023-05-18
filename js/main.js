class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 20;
    this.height = 20;

    this.domElement = null;//here we will store a reference to the DOM element ofthe player


    this.createDomElement();


  }

  createDomElement(){
    // step1: create the element
    const this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw" //We do responsive design, so we are creating the shape of the player as a percentage of teh screen  
    this.domElement.style.height = this.height + "vh"//we are here defining the unit as a percentage of viewport by using string concatenaiton ->viewport width percentage 'vw'
    this.domElement.style.bottom = this.positionY + 'vh'; // we stabilsh the player's 'position' look at css board as relative and the player position as an absolute
    this.domElement.style.left = this.positionX + "vw"; // we only do left here because in css we anchor the absolute position relative to the left of the board (relative)

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  
}


  moveLeft() {
    this.positionX = this.positionX - 1; //this positionX--
    this.domElement.style.left = this.positionX + "vw";// when we call this method we are moving the position and now it will also affect the css in the browser(the DOM)

    console.log(`new position.... ${this.positionX}`);
  }

  moveRight() {
    this.positionX = this.positionX + 1; //this positionX++
    console.log(`new position.... ${this.positionY}`);
  }
}

class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 20;
        this.height = 10;

        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const player = new Player(); //an instance of the class Player. our player.


const obstaclesArr = []; // this array will store instances of the class Obstacle
                        //we put it outside teh methods below so that all can access it

// Create new obstacles
setInterval(() => {
    const newObstacle = new Obstacle(); //new instance every 1000
    console.log(newObstacle)
    obstaclesArr.push(newObstacle);//want to push new instances into the osbstaclesArr above
 }, 3000); //this is how often new obstacles appear from above, if changed, more/less obstacles
 
 //dont nest intervals or timers WITH DIFFERENT TIMES IN THEM one inside each other

 // Move all obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => { //teh forEach loop will iterate within the array
        obstacleInstance.moveDown();//because we have created the obstacleInstance function, now we can apply the method .moveDown()
                                    // now we can move all obstacles            
    });
}, 60); //this is how often we move the obstacles
 




// // attach event listeners...
// elm.addEventListener(nameOfEvent, code)
document.addEventListener("keydown", (bananaEvent) => {
  console.log("user pressed a key.....");
  console.log(bananaEvent.code);
  // for moveing left or right
  if (bananaEvent.code === "ArrowLeft") {
    player.moveLeft();
  } else if (bananaEvent.code === "ArrowRight") {
    player.moveRight();
  }
});

player.moveLeft();
