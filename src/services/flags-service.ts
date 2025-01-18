import axios from "axios"
import { CountriesInfoSchema } from "../schemas/restcountries-schema";
import { CountryInfoList, CountryInfo } from "../types";


const baseUrl :string = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () : Promise<CountryInfoList> => {

    try {
        const r = await axios.get(`${baseUrl}/all`);
        const res = CountriesInfoSchema.safeParse(r.data);
        if(!res.success)
            throw new Error("Invalid json parse..");

        return res.data;
    } catch (error) {
        console.log("Can't get all countries - Error: "+error);
        throw error;
    }
}

export const fetchCountryByName = async ( name: string) : Promise<CountryInfo> => {

    try {
        const {data} = await axios.get(`${baseUrl}/name/${name}`);
        const res = CountriesInfoSchema.safeParse(data);
        if(!res.success)
            throw new Error("Invalid json parse..");

        return res.data[0];
    } catch (error) {
        console.log("Can't get country by name - Error: "+error);
        throw error;
    }
}

// export const fetchCountriesByRegion = async ( region :string ) : Promise<CountryInfoList> => {

//     try {
//         const { data } = await axios.get(`${baseUrl}/region/${region}`);
//         console.log('DATA: ',data)
//         const res = CountriesInfoSchema.safeParse(data);
//         if(!res.success)
//             throw new Error("Invalid json parse..");

//         return res.data;
//     } catch (error) {
//         console.log("Can't get region countries - Error: "+error);
//         throw error;
//     }
// }