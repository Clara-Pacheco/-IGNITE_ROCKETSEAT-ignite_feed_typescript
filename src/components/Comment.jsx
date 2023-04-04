import styles from './Comment.module.css'

// IMPORT ICONS LIBRARY PHOSPHOR

import { Trash, ThumbsUp } from 'phosphor-react'


// IMPORT AVATAR FROM AVATAR.JSX

import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({content, ondeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  function handleNewLikes(){
    setLikeCount((state)=>{
      return state + 1
    })
  }


  function handleDeleteComment(){
    ondeleteComment(content)
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/93992748?v=4' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Clara Pacheco</strong>
              <time title='11 de maio as 8:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLikes}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}