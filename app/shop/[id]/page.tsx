import { auth } from "@/app/_lib/auth";
import {
  getCabinas,
  GetsingleProduct,
  Getorderss,
} from "@/app/_lib/dataService";
import ProductPage from "@/components/ui/ProductSignle";

export default async function page({ params }: { params: { id: string } }) {
  const product = await GetsingleProduct(params.id);
  const allProduct = await getCabinas();
  const user = await auth();
  const Order = await Getorderss();
  console.log("user", user, "order", Order);
  const similarProduct = allProduct?.filter(
    (item) => item.Catogery === product.Catogery && item.id !== product.id
  );

  console.log(product.Catogery);
  console.log("similar", similarProduct);
  return (
    <div className="py-12">
      <ProductPage product={product} />
    </div>
  );
}
