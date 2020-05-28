var querystring = require("querystring");
import axios, { AxiosRequestConfig } from 'axios';
import https = require('https');

export class Helper {
    token: any;
    config: any;
    constructor(config) {
        this.config = config;
        this.token = {};
        this.token.CSRF = '';
        this.token.PVEAuth = '';
        this.token.timeStamp = 0;
    }

    async httpGet(path: string, data: {}) {
        return await this.makeRequest('GET', path, data);
    }

    async httpPost(path: string, data: any) {
        data = querystring.stringify(data);
        return await this.makeRequest('POST', path, data);
    }

    async httpDel(path: string, data: {}) {
        return await this.makeRequest('DEL', path, data);
    }

    async httpPut(path: string, data: { search?: any; key?: any; timezone?: any; }) {
        data = querystring.stringify(data);
        return await this.makeRequest('PUT', path, data);
    }

    async authorize() {
        const response = await axios({
            method: 'POST',
            url: this.config.apiURL + '/access/ticket',
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            data: `username=${this.config.username}&password=${this.config.password}`
        });

        const token = response.data;
        this.token.CSRF = token.data.CSRFPreventionToken;
        this.token.PVEAuth = token.data.ticket;
        this.token.timeStamp = new Date().getTime();
    }

    async makeRequest(method: any, path: any, data: any) {
        if ((this.token.timeStamp + 7200) < new Date().getTime()) {
            await this.authorize();
        }
        try {
            let headers = {
                Cookie: `PVEAuthCookie=${this.token.PVEAuth}`
            };

            let options: AxiosRequestConfig = {
                method,
                url: this.config.apiURL + path,
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                }),
                headers
            }

            if (method !== "GET") {
                options.data = data;
                options.headers.CSRFPreventionToken = this.token.CSRF;
            }



            const response = await axios(options);

            return response.data;
        } catch (err) {
            console.log(err)
        }
    }
}