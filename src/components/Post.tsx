import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/index.js'

import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'


// Post data structure:
// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String 

export function Post({author,content,publishedAt}) {

  const [comments, setComments] = useState([
    'Post muito bacana,hein!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  // Variável que será atribuída ao parâmetro title da tag <time>
  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  // Variável que irá no conteúdo da tag <time> - essa variável irá
  // armazenar a data de publicação do post relativa ao agora, relativa
  // a data atual -  para isso, iremos usar uma outra função do
  // date-fns que é o formatDistanceToNow;

  // formatDistanceToNow recebe uma data, e essa data será comparada,
  // com a data atual

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(){
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment =>{
        return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src= {author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
         title={publishedDateFormatted}
         dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header> 

      <div className={styles.content}>
       {content.map(line=>{
        if(line.type === 'paragraph'){
          return <p key={line.content}>{line.content}</p>
        }else if (line.type === 'link'){
          return <p key={line.content}><a href='#'>{line.content}</a></p>
        }
       })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
         name="comment"
         placeholder='Deixe um comentário'
         value={newCommentText}
         onChange={handleNewCommentChange}
         onInvalid={handleNewCommentInvalid}
         required
         />

        <footer>
          <button type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map(comment=>{
        return <Comment
                 key={comment}
                 content={comment}
                 ondeleteComment={deleteComment}
                />
       })}
      </div>
    </article>
  )
}