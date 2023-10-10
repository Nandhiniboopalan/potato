import React from "react";
import SuggestionsCard from "./SuggestionsCard";
const HomeRight = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://images.pexels.com/photos/9992643/pexels-photo-9992643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>FullName</p>
              <p className="opacity-70">username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">Switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[, 1, 1, 1, 11, 1].map((item) => (
            <SuggestionsCard />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomeRight;
