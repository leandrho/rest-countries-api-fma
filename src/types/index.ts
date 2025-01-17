import { z } from 'zod'
import { CountryInfoSchema, CountriesInfoSchema } from '../schemas/restcountries-schema';

export type CountryInfo = z.infer<typeof CountryInfoSchema>;
export type CountryInfoList = z.infer<typeof CountriesInfoSchema>;