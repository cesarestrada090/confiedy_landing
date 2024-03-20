import React from 'react'

import Link from '../utils/ActiveLink'

import { Block } from 'baseui/block'
import { StarRating } from 'baseui/rating'
import { LabelMedium } from 'baseui/typography'

const Professor = ({ data }) => {
  console.log('data', data)
  const tasks = data.tareas;
  return (
    <div
      className="profile-box ptb-100"
      style={{ paddingTop: '0', paddingBottom: '0' }}
    >
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-4">
          <div className="image">
            <img
              src={data.imagenPerfil}
              alt="image"
            />
          </div>
        </div>

        <div className="col-lg-8 col-md-8">
          <div className="content">
            <h3>{data.docente}</h3>
            <span className="sub-title">{data.curso}</span>
            <StarRating
              numItems={5}
              size={22}
              value={data.numeroEstrellas}
              readOnly
            />
            <Block marginTop={'scale400'}>
              {data.descripcion}
            </Block>
            <LabelMedium marginTop={'scale600'}>
              {`Horas Dictadas: ${data.numeroHorasDictadas}`}
            </LabelMedium>
            <LabelMedium marginTop={'scale600'}>
                 { tasks && tasks.length > 0 && <p><b>También realizo asesorias en trabajos en:</b></p>}

               </LabelMedium>
               {tasks.map((task) => (
                   <div key={task.id}>
                       <p>- {task.descripcion}</p>
                   </div>
               ))}
            <Block
              marginTop={'scale700'}
              display={'flex'}
              justifyContent={'center'}
            >



              <Link href="https://wa.me/51996115374">
                <a className="default-btn">
                  <i className="flaticon-user"></i> ¡Inscribete! <span></span>
                </a>
              </Link>
            </Block>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professor
