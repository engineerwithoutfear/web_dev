const URL1 =
  "https://raw.githubusercontent.com/engineerwithoutfear/hamming/master/Technician_Pool_2014-2018.txt";
const URL2 = "https://raw.githubusercontent.com/engineerwithoutfear/hamming/master/General_Pool_2015-2019.txt";
const URL3 = "https://raw.githubusercontent.com/engineerwithoutfear/hamming/master/Extra_Pool_2016-2020.txt";
let URL = URL1;

//e
// $.get(URL, function(data) {
// // console.log(data)
//   let chunks = [];
//   let outline = [];
//   let categories = [];
//   let sections = [];
//   let lines = data.split(/\r\n|\n/);
//   lines = lines.filter(line => line);
//   console.log(lines)
//   for (var i = 0; i < lines.length; i++) {
//     if (lines[i].match(/(\bE\d\w\d{2}\b)/g)) {
//       // console.log(lines[i])
//       let line = lines[i].split(" ");
//       let exam = line[0].slice(0, 1);
//       let section = line[0].slice(0, 2);
//       let subSection = line[0].slice(0, 3);
//       let answer = line[1].slice(1, 2);
//       let metadata = line.slice(2).join(" ");
//       metadata = metadata.slice(1, metadata.length - 1);
//       let questionID = line[0];
//       let question = lines[i + 1];
//       let a = lines[i + 2].slice(3).trim();
//       let b = lines[i + 3].slice(3).trim();
//       let c = lines[i + 4].slice(3).trim();
//       let d = lines[i + 5].slice(3).trim();
//       let choices = { a: a, b: b, c: c, d: d };
//       let chunk = {
//         exam: exam,
//         section: section,
//         subSection: subSection,
//         questionID: questionID,
//         question: question,
//         answer: answer,
//         choices: choices,
//         metadata: metadata
//       };
//       chunks.push(chunk);
//     }
    
//     if (lines[i].match("SUBELEMENT")) {
//       let subElement = lines[i].slice(11, 13);
//       let subElementDescription = lines[i].slice(16);
//       let summary = lines[i].split(/(\[(.*)\])/)[2];
//       let stats = lines[i].split(/(\[(.*)\])/)[2].split(/-/);
//       let numQuestions = stats[0].split(" ")[0] || "";
//       let numGroups = stats[1] ? stats[1].trim().split(" ")[0] : "";
//       let subElementNumGroups = lines[i].slice(-10, -7);
//       let subElementNumQuestions = lines[i].slice(-28, -26);
//       sections.push({
//         subElement: subElement,
//         subElementDescription: subElementDescription,
//         stats: stats,
//         numQuestions: numQuestions,
//         numGroups: numGroups
//       });
//     }
//     if (lines[i].match(/(\bE\d\w\b)/g)) {
//       let category = lines[i].slice(0, 3);
//       let categoryDescription = lines[i].slice(6);
//       categories.push({
//         category: category,
//         categoryDescription: categoryDescription
//       });
//     }
//   }
//   let questions = chunks;
//   outline = { sections, categories, questions };
//   // console.log(outline);
//   // console.log(chunks)
//   $("#txt").html(JSON.stringify(outline))
// });



// general
// $.get(URL, function(data) {
// // console.log(data)
//   let chunks = [];
//   let outline = [];
//   let categories = [];
//   let sections = [];
//   let lines = data.split(/\r\n|\n/);
//   lines = lines.filter(line => line);
//   console.log(lines)
//   for (var i = 0; i < lines.length; i++) {
//     if (lines[i].match(/(\bG\d\w\d{2}\b)/g)) {
//       // console.log(lines[i])
//       let line = lines[i].split(" ");
//       let exam = line[0].slice(0, 1);
//       let section = line[0].slice(0, 2);
//       let subSection = line[0].slice(0, 3);
//       let answer = line[1].slice(1, 2);
//       let metadata = line.slice(2).join(" ");
//       metadata = metadata.slice(1, metadata.length - 1);
//       let questionID = line[0];
//       let question = lines[i + 1];
//       let a = lines[i + 2].slice(3).trim();
//       let b = lines[i + 3].slice(3).trim();
//       let c = lines[i + 4].slice(3).trim();
//       let d = lines[i + 5].slice(3).trim();
//       let choices = { a: a, b: b, c: c, d: d };
//       let chunk = {
//         exam: exam,
//         section: section,
//         subSection: subSection,
//         questionID: questionID,
//         question: question,
//         answer: answer,
//         choices: choices,
//         metadata: metadata
//       };
//       chunks.push(chunk);
//     }
    
//     if (lines[i].match("SUBELEMENT")) {
//       let subElement = lines[i].slice(11, 13);
//       let subElementDescription = lines[i].slice(16);
//       let summary = lines[i].split(/(\[(.*)\])/)[2];
//       let stats = lines[i].split(/(\[(.*)\])/)[2].split(/-/);
//       let numQuestions = stats[0].split(" ")[0] || "";
//       let numGroups = stats[1] ? stats[1].trim().split(" ")[0] : "";
//       let subElementNumGroups = lines[i].slice(-10, -7);
//       let subElementNumQuestions = lines[i].slice(-28, -26);
//       sections.push({
//         subElement: subElement,
//         subElementDescription: subElementDescription,
//         stats: stats,
//         numQuestions: numQuestions,
//         numGroups: numGroups
//       });
//     }
//     if (lines[i].match(/(\bG\d\w\b)/g)) {
//       let category = lines[i].slice(0, 3);
//       let categoryDescription = lines[i].slice(6);
//       categories.push({
//         category: category,
//         categoryDescription: categoryDescription
//       });
//     }
//   }
//   let questions = chunks;
//   outline = { sections, categories, questions };
//   console.log(outline);
//   // console.log(chunks)
//   $("#txt").html(JSON.stringify(outline))
// });



$.get(URL, function(data) {
console.log(data)
  let chunks = [];
  let outline = [];
  let categories = [];
  let sections = [];
  let lines = data.split(/\r\n|\n/);
  lines = lines.filter(line => line);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].match(/(\bT\d\w\d{2}\b)/g)) {
      let line = lines[i].split(" ");
      let exam = line[0].slice(0, 1);
      let section = line[0].slice(0, 2);
      let subSection = line[0].slice(0, 3);
      let answer = line[1].slice(1, 2);
      let metadata = line.slice(2).join(" ");
      metadata = metadata.slice(1, metadata.length - 1);
      let questionID = line[0];
      let question = lines[i + 1];
      let a = lines[i + 2].slice(3).trim();
      let b = lines[i + 3].slice(3).trim();
      let c = lines[i + 4].slice(3).trim();
      let d = lines[i + 5].slice(3).trim();
      let choices = { a: a, b: b, c: c, d: d };
      let chunk = {
        exam: exam,
        section: section,
        subSection: subSection,
        questionID: questionID,
        question: question,
        answer: answer,
        choices: choices,
        metadata: metadata
      };
      chunks.push(chunk);
    }
    if (lines[i].match("SUBELEMENT")) {
      let subElement = lines[i].slice(11, 13);
      let subElementDescription = lines[i].slice(16);
      let summary = lines[i].split(/(\[(.*)\])/)[2];
      let stats = lines[i].split(/(\[(.*)\])/)[2].split(/-/);
      let numQuestions = stats[0].split(" ")[0];
      let numGroups = stats[1].trim().split(" ")[0];
      let subElementNumGroups = lines[i].slice(-10, -7);
      let subElementNumQuestions = lines[i].slice(-28, -26);
      sections.push({
        subElement: subElement,
        subElementDescription: subElementDescription,
        stats: stats,
        numQuestions: numQuestions,
        numGroups: numGroups
      });
    }
    if (lines[i].match(/(\bT\d\w\b)/g)) {
      let category = lines[i].slice(0, 3);
      let categoryDescription = lines[i].slice(6);
      categories.push({
        category: category,
        categoryDescription: categoryDescription
      });
    }
  }
  let questions = chunks;
  outline = { sections, categories, questions };
  console.log(outline);
$("#txt").html(JSON.stringify(outline))
});