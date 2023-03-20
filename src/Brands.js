import { useState } from "react";
import { Vote } from "./Vote.js";

export function Brands() {
  const brands = [
    {
      id: 1, name: "Samsung", model: "s21 ultra", specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        storage: "128GB",
      }
    },
    {
      id: 2, name: "Apple", model: "s21 ultra", specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        storage: "128GB",
      }
    },
    {
      id: 3, name: "MI", model: "s21 ultra", specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        storage: "128GB",
      }
    },
    {
      id: 4, name: "Oppo", model: "s21 ultra", specs: {
        os: "Android",
        processor: "Samsung Exynos 2100",
        storage: "128GB",
      }
    },
  ];
  const [search, setSearch] = useState("");
  return (

    <div className="brands">
      <input value={search} onChange={(event) => setSearch(event.target.value)} type="text" placeholder="search--" />
      {brands.filter((brand) => brand.name.toLowerCase().includes(search.toLowerCase())).map(({ name, model, specs, id }) => (<Vote key={id} brandName={name} model={model} specs={specs} />))}
    </div>
  );
}
