import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

const Home: NextPage = () => {
    const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    async function fetchComments() { 
      const result = await fetch('https://jsonplaceholder.cypress.io/comments');

      if(result.ok) {
        const json = await result.json();
        setComments(json);
      }
    }

    fetchComments();

  }, [])

  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      {comments.map(comment => (<p key={comment.id}>{comment.name}</p>))}
    </div>
  )
}

export default Home
