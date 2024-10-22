import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";

export const ADDMUT = gql`
  mutation Mutation($data: CommentInput!) {
    createComment(data: $data) {
      Review
    }
  }
`;

const CommentInput = ({ isChanged, setIsChanged }) => {
  const [comment, setComment] = useState("");
  const [createComment] = useMutation(ADDMUT);
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    localStorage.removeItem("comment");
    setCommentArr([]);
  }, []);

  const storeInLocalStorage = (comments) => {
    const commentData = { comments: comments };
    localStorage.setItem("comment", JSON.stringify(commentData));
  };

  const addComment = async () => {
    if (!comment.trim()) return;
    const newComment = { id: Date.now(), comment: comment };
    setCommentArr(prevState => [...prevState, newComment]);
    storeInLocalStorage([...commentArr, newComment]);

    await createComment({
      variables: {
        data: {
          Review: comment,
        },
      },
    })
      .then(({ data }) => {
        setComment("");
        setIsChanged(!isChanged);
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
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            addComment();
          }
        }}
      />
      <button
        className="px-6 py-4 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition flex-none"
        type="button"
        onClick={addComment}
      >
        Add comment
      </button>
    </div>
  );
};

export default CommentInput;
