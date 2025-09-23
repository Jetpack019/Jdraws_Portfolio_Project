import React from "react";
import ExpandingButton from "../Button/ExpandingButton";
import { Computer } from "lucide-react";
function PCBuildPage() {
  return (
    <div className="m-40 ">
      <div className="flex justify-between">
        <ExpandingButton
          icon={Computer}
          button1="PC 1 BUILD"
          button2="PC 2 BUILD"
        />
        <button class="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 shadow-lg transition-transform duration-300 transform hover:scale-105">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default PCBuildPage;
