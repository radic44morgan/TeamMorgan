
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "morgan.radic" && password == "password") {
        window.location = "index.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("Invalid username & password combination - " + attempt + " attempts left.");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function addProfile() {}
    
function populateList(name, cohort, market, phone, email, fact, img)
{
    var div = document.createElement('div');


    div.innerHTML =
        '<li class="list-group-item">\
                                <div class="row w-100">\
                                    <div class="col-12 col-sm-6 col-md-3 px-0">\
                                        <img src="' + img + '" alt="Debbie Schmidt" class="img-fluid rounded-circle d-block mx-auto">\
                                    </div>\
                                    <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">\
                                        <label class="name lead">'+ name +'</label>\
                                        <br>\
                                        <span class="fas fa-building fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="NewYork"></span>\
                                        <span class="text-muted">' + market + '</span>\
                                        <br>\
                                        <span class="fas fa-briefcase fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="C2"></span>\
                                        <span class="text-muted">' + cohort + '</span>\
                                        <br>\
                                        <span class="fa fa-fw fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(867) 322-1852"></span>\
                                        <span class="text-muted small">' + phone+ '</span>\
                                        <br>\
                                        <span class="fa fa-fw fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="debbie.schmidt@example.com"></span>\
                                        <span class="text-muted small text-truncate">' + email + '</span>\
                                        <br>\
                                        <br>\
                                        <span class="fab fa-fly fa-fw text-muted fa-lg" data-toggle="tooltip" title="" data-original-title="Fun Fact"></span>\
                                        <span class="text-muted">' +fact + '</span>\
                                    </div>\
                                </div>\
                            </li>';

    document.getElementById("table").appendChild(div);
}

function populate()
{
    populateList("Mike Anamendolla","Washington D.C.","C1","(870) 288-4149","mike.ana@example.com","I have webbed feet!", "http://demos.themes.guide/bodeo/assets/images/users/m101.jpg");
    populateList("Seth Frazier","Dallas","A1","(560) 180-4143","seth.frazier@example.com","I'm a former Dickey's gas station attendant and my wife collects bottle openers. Our budget is 1.5 million dolars.", "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg");
    populateList("Rosemary Porter","Seattle","M2","(497) 160-9776","rosemary.porter@example.com","I couldn't speak until I reached the age of six years old.", "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg");
    populateList("Debbie Schmidt","New York","C2","(867) 322-1852","debbie.schmidt@example.com","I'm a proffessional formula one driver and live in a van by the river.", "http://demos.themes.guide/bodeo/assets/images/users/w104.jpg");
}