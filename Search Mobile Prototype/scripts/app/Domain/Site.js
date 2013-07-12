define([], function () {

    var Site = function (url, siteId, webId, credentials) {
        var self = this;

        self.Url = url;
        self.SiteId = siteId;
        self.WebId = webId;
        self.Credentials = credentials;

        return self;
    };

    return Site;
});