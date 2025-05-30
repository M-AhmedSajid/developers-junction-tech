import React from 'react'
import Portfolio from '../components/Portfolio'
import LoaduseEffect from '../utils/LoaduseEffect'

export const metadata = {
  title: "Portfolio | Developers Junction Tech",
  description: "Developers Junction Tech Made many Amazing Things! Check out our Portfolio Now."
}

export default function page() {
  return (
    <>
    <LoaduseEffect />
    <Portfolio />
    </>
  )
}
