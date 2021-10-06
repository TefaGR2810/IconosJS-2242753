//No supe como colocar los links a las imagenes 

let socialMedia = {
    facebook: 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planetoftheweb',
    flickr: 'http://flickr.com/planetotheweb',
    youtube: 'http://youtube.com/planetoftheweb'
};

let redes = document.getElementById("redes");
let redes1 = document.getElementById("redes1");
let imagenes, cont, info;

imagenes = ["images/facebook.png",
    "images/flickr.png",
    "images/google.png",
    "images/linkedin.png",
    "images/meetup.png",
    "images/twitter.png",
    "images/wordpress.png",
    "images/youtube.png",
];

info = "<ul class='ul'>";
for (cont = 0; cont < imagenes.length; cont++) {
    info += "<li>" + "<a href='" + imagenes[cont] + "'>" + "<img src='" + imagenes[cont] + "'>" + "</a>" + "</li>";
}

info += "</ul>";

redes.innerHTML = info;
redes1.innerHTML = info;