import { BrandContract } from "./brand.conract";
import { brandProviderFactory } from "./brand-provider.factory";

export const BrandProvider = {
    provide: BrandContract,
    useFactory: brandProviderFactory(),
  };