class Cart {
    constructor(source, container = '#cart'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общая стоимость товаров в корзине
        this.cartItems = []; //Массив для хранения товаров
        this.init(this.source);
    }

    render(){
        let $cartItemsDiv = $('<div/>', {
            class: 'cart-items-wrap'
        });
        let $totalGoods = $('<div/>', {
            class: 'cart-summary sum-goods'
        });
        let $totalAmount = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        $(this.container).text('Корзина');
        $cartItemsDiv.appendTo($(this.container));
        $totalGoods.appendTo($(this.container));
        $totalAmount.appendTo($(this.container));
    }

    renderNew() {
        this.render();
        for (let product of this.cartItems) {
            this.renderItem(product);
        }
    }

    init(source){
        this.render();
        fetch(source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this.renderItem(product);
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this.renderSum();
            })
    }

    renderItem(product){
        let $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product
        });
        $container.append($(`<p class="product-name">${product.product_name}</p>`));
        $container.append($(`<p class="product-quantity">${product.quantity}</p>`));
        $container.append($(`<p class="product-price">$${product.price}</p>`));
        $container.append($(`<p class="remove">
<img class="close" data-product='${product.id_product}' src="img/close.png"></p>`));
        $container.appendTo($('.cart-items-wrap'));
    }
    renderSum(){
        $('.sum-goods').text(`Всего товаров в корзине: ${this.countGoods}`);
        $('.sum-price').text(`Общая сумма: $ ${this.amount}`);
    }

    updateCart(product){
        let $container = $(`div[data-product=${product.id_product}]`);
        $container.find('.product-quantity').text(product.quantity);
        $container.find('.product-price').text(`$${product.quantity * product.price}`);
    }

    addProduct(element){
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this.updateCart(find);
        } else {
            let product = {
                id_product: productId,
                product_name: $(element).data('name'),
                price: +$(element).data('price'),
                quantity: 1
            };
            this.cartItems.push(product);
            this.amount += product.price;
            this.countGoods += product.quantity;
            this.renderItem(product);
        }
        this.renderSum();
    }

    //Todo: удаление товара
    remove(idProduct){
        let productId = +idProduct;
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find) {
            find.quantity--;
            this.countGoods--;
            this.amount -= find.price;
            this.updateCart(find);
        }
        if ((find) && (find.quantity === 0)) {
            this.cartItems.splice($.inArray(find, this.cartItems), 1);
        }
        this.renderNew();
        this.renderSum();
    }
}