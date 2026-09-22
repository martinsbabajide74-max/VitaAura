"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ShopSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <section
      id="shop"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"
    >
      {/* Shop Header */}
      <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              VitaAura Store
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Featured Products
              </h2>

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Explore nutrition and wellness products available from
              VitaAura.
            </p>
          </div>

          {/* Product Search */}
          <div className="w-full lg:max-w-sm">
            <label
              htmlFor="product-search"
              className="mb-2 block text-xs font-semibold text-zinc-500"
            >
              Search products
            </label>

            <div className="flex h-11 items-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition focus-within:border-zinc-400 focus-within:bg-white">
              <span
                className="px-3 text-base text-zinc-400"
                aria-hidden="true"
              >
                🔎
              </span>

              <input
                id="product-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by product name..."
                className="h-full w-full bg-transparent pr-3 text-sm outline-none placeholder:text-zinc-400"
              />

              {searchTerm.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-zinc-400 transition hover:bg-zinc-200 hover:text-zinc-700"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div>
          {/* Toolbar */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-zinc-800">
              {searchTerm.trim()
                ? `Search results for "${searchTerm.trim()}"`
                : "All featured products"}
            </p>

            <p className="text-xs text-zinc-400">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Empty Search State */
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-16 text-center shadow-sm">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-2xl"
            aria-hidden="true"
          >
            🔎
          </div>

          <h3 className="mt-5 font-bold text-zinc-900">
            No products found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            We couldn't find a product matching your search. Try a
            different product name.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-5 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}