import React, { useEffect } from "react";
import ExpandingButton from "../Button/ExpandingButton";
import { ChevronLeft, Computer } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPCBuild } from "../../../store/techexpertisepages/pcBuildSlice";
import { ChevronRight } from "lucide-react";
import ImageSlideSection from "./pcBuild/ImageSlideSection";

function PCBuildPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.pcBuild);

  useEffect(() => {
    dispatch(fetchPCBuild());
  }, [dispatch]);

  if (isLoading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!items)
    return <p className="text-white text-center mt-10">No data found.</p>;

  return (
    <div className="m-40 ">
      <div className="flex justify-between mb-5">
        <ExpandingButton
          icon={Computer}
          button1="PC 1 BUILD"
          button2="PC 2 BUILD"
        />
        <button class="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 shadow-lg transition-transform duration-300 transform hover:scale-105">
          Upgrade
        </button>
      </div>
      <ImageSlideSection />
    </div>
  );
}

export default PCBuildPage;
