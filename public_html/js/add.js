/* 
 * Larissa
 */

const url = "http://localhost:3000/api";
var message = "";

// Skickar formuläret
function postForm()
{
    var comp = document.getElementById("company").value;
    var tit = document.getElementById("title").value;
    var loc = document.getElementById("location").value;
    var des = document.getElementById("description").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    if (!comp || !tit || !loc || !des || !start || !end)
    {
        return false;
    } else
    {
// Form data to be sent in the request body
        const formdata = {
            company: comp,
            title: tit,
            location: loc,
            description: des,
            start: start,
            end: end
        };
        // Make a POST request using the Fetch API
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
                .then(response => {
                    if (response.ok) {
                        message = "Arbetet har sparats i databasen.";
                        var messelem = document.getElementById("message");
                        messelem.innerHTML = message;
                        document.getElementById("company").value = "";
                        document.getElementById("title").value = "";
                        document.getElementById("location").value = "";
                        document.getElementById("description").value = "";
                        return true;
                    }
                    return response.json();
                })
                .catch(error => {
                    var elem = document.getElementById("message");
                    elem.innerHTML = error.message;
                    return false;
                }
        );
    }
}
