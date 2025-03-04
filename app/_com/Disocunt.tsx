import { getCabinas } from "@/app/_lib/dataService";
import Link from "next/link";

export default async function Discount() {
  try {
    console.log("Fetching data...");
    const data = await getCabinas();
    const visible = data?.slice(0, 4);

    // Shorten the description logic
    const shortenDescription = (description: string) => {
      return description.length > 10
        ? description.slice(0, 10).trim() + "..."
        : description;
    };

    console.log("Data has arrived:", data);

    if (!data || data.length === 0) {
      return <div className="text-center py-10">No products available</div>;
    }

    return (
      <div className="container mx-auto xl:max-w-[1200px]">
        <h1 className="text-4xl font-semibold text-center my-12">Top sale</h1>

        <ul className="grid md:grid-cols-4 gap-4 px-4">
          {visible?.map((item) => {
            const shortenedDesc = shortenDescription(item.description); // Apply shortening here
            return (
              <Link
                href={`/shop/${item.id}`}
                key={item.id}
                className="group w-full overflow-hidden border rounded-lg shadow-md"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full group-hover:scale-105 transition-all duration-200 h-64 object-cover rounded-t-lg"
                  />
                  {item.Discount ? (
                    <>
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                        %{item.Discount}
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                  <h3 className="text-lg px-4 mt-2 font-medium truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between my-2">
                    <div className="px-4">
                      {/* Use shortened description here */}
                      <span>{shortenedDesc}</span>
                      <span className="text-gray-500 line-through text-sm">
                        ${item.originalPrice}
                      </span>
                      <span className="text-green-600 font-semibold ml-2">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load data. Please try again later.
      </div>
    );
  }
}
