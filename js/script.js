import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper", 1.6, 2);
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl('.custom-controls');
