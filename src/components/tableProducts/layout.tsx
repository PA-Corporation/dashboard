"use client";

import React, { useMemo, useState } from "react";
import {
  Pagination,
  Selection,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useSWR from "swr";
import products from "@/public/products.json";
import renderCell from "./renderCell";
import { Products } from "@/types";
import TopContent from "./topContent";
import styles from "./styles.module.css";

const fetcher = async (url: string) => {
  if (url === "/api/products") {
    return Promise.resolve(products); // products JSON import
  }
  const res = await fetch(url);
  return await res.json();
};

const TableListProduct = () => {
  const [statusFilter, setStatusFilter] = useState<Selection>("all");

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "CATEGORY", uid: "category" },
    { name: "COST", uid: "cost" },
    { name: "PRICE", uid: "price" },
    { name: "REVENUE", uid: "revenue" },
    { name: "PERCENTAGE", uid: "revenuePercentage" },
    { name: "DATE", uid: "date" },
    { name: "QUANTITY", uid: "quantity" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
  ];

  // Pagination system ->
  const [page, setPage] = useState(1);

  const { data, isLoading } = useSWR("/api/products", fetcher, {
    keepPreviousData: true,
  });

  //   const { data, isLoading } = useSWR(
  //     `https://swapi.py4e.com/api/people?page=${page}`,
  //     fetcher,
  //     { keepPreviousData: true }
  //   );

  const rowsPerPage = 11;

  //   const pages = useMemo(() => {
  //     return data?.length ? Math.ceil(data?.length / rowsPerPage) : 0;
  //   }, [data, rowsPerPage]);

  const pages = data?.length ? Math.ceil(data?.length / rowsPerPage) : 0;

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data?.slice(start, end);
  }, [page, data]);

  const loadingState = isLoading || data?.length === 0 ? "loading" : "idle";
  // <-

  return (
    <Table
      isStriped={false}
      classNames={{
        wrapper: styles.wrapper,
        th: styles.th,
        td: styles.td,
        tr: styles.tr,
        tbody: styles.tbody,
      }}
      topContent={
        <TopContent
          statusOptions={statusOptions}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      }
      topContentPlacement="outside"
      bottomContentPlacement="outside"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact={true}
              showControls={true}
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              classNames={{
                wrapper: styles.pgWrapper,
                item: styles.pgItem,
                cursor: styles.pgCursor,
                prev: styles.pgPrev,
                next: styles.pgNext,
              }}
            />
          </div>
        ) : null
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody
        items={items ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item: Products) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableListProduct;
