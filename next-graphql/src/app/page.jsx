"use client";
import React, { useState, useEffect } from "react";
import graphqlClient from "@/apollo-client/client";
import Demo from "@/components/Demo";
import { ApolloProvider } from "@apollo/client";
import CommentInput from "@/components/CommentInput";

export default function Home() {
  const [isChanged, setIsChanged] = useState(false);

  return (
    <ApolloProvider client={graphqlClient}>
      <div className="h-screen text-center grid place-items-center">
        <div className="container">
          <h1 className="text-3xl mb-8">Genres</h1>
          <CommentInput isChanged={isChanged} setIsChanged={setIsChanged} />
          <Demo isChanged={isChanged} />
        </div>
      </div>
    </ApolloProvider>
  );
}
