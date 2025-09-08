import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/projectsSlice";

function ProjectList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.projects);
  const [activeTab, setActiveTab] = useState("website");

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading projects...</p>;
  if (error)
    return <p className="text-red-500">Error loading projects: {error}</p>;

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("website")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "website"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Website Projects
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeTab === "mobile"
              ? "bg-[#00B2FF] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Mobile Projects
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items[activeTab]?.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            style={{
              backgroundImage: `url(${project.image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative p-5 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-sm mb-4">
                  <span className="font-semibold text-[#00B2FF]">Tech:</span>{" "}
                  {project.tech.join(", ")}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 bg-[#00B2FF] text-white rounded-lg hover:bg-[#0099dd] transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
