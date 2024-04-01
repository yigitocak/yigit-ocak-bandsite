const apiKey = "59bb48ba-505c-4b61-b364-1b4da9c10010"

export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = "59bb48ba-505c-4b61-b364-1b4da9c10010"
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/"
    }

    async getComments(){
        try{
            const response = await axios.get(this.baseUrl + "comments?api_key=" + this.apiKey)
            return response.data.sort((a,b) => b.timestamp - a.timestamp)
        }
        catch(err){
            console.log(err)
        }
    }

    async postComment(comment){
        try {
            const postRequest = await axios.post(this.baseUrl + "comments?api_key=" + this.apiKey,
                {
                    name: comment.fullName.value,
                    comment: comment.addedComment.value,
                    time: comment.timestamp
                })
        }
        catch (err) {
            console.error(err)
        }
    }
}