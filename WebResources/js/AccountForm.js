/// <reference path="../node_modules/@types/xrm/index.d.ts" />
var devKCAero;
(function (devKCAero) {
    var AccountForm;
    (function (AccountForm) {
        //XRM method:  devKCAero.AccountForm.onLoad
        function onLoad() {
            try {
                var url = Xrm.Page.context.getClientUrl();
                alert(url);
            }
            catch (_a) {
            }
        }
        AccountForm.onLoad = onLoad;
        //retrive the value from an option set
        //XRM method:  devKCAero.AccountForm.industryCodeChange
        function industryCodeChange() {
            try {
                var code = Xrm.Page.getAttribute("industrycode").getValue();
                alert(code);
            }
            catch (_a) {
            }
        }
        AccountForm.industryCodeChange = industryCodeChange;
    })(AccountForm = devKCAero.AccountForm || (devKCAero.AccountForm = {}));
})(devKCAero || (devKCAero = {}));
//# sourceMappingURL=AccountForm.js.map