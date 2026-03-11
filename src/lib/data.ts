import { Country, Region, eSIMPackage } from "@/types";

export const COUNTRIES: Country[] = [
  {
    id: "turkey",
    name: "Turkey",
    flagUrl: "https://flagcdn.com/tr.svg",
    imageUrl: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_12e40ee0-b787-4540-8879-3e109f849c4d.jpg",
    packages: [
      { id: "tr-5gb", name: "Turkey eSIM 5GB", data: "5GB", duration: "7 Days", price: "$15", countryName: "Turkey" },
      { id: "tr-10gb", name: "Turkey eSIM 10GB", data: "10GB", duration: "15 Days", price: "$25", countryName: "Turkey" },
      { id: "tr-20gb", name: "Turkey eSIM 20GB", data: "20GB", duration: "30 Days", price: "$40", countryName: "Turkey" },
    ],
  },
  {
    id: "france",
    name: "France",
    flagUrl: "https://flagcdn.com/fr.svg",
    imageUrl: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e81501cd-751f-479f-9471-4ac9381016a5.jpg",
    packages: [
      { id: "fr-5gb", name: "France eSIM 5GB", data: "5GB", duration: "7 Days", price: "$18", countryName: "France" },
      { id: "fr-10gb", name: "France eSIM 10GB", data: "10GB", duration: "15 Days", price: "$30", countryName: "France" },
      { id: "fr-20gb", name: "France eSIM 20GB", data: "20GB", duration: "30 Days", price: "$50", countryName: "France" },
    ],
  },
  {
    id: "thailand",
    name: "Thailand",
    flagUrl: "https://flagcdn.com/th.svg",
    imageUrl: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_12172330-b1ef-4c32-9bac-9ea5b2f62e40.jpg",
    packages: [
      { id: "th-5gb", name: "Thailand eSIM 5GB", data: "5GB", duration: "7 Days", price: "$12", countryName: "Thailand" },
      { id: "th-10gb", name: "Thailand eSIM 10GB", data: "10GB", duration: "15 Days", price: "$20", countryName: "Thailand" },
      { id: "th-20gb", name: "Thailand eSIM 20GB", data: "20GB", duration: "30 Days", price: "$35", countryName: "Thailand" },
    ],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flagUrl: "https://flagcdn.com/my.svg",
    imageUrl: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_4dd05024-c2af-4f9a-a268-fd6f331f2f67.jpg",
    packages: [
      { id: "my-5gb", name: "Malaysia eSIM 5GB", data: "5GB", duration: "7 Days", price: "$12", countryName: "Malaysia" },
      { id: "my-10gb", name: "Malaysia eSIM 10GB", data: "10GB", duration: "15 Days", price: "$20", countryName: "Malaysia" },
      { id: "my-20gb", name: "Malaysia eSIM 20GB", data: "20GB", duration: "30 Days", price: "$35", countryName: "Malaysia" },
    ],
  },
];

export const REGIONS: Region[] = [
  {
    id: "europe",
    name: "Europe",
    packages: [
      { id: "eu-10gb", name: "Europe eSIM 10GB", data: "10GB", duration: "30 Days", price: "$35", category: "Europe" },
      { id: "eu-20gb", name: "Europe eSIM 20GB", data: "20GB", duration: "30 Days", price: "$60", category: "Europe" },
    ],
  },
  {
    id: "asia",
    name: "Asia",
    packages: [
      { id: "as-10gb", name: "Asia eSIM 10GB", data: "10GB", duration: "30 Days", price: "$30", category: "Asia" },
      { id: "as-20gb", name: "Asia eSIM 20GB", data: "20GB", duration: "30 Days", price: "$55", category: "Asia" },
    ],
  },
  {
    id: "middle-east",
    name: "Middle East",
    packages: [
      { id: "me-10gb", name: "Middle East eSIM 10GB", data: "10GB", duration: "30 Days", price: "$45", category: "Middle East" },
    ],
  },
];

export const GLOBAL_PLANS: eSIMPackage[] = [
  { id: "global-10gb", name: "Global eSIM 10GB", data: "10GB", duration: "30 Days", price: "$65", category: "Global" },
  { id: "global-20gb", name: "Global eSIM 20GB", data: "20GB", duration: "60 Days", price: "$110", category: "Global" },
  { id: "global-unlimited", name: "Global Unlimited", data: "Unlimited", duration: "30 Days", price: "$150", category: "Global" },
];
