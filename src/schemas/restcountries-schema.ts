import { z } from 'zod';

const nativeNameSchema = z.record(z.string(), z.object({common: z.string(), official: z.string()}));
const currenciesSchema = z.record(z.string(), z.object({name: z.string(), symbol: z.string()}));
const languagesSchema = z.record(z.string());

export const CountryInfoSchema = z.object({
    name: z.object({
        common: z.string(),
        official: z.string(),
        nativeName: nativeNameSchema.optional(),
    }),
    tld: z.array(z.string()).optional(),
    population: z.number(),
    region: z.string(),
    subregion: z.string().optional(),
    languages: languagesSchema.optional(),
    capital: z.array(z.string()).optional(),
    currencies: currenciesSchema.optional(),
    borders: z.array(z.string()).optional(),
    flags: z.object({
        png: z.string().optional(),
        svg: z.string(),
        alt: z.string().optional()
    })
})

export const CountriesInfoSchema = z.array(CountryInfoSchema);