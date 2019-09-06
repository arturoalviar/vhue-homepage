import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/nav'
import Banner from '../components/banner'
import Footer from '../components/footer'
import GettingStarted from '../components/gettingStarted'
import Features from '../components/features'
import Contribute from '../components/contribute'
import '../stylus/global.styl'

const Home = () => (
  <div>
    <Head>
      <title>vhue</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap" rel="stylesheet"/>
    </Head>
    <Navigation/>
    <Banner/>
    <GettingStarted/>
    <Features/>
    <Contribute/>
    <Footer/>
  </div>
)

export default Home
