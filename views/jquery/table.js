function draw_table()
/* I got this code from here https://github.com/mikhail-cct/CA1-In-class-Demo/blob/master/views/jquery/table.js and did the additional adjustments for my own project */
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

function select_row()
{
	$("#plannerTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='9']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function validateForm(){
//Sanitazing HTML input before storing it
//Used HTMLSanitizer.js helper
//JavaScript HTML Sanitizer, (c) Alexander Yumashev, Jitbit Software.
    var country = HtmlSanitizer.SanitizeHtml( document.forms["addForm"]["country"].value );
    var whyGo =  HtmlSanitizer.SanitizeHtml(document.forms["addForm"]["whyGo"].value) ;
    var wheretoGo = HtmlSanitizer.SanitizeHtml(document.forms["addForm"]["wheretoGo"].value);
    var whentoGo = HtmlSanitizer.SanitizeHtml(document.forms["addForm"]["whentoGo"].value );
    var timeinDays = HtmlSanitizer.SanitizeHtml (document.forms["addForm"]["timeinDays"].value );
    var levelofDifficulty = HtmlSanitizer.SanitizeHtml (document.forms["addForm"]["levelofDifficulty"].value );
    var entraceFees = HtmlSanitizer.SanitizeHtml (document.forms["addForm"]["entraceFees"].value );
    
//Validating if inputs are not empty
//I used this website as a reference for implement the validation required: https://www.javatpoint.com/javascript-form-validation
    if (country == "") { alert("Country must be filled out"); return false; }
    if (whyGo == "") { alert("Why go field must be filled out"); return false; }
    if (wheretoGo == "") { alert("Where to go field must be filled out"); return false; }
    if (whentoGo == "") { alert("When to go field must be filled out"); return false; }
    if (timeinDays == "") { alert("Time in Days field must be filled out"); return false; }
    if (levelofDifficulty == "") { alert("Difficulty Level field must be filled out"); return false; }
    if (entraceFees == "") { alert("Entrance fees field must be filled out"); return false; }
}


function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});


