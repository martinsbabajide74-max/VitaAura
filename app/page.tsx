"use client";

import Link from "next/link";
import ShopSection from "./components/ShopSection";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { cartCount } = useCart();

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Main Navigation */}
        <div className="border-b border-zinc-100">
          <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-lg font-bold text-white">
                V
              </div>

              <div className="hidden sm:block">
                <p className="text-lg font-bold leading-none tracking-tight">
                  VitaAura
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                  Nutrition & Wellness
                </p>
              </div>
            </Link>

            {/* Search */}
            <div className="flex flex-1 items-center">
              <div className="flex h-11 w-full items-center overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition focus-within:border-zinc-400 focus-within:bg-white">
                <span
                  className="px-3 text-lg text-zinc-400"
                  aria-hidden="true"
                >
                  🔎
                </span>

                <input
                  type="search"
                  placeholder="Search products..."
                  className="h-full w-full bg-transparent px-1 text-sm outline-none placeholder:text-zinc-400"
                />

                <button
                  type="button"
                  className="hidden h-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-700 sm:block"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex shrink-0 items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold transition hover:bg-zinc-100 sm:px-4"
            >
              <span className="text-xl" aria-hidden="true">
                🛒
              </span>

              <span className="hidden sm:inline">
                Cart
              </span>

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden border-b border-zinc-100 bg-white md:block">
          <nav className="mx-auto flex max-w-7xl items-center gap-8 px-6">
            <a
              href="#shop"
              className="border-b-2 border-zinc-900 py-3 text-sm font-semibold"
            >
              Shop
            </a>

            <a
              href="#categories"
              className="py-3 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
            >
              Categories
            </a>

            <a
              href="#about"
              className="py-3 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
            >
              About VitaAura
            </a>

            <a
              href="#contact"
              className="py-3 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="overflow-x-auto border-b border-zinc-100 md:hidden">
          <div className="flex min-w-max gap-6 px-4 py-3">
            <a
              href="#shop"
              className="text-sm font-semibold text-zinc-900"
            >
              Shop
            </a>

            <a
              href="#categories"
              className="text-sm font-medium text-zinc-500"
            >
              Categories
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-zinc-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-zinc-500"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            <div className="grid items-center lg:grid-cols-2">
              <div className="px-6 py-12 sm:px-10 sm:py-16">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                  The VitaAura Collection
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Discover products
                  <br />
                  for everyday wellness.
                </h1>

                <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
                  Explore the VitaAura collection, view product details and
                  pricing, and choose the products that fit your needs.
                </p>

                <a
                  href="#shop"
                  className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100"
                >
                  Explore Products
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              <div className="hidden min-h-[320px] items-center justify-center bg-zinc-800 lg:flex">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-5xl font-bold text-zinc-900 shadow-2xl">
                    V
                  </div>

                  <p className="mt-6 text-2xl font-bold text-white">
                    VitaAura
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Nutrition & Wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 pb-6 sm:px-6"
      >
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Browse the collection
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Explore by Category
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              Find products by collection or browse everything currently
              available at VitaAura.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href="#shop"
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="text-2xl" aria-hidden="true">
                🌿
              </div>

              <p className="mt-3 text-sm font-semibold">
                Nutrition
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Explore nutrition products
              </p>
            </a>

            <a
              href="#shop"
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="text-2xl" aria-hidden="true">
                💚
              </div>

              <p className="mt-3 text-sm font-semibold">
                Wellness
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Browse wellness options
              </p>
            </a>

            <a
              href="#shop"
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="text-2xl" aria-hidden="true">
                ⭐
              </div>

              <p className="mt-3 text-sm font-semibold">
                Featured
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Discover selected products
              </p>
            </a>

            <a
              href="#shop"
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="text-2xl" aria-hidden="true">
                🛍️
              </div>

              <p className="mt-3 text-sm font-semibold">
                All Products
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                View the full collection
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Shop */}
      <ShopSection />

      {/* Why VitaAura */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              The VitaAura Experience
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Simple, clear and convenient
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Everything you need to explore products, compare details and
              prepare your order in one place.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-2xl" aria-hidden="true">
                🌿
              </div>

              <h3 className="mt-4 font-bold">
                Product Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Review available product details, features, ingredients and
                specifications before placing an order.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-2xl" aria-hidden="true">
                ₦
              </div>

              <h3 className="mt-4 font-bold">
                Transparent Pricing
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                See the listed price for each available product before
                adding it to your cart.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-2xl" aria-hidden="true">
                🛒
              </div>

              <h3 className="mt-4 font-bold">
                Convenient Shopping
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Add products to your cart, adjust quantities and review your
                selections before checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="grid gap-8 rounded-2xl bg-zinc-900 p-7 text-white sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              About VitaAura
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A simpler way to explore nutrition and wellness products.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-zinc-300 sm:text-base">
              VitaAura brings our available nutrition and wellness products
              together in one convenient place. Explore the collection,
              review product information and pricing, add your selections to
              your cart, and prepare your order with ease.
            </p>

            <a
              href="#shop"
              className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100"
            >
              Explore the Collection
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-zinc-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <p className="text-xl font-bold">
                VitaAura
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A simple destination for exploring nutrition and wellness
                products.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <p className="text-sm font-bold">
                Shop
              </p>

              <div className="mt-4 space-y-3 text-sm text-zinc-400">
                <a
                  href="#shop"
                  className="block transition hover:text-white"
                >
                  Browse Products
                </a>

                <a
                  href="#categories"
                  className="block transition hover:text-white"
                >
                  Categories
                </a>

                <Link
                  href="/cart"
                  className="block transition hover:text-white"
                >
                  Your Cart
                </Link>
              </div>
            </div>

            {/* VitaAura Links */}
            <div>
              <p className="text-sm font-bold">
                VitaAura
              </p>

              <div className="mt-4 space-y-3 text-sm text-zinc-400">
                <a
                  href="#about"
                  className="block transition hover:text-white"
                >
                  About VitaAura
                </a>

                <a
                  href="#contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Cart Summary */}
            <div>
              <p className="text-sm font-bold">
                Your Cart
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {cartCount === 0
                  ? "Your cart is ready when you are."
                  : `${cartCount} item${cartCount === 1 ? "" : "s"} currently in your cart.`}
              </p>

              <Link
                href="/cart"
                className="mt-4 inline-flex rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold transition hover:bg-zinc-900"
              >
                Review Cart
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-zinc-800 pt-6">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} VitaAura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}