import React, {Component} from "react";

class HomePage extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.staticContent}}></div>
        );
    }

    staticContent = `<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Index</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/reset.css">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

</head>

<body>

    <!-- header -->
    <header>
    </header>
    <!-- end header -->

    <!-- content -->
    <section class="content">

        <div class="div_1">
            <div class="container">
            <a style="margin: 15px 15px 15px 85%; color: white" href="/api/logout">Выйти</a>
            </div>
        </div>
           
        <div class="div_2">
            <div class="container">
            \t\t\t
\t\t\t\t\t\t<p style="text-align: right;"><a style="    color: #000;
    background: #ffc80a;
    padding: 10px;
    border-radius: 100px;
    font-weight: 400;" href="/en" target="_self" rel="noopener noreferrer">En</a></p>
\t
                <div class="img logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="text center">
                    <h1>Преодоление COVID-19  для индустрии транспорта</h1>
                    <a target="_blank"
                       href="https://drive.google.com/file/d/1l8BmkXH1NeYyE3pllyHXZ0jrycakL1ZB/view?usp=sharing"><button class="button center">программа конференции</button></a>
                </div>
            </div>
        </div>

        <div class="div_3">
            <iframe src="/frames/tabs.html" class="crutch_frame"></iframe>
        </div>
        
        <div class="div_4">
            <div class="container">
                <div class="img logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="title center">
                    <h2>Организация личных online встреч</h2>
                    <a href="/meetings"><button class="button center">забронировать</button></a>
                </div>
                <div class="faq">
                    <div class="title center">
                        <h2>FAQ</h2>
                    </div>
                    <div class="items flex">
                        <div class="item">
                            <h4>Как назначить встречу?</h4>
                            <p>Выберите, пожалуйста, время и участника с которым вы хотели бы встретиться во время конференции 30 марта с 11:00 - 17:00. Участник, которого вы выбрали в качестве приглашаемого к диалогу, получит приглашение по электронной почте. После подтверждения участия в переговорах, мы отправим вам и второму участнику ссылку на закрытую online комнату для личного общения.</p>
                        </div>
                        <div class="item">
                            <h4>Как проходят встречи?</h4>
                            <p>Встречи проводятся в zoom. Для участия в личной встречи, вам необходимо иметь телефон или компьютер с возможностью подключить звук и видео. Изначально мы выставляем настройки на видеоформат. Чтобы вы не просто могли поговорить, но видели друг друга и общение было в комфортном для вас режиме.</p>
                            <p>Во время встречи, вы можете демонстрировать презентации и видеоролики.</p>
                        </div>
                        <div class="item">
                            <h4>Сколько по времени проходит встреча?</h4>
                            <p>20 минут + 10 минут на организационные моменты по настройке и подключению к встрече.</p>
                        </div>
                        <div class="item">
                            <h4>Какая-то особая подготовка нужна к встрече?</h4>
                            <p>Вы можете заранее установить мобильную или десктопную версию zoom. Но zoom так же хорошо работает из браузера. Рекомендуем заранее протестировать наушники и камеру, чтобы во время подключения не тратить время на настройку устройств.</p>
                        </div>
                        <div class="item">
                            <h4>Требования к интернету:</h4>
                            <p>особых требований нет. Zoom работает и через мобильный интернет.</p>
                        </div>
                        <div class="item">
                            <h4>Можно ли получить запись переговоров?</h4>
                            <p>Если вы хотите получить запись, Вам необходимо перед встречей предупредить об этом организатора. При общем согласии обеих сторон, запись будет произведена.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- end content -->

    <!-- footer -->
    <footer>
        <div class="container flex">
            <div class="img logo">
                <img src="img/logo2.png" alt="">
            </div>
            <div class="contacts">
               <p style="text-align: center;"><strong><a href="https://www.events.ato.ru/" target="_blank" rel="noopener">ATO Events</a></strong></p>
<p style="text-align: center;"><span style="font-size: 14px;"><a href="https://www.events.ato.ru/upload/FILES/processing_policy_ru.pdf" target="_blank" rel="noopener">Политика обработки персональных данных</a></span><br>
<span style="font-size: 14px;"> <a href="https://www.events.ato.ru/upload/FILES/privacy_policy_ru.pdf" target="_blank" rel="noopener">Политика конфиденциальности</a></span></p>
<p style="text-align: center;"><span style="font-size: 20px;">+7 495 108-51-43</span></p>

            </div>
        </div>
    </footer>
    <!-- end footer -->


    <!-- MODAL -->
    <div class="overlay" id="overlay" style="display:none;"></div>
    
    <div class="nonebox" id="nonebox-1">
        <span class="box-close" title="Закрыть"></span>
        <div class="form">
            <h2>Обратный звонок</h2>
            <form id="form">
                <input name="name" placeholder="Ваше имя" required type="text">
                <input name="phone" placeholder="Ваш телефон" class="tel_phone" required type="text">
                <input name="ok" value="Отправить" class="button" type="submit">
                <input type="hidden" name="formData" value="Заявка с сайта - ">
            </form>
        </div>
    </div>

    <div class="nonebox" id="nonebox-thank">
        <span class="box-close" title="Закрыть"></span>
        <div class="form">
            <h2>Спасибо!</h2>
            <p>Ваша заявка получена. Мы свяжемся с Вами в ближайшее время по указанным контактным данным</p>
        </div>
    </div>
    <!-- END MODAL -->


    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/tabs.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
`
}

export default HomePage;