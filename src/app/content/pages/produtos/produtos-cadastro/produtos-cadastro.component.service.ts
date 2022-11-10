import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ProdutosCadastroComponentService {

    constructor(private http: HttpClient) { }

    saveProduto(data: any){
        return this.http.post<any[]>(`${environment.backDomain}/v1/produto`, data)
    }

    
}
