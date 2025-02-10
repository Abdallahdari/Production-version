import { getCabinas, GetsingleProduct } from "@/app/_lib/dataService";
import Singlepro from "./Singlepro";

export default async function page({ params }: { params: { id: string } }) {
  const product = await GetsingleProduct(params.id);
  const allProduct = await getCabinas();
  const similarProduct = allProduct?.filter(
    (item) => item.Catogery === product.Catogery && item.id !== product.id
  );

  console.log(product.Catogery);
  console.log("similar", similarProduct);
  return (
    <div className="py-12">
      <Singlepro product={product} similarProduct={similarProduct} />
    </div>
  );
}
