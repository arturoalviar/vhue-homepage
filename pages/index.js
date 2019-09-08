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
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="theme-color" content="#2962ff"/>
      <meta name="description" content="Vhue is a electron based desktop application to control your Philips Hue lights"/>
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
