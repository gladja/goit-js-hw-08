!function(){var e,t,a=document.querySelector("input"),o=document.querySelector("textarea"),l=document.querySelector("button"),r=document.querySelector(".feedback-form");l.addEventListener("click",(function(e){e.preventDefault(),console.log(a.value),localStorage.removeItem("email_key"),a.value=""})),r.addEventListener("input",(function(e){if("INPUT"===e.target.tagName){var t=e.target.value;localStorage.setItem("email_key",t),console.log(t)}})),e=localStorage.getItem("email_key"),t=localStorage.getItem("text_key"),e&&t&&(a.value=e,o.value=t)}();
//# sourceMappingURL=03-feedback.99edae23.js.map
