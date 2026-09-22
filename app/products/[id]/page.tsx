import Image from "next/image";
import Link from "next/link";
import ProductActions from "./ProductActions";
import { products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Product unavailable
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            We couldn&apos;t find that product.
          </h1>

          <p className="mt-4 leading-7 text-zinc-600">
            The product may have been removed or the link may no longer
            be available.
          </p>

          <Link
            href="/#shop"
            className="mt-8 inline-flex rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  const isAvailable = product.price !== null;

  const packSize =
    product.details.match(
      /\d+\s+(capsules?|tablets?|sachets?)/i
    )?.[0] || "";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            VitaAura
          </Link>

          <Link
            href="/cart"
            className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:bg-zinc-50"
          >
            🛒 Cart
          </Link>
        </nav>
      </header>

      {/* Product Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/#shop"
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          ← Back to products
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Product Image */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-zinc-50 sm:min-h-[540px]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-10 sm:p-16"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full min-h-[380px] items-center justify-center">
                <span
                  className="text-7xl"
                  aria-hidden="true"
                >
                  🌿
                </span>
              </div>
            )}
          </div>

          {/* Product Summary */}
          <div className="lg:pt-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                {product.category}
              </p>

              {isAvailable && (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Available to order
                </span>
              )}
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              {product.shortDescription}
            </p>

            {/* Product Specifications */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Product specifications
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    SKU
                  </p>

                  <p className="mt-1 text-sm font-bold text-zinc-900">
                    {product.sku || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    PV
                  </p>

                  <p className="mt-1 text-sm font-bold text-zinc-900">
                    {product.pv || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    BV
                  </p>

                  <p className="mt-1 text-sm font-bold text-zinc-900">
                    {product.bv || "—"}
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Pack size
                  </p>

                  <p className="mt-1 text-sm font-bold text-zinc-900">
                    {packSize || "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 border-y border-zinc-100 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Current price
              </p>

              <p className="mt-2 text-3xl font-bold tracking-tight">
                {isAvailable
                  ? `₦${product.price!.toLocaleString()}`
                  : "Price available soon"}
              </p>

              {isAvailable && (
                <p className="mt-1 text-xs text-zinc-400">
                  Nigerian Naira
                </p>
              )}
            </div>

            {/* Product Actions */}
            <div className="mt-6">
              <ProductActions product={product} />
            </div>

            {/* Trust Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="text-xl" aria-hidden="true">
                  ✓
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Clear Product Details
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Review key specifications and product information
                  before ordering.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="text-xl" aria-hidden="true">
                  🌿
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Wellness Collection
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Explore products available through the VitaAura
                  collection.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 p-4">
                <div className="text-xl" aria-hidden="true">
                  🛍️
                </div>

                <p className="mt-2 text-sm font-semibold">
                  Simple Ordering
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Add the product to your cart or continue with
                  WhatsApp ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Product information
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Product details at a glance
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Review the available product information, including
              features, usage, ingredients, and specifications.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* About */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                📖
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                About this product
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {product.about}
              </p>
            </article>

            {/* Description */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                📝
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Product overview
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {product.shortDescription}
              </p>
            </article>

            {/* Features */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                ⭐
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Key features
              </h3>

              {product.features.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={`${product.id}-feature-${index}`}
                      className="flex gap-3 leading-7 text-zinc-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-7 text-zinc-600">
                  Product features will be displayed here when
                  confirmed information is available.
                </p>
              )}
            </article>

            {/* Usage */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                📋
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Suggested use
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {product.usage}
              </p>
            </article>

            {/* Ingredients */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                🧪
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Ingredients & contents
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                {product.ingredients}
              </p>
            </article>

            {/* Specifications */}
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-xl">
                ℹ️
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Specifications
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-3">
                  <span className="text-sm text-zinc-500">
                    SKU
                  </span>

                  <span className="text-sm font-semibold text-zinc-900">
                    {product.sku || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-3">
                  <span className="text-sm text-zinc-500">
                    PV
                  </span>

                  <span className="text-sm font-semibold text-zinc-900">
                    {product.pv || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-3">
                  <span className="text-sm text-zinc-500">
                    BV
                  </span>

                  <span className="text-sm font-semibold text-zinc-900">
                    {product.bv || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-zinc-500">
                    Pack size
                  </span>

                  <span className="text-sm font-semibold text-zinc-900">
                    {packSize || "—"}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Ordering CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="overflow-hidden rounded-[2rem] bg-zinc-900 px-7 py-12 text-white sm:px-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  VitaAura ordering
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Ready to order?
                </h2>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Add this product to your cart or use the WhatsApp
                  ordering option above to continue your order.
                </p>
              </div>

              <Link
                href="/cart"
                className="inline-flex shrink-0 justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <p className="text-lg font-semibold">
            VitaAura
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Nutrition & wellness products, presented with clarity.
          </p>
        </div>
      </footer>
    </main>
  );
}