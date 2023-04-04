import styles from './Sidebar.module.css'

// IMPORT ICONS LIBRARY PHOSPHOR
import { PencilLine } from 'phosphor-react'

// IMPORT COMPONENT AVATAR FROM Avatar.jsx
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className= {styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1635863762520-d952874f4d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
        />

      <div className={styles.profile}>
        <Avatar hasBorder  src="https://avatars.githubusercontent.com/u/93992748?v=4"/>
        <strong>Clara Pacheco</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />

          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}