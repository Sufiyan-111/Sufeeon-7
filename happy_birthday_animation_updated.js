
const qs = document.querySelector.bind(document);
const easingHeart = mojs.easing.path(
"M0,100C2.9,86.7,33.6-7.3,46-7.3s15.2,22.7,26,22.7S89,0,100,0");

const el = {
container: qs(".mo-container"),

i: qs(".lttr--I"),
l: qs(".lttr--L"),
o: qs(".lttr--O"),
v: qs(".lttr--V"),
e: qs(".lttr--E"),
y: qs(".lttr--Y"),
o2: qs(".lttr--O2"),
u: qs(".lttr--U"),

lineLeft: qs(".line--left"),
lineRight: qs(".line--rght"),

colTxt: "#763c8c",
colHeart: "#fa4843",

blup: qs(".blup"),
blop: qs(".blop"),
sound: qs(".sound") };

class Heart extends mojs.CustomShape {
getShape() {
return '<path d="M50,88.9C25.5,78.2,0.5,54.4,3.8,31.1S41.3,1.8,50,29.9c8.7-28.2,42.8-22.2,46.2,1.2S74.5,78.2,50,88.9z"/>';
}
getLength() {
return 200;
}}

mojs.addShape("heart", Heart);

const crtBoom = (delay = 0, x = 0, rd = 46) => {
parent = el.container;
const crcl = new mojs.Shape({
shape: "circle",
fill: "none",
stroke: el.colTxt,
strokeWidth: { 5: 0 },
radius: { [rd]: [rd + 20] },
easing: "quint.out",
duration: 500 / 3,
parent,
delay,
x });

const brst = new mojs.Burst({
radius: { [rd + 15]: 110 },
angle: "rand(60, 180)",
count: 3,
timeline: { delay },
parent,
x,
children: {
radius: [5, 3, 7],
fill: el.colTxt,
scale: { 1: 0, easing: "quad.in" },
pathScale: [0.8, null],
degreeShift: ["rand(13, 60)", null],
duration: 1000 / 3,
easing: "quint.out" } });

return [crcl, brst];
};

// Note: The full animation code continues...
