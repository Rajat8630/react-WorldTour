import React from 'react'
import Footer from '../Ui/Footer'
import Header from '../Ui/Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
