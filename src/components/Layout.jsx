import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'

const Layout = ({data, categoryName, setCategoryName}) => {
  return (
    <>
      <Header
        data={data}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
      <Outlet/>
    </>
  )
}

export default Layout
