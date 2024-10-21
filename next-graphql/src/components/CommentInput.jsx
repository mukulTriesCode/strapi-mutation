import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const ADDMUT = gql`
  mutation Mutation($data: CommentInput!) {
    createComment(data: $data) {
      Review
    }
  }
`;

const CommentInput = () => {
  const [comment, setComment] = useState("");
  const [createComment] = useMutation(ADDMUT);

  const addComment = async () => {
    await createComment({
      variables: {
        data: {
          Review: comment,
        },
      },
    })
      .then(({ data }) => {
        console.log("Comment added successfully:", data?.createComment?.Review);
        setComment("");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <div className="flex gap-4">
      <input
        className="border-slate-400/50 px-6 py-4 rounded-xl border border-slate-200 w-full"
        type="text"
        placeholder="Add new comment here..."
        id="commentText"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            addComment();
          }
        }}
      />
      <input
        className="px-6 py-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
        type="button"
        value="Add comment"
        onClick={addComment}
      />
    </div>
  );
};

export default CommentInput;
