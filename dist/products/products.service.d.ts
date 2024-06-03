import { Model } from 'mongoose';
import { productsDTO } from './dto/products.dto';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<productsDTO>);
    getProducts(id?: string): Promise<productsDTO[] | productsDTO>;
    addProducts(data: productsDTO): Promise<productsDTO>;
    updateProducts(id: string, data: productsDTO): Promise<productsDTO>;
    deleteProduct(id: string): Promise<productsDTO>;
}
