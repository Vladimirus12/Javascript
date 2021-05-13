const ModalLessonTwo = () => {

    return(
        <div className = "modal-text">
            <h3 className = "App-subTitle">Lesson №2</h3>
            <p className = "App-p">1. Создать в папке components два компонента:
                MessageField и Message.
                Причем компоненты Message должны быть вложены в MessageField..</p>
            <p className = "App-p">2. Реализовать отправку сообщений по нажатию кнопки.</p>
            <p className = "App-p">3. На каждое отправленное сообщение
                должен отвечать робот (используйте componentDidUpdate).</p>
            <p className = "App-p">
                4.  Добавить автора к сообщениям и отображать его в интерфейсе.
                Переделать логику ответа от робота в соответствии с этим.</p>
            <hr className = "stripe"/>
        </div>
    )
};

export default ModalLessonTwo;