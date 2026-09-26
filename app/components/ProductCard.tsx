"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const isAvailable = product.price !== null;

  const formattedPrice = isAvailable
    ? `₦${product.price!.toLocaleString()}`
    : "Price available soon";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl">
      <Link
        href={`/products/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={false}
              className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-7 md:p-8"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 25vw, 20vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-5xl" aria-hidden="true">
                🌿
              </span>
            </div>
          )}

          <span className="absolute left-3 top-3 rounded-full border border-zinc-200 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 shadow-sm backdrop-blur-sm">
            {product.category}
          </span>

          {isAvailable && (
            <span className="absolute right-3 top-3 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">
              In Stock
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
          VitaAura Collection
        </p>

        <Link href={`/products/${product.id}`} className="block">
          <h2 className="mt-2 line-clamp-2 min-h-[3rem] text-[17px] font-semibold leading-6 tracking-tight text-zinc-900 transition-colors duration-200 hover:text-zinc-600">
            {product.name}
          </h2>
        </Link>

        {product.details ? (
          <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-zinc-500">
            {product.details}
          </p>
        ) : (
          <div className="min-h-[2.5rem]" />
        )}

        <div className="mt-5">
          <p className="text-xl font-bold tracking-tight text-zinc-950">
            {formattedPrice}
          </p>

          <p className="mt-1 text-[11px] text-zinc-400">
            {isAvailable
              ? "Price displayed in Nigerian Naira"
              : "Check back for the latest price"}
          </p>
        </div>

        <div className="mt-3">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold ${
              isAvailable ? "text-emerald-600" : "text-zinc-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAvailable ? "bg-emerald-500" : "bg-zinc-300"
              }`}
              aria-hidden="true"
            />
            {isAvailable ? "Available to order" : "Price not yet available"}
          </span>
        </div>

        <div className="mt-auto flex gap-2.5 pt-5">
          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={!isAvailable}
            className="flex-1 rounded-xl bg-zinc-950 px-3 py-3.5 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400 disabled:shadow-none"
          >
            {isAvailable ? "Add to Cart" : "Unavailable"}
          </button>

          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 text-center text-xs font-bold text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}