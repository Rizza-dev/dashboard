import CartLists from "@/components/site/CartLists";
import { GetUserCartItems } from "@/lib/getUserCartItems";
export default async function CartPage() {
  const userCart = await GetUserCartItems();

  return <CartLists cart={userCart} />;
}
