import http from "../http-commons";

class EtapeService {
    getAll(){
        return http.get("/etape");
    }

    create (data){
        http.post("/etape", data);
    }
}
export default new EtapeService();