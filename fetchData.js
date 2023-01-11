import { RESTDataSource } from "apollo-datasource-rest";

export class getProductData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://fakestoreapi.com/products";
  }

  async getAllBags() {
    const bagsData = await this.get("");
    return bagsData;
  }

  async getSingleBag(id) {
    const singleBagData = await this.get(`/${id}`);
    return singleBagData;
  }
}
