
"use client";

import Link from "next/link";
import type { Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

type ProductActionsProps = {
  product: Product;
};

const WHATSAPP_NUMBER = "2347064545100";

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const { addToCart } = useCart();

  const isAvailable = product.price !== null;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWhatsAppOrder = () => {
    if (!isAvailable) {
      return;
    }

    const price = product.price!.toLocaleString();

    const message = [
      "Hello VitaAura! 👋",
      "",
      "I would like to order this product:",
      "",
      `Product: ${product.name}`,
      `Quantity: 1`,
      `Price: ₦${price}`,
      "",
      "Please provide ordering and delivery details.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-8 flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className="inline-flex flex-1 justify-center rounded-full bg-zinc-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-zinc-300"
        >
          {isAvailable ? "Add to Cart" : "Unavailable"}
        </button>

        <Link
          href="/cart"
          className="inline-flex flex-1 justify-center rounded-full border border-zinc-200 px-7 py-4 text-sm font-semibold transition hover:bg-zinc-50"
        >
          View Cart
        </Link>
      </div>

      <button
        type="button"
        onClick={handleWhatsAppOrder}
        disabled={!isAvailable}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-zinc-300"
      >
        <span aria-hidden="true">🟢</span>
        Order via WhatsApp
      </button>

      <p className="text-center text-xs leading-5 text-zinc-400">
        Send your product order directly through WhatsApp.
      </p>
    </div>
  );
}