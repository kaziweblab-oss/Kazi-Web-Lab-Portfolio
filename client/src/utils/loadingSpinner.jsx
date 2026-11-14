import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
