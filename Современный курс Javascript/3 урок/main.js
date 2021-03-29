$(document).ready(() => {
    //Товары
    const product1 = new ProductOne(123, 'Mango People T-shirt', '52.00');
    const product2 = new ProductTwo(124, 'Mango People T-shirt', '52.00');
    const product3 = new ProductThree(125, 'Mango People T-shirt', '52.00');

    //Корзина
    let cart = new Cart('getCart.json');

    //Добавление товара
    $('.buyBtn').click(e => {
        cart.addProduct(e.target);
    })

    //удаление товара
    $('body').on('click', '.remove', function (e) {
        cart.remove(e.target.dataset.product);
    });
});