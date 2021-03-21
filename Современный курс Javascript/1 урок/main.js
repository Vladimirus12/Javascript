const products = [
    { title: 'Mango People T-shirt', price: '52.00' },
    { title: 'Mango People T-shirt', price: '52.00' },
    { title: 'Mango People T-shirt', price: '52.00' },
    { title: 'Mango People T-shirt', price: '52.00' },
];

const renderProductsItem = (title, price) => {
    return `<div class="products-item">
               <img src="https://placehold.it/200x150" alt="Some img">
               <div class="desc">
                 <h3>${title}</h3>
                 <p>$ ${price}</p>
               </div>
            </div>`;
};

const renderProductsList = (list = []) => {
    let productList = list.map(item => renderProductsItem(item.title, item.price));
    document.querySelector('.products-list').innerHTML = productList .join('');
};

renderProductsList(products);








