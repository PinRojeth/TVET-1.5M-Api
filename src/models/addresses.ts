export interface IAddress{
    detail?: string;
    house_number?: string;
    street?: string;
    city_provinces?: number;
    districts?: number;
    communes?: number;
    villages?: number;
}

export const AddressSchema = {
    detail: String,
    house_number: String,
    street: String,
    villages: { type: Number, ref: "villages" },
    communes: { type: Number, ref: "communes" },
    districts: { type: Number, ref: "districts" },
    city_provinces: { type: Number, ref: "city_provinces" },
};