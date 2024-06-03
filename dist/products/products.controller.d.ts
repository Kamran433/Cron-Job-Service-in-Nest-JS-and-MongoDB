import { ProductsService } from './products.service';
import { productsDTO } from './dto/products.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(productId: string): Promise<productsDTO | productsDTO[]>;
    addProduct(body: productsDTO): Promise<productsDTO>;
    updateProduct(productId: string, body: productsDTO): Promise<productsDTO>;
    deleteProduct(productId: string): Promise<productsDTO>;
}
