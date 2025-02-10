import CarItems from "../_com/CarItems";
import { Cart } from "../_lib/dataService";

export default async function Page() {
  const cart = await Cart();
  console.log("cart data", cart);

  return (
    <div>
      <CarItems cart={cart} />
    </div>
  );
}
