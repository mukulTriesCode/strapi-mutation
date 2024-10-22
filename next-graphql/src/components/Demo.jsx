"use client";
import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

const DataQuery = gql`
  query Comment {
    comments {
      Review
    }
  }
`;

const Demo = ({ isChanged }) => {
  const { loading, error, data } = useQuery(DataQuery);
  const [storedComments, setStoredComments] = useState([]);

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem("comment")) || [];
    setStoredComments(comments);
  }, [isChanged]);

  if (loading)
    return (
      <div className="text-center py-4">
        <div className="flex items-center justify-center rounded-xl border border-slate-400/50 p-6 py-14">
          <div className="w-11 h-11 border-4 border-t-slate-900 border-slate-200 rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-4">
        <div className="flex items-center justify-center rounded-xl border border-slate-400/50 p-6 py-14">
          Error :{error.message}
        </div>
      </div>
    );

  return (
    <div className="text-center py-4">
      <div className="flex flex-col rounded-xl border border-slate-400/50 px-6">
        {data?.comments.map((val, i) => (
          <div
            key={val.Review}
            className={`border-t border-slate-200 py-4 ${
              i === 0 ? "border-none" : ""
            }`}
          >
            {val.Review}
          </div>
        ))}
        {storedComments?.comments &&
          storedComments?.comments.length > 0 &&
          storedComments?.comments.map((val) => (
            <div key={val.id} className={`border-t border-slate-200 py-4`}>
              {val.comment}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Demo;
