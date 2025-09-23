import React, { useEffect, useState } from "react";
import ExpandingButton from "../Button/ExpandingButton";
import { Computer } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPCBuild } from "../../../store/techexpertisepages/pcBuildSlice";
import ImageSlideSection from "./pcBuild/ImageSlideSection";

function PCBuildPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.pcBuild);

  const [selectedBuild, setSelectedBuild] = useState("pc1");
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);

  useEffect(() => {
    dispatch(fetchPCBuild());
  }, [dispatch]);

  const handleSelectBuild = (buildKey) => {
    setSelectedBuild(buildKey);
    setIsButtonExpanded(false);
  };

  if (isLoading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!items)
    return <p className="text-white text-center mt-10">No data found.</p>;

  const handleUpgrade = () => {
    if (selectedBuild === "pc1") {
      setSelectedBuild("pc1_upgrade");
    } else if (selectedBuild === "pc1_upgrade") {
      setSelectedBuild("pc1");
    }
    // 👉 do nothing if it's pc2 (no upgrade for pc2)
  };

  return (
    <div className="m-40">
      <div className="flex justify-between mb-5">
        <ExpandingButton
          icon={Computer}
          button1="PC 1 BUILD"
          button2="PC 2 BUILD"
          onClick1={() => handleSelectBuild("pc1")}
          onClick2={() => handleSelectBuild("pc2")}
          isExpanded={isButtonExpanded}
          setIsExpanded={setIsButtonExpanded}
        />

        <button
          onClick={handleUpgrade}
          disabled={selectedBuild === "pc2"}
          className={`rounded-2xl font-semibold py-2 px-4 shadow-lg transition-transform duration-300 transform hover:scale-105
            ${
              selectedBuild === "pc2"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            }
          `}
        >
          {selectedBuild === "pc1_upgrade" ? "Back to Base" : "Upgrade"}
        </button>
      </div>

      <ImageSlideSection buildKey={selectedBuild} />
    </div>
  );
}

export default PCBuildPage;
