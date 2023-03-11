import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, A11y} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './style.css'
import { useTranslation } from 'react-i18next';

const SwiperBlock = () => {

  const {t} = useTranslation()

  return (
    <div className='partners-block-wrap'>
      <div className='partners-block'>
        <span className='partner-line'/>
        <h2 className="partners-header-text">{t("partners")}</h2>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>Codify Academy</p>
            <p className="swiper-description">{t("codifyCEO")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">0500 431 430</span>
              <span className="swiper-contact">0500 431 430</span>
              <span className="swiper-contact">info@codifylab.com</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block second-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>{t("mega")}</p>
            <p className="swiper-description">{t("megaCEO")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">(312) 905 221</span>
              <span className="swiper-contact">(312) 905 220</span>
              <span className="swiper-contact">pr@megacom.kg</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block third-block">
            </div>
            <div className="border-line"></div>
            <p className='swiper-text'>{t("gpinfocom")}</p>
            <p className="swiper-description">{t("gpinfocomCEO")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">(312) 986 190</span>
              <span className="swiper-contact">(312) 986 191</span>
              <span className="swiper-contact">support@infocom.kg</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block fourth-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>{t("ministry")}</p>
            <p className="swiper-description">{t("ministr")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">(312) 605 000</span>
              <span className="swiper-contact">119</span>
              <span className="swiper-contact">info@digital.gov.kg</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block fifth-block"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>{t("gosuslugi")}</p>
            <p className="swiper-description">{t("gosuslugiCEO")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">(312) 988 123</span>
              <span className="swiper-contact"></span>
              <span className="swiper-contact">portal@tunduk.gov.kg</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-block">
            <div className="swiper-image-block sixth-box"></div>
            <div className="border-line"></div>
            <p className='swiper-text'>Six Box</p>
            <p className="swiper-description">{t("sixboxCEO")}</p>
            <div className="swiper-contacts">
              <span className="swiper-contact">0(778) 333 888</span>
              <span className="swiper-contact">0(501) 313 888</span>
              <span className="swiper-contact">sixbox.kg</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBlock;