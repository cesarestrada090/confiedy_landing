import React from 'react'

import Link from '../utils/ActiveLink'

import { Block } from 'baseui/block'
import { StarRating } from 'baseui/rating'
import { LabelMedium } from 'baseui/typography'

const Professor = ({ data }) => {
  console.log('data', data)

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Block>
            <LabelMedium marginTop={'scale600'}>
              {`Horas Dictadas: ${data.numeroHorasDictadas}`}
            </LabelMedium>

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
