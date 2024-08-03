import Link from 'next/link'
import React from 'react'

import styles from "./sideBar.module.css"

const sideBarRoutes = [
  {
    route: '/',
    label: 'About'
  },
  {
    route: '/projects',
    label: 'Projects'
  },
  {
    route: '/technologies',
    label: 'Technologies'
  }
]

const SideBar = () => {
  return (
    <nav className={styles.nav}>
      {sideBarRoutes.map((route, index) => (
        <Link href={route.route} key={index}>
          {route.label}
        </Link>
      ))}   
    </nav>
  )
}

export default SideBar