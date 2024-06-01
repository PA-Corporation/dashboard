import { useSuppliesList } from "@/hooks/useSuppliesList";
import { Select, SelectItem } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useState } from "react";

const styles = {
  label: ["text-color-black"],
  trigger: ["bg-color-white", "text-color-black"],
  innerWrapper: [
    "bg-transparent",
    "group-data-[focus=true]:text-color-black",
    "group-data-[hover=true]:text-color-black",
  ],
  listbox: ["text-color-black"],
};

const SelectAsync = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, hasMore, isLoading, onLoadMore } = useSuppliesList({
    fetchDelay: 1500,
  });
  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    isEnabled: isOpen,
    shouldUseLoader: false, // We don't want to show the loader at the bottom of the list
    onLoadMore,
  });

  return (
    <Select
      classNames={styles}
      isLoading={isLoading}
      items={items}
      label="Pick a Supplie"
      placeholder="Select a Supplie"
      scrollRef={scrollerRef}
      selectionMode="single"
      onOpenChange={setIsOpen}
    >
      {(item) => (
        <SelectItem key={item.name} className="capitalize">
          {item.name}
        </SelectItem>
      )}
    </Select>
  );
};

export default SelectAsync;
