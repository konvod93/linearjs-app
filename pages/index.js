import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstSection from '../components/FirstSection'
import Features from '../components/Features'



export default function Home() {
  return (
    <>
      <Head>
        <title>Linear JS framework</title>
        <meta name="description" content="What is Linear JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>                 
      <FirstSection />
      <Features />                
      
    </>
  )
}
