var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.header = "frontend/views/header.html";
        this.menu = "frontend/views/menu.html";
        this.content = "frontend/views/content/content.html";
        this.footer = "frontend/views/footer.html";
    };

    this.changecontent = function (page) {
        this.init();
        var data = this;
        data.content = "frontend/views/content/" + page + ".html";
        return data;
    };

    this.init();

});