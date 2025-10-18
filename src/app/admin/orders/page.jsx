import OrdersList from "@/components/admin/OrdersList";
import { getOrders } from "@/lib/getOrders";

export default async function orders() {
  const orders = await getOrders()
  return (
    <div>
      <OrdersList orders={orders} />
    </div>
  );
}
