"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "2347064545100";

export default function CheckoutPage() {
  const { cart, cartCount } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const subtotal = cart.reduce((total, item) => {
    return total + (item.price ?? 0) * item.quantity;
  }, 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (cart.length === 0) {
      setError(
        "Your cart is empty. Please add a product before checkout."
      );
      return;
    }

    if (!customerName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!address.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!state.trim()) {
      setError("Please enter your state.");
      return;
    }

    const productLines = cart
      .map((item) => {
        const price =
          item.price !== null
            ? `₦${item.price.toLocaleString()}`
            : "Price unavailable";

        return `• ${item.name} — Qty: ${item.quantity} — ${price}`;
      })
      .join("\n");

    const message = `Hello VitaAura,

I would like to place an order.

CUSTOMER DETAILS
Name: ${customerName.trim()}
Phone: ${phone.trim()}

DELIVERY DETAILS
Address: ${address.trim()}
City: ${city.trim()}
State: ${state.trim()}
${notes.trim() ? `Additional Notes: ${notes.trim()}\n` : ""}
ORDER DETAILS
${productLines}

Items: ${cartCount}
Subtotal: ₦${subtotal.toLocaleString()}
Delivery: To be confirmed
Total before delivery: ₦${subtotal.toLocaleString()}

Please confirm my order and delivery details. Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-zinc-50 text-zinc-900">
        {/* Header */}
        <header className="border-b border-zinc-200 bg-white">
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
              className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-sm sm:px-5 sm:text-sm"
            >
              Continue Shopping
            </Link>
          </nav>
        </header>

        {/* Empty Checkout */}
        <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-4 py-16 sm:px-6">
          <div className="w-full rounded-[2rem] border border-zinc-200 bg-white px-6 py-16 text-center shadow-sm sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-4xl">
              🛒
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
              Checkout
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
              Add at least one product to your cart before continuing
              to checkout.
            </p>

            <Link
              href="/#shop"
              className="mt-8 inline-flex rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
            >
              Explore Products
            </Link>
          </div>
        </section>

        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-lg font-bold tracking-tight">
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
            href="/cart"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-xs font-bold text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-sm sm:px-5 sm:text-sm"
          >
            ← Back to Cart
          </Link>
        </nav>
      </header>

      {/* Checkout */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
            <span>VitaAura</span>
            <span aria-hidden="true">•</span>
            <span>Checkout</span>
          </div>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            Complete Your Order
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Enter your details below. Once submitted, your order will
            be prepared in WhatsApp for you to review and send.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                1
              </span>

              <div>
                <p className="text-xs font-bold text-zinc-950">
                  Your details
                </p>

                <p className="text-[11px] text-zinc-400">
                  Contact & delivery information
                </p>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-zinc-200 sm:block" />

            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-500">
                2
              </span>

              <div>
                <p className="text-xs font-bold text-zinc-500">
                  WhatsApp
                </p>

                <p className="text-[11px] text-zinc-400">
                  Review & send your order
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_380px]"
        >
          {/* Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-700">
                  01
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Contact Information
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-950">
                    How can we reach you?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Provide the details we can use to contact you about
                    your order.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="customerName"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Full Name
                  </label>

                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    autoComplete="name"
                    value={customerName}
                    onChange={(event) =>
                      setCustomerName(event.target.value)
                    }
                    placeholder="Enter your full name"
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="e.g. 08012345678"
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                    required
                  />

                  <p className="mt-2 text-xs text-zinc-400">
                    We may use this number to confirm your order.
                  </p>
                </div>
              </div>
            </section>

            {/* Delivery Information */}
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-700">
                  02
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Delivery Information
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-950">
                    Where should we deliver?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Tell us where you would like your order delivered.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5">
                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(event) =>
                      setAddress(event.target.value)
                    }
                    placeholder="Enter your full delivery address"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                    required
                  />
                </div>

                {/* City / State */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="text-sm font-bold text-zinc-900"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      value={city}
                      onChange={(event) =>
                        setCity(event.target.value)
                      }
                      placeholder="Enter your city"
                      className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="text-sm font-bold text-zinc-900"
                    >
                      State
                    </label>

                    <input
                      id="state"
                      name="state"
                      type="text"
                      autoComplete="address-level1"
                      value={state}
                      onChange={(event) =>
                        setState(event.target.value)
                      }
                      placeholder="Enter your state"
                      className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                      required
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="text-sm font-bold text-zinc-900"
                  >
                    Additional Notes
                    <span className="ml-2 font-normal text-zinc-400">
                      Optional
                    </span>
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(event) =>
                      setNotes(event.target.value)
                    }
                    placeholder="Anything else we should know about your order?"
                    rows={3}
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                  />
                </div>
              </div>
            </section>

            {/* WhatsApp Confirmation */}
            <section className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
              <div className="p-6 sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">
                    💬
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      Final Step
                    </p>

                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-950">
                      Confirm Your Order
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      Your order will be prepared as a WhatsApp message
                      containing your customer details, delivery
                      information, and selected products.
                    </p>
                  </div>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="mt-6 flex gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-red-700"
                  >
                    <span aria-hidden="true">!</span>

                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center rounded-xl bg-zinc-950 px-6 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md active:translate-y-0"
                >
                  Continue to WhatsApp

                  <span className="ml-2 text-base" aria-hidden="true">
                    →
                  </span>
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-zinc-400">
                  WhatsApp will open with your order message ready for
                  you to review before sending.
                </p>
              </div>

              <div className="border-t border-zinc-100 bg-zinc-50 px-6 py-4 sm:px-8">
                <div className="flex gap-3">
                  <span
                    className="text-sm"
                    aria-hidden="true"
                  >
                    🔒
                  </span>

                  <p className="text-xs leading-5 text-zinc-500">
                    Your information is used to help prepare and confirm
                    your order. Delivery charges are confirmed separately.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      Your Selection
                    </p>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                      Order Summary
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-lg">
                    🛍️
                  </div>
                </div>

                {/* Products */}
                <div className="mt-7 space-y-5 border-b border-zinc-100 pb-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                            sizes="64px"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xl">
                            🌿
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-bold leading-5 text-zinc-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="shrink-0 text-sm font-bold text-zinc-900">
                        {item.price !== null
                          ? `₦${(
                              item.price * item.quantity
                            ).toLocaleString()}`
                          : "Unavailable"}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Items
                    </span>

                    <span className="font-semibold text-zinc-900">
                      {cartCount}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
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
                      To be confirmed
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="mt-6 border-t border-zinc-100 pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <span className="font-bold text-zinc-950">
                      Total before delivery
                    </span>

                    <span className="text-2xl font-bold tracking-tight text-zinc-950">
                      ₦{subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Process */}
                <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                    Order Process
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex gap-2 text-xs leading-5 text-zinc-600">
                      <span className="font-bold text-zinc-900">1.</span>
                      <span>Submit your details.</span>
                    </div>

                    <div className="flex gap-2 text-xs leading-5 text-zinc-600">
                      <span className="font-bold text-zinc-900">2.</span>
                      <span>Review the WhatsApp message.</span>
                    </div>

                    <div className="flex gap-2 text-xs leading-5 text-zinc-600">
                      <span className="font-bold text-zinc-900">3.</span>
                      <span>Send the order through WhatsApp.</span>
                    </div>

                    <div className="flex gap-2 text-xs leading-5 text-zinc-600">
                      <span className="font-bold text-zinc-900">4.</span>
                      <span>Confirm delivery details.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Cart */}
            <Link
              href="/cart"
              className="mt-4 flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-700 transition-all duration-200 hover:bg-zinc-50 hover:shadow-sm"
            >
              ← Review Cart
            </Link>
          </aside>
        </form>
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