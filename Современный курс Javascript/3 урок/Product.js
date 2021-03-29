class ProductOne {
    constructor(id, title, price, img = 'img/Layer%202.jpg', container = '#products') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.container = container;
        this.render();
    }

    render(){
        let $wrapper = $('<div/>', {
            class: 'productOne'
        });

        let $desc = $('<div/>', {
            class: 'desc'
        });

        let $img = $('<img/>', {
            src: this.img,
            alt: 'Some img'
        });

        let $name = $('<p/>', {
            text: this.title
        });

        let $price = $(`<p>$<span class="product-price">${this.price}</span></p>`);
        let $buyBtn = $('<button/>', {
            class: 'buyBtn',
            text: 'Add to Cart',
            'data-id': this.id,
            'data-price': this.price,
            'data-name': this.title
        });

        $img.appendTo($wrapper);
        $name.appendTo($desc);
        $price.appendTo($desc);
        $buyBtn.appendTo($wrapper);
        $desc.appendTo($wrapper);
        $(this.container).append($wrapper)
    }
}

class ProductTwo {
    constructor(id, title, price, img = 'img/Layer%203.jpg', container = '#products'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.container = container;
        this.render();
    }

    render(){
        let $wrapper = $('<div/>', {
            class: 'productTwo'
        });

        let $desc = $('<div/>', {
            class: 'desc'
        });

        let $img = $('<img/>', {
            src: this.img,
            alt: 'Some img'
        });

        let $name = $('<p/>', {
            text: this.title
        });

        let $price = $(`<p>$<span class="product-price">${this.price}</span></p>`);
        let $buyBtn = $('<button/>', {
            class: 'buyBtn',
            text: 'Add to Cart',
            'data-id': this.id,
            'data-price': this.price,
            'data-name': this.title
        });

        $img.appendTo($wrapper);
        $name.appendTo($desc);
        $price.appendTo($desc);
        $buyBtn.appendTo($wrapper);
        $desc.appendTo($wrapper);
        $(this.container).append($wrapper)
    }
}

class ProductThree {
    constructor(id, title, price, img = 'img/Layer%204.jpg', container = '#products'){
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.container = container;
        this.render();
    }

    render(){
        let $wrapper = $('<div/>', {
            class: 'productThree'
        });

        let $desc = $('<div/>', {
            class: 'desc'
        });

        let $img = $('<img/>', {
            src: this.img,
            alt: 'Some img'
        });

        let $name = $('<p/>', {
            text: this.title
        });

        let $price = $(`<p>$<span class="product-price">${this.price}</span></p>`);
        let $buyBtn = $('<button/>', {
            class: 'buyBtn',
            text: 'Add to Cart',
            'data-id': this.id,
            'data-price': this.price,
            'data-name': this.title
        });

        $img.appendTo($wrapper);
        $name.appendTo($desc);
        $price.appendTo($desc);
        $buyBtn.appendTo($wrapper);
        $desc.appendTo($wrapper);
        $(this.container).append($wrapper)
    }
}