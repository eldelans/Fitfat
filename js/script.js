
const header=document.querySelector("header");
header.innerHTML=`
<nav>
    <div>
        <a href="index.html" target="_blank"><img src="img/Logocompleto.png" alt="Fitfat" title="Fitfat" width="200"></a>
    </div>
    <div>
        <ul>
            <li><a href="index.html">INICIO</a></li>
            <li><a href="nosotros.html">NOSOTROS</a></li>
            <li><a href="ingresa.html">INGRESA</a></li>
            <li><a href="beneficios.html">BENEFICIOS</a></li>
            <li><a href="precios.html">PRECIOS</a></li>
            <li><a href="comunidad.html">COMUNIDAD</a></li>
            <li><a href="app.html">APP</a></li>
            
			<li><a ><input type="text" placeholder="plan, precios    ">
			<input type="submit" class="btn_search" value="Buscar"></a></li>
        </ul>
    </div>
</nav>

`;

const footer =document.querySelector("footer");
footer.innerHTML= `
<a href="index.html" target=""><img src="img/Logocompleto.png" alt="Fitfat" width="200"></a>
<br>
<a href="nosotros.html">¿Qué es FITFAT?</a>	
<h4>Derechos de autor © 2023 | Fitfat.com</h4>
<p> Síguenos en nuestras redes sociales</p>
<a href="">Facebook</a>
<a href="">Instagram</a>
<a href="">YouTube</a>
<a href="">Tiktok</a><br>
<p>Contactanos</p>
987654321
`;
/*Menu Guia */

guia.addEventListener("click", (g) =>{
    g.preventDefault();
    const sectionG =document.querySelector(".guia");
    sectionG.scrollIntoView({behavior: "smooth"});
})

/*Menu Funcioens */

funciones.addEventListener("click", (f) =>{
    f.preventDefault();
    const sectionF =document.querySelector(".funciones");
    sectionF.scrollIntoView({behavior: "smooth"});
})
