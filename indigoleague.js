var random_images_array = ["bg_fire.jpg", "bg_water.jpg", "bg_grass.jpg"];
var random_images_array_text = ["home-03.svg", "home-01.svg", "home-02.svg"];

function getRandomImage(imgAr1, imgAr2, path) {
    path = path || 'indigoleague/'; // default path here
    var num = Math.floor( Math.random() * imgAr1.length );
    var img = imgAr1[ num ];
    var img2 = imgAr2[ num ];
    var imgStr = '<img src="' + path + img + '" class="bigImage1">';
    var imgStr2 = '<img src="' + path + img2 + '" class="bigImage2">';
    document.write(imgStr); 
    document.write(imgStr2); document.close();
}