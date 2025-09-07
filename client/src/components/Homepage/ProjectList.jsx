import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/projectsSlice";
function ProjectList() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  return (
    <ul>
      {items.map((project) => (
        <li key={project.id}>
          <h3>{project.title}</h3>
          <p>Tech: {project.tech.join(", ")}</p>
          <a href={project.link}>View Project</a>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
