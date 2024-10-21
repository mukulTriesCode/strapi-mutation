import { gql, useQuery } from "@apollo/client";
import React from "react";

const Demo = () => {
  const DataQuery = gql`
    query Comment {
      comments {
        Review
      }
    }
  `;
  const { loading, error, data } = useQuery(DataQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
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
      </div>
    </div>
  );
};

export default Demo;
