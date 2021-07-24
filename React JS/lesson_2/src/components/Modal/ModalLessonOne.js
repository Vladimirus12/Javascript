const ModalLessonOne = () => {

    return(
        <div className = "modal-text">
            <h3 className = "App-subTitle">Lesson №1</h3>
            <p className = "App-p">1. Установить node и npm.</p>
            <p className = "App-p">2. Создать проект и настроить package.json.</p>
            <p className = "App-p">3. Настроить webpack.config.</p>
            <p className = "App-p">
                4. Сделать при помощи webpack сборку простейшего
                React-кода с использованием функционального компонента сообщения</p>
            <p className = "App-p">
                5. Выдать html-файл,
                в который подключается сборка при помощи webpack-dev-server.</p>
            <p className = "App-p">
                6. * * Реализовать возможность
                отправки нового сообщения с фиксированным текстом:</p>
            <hr className = "stripe"/>
        </div>
    )
};

export default ModalLessonOne;