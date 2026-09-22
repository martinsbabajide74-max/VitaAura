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
      setError("Your cart is empty. Please add a product before checkout.");
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
        <header className="border-b border-zinc-200 bg-white">
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

        <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-5 py-16">
          <div className="w-full rounded-[2rem] border border-zinc-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-4xl">
              🛒
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Checkout
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-600">
              Add at least one product to your cart before continuing to
              checkout.
            </p>

            <Link
              href="/#shop"
              className="mt-8 inline-flex rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Explore Products
            </Link>
          </div>
        </section>
      </main>
    );
  }

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
            href="/cart"
            className="rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:bg-zinc-50"
          >
            ← Back to Cart
          </Link>
        </nav>
      </header>

      {/* Checkout */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Order Details
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-4 text-zinc-600">
            Enter your details below so we can prepare your order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]"
        >
          {/* Customer Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Step 1
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Contact Information
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Provide the details we can use to contact you about your
                  order.
                </p>
              </div>

              <div className="mt-7 grid gap-5">
                <div>
                  <label
                    htmlFor="customerName"
                    className="text-sm font-semibold"
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
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold"
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
                    placeholder="Enter your phone number"
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Delivery Information */}
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Step 2
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Delivery Information
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Tell us where you would like your order delivered.
                </p>
              </div>

              <div className="mt-7 grid gap-5">
                <div>
                  <label
                    htmlFor="address"
                    className="text-sm font-semibold"
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
                    placeholder="Enter your delivery address"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="text-sm font-semibold"
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
                      className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="text-sm font-semibold"
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
                      className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="text-sm font-semibold"
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
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-500 focus:bg-white"
                  />
                </div>
              </div>
            </section>

            {/* Order Method */}
            <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Step 3
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Confirm Your Order
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                When you submit your order, VitaAura will open WhatsApp with
                your order details already prepared. You can review the
                message and send it to continue the ordering process.
              </p>

              {error && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.99]"
              >
                Continue to WhatsApp
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-400">
                Delivery charges and final order details will be confirmed
                through WhatsApp.
              </p>
            </section>
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm lg:sticky lg:top-28 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Your Order
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Order Summary
            </h2>

            <div className="mt-7 space-y-5 border-b border-zinc-100 pb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-50">
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
                    <p className="text-sm font-semibold leading-5">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-semibold">
                    {item.price !== null
                      ? `₦${(
                          item.price * item.quantity
                        ).toLocaleString()}`
                      : "Unavailable"}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
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
                  To be confirmed
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  Total before delivery
                </span>

                <span className="text-xl font-bold">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Order Process
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Submit your details → review the WhatsApp message → send your
                order → confirm delivery details with VitaAura.
              </p>
            </div>
          </aside>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
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