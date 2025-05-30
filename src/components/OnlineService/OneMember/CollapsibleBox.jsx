import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSection } from "./collapsibleSlice";
import { Plus, Minus } from "lucide-react";

const CollapsibleBox = ({ title, sectionKey, children }) => {
  const isOpen = useSelector((state) => state.collapsible.sections[sectionKey]);
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-100 border border-blue-300 rounded mb-4">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-blue-300">
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-lg font-semibold">☰</button>
          <h2 className="text-blue-800 font-bold text-base">{title}</h2>
        </div>
        <button
          onClick={() => dispatch(toggleSection(sectionKey))}
          className="text-blue-700 hover:text-blue-900 transition"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>

      {/* Content */}
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleBox;
