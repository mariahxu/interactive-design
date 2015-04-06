var random_images_array = ["bg_fire.jpg", "bg_water.jpg", "bg_grass.jpg"];
var random_images_array_text = ["home-03.svg", "home-01.svg", "home-02.svg"];

function getRandomImage(imgAr1, imgAr2, path) {
    path = path || 'indigoleague/'; // default path here
    var num = Math.floor( Math.random() * imgAr1.length );
    var img = imgAr1[ num ];
    var img2 = imgAr2[ num ];
    var imgStr = '<img src="' + path + img + '" alt = ""style="width:100%; position:fixed;">';
    var imgStr2 = '<img src="' + path + img2 + '" alt= ""style="width: 100%; position: absolute; padding: 10px">';
    document.write(imgStr); 
    document.write(imgStr2); document.close();
}