// ----------------------------------- NAV DE RESPUESTA, FUNCIONALIDAD DEL NAV EN DIMENSIONES MOVILES ------------

const btn = document.querySelector('.navBtn')

const menuMobile = document.querySelector('.ul_mobile')

const liElements = document.querySelectorAll('.ul_mobile_elements');

btn.addEventListener('click',()=>{
    menuMobile.classList.toggle('active');
    btn.classList.toggle('active')
})

liElements.forEach(i => i.addEventListener('click',()=>{
    menuMobile.classList.remove('active')
    btn.classList.remove('active')
}))


if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }


//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e){
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            ejecutarSlider(arrItem[1]);
            return false;
        });
    });
}
 
function ejecutarSlider(side){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    for(var i=0; i<elements.length;i++){

        if(elements[i].style.opacity==1){
            curElement = i;
            break;
        }
    }
    if(side == 'prev' || side == 'next'){

        if(side=="prev"){
            nextElement = (curElement == 0)?elements.length -1:curElement -1;
        }else{
            nextElement = (curElement == elements.length -1)?0:curElement +1;
        }
    }else{
        nextElement = side;
        side = (curElement > nextElement)?'prev':'next';

    }
    //RESALTA LOS PUNTOS
    let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
    elementSel[curElement].classList.remove("item-select-slid");
    elementSel[nextElement].classList.add("item-select-slid");
    elements[curElement].style.opacity=0;
    elements[curElement].style.zIndex =0;
    elements[nextElement].style.opacity=1;
    elements[nextElement].style.zIndex =1;
}

const obtenerInformacionIphone = async()=>{

    try {

        const peticion = await fetch ('api.json')

        const datos = await peticion.json();

        const array = datos.iphoneInfo;

        let iphones = ''
        array.forEach(iphone => {
            iphones += `
                <article class="product">
                    <img src="${iphone.img}" alt="">
                    <span>${iphone.name}</span>
                    <p>${iphone.description} </p>
                    <div class="contBtn">
                        <button class="btnBuy">Comprar <i class="fa-solid fa-cart-shopping"></i></button>
                        <button class="btnAddCar">Ver mas</i></button>
                    </div>
                </article>
            `
        });

        

        document.getElementById('productos').innerHTML = iphones

        const btnBuy = document.querySelectorAll('.btnBuy')

        const btnShowMore = document.querySelectorAll('.btnAddCar')

        btnBuy.forEach(i => i.addEventListener('click',()=>{
            alert('Compra Exitosa')
        }))

        btnShowMore.forEach(i => i.addEventListener('click',()=>{
            alert('ver mas')
        }))

    } catch (error) {

        console.log(error);

    }   
}
obtenerInformacionIphone()

//============================ MODO OSCURO ==========================

const btnModoOscuro = document.querySelectorAll('.btnModoOscuro');


btnModoOscuro.forEach(i => i.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
}))


