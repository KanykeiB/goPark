import React from 'react';
import './style.css'

const AboutPage = () => {
  return (
    <div>
      <section className="head-section">
        <div className="container">
          <h2 className="about-us-text">
            ParkGO - это платформа для организации ивентов, марафонов, выставок, турниров и других мероприятий в парках города.
          </h2>
          <p className="about-us-description">
            За годы работы мы отточили подход к проектам, который помогает управлять рисками, не выходить за сроки и создавать цифровые решения для улучшения бизнеса наших клиентов.
          </p>
        </div>
      </section>
      {/* <section className="main-section">
        <div className="main-section-img">
          <div className="main-section-first-img"></div>
          <div className="main-section-second-img"></div>
        </div>
        <p className="main-section-text">
          Ненавижу шаблонные решения, но будем считать это подсказкой. Попробуйте подставить в текст ниже информацию о своей компании.«Мы продаем/производим/ … (что вы умеете делать). Делаем так, чтобы … (описание ваших клиентов) получили … (результат вашей работы). Обращайтесь к нам, если … (ситуация и контекст). Мы знаем, как … (конкретные факты, доказывающие экспертность). За х лет работы мы произвели … (примеры и кейсы).»GG
        </p>
      </section> */}
      <section className='facts-section'>
        <p className="facts-header">Мощь конкретных фактов</p>
        <p className='facts-text'>«Приносим праздник чистоты в ваш дом!» — «Убираем мусор, моем полы и окна, чистим ковры и диваны».Конкретные примеры и сравнения помогают читателю понять свойство и представить картинку в голове, а не просто угадывать абстракцию.</p>
      </section>
      
      <section className='interesting-section'>
        <div className="container">
            <div className="interesting-info">
              <p className='interesting-header'>
              Не прячьте самое интересное
              </p>
              <p className="interesting-text">Размер не имеет значения просто из-за размера. Что изменится, если опыт доктора не 7, а 5 лет? Опыт всего лишь называет количество лет, а мы хотим показать экспертность. Акушер-гинеколог, спасший сотню детей после кесарева, круче акушера-гинеколога с 20-летним стажем.</p>
              <div className="interesting-img">
                <div className="interesting-first-img"></div>
                <div className="interesting-second-img"></div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;