/*======================================

VOCES SIN BARRERAS

POSTS.JS

=======================================*/

const posts = [

{

id:1,

title:"¿Qué es la accesibilidad digital?",

category:"Tecnología",

date:"04 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post1.jpg",

description:"Conoce por qué la accesibilidad digital es fundamental para construir una web inclusiva.",

content:"La accesibilidad permite que cualquier persona pueda utilizar un sitio web sin importar sus capacidades.",

video:"https://www.youtube.com/watch?v=EOcVvy1mcYI"

},

{

id:2,

title:"Tecnologías de apoyo",

category:"Innovación",

date:"02 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post2.jpg",

description:"Descubre herramientas que ayudan a personas con discapacidad.",

content:"Los lectores de pantalla, teclados adaptados y asistentes de voz hacen parte de estas tecnologías.",

video:"https://www.youtube.com/watch?v=UrKvl3GwlU0"

},

{

id:3,

title:"Diseño Universal",

category:"Diseño",

date:"01 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post3.jpg",

description:"Cómo crear sitios web que funcionen para todos.",

content:"Aplicar principios de diseño universal mejora la experiencia de todos los usuarios.",

video:"https://www.youtube.com/watch?v=iJAxeTVi4po"

}

];

/*======================================

GENERAR TARJETAS

=======================================*/

const postsContainer = document.getElementById("postsContainer");

function getYouTubeEmbedUrl(url){

if(!url) return "";

try{

const parsedUrl = new URL(url);

let videoId = "";

if(parsedUrl.hostname === "youtu.be"){

videoId = parsedUrl.pathname.replace("/", "");

}else if(parsedUrl.hostname.includes("youtube.com")){

videoId = parsedUrl.searchParams.get("v") || "";

if(!videoId && parsedUrl.pathname.startsWith("/embed/")){

videoId = parsedUrl.pathname.split("/embed/")[1].split("/")[0];

}

}

return videoId ? `https://www.youtube.com/embed/${videoId}` : "";

}catch(error){

return "";

}

}

function renderPosts(list){

if(!postsContainer) return;

postsContainer.innerHTML="";

list.forEach(post=>{

const videoUrl = getYouTubeEmbedUrl(post.video);

postsContainer.innerHTML+=`

<div class="post-card">

<img src="${post.image}" alt="${post.title}">

<div class="post-content">

<span class="post-category">

${post.category}

</span>

<h3>${post.title}</h3>

<p>${post.description}</p>

<small>

${post.author} • ${post.date}

</small>

${videoUrl ? `

<div class="post-video">

<iframe

src="${videoUrl}"

title="${post.title}"

loading="lazy"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

allowfullscreen>

</iframe>

</div>

` : ""}

<br>

<a href="#">

Leer más →

</a>

</div>

</div>

`;

});

}

renderPosts(posts);
