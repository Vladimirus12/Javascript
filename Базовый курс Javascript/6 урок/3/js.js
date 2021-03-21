"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 * @property {string} settings.openedImageNextBtnSrc Путь до картинки стрелки вперёд.
 * @property {string} settings.openedImageNextBtnClass Класс картинки стрелки вперёд.
 * @property {string} settings.openedImageBackBtnSrc Путь до картинки стрелки назад.
 * @property {string} settings.openedImageBackBtnClass Класс картинки стрелки назад.
 * @property {string} settings.imageNotFoundSrc Путь до картинки-404(заглушки).
 */
const gallery = {
    openedImageEl: null,

    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
        openedImageNextBtnSrc: 'images/gallery/next.png',
        openedImageNextBtnClass: 'galleryWrapper__next',
        openedImageBackBtnSrc: 'images/gallery/back.png',
        openedImageBackBtnClass: 'galleryWrapper__back',
        imageNotFoundSrc: 'images/gallery/p6566.jpg',
    },

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для галереи.
     */
    init(userSettings = {}) {
        // Записываем настройки, которые передал пользователь в наши настройки.
        Object.assign(this.settings, userSettings);

        // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
        // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
        // gallery и передадим туда событие MouseEvent, которое случилось.
        document
            .querySelector(this.settings.previewSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
    },

    /**
     * Обработчик события клика для открытия картинки.
     * @param {MouseEvent} event Событие клики мышью.
     * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
     */
    containerClickHandler(event) {
        // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
        if (event.target.tagName !== 'IMG') {
            return;
        }

        this.openImageEl = event.target;

        this.openImage(event.target.dataset.full_image_url);
    },

    /**
     * Открывает картинку.
     * @param {string} src Ссылка на картинку, которую надо открыть.
     */
    openImage(src) {
        const openedImageEl = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
        const img = new Image();
        img.onload = () => openedImageEl.src = src;
        img.onerror = () => openedImageEl.src = this.settings.imageNotFoundSrc;
        img.src = src;
    },

    /**
     * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
     * @returns {Element}
     */
    getScreenContainer() {
        // Получаем контейнер для открытой картинки.
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        // Если контейнер для открытой картинки существует - возвращаем его.
        if (galleryWrapperElement) {
            return galleryWrapperElement;
        }

        // Возвращаем полученный из метода createScreenContainer контейнер.
        return this.createScreenContainer();
    },

    /**
     * Создает контейнер для открытой картинки.
     * @returns {HTMLElement}
     */
    createScreenContainer() {
        // Создаем сам контейнер-обертку и ставим ему класс.
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const backBtn = new Image();
        backBtn.classList.add(this.settings.openedImageBackBtnClass);
        backBtn.src = this.settings.openedImageBackBtnSrc;
        galleryWrapperElement.appendChild(backBtn);

        backBtn.addEventListener('click', () => {
            this.openImageEl = this.getPrevImage();
            this.openImage(this.openImageEl.dataset.full_image_url);
        });

        const nextBtn = new Image();
        nextBtn.classList.add(this.settings.openedImageNextBtnClass);
        nextBtn.src = this.settings.openedImageNextBtnSrc;
        galleryWrapperElement.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
            this.openImageEl = this.getNextImage();
            this.openImage(this.openImageEl.dataset.full_image_url);
        });

        // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        // Добавляем контейнер-обертку в тег body.
        document.body.appendChild(galleryWrapperElement);

        // Возвращаем добавленный в body элемент, наш контейнер-обертку.
        return galleryWrapperElement;
    },

    /**
     * Возвращает следующий элемент (картинку) от открытой или первую картинку в контейнере,
     * если текущая открытая картинка последняя.
     * @returns {Element} Следующую картинку от текущей открытой.
     */
    getNextImage() {
        const nextSibling = this.openImageEl.nextElementSibling;
        return nextSibling ? nextSibling : this.openImageEl.parentNode.firstElementChild;
    },

    /**
     * Возвращает предыдущий элемент (картинку) от открытой или последнюю картинку в контейнере,
     * если текущая открытая картинка первая.
     * @returns {Element} Предыдущую картинку от текущей открытой.
     */
    getPrevImage() {
        const prevSibling = this.openImageEl.previousElementSibling;
        return prevSibling ? prevSibling : this.openImageEl.parentNode.lastElementChild;
    },

    /**
     * Закрывает (удаляет) контейнер для открытой картинки.
     */
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    }
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});