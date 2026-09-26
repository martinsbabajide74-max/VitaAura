"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ShopSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section
      id="shop"
      className="mx-auto max-w-7xl scroll-mt-32 px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                VitaAura Store
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Explore our collection
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
              Discover nutrition and wellness products available through
              VitaAura.
            </p>
          </div>

          {/* Product Count */}
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Available
              </p>

              <p className="mt-0.5 text-lg font-bold text-zinc-900">
                {filteredProducts.length}
                <span className="ml-1 text-xs font-medium text-zinc-400">
                  {filteredProducts.length === 1 ? "product" : "products"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search / Toolbar */}
      <div className="mb-8 rounded-[1.5rem] border border-zinc-200/80 bg-white p-3 shadow-sm sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 sm:max-w-md">
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>

            <div className="group flex h-12 items-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-300 focus-within:border-zinc-400 focus-within:bg-white focus-within:shadow-sm">
              <span
                className="px-3.5 text-base text-zinc-400 transition group-focus-within:text-zinc-700"
                aria-hidden="true"
              >
                🔎
              </span>

              <input
                id="product-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="h-full w-full bg-transparent pr-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />

              {searchTerm.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-zinc-400 transition duration-200 hover:bg-zinc-200 hover:text-zinc-800"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-1 sm:justify-end">
            <p className="text-xs text-zinc-400">
              {searchTerm.trim()
                ? `Results for "${searchTerm.trim()}"`
                : "Showing all products"}
            </p>
          </div>
        </div>
      </div>

      {/* Product Area */}
      {filteredProducts.length > 0 ? (
        <div>
          {/* Small Results Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-zinc-900">
                {searchTerm.trim() ? "Search results" : "All products"}
              </h3>

              <p className="mt-1 text-xs text-zinc-400">
                Select a product to learn more.
              </p>
            </div>

            <div className="hidden h-8 items-center rounded-full bg-zinc-100 px-3 text-xs font-semibold text-zinc-500 sm:flex">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-0 transition duration-300 hover:-translate-y-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white px-6 py-20 text-center shadow-sm">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-2xl"
            aria-hidden="true"
          >
            🔎
          </div>

          <h3 className="mt-6 text-lg font-bold text-zinc-900">
            No products found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            We couldn't find a product matching your search. Try another
            product name or view the complete collection.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-6 rounded-xl bg-zinc-950 px-6 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}