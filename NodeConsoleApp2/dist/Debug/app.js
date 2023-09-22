/*!
 * For license information please see app.js.LICENSE.txt
 */
Object.defineProperty(exports,"__esModule",{value:!0}),exports.dragMove=void 0;const t=require("tslib").__importDefault(require("interactjs"));exports.dragMove=function(){(0,t.default)(".draggable").draggable({inertia:!0,autoScroll:!0,onstart:function(t){console.log("onstart")},onmove:function(t){console.log("dragMoveListener");var e=t.target,o=(parseFloat(e.getAttribute("data-x"))||0)+t.dx,r=(parseFloat(e.getAttribute("data-y"))||0)+t.dy;e.style.webkitTransform=e.style.transform="translate("+o+"px, "+r+"px)",e.setAttribute("data-x",o),e.setAttribute("data-y",r)},onend:function(t){console.log("onend");var e=t.target.querySelector("p");e&&(e.textContent="moved a distance of "+(0|Math.sqrt(t.dx*t.dx+t.dy*t.dy))+"px")}})};
//# sourceMappingURL=app.js.map
