"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ShopSection from "./components/ShopSection";
import { useCart } from "./context/CartContext";
import { products } from "./data/products";

const heroSlides = [
  {
    eyebrow: "Daily Rituals",
    title: "Feel balanced, energized, and ready for the day.",
    description:
      "Build a wellness routine with premium supplements and daily essentials designed for real life and long-term vitality.",
    image: "/products/landingpage_l (10).jpg",
    badge: "Best Sellers",
  },
  {
    eyebrow: "Plant-powered care",
    title: "Premium nutrition for healthier everyday habits.",
    description:
      "Thoughtful formulations, cleaner ingredients, and curated essentials to support your family’s energy, immunity, and wellbeing.",
    image: "/products/landingpage_l (3).jpg",
    badge: "New In",
  },
  {
    eyebrow: "Wellness essentials",
    title: "A refined collection built around your routine.",
    description:
      "From immune support to daily vitality, VitaAura brings together products that feel simple, premium, and easy to trust.",
    image: "/products/landingpage_l (18).jpg",
    badge: "Trusted Picks",
  },
];

const navItems = [
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "Why VitaAura", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const categoryCards = [
  { icon: "🌿", title: "Nutrition", text: "Daily essentials" },
  { icon: "💧", title: "Hydration", text: "Clean support" },
  { icon: "🧠", title: "Focus", text: "Mental clarity" },
  { icon: "🧴", title: "Wellness", text: "Everyday care" },
];

const trustHighlights = [
  { label: "Quality-first", text: "Curated wellness selections" },
  { label: "Convenient", text: "Easy ordering & checkout" },
  { label: "Trusted", text: "Clear product details" },
];

const features = [
  {
    icon: "🌱",
    title: "Clean product discovery",
    text: "Browse well-organized wellness essentials with clear product information and key benefits.",
  },
  {
    icon: "🧾",
    title: "Transparent pricing",
    text: "See each product price upfront and build your cart with confidence before checkout.",
  },
  {
    icon: "💬",
    title: "Fast WhatsApp ordering",
    text: "Continue your order through WhatsApp with a streamlined, customer-friendly checkout flow.",
  },
];

const WHATSAPP_NUMBER = "07030636466";
const WHATSAPP_URL_NUMBER = "2347030636466";

export default function Home() {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((product) => product.visible).slice(0, 4);
  const activeSlideData = heroSlides[activeSlide];

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();

    if (!query && searchTerm.length === 0) {
      document.getElementById("shop")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#f5f0eb] text-[#171716]">
      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 rounded-full border border-[#efe5df] bg-white/75 px-3 py-2.5 shadow-[0_18px_50px_rgba(28,27,24,0.08)] backdrop-blur-xl">
          <Link href="/" className="group flex shrink-0 items-center gap-3 pl-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1a1d1a] text-lg font-bold text-white shadow-sm transition duration-300 group-hover:scale-105">
              V
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-semibold leading-none tracking-[-0.04em] text-[#101210]">
                VitaAura
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7d7a73]">
                Nutrition & Wellness
              </p>
            </div>
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#5d5a58] transition hover:text-[#171716]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="hidden flex-1 max-w-md items-center overflow-hidden rounded-full border border-[#e9e1dc] bg-[#f7f2ee] sm:flex"
          >
            <span className="px-3 text-lg text-[#8f8b86]" aria-hidden="true">
              ⌕
            </span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products..."
              className="h-11 w-full bg-transparent pr-2 text-sm text-[#1c1a18] outline-none placeholder:text-[#8b857f]"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="hidden h-11 bg-[#1a1d1a] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#2c312d] sm:block"
            >
              Search
            </button>
          </form>

          <Link
            href="/cart"
            className="relative ml-auto flex items-center gap-2 rounded-full border border-[#e7dfd9] bg-[#f8f4f1] px-3 py-2.5 text-sm font-medium text-[#1c1b19] transition hover:bg-white"
          >
            <span aria-hidden="true">🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1d3526] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${activeSlideData.image})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_36%),linear-gradient(90deg,rgba(16,18,16,0.78),rgba(16,18,16,0.42),rgba(16,18,16,0.18))]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/20 bg-[#dfe7dd]/10 shadow-[0_35px_90px_rgba(18,24,19,0.4)] ring-1 ring-white/15 backdrop-blur-[2px]">
            <div className="grid min-h-[calc(100vh-7rem)] items-center gap-8 px-5 py-7 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
              <div className="max-w-xl pt-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3eee9] backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#82d7a1]" />
                  {activeSlideData.eyebrow}
                </div>

                <h1 className="mt-6 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                  {activeSlideData.title}
                </h1>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#efeae4] sm:text-base">
                  {activeSlideData.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#shop"
                    className="group inline-flex items-center justify-center rounded-full bg-[#f3efe8] px-6 py-3.5 text-sm font-semibold text-[#1b1d1a] shadow-[0_15px_30px_rgba(29,36,31,0.32)] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Shop best sellers
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </a>

                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Explore wellness
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-[#efe8e4]">
                  {trustHighlights.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-1.5">
                      <span className="text-[#9ae0b3]">✓</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-[#f9f4ef]/90 p-4 shadow-[0_30px_90px_rgba(30,25,20,0.2)] backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6d6a67]">
                        Curated for your routine
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#191915]">
                        {activeSlideData.badge}
                      </p>
                    </div>
                    <div className="rounded-full bg-[#e6f0dc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f5d38]">
                      Premium
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {featuredProducts.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center gap-3 rounded-2xl border border-[#e8e2de] bg-white p-2.5 shadow-sm">
                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#f0eee9]">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-contain p-2"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-xl">🌿</div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-[#1b1b18]">
                            {product.name}
                          </p>
                          <p className="mt-1 text-xs text-[#696562]">
                            {product.category}
                          </p>
                        </div>
                        <div className="text-right text-sm font-semibold text-[#171716]">
                          {product.price !== null ? `₦${product.price.toLocaleString()}` : "Soon"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-8 lg:px-10">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`View slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/65"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3f0eb]">
                {activeSlide + 1}/{heroSlides.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3d3d3a]">
              Shop by category
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#181816] sm:text-4xl">
              Wellness essentials for everyday living.
            </h2>
          </div>
          <a href="#shop" className="text-sm font-semibold text-[#1f211e] transition hover:text-[#4d5750]">
            View all products →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category) => (
            <a
              key={category.title}
              href="#shop"
              className="group rounded-[1.8rem] border border-[#e8dfd9] bg-white p-5 shadow-[0_16px_40px_rgba(30,25,20,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(30,25,20,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff6ee] text-2xl shadow-sm transition group-hover:scale-105">
                {category.icon}
              </div>
              <p className="mt-5 text-lg font-semibold text-[#181816]">{category.title}</p>
              <p className="mt-1 text-sm text-[#6d6a67]">{category.text}</p>
              <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-[#4d564d]">
                Explore
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="featured" className="bg-[#f6f3f0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3c3d38]">
                Featured favourites
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#181816] sm:text-4xl">
                Curated for everyday vitality.
              </h2>
            </div>
            <a href="#shop" className="text-sm font-semibold text-[#1f211e] transition hover:text-[#4d5750]">
              See more products →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#4a4a46]">
            Why people choose VitaAura
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#171716] sm:text-4xl">
            A shopping experience designed around trust and ease.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.8rem] border border-[#e8dfd9] bg-white p-6 shadow-[0_16px_40px_rgba(30,25,20,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6ee] text-2xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[#191816]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5d5a57]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1a1d1a] p-8 text-white shadow-[0_30px_80px_rgba(20,19,17,0.18)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-[#8ad8a4]/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#bfc5bb]">
                About VitaAura
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Thoughtful wellness, simplified.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[#e8e1db] sm:text-base">
                VitaAura brings together premium nutrition and everyday wellness essentials in one clean, easy-to-shop experience. Discover product details, compare the options that fit your routine, and move seamlessly into checkout via WhatsApp when you are ready.
              </p>
              <a
                href="#shop"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#171716] transition hover:-translate-y-0.5 hover:bg-[#f3efe8]"
              >
                Shop the collection
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="scroll-mt-32 bg-white">
        <ShopSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </section>

      <footer id="contact" className="bg-[#171716] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-base font-bold text-[#171716]">
                  V
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-[-0.04em]">VitaAura</p>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8f8b86]">
                    Nutrition & Wellness
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#b6b0ab]">
                Premium wellness essentials curated for a balanced, confident lifestyle—designed to make healthy routines simple.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d7d1cc]">
                Shop
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#bdb5b0]">
                <a href="#shop" className="block transition hover:text-white">Browse products</a>
                <a href="#categories" className="block transition hover:text-white">Categories</a>
                <Link href="/cart" className="block transition hover:text-white">Your cart</Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d7d1cc]">
                About
              </p>
              <div className="mt-4 space-y-3 text-sm text-[#bdb5b0]">
                <a href="#experience" className="block transition hover:text-white">Why VitaAura</a>
                <a href="#about" className="block transition hover:text-white">Our story</a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d7d1cc]">
                Cart
              </p>
              <p className="mt-4 text-sm leading-7 text-[#bdb5b0]">
                {cartCount === 0 ? "Your cart is ready when you are." : `${cartCount} item${cartCount === 1 ? "" : "s"} selected.`}
              </p>
              <Link href="/cart" className="mt-4 inline-flex rounded-full border border-[#494845] bg-[#232320] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b2b2a]">
                Review cart
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-[#2e2d2b] pt-5 text-center text-xs text-[#8f8b86]">
            © {new Date().getFullYear()} VitaAura. All rights reserved.
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${WHATSAPP_URL_NUMBER}?text=${encodeURIComponent("Hi VitaAura, I would like to order your wellness products.")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-[0_18px_46px_rgba(37,211,102,0.45)] transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
