var base = function(game){
    this.game = game;
    this.img = null;
    this.loaded = false;

    var self = this;

    this.x = 0;

    this.init = function(){
        this.loadimg();
    }

    this.loadimg = function(){
        this.img = new Image();  
        this.img.onload = function(){     
            self.loaded = true;
        }
        this.img.src = '../Image/Base.png';
    }

    this.update = function(){
        if(this.game.gameOver == true){
            return;
        }
        this.x -= 2;
        if(this.x == -300){
            this.x = 0;
        }
    }

    this.draw = function(){
        if(self.loaded == false){
            return;
        }
        self.game.context.drawImage(this.img, this.x, 430);
        self.game.context.drawImage(this.img, this.x + 300, 430);
    }
}