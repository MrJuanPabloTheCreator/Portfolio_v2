import ProjectsNavbar from "./_ProjectsNavbar/projectsNavbar";

const ProjectsLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {

  return (
    <main>
        <ProjectsNavbar/>
        {children}
    </main>
  )
}

export default ProjectsLayout