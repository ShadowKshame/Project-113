function preload() {
}
    
    function setup()
    {
        canvas = createCanvas(640, 480);
        canvas.position(110, 250);
        video = createCapture(VIDEO);
        video.hide();


        tint_color = "";
    }
    function draw() {
        image(video, 0, 0, 640, 480);
        tint(tint_color);
        fill("red");
        stroke("green");
        noFill();
        rect(40,40,560,400)
        fill("red");
        circle(40, 40, 20);
        circle(600, 40, 20);
        circle(40, 440, 20);
        circle(600, 440, 20);
    }

    function take_snapshot() {
        save('student_name.png');
    }

    function filter_tint()
    {
        tint_color = document.getElementById("color_name").value; 
    }
