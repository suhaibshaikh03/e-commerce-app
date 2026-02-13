import { PaymentFormInputs, paymentFormSchema, ShippingFormInputs, CartItemsType } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation"
import Image from 'next/image';
import useCartStore from "@/stores/CartStore";
import { useState } from "react";
import { toast } from "react-toastify";

interface PaymentFormProps {
  shippingForm: ShippingFormInputs;
  cart: CartItemsType[];
}

const PaymentForm = ({ shippingForm, cart }: PaymentFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter()
  const { clearCart } = useCartStore()
  const [loading, setLoading] = useState(false);

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please log in to place an order.");
        router.push("/login");
        return;
      }

      const orderItems = cart.map(item => {
        // Safely get the image URL
        let imageUrl = "";
        if (item.images && typeof item.images === 'object' && item.selectedColor in item.images) {
          imageUrl = item.images[item.selectedColor];
        } else if (item.images && Array.isArray(item.images) && item.images.length > 0) {
          imageUrl = item.images[0]; // Fallback to first image if available
        } else {
          imageUrl = ""; // Default to empty string if no image available
        }

        return {
          // Don't send product ID if it's not a valid ObjectId format
          // The product information is already included in the order
          name: item.name,
          quantity: item.quantity,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor,
          price: item.price,
          image: imageUrl,
        };
      });

      // Debug logging
      console.log("Sending order data:", {
        items: orderItems,
        shippingInfo: {
          name: shippingForm.name,
          email: shippingForm.email,
          phone: shippingForm.phone,
          address: shippingForm.address,
          city: shippingForm.city,
        },
      });
      
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: orderItems,
          shippingInfo: {
            name: shippingForm.name,
            email: shippingForm.email,
            phone: shippingForm.phone,
            address: shippingForm.address,
            city: shippingForm.city,
          },
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        // Handle validation errors specifically
        if (result.errors && Array.isArray(result.errors)) {
          const errorMessage = result.errors.join(', ');
          toast.error(`Validation Error: ${errorMessage}`);
        } else {
          toast.error(result.message || "Failed to place order.");
        }
        return;
      }

      clearCart();
      toast.success("🎉 Order placed successfully! Thank you for your purchase.");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs text-gray-500 font-medium">Name on card</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text" id="cardHolder" placeholder="Suhaib Shaikh" {...register("cardHolder")} />
        {errors.cardHolder && <p className="text-xs text-red-500">{errors.cardHolder.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-xs text-gray-500 font-medium">Card Number</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text" id="cardNumber" placeholder="123456789123" {...register("cardNumber")} />
        {errors.cardNumber && <p className="text-xs text-red-500">{errors.cardNumber.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-xs text-gray-500 font-medium">Expiration Date</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text" id="expirationDate" placeholder="01/32" {...register("expirationDate")} />
        {errors.expirationDate && <p className="text-xs text-red-500">{errors.expirationDate.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">CVV</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text" id="cvv" placeholder="123" {...register("cvv")} />
        {errors.cvv && <p className="text-xs text-red-500">{errors.cvv.message}</p>}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
        <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
        <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900 cursor-pointer'} transition-all duration-300 text-white p-2 rounded-lg flex items-center justify-center gap-2`}>
        {loading ? "Placing Order..." : "Checkout"}
        {!loading && <ShoppingCart className="w-3 h-3" />}
      </button>

    </form>
  )
}
export default PaymentForm