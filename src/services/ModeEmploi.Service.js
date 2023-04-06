import http from "../http-commons";

class ModeEmploiService {
    getAll(){
        return http.get("/modeEmploi");
    }

    create (data){
        http.post("/modeEmploi", data)
    }
    delete(id){
        return http.delete(`/modeEmploi/delete${id}`)
    }
}
export default new ModeEmploiService();