import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

/* igniteLogo guardará um caminho, e é esse caminho que
precisamos colocar no source(src) da imagem - 
como se trata de uma variável, temos que colocar entre { } */

export function Header(){
  return (
    <div className={ styles.header }>
      <img src= { igniteLogo } alt="Logotipo do Ignite" />
    </div>

  )
}