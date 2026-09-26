"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce((total, item) => {
    return total + (item.price ?? 0) * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="VitaAura home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              V
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                VitaAura
              </p>

              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:block">
                Nutrition & Wellness
              </p>
            </div>
          </Link>

          <Link
            href="/#shop"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm sm:px-5 sm:text-sm"
          >
            Continue Shopping
          </Link>
        </nav>
      </header>

      {/* Main Cart */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Page Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
            <span>VitaAura</span>
            <span aria-hidden="true">•</span>
            <span>Your Selection</span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                Your Cart
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                Review your selected products, adjust quantities, and
                continue when you are ready to place your order.
              </p>
            </div>

            {cart.length > 0 && (
              <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-600 shadow-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-900">
                  {cartCount}
                </span>

                {cartCount === 1 ? "Item" : "Items"}
              </div>
            )}
          </div>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm sm:mt-12">
            <div className="px-6 py-20 text-center sm:px-10 sm:py-24">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-4xl">
                🛒
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Nothing here yet
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                Your cart is empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-500">
                Browse the VitaAura collection and add the products you
                would like to order.
              </p>

              <Link
                href="/#shop"
                className="mt-8 inline-flex rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
              >
                Explore Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-7 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
            {/* Cart Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <p className="text-sm font-bold text-zinc-900">
                  Selected Products
                </p>

                <p className="text-xs text-zinc-400">
                  {cart.length}{" "}
                  {cart.length === 1 ? "product" : "products"}
                </p>
              </div>

              {cart.map((item) => {
                const itemTotal =
                  (item.price ?? 0) * item.quantity;

                return (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md sm:p-5"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {/* Image */}
                      <Link
                        href={`/products/${item.id}`}
                        className="relative flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-50 via-white to-zinc-100 sm:h-36 sm:w-36"
                        aria-label={`View ${item.name}`}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            sizes="144px"
                          />
                        ) : (
                          <span
                            className="text-4xl"
                            aria-hidden="true"
                          >
                            🌿
                          </span>
                        )}
                      </Link>

                      {/* Product Details */}
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                              {item.category}
                            </p>

                            <Link
                              href={`/products/${item.id}`}
                              className="mt-1 block text-lg font-bold tracking-tight text-zinc-950 transition-colors hover:text-zinc-600 sm:text-xl"
                            >
                              {item.name}
                            </Link>

                            {item.details && (
                              <p className="mt-1 line-clamp-2 text-sm leading-6 text-zinc-500">
                                {item.details}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="self-start rounded-full px-2 py-1 text-xs font-semibold text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            Remove
                          </button>
                        </div>

                        <div className="mt-5 flex flex-col gap-5 border-t border-zinc-100 pt-5 sm:flex-row sm:items-end sm:justify-between">
                          {/* Quantity */}
                          <div>
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                              Quantity
                            </p>

                            <div className="flex w-fit items-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
                              <button
                                type="button"
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                className="flex h-10 w-10 items-center justify-center text-lg font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
                                aria-label={`Decrease ${item.name} quantity`}
                              >
                                −
                              </button>

                              <span
                                className="flex h-10 min-w-10 items-center justify-center border-x border-zinc-200 px-2 text-sm font-bold text-zinc-950"
                                aria-live="polite"
                              >
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="flex h-10 w-10 items-center justify-center text-lg font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
                                aria-label={`Increase ${item.name} quantity`}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="sm:text-right">
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                              Item Total
                            </p>

                            <p className="mt-1 text-xl font-bold tracking-tight text-zinc-950">
                              {item.price !== null
                                ? `₦${itemTotal.toLocaleString()}`
                                : "Price unavailable"}
                            </p>

                            {item.quantity > 1 &&
                              item.price !== null && (
                                <p className="mt-1 text-xs text-zinc-400">
                                  {item.quantity} × ₦
                                  {item.price.toLocaleString()}
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Order Summary */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Order Review
                      </p>

                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                        Order Summary
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                      🛍️
                    </div>
                  </div>

                  <div className="mt-7 space-y-4 border-b border-zinc-100 pb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">
                        Items
                      </span>

                      <span className="font-semibold text-zinc-900">
                        {cartCount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">
                        Subtotal
                      </span>

                      <span className="font-semibold text-zinc-900">
                        ₦{subtotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 text-sm">
                      <span className="text-zinc-500">
                        Delivery
                      </span>

                      <span className="text-right font-medium text-zinc-600">
                        Confirmed at checkout
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <span className="font-bold text-zinc-950">
                      Order Total
                    </span>

                    <span className="text-2xl font-bold tracking-tight text-zinc-950">
                      ₦{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    className="mt-7 flex w-full items-center justify-center rounded-xl bg-zinc-950 px-6 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
                  >
                    Continue to Checkout
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/#shop"
                    className="mt-3 flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-700 transition hover:bg-zinc-50"
                  >
                    Continue Shopping
                  </Link>

                  <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                    <div className="flex gap-3">
                      <span
                        className="text-lg"
                        aria-hidden="true"
                      >
                        🔒
                      </span>

                      <p className="text-xs leading-5 text-zinc-500">
                        Your order details will be reviewed before
                        your order is submitted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-lg font-bold tracking-tight text-zinc-950">
            VitaAura
          </p>

          <p className="text-sm text-zinc-500">
            Nutrition & wellness products.
          </p>
        </div>
      </footer>
    </main>
  );
}