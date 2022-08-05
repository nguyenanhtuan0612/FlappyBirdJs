var game = function () {
  this.canvas = null;
  this.context = null;

  this.wight = 280;
  this.height = 512;

  this.bird = null;
  this.bg = null;
  this.base = null;
  this.pipe = null;

  this.gamoOver = false;

  var self = this;
  this.init = function () {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.canvas.height = this.height;
    this.canvas.wight = this.wight;

    document.body.appendChild(this.canvas);

    //create new bird
    this.bird = new bird(this);
    this.bird.init();

    //create background
    this.bg = new bg(this);
    this.bg.init();

    //create base
    this.base = new base(this);
    this.base.init();

    //create pipe
    this.pipe = new pipe(this);
    this.pipe.init();

    //Listen Mouse and Event
    this.listenMouse();

    this.loop();
  };

  this.loop = function () {
    self.update();
    self.draw();

    setTimeout(self.loop, 33);
  };

  this.update = function () {
    this.bird.update();
    this.bg.update();
    this.base.update();
    this.pipe.update();
  };

  this.draw = function () {
    this.bg.draw();
    this.pipe.draw();
    this.bird.draw();
    this.base.draw();
  };

  this.listenMouse = function () {
    document.addEventListener('keydown', function (event) {
      console.log(event.code);
      if (event.code === 'Space') {
        console.log('click');
        self.bird.flap();
      }
    });
    // document.addEventListener(
    //   'keydown',
    //   function (event) {
    //     console.log(event);
    //     if (lastDownTarget == canvas) {
    //       alert('Keydown event! Key pressed: ' + event.key);
    //     }
    //   },
    //   false
    // );
  };
};

var g = new game();
g.init();
