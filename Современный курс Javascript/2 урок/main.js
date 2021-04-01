class Item {
    constructor(price, discound) {
        this.price = price;
        this.discound = discound;
    }

    get actualPrice() {
        return this.price - (this.price * this.discound);
    }
}

class ProductsItem {
    constructor(id, name, price, img = 'img/Layer%202.jpg') {
        this.id = id;
        this.title = name;
        this.price = price;
        this.img = img;
    }

    render() {
        return `<div class="products-item">
                  <img src="${this.img}" alt="Some img">
                  <button class="buyBtn" data-id="${this.id}" data-price="${this.price}" data-name ="${this.title}">Add to Cart</button>
                  <div class="desc">
                    <h3>${this.title}</h3>
                    <p>$ ${this.price}</p>
                  </div>
               </div>`;
    }
}

class ProductsList {
    constructor() {
        this.products = [];
    }

    fetchProducts() {
        this.products = [
            {id: 123, title: 'Mango People T-shirt', price: '52.00' },
            {id: 124, title: 'Mango People T-shirt', price: '52.00' },
            {id: 125, title: 'Mango People T-shirt', price: '52.00' },
            {id: 126, title: 'Mango People T-shirt', price: '52.00' },
        ];
    }

    render() {
        let productsHtml = '';
        this.products.forEach(({id, title, price }) => {
            const product = new ProductsItem(id, title, price);
            productsHtml += product.render();
        });
        document.querySelector('.products-list').innerHTML = productsHtml;
    }
}

class Cart {
    constructor(source, container = '.cart') {
        this.source = source;
        this.container = container;
        this.countProducts = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общая стоимость товаров в корзине
        this.items = []; //Массив для хранения товаров
        this.init(this.source);
    }

    push(cartItem) {
        this.items.push(cartItem);
    }

    render(){}

    renderNew() {}

    init(source){}

    renderItem(product){}

    renderSum(){
        $('.sum-products').text(`Всего товаров в корзине: ${this.countProducts}`);
        $('.sum-price').text(`Общая сумма: $ ${this.amount}`);
    }

    updateCart(product) {}

    addProduct(element) {
        let productId = +$(element).data('id');
        let find = this.items.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countProducts++;
            this.amount += find.price;
            this.updateCart(find);
        } else {
            let product = {
                id_product: productId,
                product_name: $(element).data('name'),
                price: +$(element).data('price'),
                quantity: 1
            };
            this.items.push(product);
            this.amount += product.price;
            this.countProducts += product.quantity;
            this.renderItem(product);
        }
        this.renderSum();
    }

    remove(idProduct) {
        //Todo: удаление товара
    }
}

class CartItem extends Item {
    constructor(product, discound = 0) {
        super(product.price, discound);
        this.product = product;
    }
}

//Корзина
const cart = new Cart();
const addToCard = (product) => cart.push(new CartItem(product));

window.onload = () => {
    const productsList = new ProductsList();
    productsList.fetchProducts();
    productsList.render('.products-list');
};