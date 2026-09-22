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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-lg font-bold text-white">
              V
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                VitaAura
              </p>

              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 sm:block">
                Nutrition & Wellness
              </p>
            </div>
          </Link>

          <Link
            href="/#shop"
            className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:bg-zinc-50"
          >
            Continue Shopping
          </Link>
        </nav>
      </header>

      {/* Cart */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Your Selection
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your Cart
          </h1>

          <p className="mt-4 text-zinc-600">
            Review your selected products, adjust quantities, and continue
            when you are ready to place your order.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-zinc-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-4xl">
              🛒
            </div>

            <h2 className="mt-7 text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-600">
              Browse the VitaAura collection and add the products you would
              like to order.
            </p>

            <Link
              href="/#shop"
              className="mt-8 inline-flex rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Items */}
            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <Link
                      href={`/products/${item.id}`}
                      className="relative flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 sm:h-36 sm:w-36"
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-4"
                          sizes="144px"
                        />
                      ) : (
                        <span className="text-4xl">
                          🌿
                        </span>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                            {item.category}
                          </p>

                          <Link
                            href={`/products/${item.id}`}
                            className="mt-1 block text-xl font-semibold tracking-tight transition hover:text-zinc-600"
                          >
                            {item.name}
                          </Link>

                          <p className="mt-1 text-sm text-zinc-500">
                            {item.details}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="self-start text-sm font-medium text-zinc-400 transition hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Quantity
                          </p>

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-lg transition hover:bg-zinc-100"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>

                            <span className="min-w-6 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.id)}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-lg transition hover:bg-zinc-100"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="sm:text-right">
                          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Item Price
                          </p>

                          <p className="mt-1 text-lg font-bold">
                            {item.price !== null
                              ? `₦${item.price.toLocaleString()}`
                              : "Price unavailable"}
                          </p>

                          {item.quantity > 1 && item.price !== null && (
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
              ))}
            </div>

            {/* Summary */}
            <aside className="h-fit rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Order Review
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Order Summary
              </h2>

              <div className="mt-7 space-y-4 border-b border-zinc-100 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Items
                  </span>

                  <span className="font-medium">
                    {cartCount}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Delivery
                  </span>

                  <span className="font-medium text-zinc-600">
                    Confirmed at checkout
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-semibold">
                  Order Total
                </span>

                <span className="text-xl font-bold">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              <Link
                href="/checkout"
                className="mt-7 flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                Continue to Checkout
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-400">
                You can review your order and provide your delivery details
                before submitting it.
              </p>
            </aside>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6">
          <p className="text-lg font-semibold">
            VitaAura
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Nutrition & wellness products.
          </p>
        </div>
      </footer>
    </main>
  );
}