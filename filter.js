const validUserNames = (array) => array.filter(x => x.length < 10);
// const validUserNames = (array) => {
//     return array.filter(x => {
//         return x.length < 10;
//     });
// }
console.log( validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']) );