import http from "../http-commons";

class ArticleService {
    getAll(){
        return http.get("/article");
    }

    create (data){
        http.post("/article", data);
    }

    update(id, data) {
        return http.put(`/article/${id}`, data);
    }

    delete(id) {
        return http.delete(`/article/${id}`);
    }
}

export default new ArticleService();