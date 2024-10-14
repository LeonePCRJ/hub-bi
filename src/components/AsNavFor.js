import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/AsNavFor.css";

function AsNavFor() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [setorAtual, setSetorAtual] = useState(0);

  const setores = [
    {
      nome: "ADS - Administração Setorial",
      bis: [
        { nome: "Recursos Humanos", imagem: "/images/grh.png", url: "https://app.powerbi.com/view?r=eyJrIjoiM2VmZWRlYmEtZmJmYi00MzAwLWEyZTEtMzgzYWIwZWVlZWNiIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Contratos", imagem: "/images/contratos.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZmRjNWQ4NDEtZjFjYi00Njg3LTkzZTQtMmFjMTE4NzY4NzUyIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"}
      ]
    },
    {
      nome: "CCCO - Coordenadoria de Contratos de Concessão",
      bis: [
        { nome: "STPL", imagem: "/images/stpl.png", url: "https://lookerstudio.google.com/reporting/c3920c69-cfd8-4b4e-a6f4-aee99ea0ff02/page/firqD" },
        { nome: "Histórico de Índices", imagem: "/images/indices.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZmU0NzAyNzctMWEyNS00YzFiLTllMWQtOTUwMGRlMGFhMDhmIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Multa Contratual", imagem: "/images/multa_contratual.png", url: "https://app.powerbi.com/view?r=eyJrIjoiM2RjYmY2YTktODUzMC00MmQzLWFmN2UtYTE2MWVlYmFmNzczIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Multa Disciplinar", imagem: "/images/multa_disciplinar.png", url: "https://app.powerbi.com/view?r=eyJrIjoiYTkyMTc5MmEtMzI0Ni00ZDJlLTk0ODktZTM4NjQ2Yjc2MzFmIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"},
        { nome: "Histórico RMC e BIP", imagem: "/images/rmc_bip.png", url: "https://app.powerbi.com/view?r=eyJrIjoiOGNkZjBiNjMtNjRhZC00ZDNiLTkyYjQtN2NlMGNmZTFjODAwIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9"}
      ]
    },
    {
      nome: "ADI - Assessoria de Demandas Institucionais",
      bis: [
        { nome: "Acompanhamento e Controle", imagem: "/images/ata.png", url: "https://app.powerbi.com/view?r=eyJrIjoiZTcwYjU0ZmEtMTBiMi00Y2EzLTkzZDctZjYyOTUzMjhlYTE2IiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9&pageName=ReportSection0c555e4164e3a67400da" }
      ]
    },
    {
      nome: "CORIN - Comissão de Recursos de Infração",
      bis: [
        { nome: "Controle Processos", imagem: "/images/corin.png", url: "https://app.powerbi.com/view?r=eyJrIjoiNGYxODE0NTMtMGU3YS00NWExLWFhZTktZjBiOGU4YzYzOTNiIiwidCI6IjkwNzI2YWVlLWQwMmMtNDlmZS05ODlmLTQ1ZGVmM2QwNjlkYyJ9" }
      ]
    }
  ];

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      sliderRef1.current.slickGoTo(setorAtual);
      sliderRef2.current.slickGoTo(0);
    }
  }, [setorAtual]);

  const handleSetorChange = (index) => {
    setSetorAtual(index);
  };

  const settingsSlider1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => handleSetorChange(next),
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 1000,
    preventDefaultTouchmoveEvent: true
  };

  const settingsSlider2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    adaptiveHeight: true,
    preventDefaultTouchmoveEvent: true
  };

  return (
    <div className="sliders-container">
      <div className="slider-section">
        <h4>Setores</h4>
        <Slider {...settingsSlider1} ref={sliderRef1} className="slider-setores">
          {setores.map((setor, index) => (
            <div key={index} className="setor-slide">
              <h3>{setor.nome}</h3>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="slider-section">
        <h4>BI's</h4>
        <Slider {...settingsSlider2} ref={sliderRef2} className="slider-bis">
          {setores[setorAtual].bis.map((bi, index) => (
            <div key={index} className="bi-slide">
              <a href={bi.url} target="_blank" rel="noopener noreferrer">
                <img src={bi.imagem} alt={bi.nome} />
                <h3>{bi.nome}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AsNavFor;
