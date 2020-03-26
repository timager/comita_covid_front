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
            </div>
        </div>
           
        <div class="div_2">
            <div class="container">
                <div class="img logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="text center">
                    <h1>Преодоление COVID-19  для индустрии транспорта</h1>
                    <a target="_blank"
                       href="http://live.covid-transport.ru/symfony/public/Covid-2020-rus.pdf"><button class="button center">программа конференции</button></a>
                </div>
            </div>
        </div>

        <div class="div_3">
            <div class="tabs" id="tabs">
                <div class="c-tabs-nav flex">
                    <div class="c-tabs-nav__link is-active">
                        <div class="container">
                            <h3>Преодоление <span>COVID-19</span> для индустрии транспорта</h3>
                            <div class="img">
                                <img src="img/img-1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="c-tabs-nav__link">
                        <div class="container">
                            <h3>Преодоление COVID-19 для  воздушного транспорта и индустрии туризма</h3>
                            <div class="img">
                                <img src="img/img-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-tab tSab-1 is-active">
                    <div class="video">
                        <div class="container">
<!--                            <iframe src="" frameborder="0"></iframe>-->
                            <div class="img">
                                <img src="img/video_bg.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="container">
                            <div class="title center">
                                <h2>Задавайте ваши вопросы в прямом эфире</h2>
                                <span></span>
                                <h2>ЧАТ</h2>
                            </div>
                            <div class="block">
                                <div class="img">
                                    <img src="img/chat_icon.png" alt="">
                                </div>
                                <h4>вопросы в прямом эфире от вас</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-tab tab-2">
                    <div class="video">
                        <div class="container">
<!--                            <iframe src="" frameborder="0"></iframe>-->
                            <div class="img">
                                <img src="img/video_bg.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="container">
                            <div class="title center">
                                <h2>Задавайте ваши вопросы в прямом эфире</h2>
                                <span></span>
                                <h2>ЧАТ</h2>
                            </div>
                            <div class="block">
                                <div class="img">
                                    <img src="img/chat_icon.png" alt="">
                                </div>
                                <h4>вопросы в прямом эфире от вас</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                            <h4>Какая-то особая подготовка нужна к встрече?</h4>
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
                <a href="tel:7(495)108-514" class="phone">7(495)108-514</a>
                <a href="mailto:events@ato.ru">events@ato.ru</a>
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