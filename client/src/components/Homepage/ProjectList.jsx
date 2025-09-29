import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/projectsSlice";
import { X } from "lucide-react";
import { ArrowLeft } from "lucide-react";

function ProjectList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.projects);
  const [activeTab, setActiveTab] = useState("website");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading projects...</p>;
  if (error)
    return <p className="text-red-500">Error loading projects: {error}</p>;

  return (
    <div className="min-h-screen p-6">
      <div className="flex gap-4 mb-10 justify-center">
        {["website", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#00B2FF] to-[#1A73E8] text-white shadow-lg scale-105"
                : "bg-gray-800/80 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab === "website" ? "Website Projects" : "Mobile Projects"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items[activeTab]?.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-500 cursor-pointer group"
            style={{
              backgroundImage: `url(${project.image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition"></div>

            <div className="relative p-6 flex flex-col justify-end h-72">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 line-clamp-2 mb-2">
                {project.description}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-[#00B2FF]">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-30 animate-fadeIn">
          <div className="bg-gray-900/90 border border-gray-700/50 backdrop-blur-lg text-white p-8 rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#00B2FF]">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>

            <img
              src={selectedProject.image1}
              alt={selectedProject.title}
              className="w-full h-72 object-cover rounded-xl shadow-lg cursor-pointer hover:scale-[1.02] transition"
              onClick={() => setSelectedImage(selectedProject.image1)}
            />
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center z-50 animate-fadeIn">
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent shadow-md">
            <button
              onClick={() => setSelectedImage(null)}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedProject(null);
              }}
              className="text-gray-300 hover:text-white  transition-transform duration-300 cursor-pointer"
            >
              <X size={32} />
            </button>
          </div>

          <h2 className="text-[#00B2FF] text-3xl font-bold mt-20 mb-8 tracking-wider text-center drop-shadow-lg">
            {selectedProject.title}
          </h2>

          <div className="flex flex-row gap-10  md:w-3/4 lg:w-2/3 overflow-y-auto h-[75vh] p-8 rounded-2xl bg-gray-900/40 shadow-2xl border border-gray-700/40">
            {[
              selectedProject.image1,
              selectedProject.image2,
              selectedProject.image3,
            ]
              .filter(Boolean)
              .map((img, idx) => (
                <div
                  key={idx}
                  className="w-full flex justify-center items-center"
                >
                  <img
                    src={img}
                    alt={`project-${idx}`}
                    className="max-h-[65vh] w-auto rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-500"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
