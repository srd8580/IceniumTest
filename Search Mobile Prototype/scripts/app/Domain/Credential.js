define([], function () {

    var Credential = function (userName, password, domain, type) {
        var self = this;

        self.UserName = userName;
        self.Password = password;
        self.Domain = domain;
        self.CredentialType = type;

        return self;
    };

    return Credential;
});