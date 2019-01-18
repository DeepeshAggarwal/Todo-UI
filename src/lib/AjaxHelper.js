import $ from 'jquery';

class AjaxHelper {

    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    fireGetRequest(url, succeesCallBack, errorCallBack) {
        $.ajax({
            url: url,
            headers: this.headers
        }).done(function(response, status, jqXHR) {
            succeesCallBack(response, status, jqXHR);
        }).fail(function(jqXHR, status, errorThrown) {
            errorCallBack(jqXHR, status, errorThrown);
        });
    }

    firePostRequest(url, request, successCallBack, errorCallBack) {
        $.ajax({
            method: 'POST',
            data: JSON.stringify(request),
            url: url,
            headers: this.headers
        }).done(function(response, status, jqXHR) {
            successCallBack(response, status, jqXHR);
        }).fail(function(jqXHR, status, errorThrown) {
            errorCallBack(jqXHR, status, errorThrown);
        });
    }

    fireDeleteRequest(url, successCallBack, errorCallBack) {
        $.ajax({
            method: 'DELETE',
            url: url,
            headers: this.headers
        }).done(function(response, status, jqXHR) {
            successCallBack(response, status, jqXHR);
        }).fail(function(jqXHR, status, errorThrown) {
            errorCallBack(jqXHR, status, errorThrown);
        });
    }
}


export default new AjaxHelper();
