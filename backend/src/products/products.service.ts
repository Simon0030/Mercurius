import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  getProducts(): string {
    return "WITAJ W PRODUKTACH";
  }
}