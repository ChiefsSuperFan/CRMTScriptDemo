/// <reference path="../node_modules/@types/xrm/index.d.ts" />


namespace devKCAero.AccountForm {

    //XRM method:  devKCAero.AccountForm.onLoad
 

    export function onLoad() {
        try {
            let url = Xrm.Page.context.getClientUrl();

            alert(url);
        } catch {

        }

        
    }
    //retrive the value from an option set
    //XRM method:  devKCAero.AccountForm.industryCodeChange
    export function industryCodeChange() {
        try {
            let code = Xrm.Page.getAttribute("industrycode").getValue();
            alert(code);
        } catch {

        }

    }
}