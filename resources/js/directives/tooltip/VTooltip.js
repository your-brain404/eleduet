import "./tooltip.scss";
class Tooltip {
    constructor(el, options) {
        this.el = el;
        this.options = options || {
          title: ''
        }
        this.tooltip = this.createTooltip();
        this.createElMouseOver();
        this.createElMouseLeave();
        this.removeTooltipOnScroll();
    }
    createTooltip() {
        const tooltip = document.createElement("div");
        tooltip.setAttribute("class", "custom-tooltip");
        tooltip.innerText = this.options.title;

        return tooltip;
    }
    appendTooltip() {
        const elRects = this.el.getBoundingClientRect();
        this.tooltip.setAttribute(
            "style",
            `left: ${elRects.left + elRects.width/2}px; top: ${elRects.top}px`
        );
        document.body.appendChild(this.tooltip);
    }
    createElMouseOver() {
        this.el.addEventListener("mouseover", () => {
            this.appendTooltip();
        });
    }
    removeTooltip() {
        if (!document.body.contains(this.tooltip)) return;
        document.body.removeChild(this.tooltip);
    }
    createElMouseLeave() {
        this.el.addEventListener("mouseleave", () => {
            this.removeTooltip();
        });
    }
    removeTooltipOnScroll() {
        document.addEventListener(
            "scroll",
            () => {
                this.removeTooltip();
            },
            true
        );
    }
}
export default {
    mounted(el, binding) {
        new Tooltip(el, binding.value);
    },
};
