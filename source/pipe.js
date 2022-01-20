var pipe = function(game){
    this.game = game;
    this.imgUp = null;
    this.imgDown = null;
    this.loaded = false;

    var self = this;

    this.Speed = 4;
    this.coefficient = 0;

    this.x = 300;
    this.listv = [4,4.5,4.8,5.4,6];

    this.init = function(){
        this.loadimg();
        this.randomY();
    }

    this.loadimg = function(){
        this.imgUp = new Image();  
        this.imgUp.onload = function(){     
            self.loaded = true;
        }
        this.imgUp.src = '../Image/Uppipe.png';

        this.imgDown = new Image();  
        this.imgDown.onload = function(){     
            self.loaded = true;
        }
        this.imgDown.src = '../Image/Downpipe.png';
    }

    this.update = function(){
        if(this.game.gameOver == true){
            return;
        }
        this.x -=  4;
        if(this.x <= -52){
            this.x = 300;
            this.randomY();
        }
    }

    this.randomY  = function(){
        this.y = 160 + (Math.random() * 210);
    }

    this.draw = function(){
        if(self.loaded == false){
            return;
        }
        self.game.context.drawImage(this.imgUp, this.x, this.y);
        self.game.context.drawImage(this.imgDown, this.x, this.y - 100 -270);

    }

    this.checkSpeed = function(){
        if(this.game.bird.point % 5 == 0 && this.coefficient < 5 ){
            this.coefficient = this.game.bird.point / 5;
            this.Speed = this.listv[this.coefficient];
            console.log(this.Speed);
        }
        if(this.game.bird.point > 25){
            this.Speed = 7.2;
        }
    }
}