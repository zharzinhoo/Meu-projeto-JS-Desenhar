     //by: zhar

     function setup() {
        createCanvas(2600, 2600);
          background("white");
      }
      
      function draw() {
        
        stroke("blue");
        fill("red");
      
       // console.log(mouseIsPressed); 
        
          if (mouseIsPressed) {
          rect(mouseX, mouseY, 100, 100); 
          }
      }