var bird = function(game){
    this.game = game;
    this.img = [];
    this.Img1Loaded = false;
    this.Img2Loaded = false;
    this.Img3Loaded = false;

    this.curFrame = 0;
    this.curImg =0;

    var self = this;

    this.y = 100;
    this.x = 84;
    this.speedY = 0;
    this.aY = 0.5;
    this.down = true;

    this.point = 0;
    this.count = 0;
    
    this.init = function(){
        this.loadImg();
    }

    this.loadImg = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.onload = function(){
            self.Img1Loaded = true;
            curImg = 0;
            self.img.push(img1);
        }
        img2.onload = function(){   
            self.Img2Loaded = true;
            self.img.push(img2);
        }
        img3.onload = function(){
            self.Img3Loaded = true;
            self.img.push(img3);
        }

        //load all
        img1.src = '../Image/Bird1.png';
        img2.src = "../Image/Bird2.png";
        img3.src = "../Image/Bird3.png";      
    }
     
    this.update = function(){
        if(this.game.gameOver == true){
            return;
        }
        this.ChageImg();

        //bird go down
        if(this.down == true){
            this.speedY += this.aY;
            this.y += this.speedY;
        }
        else{
            this.speedY = 0;
            this.speedY -= 12* this.aY
            this.y += this.speedY;
            this.down = true;
        }

        if(this.y >= 430-24){
            this.y = 430-24;
            this.speedY =0;
            this.aY=0;
            this.game.gameOver = true;
            if(this.game.gameOver == true){
                console.clear();
                console.log('point = ' + this.point);
                document.getElementById("h2d").innerHTML = 'point = ' + this.point;
                return;
            }
        }
       
     
        //check game Over
        this.checkGameOver();
        this.checkPoint();
       

    }

    this.flap = function(){
        this.down = false;
    }

    this.draw = function(){
        if(self.Img1Loaded && self.Img2Loaded && self.Img3Loaded){
            self.game.context.drawImage(self.img[self.curImg],85,this.y);
        }
    }

    this.checkGameOver = function(){
        if(this.x + 32 > this.game.pipe.x && 
            this.x < this.game.pipe.x + 52 &&
            (this.y + 24 >= this.game.pipe.y || this.y <= this.game.pipe.y -100))
            {
                
                this.game.gameOver =  true;
            }
        if(this.game.gameOver == true){
            console.clear();
            console.log('point = ' + this.point);
            document.getElementById("h2d").innerHTML = 'point = ' + this.point;
            return;
        }
    }
    this.checkPoint = function(){
        if(this.x == this.game.pipe.x + 52){
            this.point++;
            document.getElementById("h2d").innerHTML = 'point = ' + this.point;
        }
    }

    this.ChageImg = function(){
        if(this.game.gameOver == true){
            return;
        }
        self.curFrame++;
        if(self.curFrame == 10){
            self.curFrame = 0;
            self.curImg++
        }
        if(self.curImg == 3){
            self.curImg =0;

        }
    }
}