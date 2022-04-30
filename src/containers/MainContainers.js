import React from 'react'
import List from '../components/List'
import { MainConten, MainImgStyles, MainStyles, TituloStyle } from '../styles/fondoStyles'

function MainContainers() {
    
  return (
    <MainStyles>
        <div>
        <MainConten>
            <TituloStyle>Tiendita</TituloStyle>
            <MainImgStyles src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1651304129/guajolotes/fondo_nzuck1.png" alt="imgfrutas"/>
            <List/>
        </MainConten>
        </div>
    </MainStyles>

  )
}

export default MainContainers