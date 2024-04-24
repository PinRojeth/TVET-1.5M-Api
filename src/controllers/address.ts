import { Model } from "mongoose";
import { ICity_provinces, IDistricts, ICommunes, IVillages, ICountries } from "../models";
import AbstractController from "./abstract_controller";

export default class AddressController extends AbstractController<ICity_provinces>  {
    model: Model<ICity_provinces>;
    constructor(model: any) {
        super(model);
        this.model = model;
    }
    async getCityProvince() {
        return this.models.cityProvince.find({}).select('_id name name_en').sort({ order: 1, name: 1 }).lean();
    }
    async getDistrictByCityId(city_id: number) {
        return this.models.district.find({ city_provinces: city_id }).sort({_id : 1}).select('_id name name_en city_provinces').lean();
    }
    async getCommuneByDistrictId(district_id: number) {
        return this.models.commune.find({ districts: district_id }).sort({_id : 1}).select('_id name name_en districts').lean();
    }
    async getVillageByCommuneId(commune: number) {
        return this.models.village.find({ communes: commune }).sort({_id : 1}).select('_id name name_en communes').lean();
    }

    async validateCityProvince(id: number) {
        const cityProv = await this.models.cityProvince.findOne({ _id: id });
        if (!cityProv) {
            this.throwHttpError("invalid city_provinces")
        }
    }
    
    async validateAddress(address: any, objectName: string = "address") {
        let parseAddress = this.parseAddressJSON(address); 
        let adds: any[] = [];
        if (parseAddress.villages) {
            this.validIsNumber(parseAddress.villages, "villages")
            adds.push(this.models.village.findOne({ _id: parseAddress.villages }));
        }
        if (parseAddress.communes) {
            this.validIsNumber(parseAddress.communes, "communes")
            adds.push(this.models.commune.findOne({ _id: parseAddress.communes }));
        }
        if (parseAddress.districts) {
            this.validIsNumber(parseAddress.districts, "districts")
            adds.push(this.models.district.findOne({ _id: parseAddress.districts }));
        }
        if (parseAddress.city_provinces) {
            this.validIsNumber(parseAddress.city_provinces, "city_provinces")
            adds.push(this.models.cityProvince.findOne({ _id: parseAddress.city_provinces }));
        }
        let getAddress = await Promise.all([...adds]);
        getAddress.forEach(item => {
            if (!item) {
                this.throwHttpError("invalid " + objectName);
            }
        });
    }
   

    async createCityProvince(cityProv: ICity_provinces) {
        return this.models.cityProvince.create(cityProv);
    }
    async createDistrict(district: IDistricts) {
        return this.models.district.create(district);
    }
    async createCommune(commune: ICommunes) {
        return this.models.commune.create(commune);
    }
    async createVillage(village: IVillages) {
        return this.models.village.create(village);
    }
    async createCountry(country: ICountries) {
        return this.models.country.create(country);
    }

    private validIsNumber(_id: any, obj: string) {
        if (_id != null) {
            if (isNaN(_id)) {
                this.throwHttpError("invalid " + obj + " _id");
            }
            return true
        }
        this.throwHttpError("invalid " + obj + " _id");
    }
    private parseAddressJSON(address: any) {
        try {
            let add = address;
            if (typeof address != "object") {   
                add = JSON.parse(address);
            }
            return add;
        } catch (e) {
            this.throwHttpError("invalid address object")
        }
      
    }
}

