"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedArticle: number | null;
  setSelectedArticle: (id: number | null) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedArticle,
        setSelectedArticle,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
