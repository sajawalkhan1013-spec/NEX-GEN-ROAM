import { Country, Region, eSIMPackage } from "@/types";
// Automatice generate hone wali rates file ko import karein
import scrapedRates from "./rates.json"; 

export const generatePackages = (countryName: string, countryId: string): eSIMPackage[] => {
  // Agar scraper ne is country ka data fetch kiya hai to wo automatic return ho jaye
  if (scrapedRates && scrapedRates[countryName]) {
    return scrapedRates[countryName];
  }

  // Fallback: Agar kisi country ka data scraper se na mile, to aapka purana hardcoded default yahan show ho sakta hai
  if (countryName === "Turkey" || countryId === "tr") {
    return [
      { id: `${countryId}-5gb`, name: `${countryName} eSIM 5GB`, data: "5 GB", duration: "Valid upto 30 Days", price: "$7.00" },
      { id: `${countryId}-10gb`, name: `${countryName} eSIM 10GB`, data: "10 GB", duration: "Valid upto 30 Days", price: "$12.00" }
    ];
  }

  return [];
};