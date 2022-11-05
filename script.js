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

// ============================ OBTENER INFORMACION DE PRODUCTOS ATRAVES DE API, EJECUCION DE MODAL =============

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

        const btnComprar = document.querySelectorAll('.btnBuy')
        
        const btnMostrarMas = document.querySelectorAll('.btnAddCar')


        btnMostrarMas.forEach (elemento => elemento.addEventListener('click',()=>{

            const objeto_A_array = Object.values(btnMostrarMas);

            const posicion_del_boton_en_un_producto = objeto_A_array.indexOf(elemento);

            const productoNombre = array[posicion_del_boton_en_un_producto].name;

            const img = array[posicion_del_boton_en_un_producto].img;

            const precio = array[posicion_del_boton_en_un_producto].precio;

            const descripcion = array[posicion_del_boton_en_un_producto].description;

            const almacenamiento = array[posicion_del_boton_en_un_producto].almacenamiento;

            const procesador = array[posicion_del_boton_en_un_producto].procesador;

            const camara_frontal = array[posicion_del_boton_en_un_producto].camara_frontal;

            const modalCont = document.querySelector('.modal');

            const modalHTML = `
                <div class="cuadro">
                    <img src="${img}" alt="">
                    <div class="contTextProduct">
                        <span class="nombreModal">${productoNombre}</span>
                        <span class="precioModal">${precio}</span>
                        <span>${descripcion}</span>
                        <span class="descripcionSpan">Decripcion Tecnica :</span>
                        <ul class="descripcion">
                            <li>Almacenamiento : ${almacenamiento}</li>
                            <li>Procesador : ${procesador}</li>
                            <li>Camara Frontal : ${camara_frontal}</li>
                        </ul>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            modalCont.innerHTML = modalHTML;

            modalCont.classList.toggle('active');

            const btnCloseModal = document.querySelector('.fa-xmark')

            btnCloseModal.addEventListener('click',()=>{

                modalCont.classList.remove('active');

            })
        }))

        btnComprar.forEach(elemento => elemento.addEventListener('click',()=>{

            const objeto_A_array = Object.values(btnComprar);

            const posicion_del_boton_en_un_producto = objeto_A_array.indexOf(elemento)

            const productoNombre = array[posicion_del_boton_en_un_producto].name;

            const precio = array[posicion_del_boton_en_un_producto].precio

            const modalCont = document.querySelector('.modal');

            const modalHTML = `
                <div class="cuadro">
                    <img src="https://cdn-icons-png.flaticon.com/512/7778/7778643.png" alt="">
                    <div class="contTextProduct">
                        <span class="nombreModal">Producto comprado : ${productoNombre}</span>
                        <span class="precioModal">${precio}</span>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            `
            modalCont.innerHTML = modalHTML;

            modalCont.classList.toggle('active');

            const btnCloseModal = document.querySelector('.fa-xmark')

            btnCloseModal.addEventListener('click',()=>{

                modalCont.classList.remove('active');

            })

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


