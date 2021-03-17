const Company = (company) => {
    return "<div class=\"card\" style=\"width: 18rem;\">\n" +
        "        <div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">name : "+ company.name +"</h5>\n" +
        "            <p class=\"card-text\">id : "+ company._id +"</p>\n" +
        "            <a href=\"/company/"+ company._id +"\" class=\"btn btn-primary\">see company page</a>\n" +
        "        </div>\n" +
        "    </div>";
}

function getCompany() {
    let root = '';
    $.get("company/getManyCompany?start="+$('#start-date').val()+"&end="+$('#end-date').val(), function (data, status) {
        if (status === 'success') {
            data.forEach(function (value) {
                root += Company(value);
            });
        } else {
            root = 'Status : ' + status + ',   Data : ' + data;
        }
        $("#company-container").html(root);
    });
}

getCompany();
$('#btn-filter').click(function () {
    getCompany();
});
