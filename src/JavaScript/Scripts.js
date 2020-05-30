import * as $ from "jquery";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function mudaNome() {
	$(document).ready(function () {
		$("#inputGroupFile01").on("change", function () {
			//get the file name
			var fileName = $(this).val();
			//replace the "Choose a file" label
			$(this).next(".custom-file-label").html(fileName);
		});
	});
}

export function abrirUpload() {
	$(document).ready(function () {
		$("input[type=file]").trigger("click");
	});
}

export function menu() {
	$(document).ready(function () {
		$(window).on("scroll", function () {
			if ($(window).scrollTop()) {
				$("nav").addClass("black");
			} else {
				$("nav").removeClass("black");
			}
		});
	});
}

export function toPDF() {
	var doc = new jsPDF("L", "mm", "a4");

	var width = 335.75625;
	var height = 232.833333;
	html2canvas(document.getElementById("toPDF")).then(function (canvas) {
		var img = canvas.toDataURL();
		doc.addImage(img, "JPEG", 0, 0, width, height);
		doc.save("Resultado.pdf");
	});
}
