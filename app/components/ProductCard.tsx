"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const isAvailable = product.price !== null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="block"
      >
        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-zinc-50 sm:h-64">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-5 transition duration-500 group-hover:scale-105 sm:p-6"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <span
              className="text-5xl"
              aria-hidden="true"
            >
              🌿
            </span>
          )}

          {/* Category */}
          <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-500 shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-400">
          VitaAura Collection
        </p>

        <Link
          href={`/products/${product.id}`}
          className="block"
        >
          <h2 className="mt-2 line-clamp-2 min-h-12 text-base font-semibold leading-6 text-zinc-900 transition hover:text-zinc-500 sm:text-lg">
            {product.name}
          </h2>
        </Link>

        {/* Details */}
        {product.details ? (
          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-zinc-500">
            {product.details}
          </p>
        ) : (
          <div className="min-h-10" />
        )}

        {/* Price */}
        <div className="mt-4">
          <p className="text-xl font-bold tracking-tight text-zinc-900">
            {isAvailable
              ? `₦${product.price!.toLocaleString()}`
              : "Price available soon"}
          </p>

          <p className="mt-1 text-[11px] text-zinc-400">
            {isAvailable
              ? "Price displayed in Nigerian Naira"
              : "Check product details for updates"}
          </p>
        </div>

        {/* Availability */}
        <div className="mt-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
              isAvailable
                ? "text-emerald-600"
                : "text-zinc-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAvailable
                  ? "bg-emerald-500"
                  : "bg-zinc-300"
              }`}
              aria-hidden="true"
            />

            {isAvailable
              ? "Available"
              : "Currently unavailable"}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2 pt-5">
          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={!isAvailable}
            className="flex-1 rounded-lg bg-zinc-900 px-3 py-3 text-xs font-bold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-300"
          >
            {isAvailable
              ? "Add to Cart"
              : "Unavailable"}
          </button>

          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-lg border border-zinc-200 px-3 py-3 text-center text-xs font-bold text-zinc-800 transition hover:bg-zinc-50"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}