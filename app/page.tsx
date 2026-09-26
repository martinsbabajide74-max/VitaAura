"use client";

import Link from "next/link";
import ShopSection from "./components/ShopSection";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { cartCount } = useCart();

  return (
    <main className="min-h-screen bg-[#f7f9f7] text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-lg font-bold text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
              V
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-none tracking-tight">
                VitaAura
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Nutrition & Wellness
              </p>
            </div>
          </Link>

          {/* Search */}
          <div className="flex flex-1 items-center">
            <div className="flex h-11 w-full items-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/80 transition duration-300 focus-within:border-zinc-400 focus-within:bg-white focus-within:shadow-sm">
              <span
                className="px-3 text-base text-zinc-400"
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
                className="hidden h-full bg-zinc-950 px-6 text-sm font-semibold text-white transition duration-300 hover:bg-zinc-800 sm:block"
              >
                Search
              </button>
            </div>
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex shrink-0 items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-semibold transition duration-300 hover:bg-zinc-100 sm:px-4"
          >
            <span className="text-xl" aria-hidden="true">
              🛒
            </span>

            <span className="hidden sm:inline">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-950 px-1 text-[10px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Navigation */}
        <div className="border-t border-zinc-100/80 bg-white/70">
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
            <div className="flex min-w-max items-center gap-7 py-3">
              <a
                href="#shop"
                className="relative text-sm font-semibold text-zinc-950 after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-zinc-950"
              >
                Shop
              </a>

              <a
                href="#categories"
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
              >
                Categories
              </a>

              <a
                href="#experience"
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
              >
                Why VitaAura
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-lime-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
          <div className="overflow-hidden rounded-[2rem] bg-zinc-950 shadow-2xl shadow-zinc-300/40">
            <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
              {/* Hero Copy */}
              <div className="px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  The VitaAura Collection
                </div>

                <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Everyday wellness,
                  <span className="block text-zinc-400">
                    made simple.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                  Explore nutrition and wellness products, discover the details
                  that matter, and build your order with confidence.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#shop"
                    className="group inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-xl"
                  >
                    Explore Products
                    <span
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>

                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                  >
                    Browse Categories
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-400">
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Product details
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Clear pricing
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Easy ordering
                  </span>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative hidden min-h-[430px] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 lg:flex">
                <div className="absolute h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute h-40 w-40 rounded-full border border-white/10" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white text-6xl font-bold text-zinc-950 shadow-2xl">
                    V
                  </div>

                  <p className="mt-7 text-2xl font-bold text-white">
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
        className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-8 sm:px-6"
      >
        <div className="rounded-[2rem] border border-zinc-200/70 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Browse the collection
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Find what fits you
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Explore the VitaAura collection by category or view everything
                currently available.
              </p>
            </div>

            <a
              href="#shop"
              className="text-sm font-semibold text-zinc-700 transition hover:text-zinc-950"
            >
              View collection →
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                icon: "🌿",
                title: "Nutrition",
                text: "Everyday nutrition",
              },
              {
                icon: "💚",
                title: "Wellness",
                text: "Wellness essentials",
              },
              {
                icon: "⭐",
                title: "Featured",
                text: "Selected products",
              },
              {
                icon: "🛍️",
                title: "All Products",
                text: "Full collection",
              },
            ].map((category) => (
              <a
                key={category.title}
                href="#shop"
                className="group rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm transition duration-300 group-hover:scale-105">
                  {category.icon}
                </div>

                <p className="mt-4 text-sm font-bold">{category.title}</p>

                <p className="mt-1 text-xs text-zinc-500">
                  {category.text}
                </p>

                <span className="mt-4 block text-xs font-semibold text-zinc-400 transition group-hover:text-zinc-900">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-32">
        <ShopSection />
      </section>

      {/* Why VitaAura */}
      <section
        id="experience"
        className="border-y border-zinc-200/70 bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              The VitaAura Experience
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple from discovery to order.
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
              A clean shopping experience designed to help you explore
              products, understand what is available, and prepare your order.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🌿",
                title: "Product Information",
                text: "Review available product details, features, ingredients and specifications before ordering.",
              },
              {
                icon: "₦",
                title: "Clear Pricing",
                text: "See the listed price for each available product before adding it to your cart.",
              },
              {
                icon: "🛒",
                title: "Easy Shopping",
                text: "Add products, adjust quantities and review your selections before checkout.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.5rem] border border-zinc-200 bg-zinc-50/60 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm transition duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-2xl sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                About VitaAura
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A simpler way to explore nutrition and wellness.
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
                className="mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100"
              >
                Explore the Collection
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="scroll-mt-32 bg-zinc-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
                  V
                </div>

                <div>
                  <p className="font-bold">VitaAura</p>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                    Nutrition & Wellness
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
                A simple destination for exploring nutrition and wellness
                products.
              </p>
            </div>

            {/* Shop */}
            <div>
              <p className="text-sm font-bold">Shop</p>

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

            {/* VitaAura */}
            <div>
              <p className="text-sm font-bold">VitaAura</p>

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

            {/* Cart */}
            <div>
              <p className="text-sm font-bold">Your Cart</p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {cartCount === 0
                  ? "Your cart is ready when you are."
                  : `${cartCount} item${
                      cartCount === 1 ? "" : "s"
                    } currently in your cart.`}
              </p>

              <Link
                href="/cart"
                className="mt-4 inline-flex rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:bg-zinc-900"
              >
                Review Cart
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-6">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} VitaAura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
