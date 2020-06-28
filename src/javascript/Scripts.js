/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import * as $ from "jquery";
import "jquery-mask-plugin/dist/jquery.mask";

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

export function mask() {
	$(".decimal").mask("0,#", { reverse: false });
	$(".real").mask("#0,0#", { reverse: false });
	$(".numerico").mask("0#", { reverse: false });
}

export function stars() {
	(function fairyDustCursor() {
		var possibleColors = ["#814BA6", "#887BA6", "#DDAE51"];
		var width = window.innerWidth;
		var height = window.innerHeight - 100;
		var cursor = { x: width / 2, y: width / 2 };
		var particles = [];

		function init() {
			bindEvents();
			loop();
		}

		function bindEvents() {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("touchmove", onTouchMove);
			document.addEventListener("touchstart", onTouchMove);
			window.addEventListener("resize", onWindowResize);
		}

		function onWindowResize(e) {
			width = window.innerWidth;
			height = window.innerHeight - 100;
		}

		function onTouchMove(e) {
			if (e.touches.length > 0) {
				for (let i = 0; i < e.touches.length; i++) {
					addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
				}
			}
		}

		function onMouseMove(e) {
			cursor.x = e.clientX;
			cursor.y = e.clientY;

			addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
		}

		function addParticle(x, y, color) {
			var particle = new Particle();
			particle.init(x, y, color);
			particles.push(particle);
		}

		function updateParticles() {
			for (var i = 0; i < particles.length; i++) {
				particles[i].update();
			}

			for (var i = particles.length - 1; i >= 0; i--) {
				if (particles[i].lifeSpan < 0) {
					particles[i].die();
					particles.splice(i, 1);
				}
			}
		}

		function loop() {
			requestAnimationFrame(loop);
			updateParticles();
		}

		function Particle() {
			this.character = "★";
			this.lifeSpan = 120;
			this.initialStyles = {
				position: "absolute",
				display: "block",
				pointerEvents: "none",
				"z-index": "10000000",
				fontSize: "30px",
				"will-change": "transform",
			};

			this.init = function (x, y, color) {
				this.velocity = {
					x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
					y: 1,
				};

				this.position = { x: x - 10, y: y - 20 };
				this.initialStyles.color = color;

				this.element = document.createElement("span");
				this.element.innerHTML = this.character;
				applyProperties(this.element, this.initialStyles);
				this.update();

				if (document.querySelector(".stars")) document.querySelector(".stars").appendChild(this.element);
			};

			this.update = function () {
				this.position.x += this.velocity.x;
				this.position.y += this.velocity.y;
				this.lifeSpan--;

				this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + this.lifeSpan / 120 + ")";
			};

			this.die = function () {
				if (this.element.parentNode) this.element.parentNode.removeChild(this.element);
			};
		}

		function applyProperties(target, properties) {
			for (var key in properties) {
				target.style[key] = properties[key];
			}
		}

		init();
	})();
}

export function loginScripts() {
	const signUpButton = document.getElementById("signUp");
	const signInButton = document.getElementById("signIn");
	const container = document.getElementById("container-login");

	signUpButton.addEventListener("click", () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener("click", () => {
		container.classList.remove("right-panel-active");
	});
}

export function verificaUsuarioLogado() {
	const usuario = localStorage.getItem("grangerStats");
	if (usuario) return true;
	return false;
}

export function setUsuarioLogado(user) {
	localStorage.setItem("grangerStats", user);
}
