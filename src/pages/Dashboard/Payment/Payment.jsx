import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
