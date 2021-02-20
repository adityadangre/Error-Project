class Form{
    constructor(){
       this.input = createInput("Enter Your Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Click Reset and Refresh your Page');
       this.g2 = createElement('h4');
    }
    hide() {
        this.greeting.hide();
        this.g2.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(655,400);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');
        this.input.style('font-size', '20px');
        this.button.position(660,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.button.style('font-size', '25px');
        this.reset.position(1050,650);
        this.reset.style('width', '200px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-size', '15px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(300,250);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size', '80px');
            this.g2.html("Wait For Another Player.... ")
            this.g2.position(300,350);
            this.g2.style('color', 'yellow');
            this.g2.style('font-size', '80px');
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            game.updateplayerAtEnd("");
        })

    }
}