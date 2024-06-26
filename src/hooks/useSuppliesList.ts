import React, { useEffect, useState } from "react";

export type Supplies = {
  name: string;
  url: string;
};

export type UseSuppliesListProps = {
  /** Delay to wait before fetching more items */
  fetchDelay?: number;
};

export function useSuppliesList({ fetchDelay = 0 }: UseSuppliesListProps = {}) {
  const [items, setItems] = useState<Supplies[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of items per page, adjust as necessary

  const loadSupplies = async (currentOffset: number) => {
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setIsLoading(true);

      if (offset > 0) {
        // Delay to simulate network latency
        await new Promise((resolve) => setTimeout(resolve, fetchDelay));
      }

      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${limit}`,
        { signal }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      let json = await res.json();

      setHasMore(json.next !== null);
      // Append new results to existing ones
      setItems((prevItems) => [...prevItems, ...json.results]);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("There was an error with the fetch operation:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSupplies(offset);
  }, []);

  const onLoadMore = () => {
    const newOffset = offset + limit;

    setOffset(newOffset);
    loadSupplies(newOffset);
  };

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore,
  };
}
