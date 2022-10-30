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

// ============================ OBTENER INFORMACION DE PRODUCTOS ATRAVES DE API =============

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
                    <span class="nameOfProduct">${iphone.name}</span>
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
            console.log(i);
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
    menuMobile.classList.remove('active')
    btn.classList.remove('active')
}))

//========================== MODAL CUANDO ENVIE UN CORREO EN EL APARTADO DE CONTACTANOS ===========


const form = document.getElementById('formulario')

form.addEventListener('submit',()=>{
    
})


