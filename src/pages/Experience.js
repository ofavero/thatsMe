import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2011 - 2021'
          iconStyle={{ background: "#202224", color: "#57ff57" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>CNA - Master In English</h3>
          <p>CNA Master in English course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2019 - 2021'
          iconStyle={{ background: "#202224", color: "#57ff57" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Desenvolvimento de Sistemas</h3>
          <h4 className='vertical-timeline-element-subtitle'>Curso Técnico de Desenvolvimento de Sistemas</h4>
          <p>Um curso focado no ensinamento em programação com o foco no FullStack.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Jun 2019 - Jul 2021'
          iconStyle={{ background: "#202224", color: "#57ff57" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Intercambio de Ingles</h3>
          <h4 className='vertical-timeline-element-subtitle'>Intercambio de Ingles em Toronto - Canada</h4>
          <p>SGIC – St. George International College – ESL Level IV – Reading,Writing, Listening and Speaking – 4 weeks at 25 Hours per week – 17 June 2019 – 12 July 2019 </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Jan 2022 - Até o Presente'
          iconStyle={{ background: "#ffff57", color: "#202224" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Auxiliar Administrativo</h3>
          <h4 className='vertical-timeline-element-subtitle'>Estoquista na Casas Bahia de Tatui</h4>
          <p>Sou responsável por gerar notas fiscais, controle de materiais, separação de compras online, recebimento e entrega de materiais.</p>
        </VerticalTimelineElement>

         <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='09/01/2023 - 09/03/2023'
          iconStyle={{ background: "#ffff57", color: "#202224" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Operador de Produção</h3>
          <h4 className='vertical-timeline-element-subtitle'>Operador de Produção na Guardian Tatui</h4>
          <p>Inpecionava embalagem, fazia abertura, montava pedido, acompanhava o carregamento do Jumbo, apertava grampos dos cominhões e fazia a montagem das embalagens.</p>
        </VerticalTimelineElement>
          
      </VerticalTimeline>
    </div>
  )
}

export default Experience
