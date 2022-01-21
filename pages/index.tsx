// @ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

const Home: NextPage = ({ comments }) => {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.name}</p>
      ))}
    </div>
  );
};
export async function getStaticProps(_context) {
  let comments;
  const result = await fetch("https://jsonplaceholder.cypress.io/comments");

  if (result.ok) {
    const json = await result.json();
    comments = json;
  }

  return {
    props: {
      comments: comments ?? [],
    },
  };
}

export default Home;
