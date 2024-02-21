// setup
let canvas  = document.querySelector('#canvas');
let context = canvas.getContext('2d');

// input
let input      = document.querySelector('#image_text');
input.disabled = true;

// image stuff
let image = new Image();
image.src = 'Fim_de_tarde_em_Noronha_small.jpg';

image.addEventListener('load', function() {
    context.drawImage(image, 0, 0);
    input.disabled = false;
});

// listener for input, triggers when text changes
input.addEventListener('input', function() {
    // access text in input
    let text = this.value;

    context.drawImage(image, 0, 0);  // redraw
    context.font      = '30px Arial';
    context.fillStyle = 'maroon';
    context.fillText(text, 300, 50);
});
