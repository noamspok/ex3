function AppViewModel() {
    this.UserName = ko.observable("Enter Your User Name");
    this.Password = ko.observable("Enter Your Password");
    this.Password2 = ko.observable("Verify Your Password");
    this.Email = ko.observable("Enter Your E-Mail");
    var data = AppViewModel.prototype.toJSON(); 
    this.RegBtn = function () {
        var apiUrl = "../api/Registry";
        $.ajax(apiUrl, {
            data: data,
            type: "post", contentType: "application/json",
            success: function (result) { alert(result) }
        });
    };
    
}
AppViewModel.prototype.toJSON = function () {
    var copy = ko.toJS(this); //easy way to get a clean copy
    delete copy.Password2; //remove an extra property
    return copy; //return the copy to be serialized
}
ko.applyBindings(new AppViewModel());