class API {

    static init() {
        this.portIp = 3000
        this.baseUrl = 'http://localhost:' + this.portIp
    }

    // USER FUNCTIONS

    static createUser = (user) => {
        return fetch(this.baseUrl + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
    }

    static getCurrentUser(token) {
        return fetch(this.baseUrl + "/auth/show", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        }).then(resp => resp.json());
      }

    static login(credentials) {
        return fetch(this.baseUrl + "/auth/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials)
        }).then(resp => resp.json());
      }
    
    // PROVIDER FUNCTIONS

    static createProvider = (provider) => {
        return fetch(this.baseUrl + '/providers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(provider)
        })
            .then(resp => resp.json())
    }

    // ACTIVITIES FUNCTIONS

    static  getActivities = () => {
    }

}

API.init()

export default API