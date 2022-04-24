$("#content_form > div.container").wrap('<main role="main" property="mainContentOfPage"></main>');
 $("label").parent().removeClass("required");

$("#firstname_label").html($("#firstname_label").html() + "<span class='required-input'> ({{snippets['Label/Required']}})</span>");
$("#firstname_label").addClass("required");

$("#lastname_label").html($("#lastname_label").html() + "<span class='required-input'> ({{snippets['Label/Required']}})</span>");
$("#lastname_label").addClass("required");
