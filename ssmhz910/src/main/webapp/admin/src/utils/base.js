const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmhz910/",
            name: "ssmhz910",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmhz910/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校医务系统"
        } 
    }
}
export default base
