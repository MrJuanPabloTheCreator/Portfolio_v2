import React from 'react'

import styles from "./projectsNavbar.module.css"
import Link from 'next/link'

const projects = [
    {
        route: "/projects/paw-paradise",
        label: "Paw Paradise"
    },
    {
        route: "/projects/jp-hospital",
        label: "JP Hospital"
    }
]

const ProjectsNavbar = () => {
  return (
    <nav className={styles.nav}>
        {projects.map((project, index) => (
            <Link href={project.route} key={index}>
                {project.label}
            </Link>
        ))}
    </nav>
  )
}

export default ProjectsNavbar