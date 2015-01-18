function Valid(f1, f2, f3) {
    var i;
    if (f1.length == 0) {
        alert("Not a valid ID number");
        return false;
    }
    for (i = 0; i < f1.length; i++)
        if ((f1.charCodeAt(i) >= 48 && f1.charCodeAt(i) <= 57) == false) {
            alert("Not a valid ID number");
            return false;
        }

    var space = f2.indexOf(" ");
    if (space < 1 || space>= f2.length-1) {
        alert("Not a valid person name");
        return false;
    }
    for (i = 0; i < f2.length; i++)
        if (((f2.charCodeAt(i) >= 65 && f2.charCodeAt(i) <= 90) ||
        (f2.charCodeAt(i) >= 97 && f2.charCodeAt(i) <= 122) || f2.charCodeAt(i)==32) == false) {
            alert("Not a valid person name");
            return false;
        }

    var atpos = f3.indexOf("@");
    var dotpos = f3.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= f3.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

function Press(Table, t1, t2, t3, t4) {
    //alert(t4.files[0].name);
    if (Valid(t1.value, t2.value, t3.value) == false) {
        return false;
    }
    else {
        var row = Table.insertRow(-1);
        row.id = "row" + Table.rows.length;

        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);

        cell1.innerHTML = t1.value;
        t1.value = "";
        cell2.innerHTML = t2.value;
        t2.value = "";
        cell3.innerHTML = t3.value;
        t3.value = "";

        var img = document.createElement("img");
        if (t4.value.length == 0) img.src = "default.png";
        else {
            img.src = t4.files[0].name;
        }
        img.height = 100;
        img.width = 80;
        img1 = cell4.appendChild(img);

        document.getElementById(row.id).onclick = function () { displayDate(document.getElementById(row.id)) };
    }
}

function displayDate(row) {
    //alert("-1");

    var i;
    var text = "";

    D = document.getElementById("person_ID");
    D.innerHTML = "ID: "+row.cells[0].innerHTML;

    D = document.getElementById("person_Name");
    D.innerHTML = "Name: " + row.cells[1].innerHTML;

    D = document.getElementById("person_Mail");
    D.innerHTML = "Mail: " + row.cells[2].innerHTML;

    D = document.getElementById("person_image");
    D.src = row.cells[3].firstChild.src;
}