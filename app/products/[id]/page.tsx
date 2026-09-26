"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductPage() {
const params = useParams();
const router = useRouter();
const { addToCart } = useCart();

const [quantity, setQuantity] = useState(1);
const [added, setAdded] = useState(false);

const productId = Number(params.id);

const product = products.find(
(item) => item.id === productId
);

if (!product) {
return ( <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4"> <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm"> <div className="text-5xl" aria-hidden="true">
🔎 </div>

      <h1 className="mt-5 text-2xl font-bold text-zinc-950">
        Product not found
      </h1>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        The product you are looking for could not be found.
      </p>

      <Link
        href="/#shop"
        className="mt-6 inline-flex rounded-xl bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
      >
        Back to Shop
      </Link>
    </div>
  </main>
);

}

const isAvailable = product.price !== null;

const handleAddToCart = () => {
if (!isAvailable) return;

for (let i = 0; i < quantity; i += 1) {
  addToCart(product);
}

setAdded(true);

setTimeout(() => {
  setAdded(false);
}, 2500);

};

const increaseQuantity = () => {
setQuantity((current) => current + 1);
};

const decreaseQuantity = () => {
setQuantity((current) => Math.max(1, current - 1));
};

return ( <main className="min-h-screen bg-zinc-50">
{/* Breadcrumb */} <div className="border-b border-zinc-200 bg-white"> <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"> <nav
         aria-label="Breadcrumb"
         className="flex items-center gap-2 text-sm text-zinc-500"
       > <Link
           href="/"
           className="transition hover:text-zinc-950"
         >
Home </Link>

```
        <span aria-hidden="true">/</span>

        <Link
          href="/#shop"
          className="transition hover:text-zinc-950"
        >
          Shop
        </Link>

        <span aria-hidden="true">/</span>

        <span className="truncate text-zinc-900">
          {product.name}
        </span>
      </nav>
    </div>
  </div>

  {/* Main Product */}
  <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      {/* Product Image */}
      <div>
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm sm:min-h-[520px]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-8 sm:p-12"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          ) : (
            <span
              className="text-7xl"
              aria-hidden="true"
            >
              🌿
            </span>
          )}

          <span className="absolute left-5 top-5 rounded-full border border-zinc-200 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-600 shadow-sm">
            {product.category}
          </span>

          {isAvailable && (
            <span className="absolute right-5 top-5 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
              In Stock
            </span>
          )}
        </div>

        {/* Trust Cards */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div
              className="text-lg"
              aria-hidden="true"
            >
              ✓
            </div>

            <p className="mt-1 text-xs font-semibold text-zinc-800">
              Genuine products
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div
              className="text-lg"
              aria-hidden="true"
            >
              📦
            </div>

            <p className="mt-1 text-xs font-semibold text-zinc-800">
              Order & delivery
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-zinc-200 bg-white p-4 sm:col-span-1">
            <div
              className="text-lg"
              aria-hidden="true"
            >
              💬
            </div>

            <p className="mt-1 text-xs font-semibold text-zinc-800">
              Personal assistance
            </p>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
          VitaAura Collection
        </p>

        <p className="mt-3 text-sm font-semibold text-zinc-500">
          {product.category}
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl lg:leading-[1.08]">
          {product.name}
        </h1>

        {product.shortDescription && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            {product.shortDescription}
          </p>
        )}

        {/* Price */}
        <div className="mt-7 border-y border-zinc-200 py-6">
          <p className="text-3xl font-bold tracking-tight text-zinc-950">
            {isAvailable
              ? `₦${product.price!.toLocaleString()}`
              : "Price available soon"}
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            {isAvailable
              ? "Price displayed in Nigerian Naira."
              : "The latest price will be added when available."}
          </p>
        </div>

        {/* Availability */}
        <div className="mt-6 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isAvailable
                ? "bg-emerald-500"
                : "bg-zinc-300"
            }`}
            aria-hidden="true"
          />

          <span
            className={`text-sm font-semibold ${
              isAvailable
                ? "text-emerald-700"
                : "text-zinc-500"
            }`}
          >
            {isAvailable
              ? "Available to order"
              : "Price not yet available"}
          </span>
        </div>

        {/* Quantity */}
        {isAvailable && (
          <div className="mt-7">
            <p className="mb-3 text-sm font-bold text-zinc-900">
              Quantity
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-12 items-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-full w-12 items-center justify-center text-lg font-semibold text-zinc-600 transition hover:bg-zinc-100"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span
                  className="flex h-full w-12 items-center justify-center border-x border-zinc-200 text-sm font-bold text-zinc-900"
                  aria-live="polite"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-full w-12 items-center justify-center text-lg font-semibold text-zinc-600 transition hover:bg-zinc-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <p className="text-sm text-zinc-500">
                {quantity === 1
                  ? "1 item"
                  : `${quantity} items`}
              </p>
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!isAvailable}
            className="w-full rounded-xl bg-zinc-950 px-6 py-4 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-400"
          >
            {!isAvailable
              ? "Price Not Available"
              : added
                ? "✓ Added to Cart"
                : "Add to Cart"}
          </button>
        </div>

        {/* View Cart */}
        {added && (
          <Link
            href="/cart"
            className="mt-3 block rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-center text-sm font-bold text-zinc-800 transition hover:bg-zinc-50"
          >
            View Cart
          </Link>
        )}

        {/* Ordering Note */}
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="flex gap-3">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm"
              aria-hidden="true"
            >
              💬
            </div>

            <div>
              <h2 className="text-sm font-bold text-zinc-900">
                Need help before ordering?
              </h2>

              <p className="mt-1 text-sm leading-6 text-zinc-500">
                Review the product information below before adding
                it to your cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Product Information */}
  <section className="border-t border-zinc-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
          Product Information
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Learn more about {product.name}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* About */}
        {product.about && (
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-zinc-950">
              About this product
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {product.about}
            </p>
          </div>
        )}

        {/* Features */}
        {product.features &&
          product.features.length > 0 && (
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-zinc-950">
                Key features
              </h3>

              <ul className="mt-4 space-y-3">
                {product.features.map(
                  (feature, index) => (
                    <li
                      key={`${product.id}-feature-${index}`}
                      className="flex gap-3 text-sm leading-6 text-zinc-600"
                    >
                      <span
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

        {/* Ingredients */}
        {product.ingredients && (
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-zinc-950">
              Ingredients
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {product.ingredients}
            </p>
          </div>
        )}

        {/* Usage */}
        {product.usage && (
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-zinc-950">
              How to use
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {product.usage}
            </p>
          </div>
        )}

        {/* Details */}
        {product.details && (
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-2">
            <h3 className="text-lg font-bold text-zinc-950">
              Product details
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {product.details}
            </p>
          </div>
        )}
      </div>
    </div>
  </section>

  {/* Continue Shopping */}
  <section className="border-t border-zinc-200 bg-zinc-50">
    <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold text-zinc-950">
        Continue exploring VitaAura
      </h2>

      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-zinc-500">
        Explore more products from the VitaAura collection.
      </p>

      <Link
        href="/#shop"
        className="mt-5 inline-flex rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-zinc-800"
      >
        Continue Shopping
      </Link>
    </div>
  </section>
</main>

);
}
