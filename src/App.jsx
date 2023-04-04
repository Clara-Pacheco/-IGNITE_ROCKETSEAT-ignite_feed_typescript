import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Import CSS GLOBAL
import './global.css'

// IMPORT APP MODULE CSS
import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String 

const posts = [
  {
    id:1,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/93992748?v=4',
      name: 'Clara Pacheco',
      role: 'Webdesigner'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-03-30 19:16')
  },
  {
    id:2,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-04-10 19:16')

  }

]

function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
       <Sidebar />

        <main>
           {posts.map(({author,content,publishedAt,id})=>{
             return(
              <Post 
                key={id}
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
             )
           })}
        </main>


      </div>
     
      
    </div>
  )
}

export default App

