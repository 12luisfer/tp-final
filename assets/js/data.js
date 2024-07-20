const productsData = [ 
    {
    name: "Tacones de Aguja negro",
    id: 1,
    price: 7852,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco1.webp",
},
{
    name: "Tacones de Plataforma  ",
    id: 2,
    price: 5757,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco2.webp",
},
{
    name: "Tacones de Cuña negro",
    id: 3,
    price: 6727,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco3.jpg",
},
{
    name: "Tacones de Bloque bordo",
    id: 4,
    price: 5763,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco4.webp",
},
{
    name: "Tacones de Cono negro",
    id: 5,
    price: 7537,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco5.webp",
},
{
    name: "Tacones de Estilete ",
    id: 6,
    price: 5726,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco6.jpg",
},
{
    name: "Tacones de Madera",
    id: 7,
    price: 6499,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco7.webp",
},
{
    name: "Tacones de Espadrille",
    id: 8,
    price: 4564,
    category: "dress",
    cardImg: "../assets/img/zapatos_Ventas/taco8.webp",
},
{
    name: "Nike Cortez",
    id: 9,
    price: 5564,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla8.jpg",
},
{
    name: "Nike Blazer",
    id: 10,
    price: 4544,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla1.jpg",
},
{
    name: "Nike React",
    id: 11,
    price: 6645,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla2.webp",
},
{
    name: "Nike Pegasus",
    id: 12,
    price: 7545,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla3.webp",
},
{
    name: "Nike Zoom",
    id: 13,
    price: 4474,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla4.jpg",
},
{
    name: "Nike Roshe",
    id: 14,
    price: 4557,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla5.jpg",
},
{
    name: "Nike Air Force 1",
    id: 15,
    price: 5477,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla6.jpg",
},
{
    name: "Nike Free",
    id: 16,
    price: 4577,
    category: "accessories",
    cardImg: "../assets/img/zapatillas_Ventas/zapatilla7.webp",
},
]


const divideProducts = (size) => {
    let productList = [];
    for ( let i = 0; i < productsData.length; i += size )
    productList.push(productsData.slice( i, i + size ))
    return productList; 
}


const appState = {
    products: divideProducts(6),
    currentProductsIndex: 0,
    productsLimit: divideProducts(6).length,
    activeFilter: null
}