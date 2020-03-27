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
    <title>OVERCOMING COVID-19 FOR TRANSPORT INDUSTRY</title>

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
            <a style="margin: 15px 15px 15px 95%; color: white" href="/api/logout">Log out</a>
            </div>
        </div>
           
        <div class="div_2">
            <div class="container">
\t\t\t
\t\t\t\t\t\t<p style="text-align: right;"><a style="    color: #000;
    background: #ffc80a;
    padding: 10px;
    border-radius: 100px;
    font-weight: 400;" href="/" target="_self" rel="noopener noreferrer">Rus</a></p>
\t
                <div class="img logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="text center">
                    <h1>OVERCOMING COVID-19 FOR TRANSPORT INDUSTRY</h1>
                    <a target="_blank"
                       href="http://live.covid-transport.ru/symfony/public/Covid-2020-eng.pdf">
                    <button class="button center">Agenda</button>
                    </a>
                </div>
            </div>
        </div>

        <div class="div_3">
            <div class="tabs" id="tabs">
                <div class="c-tabs-nav flex">
                    <div class="c-tabs-nav__link is-active">
                        <div class="container">
                            <h3>OVERCOMING COVID-19 FOR TRANSPORT INDUSTRY</h3>
                            <div class="img">
                                <img src="img/img-1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="c-tabs-nav__link">
                        <div class="container">
                            <h3>OVERCOMING COVID-19 FOR AIR TRANSPORT AND TOURISM INDUSTRY</h3>
                            <div class="img">
                                <img src="img/img-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-tab tab-1 is-active">
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
                                <h2>Ask your questions in live</h2>
                                <span></span>
                                <h2>Chat</h2>
                            </div>
                            <div class="block">
                                <div class="img">
                                    <img src="img/chat_icon.png" alt="">
                                </div>
                                <h4>Live questions from you</h4>
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
                                <h2>Ask your questions in live</h2>
                                <span></span>
                                <h2>Chat</h2>
                            </div>
                            <div class="block">
                                <div class="img">
                                    <img src="img/chat_icon.png" alt="">
                                </div>
                                <h4>Live questions from you</h4>
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
                    <h2>Organization of one-to-one meeting online meetings</h2>
                    <a href="/meetings">
                    <button class="button center">Reserve here</button>
                    </a>
                </div>
                <div class="faq">
                    <div class="title center">
                        <h2>FAQ</h2>
                    </div>
                    <div class="items flex">
                        <div class="item">
                            <h4>How to make an appointment?</h4>
                            <p>Select please the time-slot and the participant you would like to meet with during the conference on March 30 from 11:00 - 17:00. The participant which you invited to the dialogue will receive an invitation by email. After his confirmation of the online-meeting you will receive a link to a private online room for personal communication.</p>
                        </div>
                        <div class="item">
                            <h4>How is a meeting going?</h4>
                            <p> Meetings are held in zoom. To participate in a one-to-one meeting, you need to have a phone or computer with the ability to connect sound and video. Initially we set up the settings to video format. So you could not just talk, but see each other and communicate in a more comfortable way for both. You can display presentations and videos during the meeting.</p>
                        </div>
                        <div class="item">
                            <h4>How long the meeting is being held?</h4>
                            <p>20 minutes + 10 minutes for setting up and connecting to the meeting.</p>
                        </div>
                        <div class="item">
                            <h4>Is any special preparations for the meeting needed?</h4>
                            <p>You can pre-install the mobile or desktop version of zoom. But it works from the browser as well. We recommend to test the headphones and camera in advance not to waste time setting up devices during the connection.</p>
                        </div>
                        <div class="item">
                            <h4>Internet requirements:</h4>
                            <p>No special requirements. Zoom also works through the mobile Internet.</p>
                        </div>
                        <div class="item">
                            <h4>Can i get a record of negotiations?</h4>
                            <p>if you would like to get the recording of the meeting you need to notify the organizer about that before the meeting. With the agreement of both parties, the recording will be obtained.</p>
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
<div class="avia_textblock  av_inherit_color " style="color:#000; " itemprop="text"><p style="text-align: center;"><strong><a href="https://www.events.ato.ru/eng" target="_blank" rel="noopener noreferrer">ATO Events</a></strong></p><br>
<p style="text-align: center;"><span style="font-size: 14px;"><a href="https://www.events.ato.ru/upload/FILES/processing-policy_en.pdf" target="_blank" rel="noopener noreferrer"> Personal Data Processing Policy</a></span><br>
<span style="font-size: 14px;"> <a href="https://www.events.ato.ru/upload/FILES/privacy_policy_en.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a></span></p><br>
<p style="text-align: center;"><span style="font-size: 20px; color:#000;">+7 495 108-51-43</span></p>
</div>
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