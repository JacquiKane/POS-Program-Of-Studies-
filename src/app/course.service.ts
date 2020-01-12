import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { CHSDept } from './chsdept';
import { CHSCourse } from './chscourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  
  CHSAllDepts = []
  likedCourses = [];

  allCourses = [];
  allDepts = [
    {
      "name": "Art", "chair": "Jennifer Bubp", "courses": "24", "id": "0",
      "allcourses": [
        {
          "credits": 1,
          "name": "ART HISTORY (4024)",
          "weight": "regular",
          "description": "Art History is an interdisciplinary course which integrates the visual arts, the natural sciences, religion, world history, and literature. Students will use critical thinking skills, develop visual perception, expand art vocabulary, and gain an appreciation for art forms of many different cultures and civilizations. This course will allow students who prefer a diverse learning experience the opportunity to engage in multi-media projects and presentations. Fee ",
          "id": "4024",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "ART HISTORY, AP Advanced Placement (4025)",
          "weight": "full",
          "description": "(This course cannot be taken simultaneously with Art History) AP Art History is a course based on the content established by the College Board. Art History is designed to provide the same benefits to secondary school students as those provided by an introductory college course in art history. Students will gain an understanding and knowledge of architecture, sculpture, painting, and other art forms within diverse historical and cultural contexts. Students will examine major forms of artistic expression from the past and the present from a variety of cultures. It is recommended, but not required, that students interested in taking AP Art History maintain a \u201cB\u201d average or higher in their language arts courses. Fee ",
          "id": "4025",
          "semesters": 2,
          "classification": "Advanced Placement"
        },
        {
          "credits": 2,
          "name": "DRAWING 1-2 (L) (4060)",
          "weight": "regular",
          "description": "Drawing 1-2 will introduce students to basic drawing techniques and media. Traditional studies in line, form, texture, composition, perspective, and design will be the focus. Subject matter includes nature studies, perspective, landscape, still life, and portraiture. The following media will be introduced in Drawing 1 graphite. The following media will be introduced in Drawing 2 pastels, opaque and transparent watercolor, acrylic paint, and mixed media. Color theory will be studied in Drawing 2. These courses are the foundation courses for the advanced visual arts classes. Fee ",
          "id": "4060",
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "DRAWING 3-4 (L) (4060)",
          "weight": "regular",
          "description": "Drawing 3-4 will develop and strengthen students\u2019 drawing skills while creating a strong foundation for use with any other art medium. Themes may be developed from object studies, visual collage, or subjects of personal interest. Through a variety of media, including graphite and colored pencil, conte\u2019 crayon, charcoal, and pen and ink, students will combine previous art experiences with a keen focus not only on developing drawing technique, but also intensifying observational skills. Drawing 3-4 students will look more closely and through their work help others to see more clearly. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "DRAWING 5-6 (L) (4060)",
          "weight": "regular",
          "description": "Drawing 5-6 is for students who take enjoyment in their drawing but also need to continue developing their skills at an advanced level. Exposure to diversity is important as students work from small to large drawings with lengthy or quick studies. While experiencing a variety of paper types, students create with drawing materials including graphite, colored pencil, charcoal, pastel, and mixed media. At this stage, we further explore and develop creative and expressive qualities of the artist through guided and self-directed themes. Students in Drawing 5-6 have an opportunity to professionalize thier drawing skills and develop exceptional works of art. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "INTRODUCTION TO TWO- DIMENSIONAL ART (4000)",
          "weight": "regular",
          "description": "Students will experiment with a variety of media, techniques, and design concepts in order to determine future direction in the visual arts. Drawing, painting, printmaking, collage, mixed media, and relief sculpture will be explored. Students will be introduced to the elements and principles of design, art history, and art criticism. This course is recommended for beginning visual art students. Students will be required to purchase some art supplies in addition to the course fee. Fee ",
          "id": "4000",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "ADVANCED TWO-DIMENSIONAL ART (L) (4004)",
          "weight": "regular",
          "description": "Students will continue to explore a variety of media, techniques, and design concepts that build upon skills learned in Introduction to Two-Dimensional Art. Drawing, painting, printmaking, collage, mixed media, and relief sculpture will be explored at an advanced level. Students will apply elements and principles of design, art history, and art criticism concepts to their projects. Students may be required to purchase some art supplies in addition to the course fee. Fee ",
          "id": "4004",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "PAINTING 1-2 (L) (4064)",
          "weight": "regular",
          "description": "Painting 2- Painting 1 Painting 1-2 allows students of all abilities the opportunity to explore oil, watercolor, and acrylic paint. Students gain experience with color, brushwork, techniques, and both traditional and contemporary styles of artists. Subject matter themes include landscapes, figures, portraits, object studies and personal narratives. This course allows students to develop confidence in painting through experience and practice with various media. Painting 2 focuses primarily on oil painting and experimental techniques. Students will advance their techniques, skill and exploration of ideas in a relaxed atmosphere. Students will also learn how to stretch their own canvases. Fee ",
          "id": "4064",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "AP 3-D ART AND DESIGN (4052)",
          "weight": "full",
          "description": "AP Studio Art is a course for students who want to develop their portfolio for college applications. These students should be serious about developing their artwork in a concentrated area through the improvement of 3-D technique and design skills. Focus will be on developing quality, concentration, and breadth of sculptures that follows requirements of the AP Studio Art Program. Creative thought is essential, combined with the investigation of concepts, issues, and personal themes and subject matter through individual research and involved decision making. Students are challenged to become independent thinkers. Students develop ideas through their sketchbooks, explore artist connections, and present their work through critiques and exhibitions. Students must be willing to accept the committed challenge of a rigorous studio art program. Fee ",
          "id": "4052",
          "semesters": 2,
          "classification": "Advanced Placement"
        },
        {
          "credits": 2,
          "name": "AP DRAWING (4048)",
          "weight": "full",
          "description": "teacher approval. Studio Art-AP is a course for students who are serious about developing their portfolio of drawings in a concentrated area through the improvement of technique and design skills. Focus will be on the quality, concentration, and breadth of work produced. Creative thought is essential, combined with the investigation of concepts, issues, and personal themes and subject matter through individual research and involved decision making. Students are challenged to become independent thinkers who will contribute inventively and critically to their culture through the making of art. Students will develop ideas through their sketchbook, explore artist connections, and present their work through critiques and exhibitions. Students must be willing to accept the committed challenge of a rigorous studio art program, and formal evaluations will be made according to national standards of performance through an examination of completed portfolio work. Along with the chance to receive college credit and/ or advanced placement for college, Studio Art-AP offers the advanced art student a rewarding opportunity to develop artistic skills while building and preparing a portfolio of art for college or work. Fee ",
          "id": "4048",
          "semesters": 2,
          "classification": "Advanced Placement"
        },
        {
          "credits": 2,
          "name": "AP 2-D ART AND DESIGN (4050)",
          "weight": "full",
          "description": "Classifications teacher approval) Studio Art-AP is a course for students who are serious about developing their portfolio of designs in a concentrated area through the improvement of technique and design skills. Focus will be on the quality, concentration, and breadth of work produced. Creative thought is essential, combined with the investigation of concepts, issues, and personal themes and subject matter through individual research and involved decision making. Students are challenged to become independent thinkers who will contribute inventively and critically to their culture through the making of art. Students will develop ideas through their sketchbook, explore artist connections, and present their work through critiques and exhibitions. Students must be willing to accept the committed challenge of a rigorous studio art program, and formal evaluations will be made according to national standards of performance through an examination of completed portfolio work. Along with the chance to receive college credit and/ or advanced placement for college, Studio Art-AP offers the advanced art student a rewarding opportunity to develop artistic skills while building and preparing a portfolio of art for college or work. Fee ",
          "id": "4050",
          "semesters": 2,
          "classification": ""
        },
        {
          "credits": 1,
          "name": "CERAMICS 1 (4040)",
          "weight": "regular",
          "description": "In Ceramics 1, emphasis is placed strictly on hand building techniques and the elements and principles of design. Coil, slab, and drape molding are the techniques that will be explored. Glaze application is introduced along with a brief introduction to stains. Fee ",
          "id": "4040",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "CERAMICS 2 (L) (4040)",
          "weight": "regular",
          "description": "Ceramics 2 is a continued study in hand building techniques and design. Students will be introduced to the potter\u2019s wheel and the techniques needed for throwing. Fee ",
          "id": "4040",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "CERAMICS 3 (L) (Hand building) (4040)",
          "weight": "regular",
          "description": "Ceramics 3 is considered an advanced hand building course and is designed for the serious ceramics student. The students will have an opportunity to work with different clays and decorative methods. There may be opportunities to work on the wheel, but not in-depth. Working with design principles is also a large part of this course. Fee ",
          "id": "4040",
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "CERAMICS 4 (L) (Hand building) (4040)",
          "weight": "regular",
          "description": "Ceramics 4 is a continuation of advanced projects in Sculpture (bust or head study), hand building and throwing. Working with the elements and principles of design will be emphasized. ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "CERAMICS 5-6 (L) (Throwing) (4040)",
          "weight": "regular",
          "description": "Ceramics 5-6 is designed for the serious ceramics student interested in working on the potter\u2019s wheel. Students will have an opportunity to work with different clays on the wheel and develop different ways to decorate their pieces. While a majority of the class will be spent on the potter\u2019s wheel, there will be some hand building that may be added to wheel- thrown pieces. A large amount of clay will be used during this class as well as glazes. The second semester will be a continuation of an in-depth study of the potter\u2019s wheel. Projects will include making a four-place-setting dish set, teapot, cookie jar, casserole dish and other lidded forms. Alternate firing techniques may be included. A period of independent study will finish out the semester. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "CERAMICS 7-8 (L) (4040)",
          "weight": "regular",
          "description": "Students enrolling in Ceramics 7-8 should have completed 4 semesters of ceramics, with a solid foundation of throwing and hand building skills. Intended for the serious, self-motivated student with self-disciplined work habits and direction, this course offers advanced studio time through which individual areas of personal interest may be explored and developed. Throughout the year, students design and present ceramic work depicting personal themes and subject matter. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "FIBER ARTS 1 (L) (4046)",
          "weight": "regular",
          "description": "Fiber Arts I exposes the student to a wide variety of fiber techniques, including textile collage, batik, embroidery, screen printmaking and beading. Students will explore the work of contemporary textile designers for inspiration, and develop excellence in craftsmanship. In addition to the course fee, the student must supply some materials. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "FIBER ARTS 2 (L) (4046)",
          "weight": "regular",
          "description": "Fiber Design 2 is a continuation of textile design and construction methods from Fiber Arts I. Weaving skills are introduced as well as new mixed media collage techniques, embossment and printmaking, and hand sculpted bookmaking. Emphasis will continue to be placed on original design and craftsmanship. The student must supply some materials. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "JEWELRY 1-2 (L) (4042)",
          "weight": "regular",
          "description": "Jewelry 1-2 is intended to present students with a basic understanding of jewelry making and to develop a strong foundation in designing jewelry. Emphasis is placed on the elements and principles of design, as well as the steps involved for working with and constructing the pieces in metal. In addition to the course fee, students purchase metal, saw blades, and solder. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "JEWELRY 3-4 (L) (4042)",
          "weight": "regular",
          "description": "Jewelry 3-4 is intended to present students with an advanced understanding of jewelry making and to develop a strong foundation in designing jewelry. Emphasis will be placed upon stone setting, lost-wax casting, glass fusing and thematic designing. Art history, art criticism, aesthetics and production will also be included in the course of study. In addition to the course fee, students must purchase metal, saw blades, and solder. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "PHOTOGRAPHY I (L) (4062)",
          "weight": "regular",
          "description": "This course offers basic study in photography as an expressive art form. Use of the camera, film development, and darkroom skills will be studied. Students should have unlimited access to a SINGLE LENS REFLEX (SLR) camera with adjustable controls and an internal metering system. The art department does not supply cameras. Instamatic cameras that shoot 35mm film and or digital cameras are not acceptable. Film assignments will be given biweekly. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "PHOTOGRAPHY 2 (L) (4062)",
          "weight": "regular",
          "description": "This course is designed for the serious photography student to apply previously learned photography skills more creatively. Advanced camera manipulations will be included, with complex, experimental darkroom procedures. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "PHOTOGRAPHY 3-4(L) (4062)",
          "weight": "regular",
          "description": "The course is designed for the serious photography student to apply subject matter of a more personal interest to previously learned photography skills and techniques. The student should be self-motivated and disciplined, and be prepared to fulfill course objectives designed by the instructor and the student. Black and white photography will be dealt with both traditionally and experimentally, and will be evaluated by the instructor. This class offers an opportunity to develop a portfolio for school and job. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "DIGITAL PHOTOGRAPHY 1 (4062)",
          "weight": "regular",
          "description": "Digital Photography explores creative expression through the medium of digital photography. Use of the DSLR (Digital Single Lens Reflex) camera will be studied along with computer programs Photoshop and Movie Maker. Independent themes and personal narratives are explored. Students must have unlimited access to a DSLR camera with adjustable controls. Carmel High School\u2019s art department does not supply cameras. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "DIGITAL PHOTOGRAPHY 2 (4062)",
          "weight": "regular",
          "description": "This course explores advanced digital photography techniques and software applications that build upon prior knowledge from Digital Photography. Use of the DSLR (Digital Single Lens Reflex) camera is required. Students will explore personal narratives and independent themes. Carmel High School\u2019s art department does not supply cameras. Fee DIGITAL PHOTOGRAPHY 3-4 (4062) This course explores advanced digital photography techniques and software applications while offering students the independence to explore personal themes to build their portfolio of professional work. Carmel High School\u2019s art department does not supply cameras. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "INTRODUCTION TO 3- DIMENSIONAL ART (L) (Sculpture) (4002)",
          "weight": "regular",
          "description": "Intro to 3D Art provides an opportunity for students to work with a variety of media in the development of 3-dimensional forms. Starting with basic design principles, students will begin with a series of projects that incorporate design on a simple level and proceed to applying these principles to work with more complex media. Media projects may include found objects, wire, wood, plaster, and ceramics. Fee ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "DIGITAL DESIGN 1-2 (L) (4082)",
          "weight": "regular",
          "description": "Digital Design 1-2 is designed to introduce computers to students as an art tool. The students will create artwork with graphic art software, digital cameras, and scanners. First semester artwork will be a combination of computer generated images, 2-D drawing skills, and graphic design. Second semester art will emphasize animation, using the skills learned in Digital Design 1. Students will participate in aesthetic discussions and critiques along with researching art history and contemporaries. They will be challenged to solve compositional layouts and sequencing events in order to achieve desired effects. Projects will range from simple one-day tutorials to multiple-week projects. Students will learn about current artists and careers in the field of computer art. Fee semester ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "DIGITAL DESIGN 3-4 (4082)",
          "weight": "regular",
          "description": "Digital Design 3-4 is for the self-motivated artist, who wishes to pursue their talents in the field of computer art. Students will create an individualized letterhead and business card. Subsequent projects will be written on this letterhead, stating the length of time needed for completion, focus or goal of the assignment, parameters, technology needed to complete the assignment, and a brief description of the desired end product. Students will be assessed on the outcome of their work and the fulfillment of their contract obligations. It is an expectation for the students in this class to assist the students in Digital Design 1 when the need arises. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "regular"
        },
        {
          "credits": 4,
          "name": "IB VISUAL ARTS HIGHER LEVEL, INTERNATIONAL BACCALAUREATE (4090)",
          "weight": "full",
          "description": "Classifications The IB Visual Arts program is designed to provide students with various art interests the opportunity to develop their aesthetic, imaginative, and creative faculties in a global context. This program emphasizes critical thinking, intercultural understanding, and exposure to various viewpoints. Students center their artistic development around a Research Workbook, a personal record of their development and evolution as an artist. From this record, students find original inspiration and explore media to create a fully developed body of work. Fee ",
          "id": 0,
          "semesters": 4,
          "classification": ""
        }
      ]
    },
    {
      "name": "Communications", "chair": "Terri Ramos", "courses": "24", "id": "1",
      "allcourses": [
        {
          "credits": 1,
          "name": "MASS MEDIA : VISUAL JOURNALISM I (1084)",
          "weight": "regular",
          "description": "Note 40, Core 40 with Academic Honors and Core 40 with Technical Honors diploma Students enrolled in this course will have the opportunity to explore the field of journalism from a visual perspective. Students will shoot photos, design graphics packages and pages, explore color theory and design techniques, and learn about the impact of visuals on all forms of media coverage. Further, they will utilize programs like Bridge, Photoshop, InDesign and Illustrator. Students will look at and practice the visual modes of news coverage as they range from print to web media, including the laws and ethics behind media coverage decisions. Students are encouraged to have their own digital cameras, but school-provided cameras will be available for use with a parent-signed equipment liability waiver. This course serves as a prerequisite for both the Pinnacle yearbook staff and the HiLite newsmagazine staff. ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 1,
          "name": "MASS MEDIA : VISUAL JOURNALISM II (1084)",
          "weight": "regular",
          "description": "Note 40, Core 40 with Academic Honors and Core 40 with Technical Honors diploma As a continuation to the Visual Journalism 1 course, students enrolled in this class will have the opportunity to further expand their practice and understanding of the visual aspects of journalism, including photography, design, typography, color theory, etc. Students will continue to master their photojournalism and design skills, which will culminate in the form of a personal web-based portfolio of their own work and analyses of professional work. Students will utilize programs like Bridge, Photoshop, InDesign and Illustrator. Students will look at and practice the visual modes of news coverage as they range from print to web media, including the laws and ethics behind media coverage decisions. Students are encouraged to have their own digital cameras, but school-provided cameras will be available for use with a parent-signed equipment liability waiver. This course serves as a prerequisite for both the Pinnacle yearbook staff and the HiLite newsmagazine staff. ",
          "id": 0,
          "semesters": 1,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA : BEGINNING NEWSPAPER 1-2 (1086)",
          "weight": "regular",
          "description": "Note Students enrolled in this prerequisite class learn everything they need to know to make the successful transition to the HiLite newsmagazine staff (Student Media /Newspaper/HiLite staff). From writing inverted pyramid stories to longer narrative articles and opinion pieces to evaluating and planning for great photography to understanding and working with amazing designs, students in Newspaper 1-2 will understand and practice all of the elements necessary to succeed on the HiLite newspaper staff. Even if students choose not to pursue an opportunity to be on the HiLite staff, the Newspaper 1-2 class still offers a tremendous learning opportunity. In addition to becoming critical readers of media, students in Newspaper 1-2 learn \u201ctransferable skills\u201d that will help them in any situation. On a regular basis, Newspaper 1-2 students practice meeting deadlines, interviewing sources, writing for an audience and working on cooperative projects. In very few other high school classes will students hone those techniques. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: INTERMEDIATE NEWSPAPER : HILITE STAFF : 3-4 (1086)",
          "weight": "regular",
          "description": "approval; application required (subsequent years on staff). This course may also count for Fine Arts credit as a Directed Elective for the Core 40 Indiana Academic Honors and Core 40 with Technical Honors diplomas for grades 11-12 (Newspaper 5-6/7-8).  Students enrolled in Student Media/Newspaper/HiLite staff work to produce the award- winning HiLite newsmagazine as well as the topically-based Acumen newsmagazine and news website, HiLite Online. Students serve as editors, reporters, photographers, graphic designers and advertisers. This course can be repeated for credit for every semester of a student\u2019s high school career. Before enrolling, students must successfully complete one of the HiLite\u2019s prerequisite courses -- Newspaper 1-2 and/or Visual Journalism I and/or II \u2013 and then fill out an application during the spring for approval for the following school year. This course, comparable to an honors course in other departments, requires dedication and commitment, but, as students will attest, the hard work pays off. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: ADVANCED NEWSPAPER : HILITE STAFF : 5-6, 7-8 (1086)",
          "weight": "regular",
          "description": "approval; application required (subsequent years on staff). This course may also count for Fine Arts credit as a Directed Elective for the Core 40 Indiana Academic Honors and Core 40 with Technical Honors diplomas for grades 11-12 (Newspaper 5-6/7-8).  Students enrolled in Student Media/Newspaper/HiLite staff work to produce the award- winning HiLite newsmagazine as well as the topically-based Acumen newsmagazine and news website, HiLite Online. Students serve as editors, reporters, photographers, graphic designers and advertisers. This course can be repeated for credit for every semester of a student\u2019s high school career. Before enrolling, students must successfully complete one of the HiLite\u2019s prerequisite courses -- Newspaper 1-2 and/or Visual Journalism I and/or II \u2013 and then fill out an application during the spring for approval for the following school year. This course, comparable to an honors course in other departments, requires dedication and commitment, but, as students will attest, the hard work pays off. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: BEGINNING YEARBOOK : 1-2 (1086)",
          "weight": "regular",
          "description": "Note 40, Core 40 with Academic Honors and Core 40 with Technical Honors diploma Students enrolled in the prerequisite Yearbook 1-2 class will learn the foundational information and skill-set necessary for a successful transition onto the Pinnacle yearbook staff (Student Media/Yearbook/Pinnacle Staff). Emphasis will be on in-depth feature and news reporting, media law, and visual storytelling, including photography, design, typography and graphic representation of facts. Students in Yearbook 1-2 will understand and practice all of the elements necessary to succeed on the Pinnacle yearbook staff. Following completion of this course, there is an application process for admission to Pinnacle yearbook staff. For students who do not choose to pursue staff involvement, this remains a valuable elective that provides for media literacy education and a foundation in many transferable skills, such as interpersonal communication, writing and editing, self-motivation and the ability to meet deadlines, that will be valuable elsewhere. This course is recommended for anyone with an interest in journalism and/or media production. Fee ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA : INTERMEDIATE YEARBOOK : PINNACLE STAFF : 3-4(1086)",
          "weight": "regular",
          "description": "approval; application required (subsequent years on staff) Note diplomas. It also fulfills the Fine Arts requirement for the Core 40 with Academic Honors. Students enrolled in Student Media/Yearbook/Pinnacle Staff serve as reporters, photographers and editors to plan, publish, market and produce the award-winning Pinnacle yearbook. This course provides study and practice in all aspects of the publishing process, and will emphasize the value of journalistic skills such as interviewing, information gathering, writing, editing, taking photos and designing. After-school production time is occasionally required as a part of this class. This course can be repeated for credit every semester of a student\u2019s high school career, pending prior completion of one of the approved prerequisites (Trends in Media or Yearbook 1-2, Visual Journalism I and/or II) and successful completion of an application process in the spring. ",
          "id": "1086",
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA : ADVANCED YEARBOOK : PINNACLE STAFF 5-6 / 7-8 (1086)",
          "weight": "regular",
          "description": "approval; application required (subsequent years on staff) Note diplomas. It also fulfills the Fine Arts requirement for the Core 40 with Academic Honors. Students enrolled in Student Media/Yearbook/Pinnacle Staff serve as reporters, photographers and editors to plan, publish, market and produce the award-winning Pinnacle yearbook. This course provides study and practice in all aspects of the publishing process, and will emphasize the value of journalistic skills such as interviewing, information gathering, writing, editing, taking photos and designing. After-school production time is occasionally required as a part of this class. This course can be repeated for credit every semester of a student\u2019s high school career, pending prior completion of one of the approved prerequisites (Trends in Media or Yearbook 1-2, Visual Journalism I and/or II) and successful completion of an application process in the spring. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: BEGINNING RADIO: 1 - 2 (1086)",
          "weight": "regular",
          "description": "Note Core 40, Core 40 with Academic Honors and Core 40 with Technical Honors diplomas Radio 1-2 is the prerequisite course for the WHJE radio program. This class is designed to offer students an introduction to radio broadcasting, and also to improve their basic communications skills. The class will focus specifically on making students proficient in speaking, listening, writing, and socializing. These skills are essential in any future career path. Students will work in a broadcast facility that is state-of-the-art and industrystandard. During the first semester students will operate within a traditional classroom environment. Students will become proficient in historical and contemporary broadcasting, FCC law and ethics, First Amendment rights, vocal development, news and commercial writing, audio studio equipment, and digital audio production. During the second semester students will operate within a lab environment. They will rotate through on-air performance, production, news reporting, career development, and listening stations. By the end of the year all students will have produced content that airs on 91.3 FM and whje.com. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: INTERMEDIATE RADIO: WHJE: 3 - 4 (1086)",
          "weight": "regular",
          "description": "required Note Core 40, Core 40 with Academic Honors and Core 40 with Technical Honors diplomas. Fulfills the Fine Arts requirement for the Core 40 with Academic Honors. WHJE Radio 3-4 is for all second year WHJE Radio program members, and is the prerequisite for Radio WHJE 5-6. Students in this class will assist in the operation and programming of 91.3 FM. WHJE is a student-run, award-winning, non-commercial educational radio station owned by Carmel Clay Schools. Students will be expected to be proficient in their knowledge of FCC rules and regulations. During the school year students will rotate through four specific department assignments program, news, promotions, and public service. Each grading period the students will encounter department specific tasks including, but not limited to on-air announcing, news reporting, production, and interviewing. In addition students will create feature projects each grading period including, but not limited to; music reviews, personal commentaries, news features, radio dramas, and profiles. Students will also have the opportunity to broadcast live sporting events, as well as represent WHJE at a variety of community events. After school hours are required. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 4,
          "name": "STUDENT MEDIA: ADVANCED RADIO: WHJE: 5 - 6 / 7 - 8 (1086)",
          "weight": "full",
          "description": "application required Note Core 40, Core 40 with Academic Honors and Core 40 with Technical Honors diplomas. Fulfills the Fine Arts requirement for the Core 40 with Academic Honors. WHJE Radio 5-6 / 7-8 is for all or third or fourth year WHJE radio program members. This class carries a weighted credit and simulates a professional working environment. Students in this class will be offered accelerated experiences in radio broadcasting. Students may serve as advanced staff members, choosing to function within one department the entire year. They will develop special programming/projects within their department including, but not limited to; talk-based shows featuring CCS leaders, CCS and Carmel community events, imaging/branding for WHJE, community affairs programs, and live CCS sporting events. In addition, Radio WHJE 7-8 (fourth year) students can apply for director positions within the WHJE program. These positions include, but are not limited to; operations, program, news, promotions, public service, sports, and broadcast technician. Directors will organize staff personnel, monitor the production of content, and ensure the proper operation of all audio equipment and systems. Students enrolled in Radio WHJE 5-6 / 7-8 are the operating staff at 91.3 FM WHJE Carmel. After school hours are required. Television ",
          "id": 0,
          "semesters": 4,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: BEGINNING TELEVISION : 1 - 2 (1086)",
          "weight": "regular",
          "description": "Note Core 40, Core 40 with Academic Honors and Core 40 with Technical Honors diplomas. This is a prerequisite course for the CHTV program. Students will have the opportunity to learn basic TV production skills. Topics such as cameras, audio, lighting, graphics, recording, and editing operations are covered. Students will learn the fundamentals of remote sports and event coverage. Instruction includes operation of studio cameras, video switcher, audio board, character generator, and teleprompter. Projects include news, packages, features, music videos, and studio produced talk shows. After school recording sessions will be required of students enrolled in the class. This class meets the state\u2019s criteria for fulfilling the required technology graduation requirement. ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        },
        {
          "credits": 2,
          "name": "STUDENT MEDIA: INTERMEDIATE TELEVISION : CHTV : 3 - 4 (1086)",
          "weight": "regular",
          "description": "consent Note Core 40, Core 40 with Academic Honors and Core 40 with Technical Honors diplomas. Fulfills the Fine Arts requirement for the Core 40 with Academic Honors. This class goes into depth on producing TV news using our stateof-the-art TV studio and video editing lab. Students can explore both on-air talent and behind-the-scenes opportunities. Topics include script writing, interviewing, shooting video, editing, talent performance, and ethics. A major responsibility will be to produce the CHS morning announcements. This broadcast is also seen on our cable TV outlet. Sports, weather, and documentary production are covered as well in the class. After school hours will be required at times. This class meets the state\u2019s criteria for fulfilling the required technology graduation requirement. STUDENT MEDIA ",
          "id": 0,
          "semesters": 2,
          "classification": "Regular"
        }
      ]
    },
    {
      "name": "Business", "chair": "Debra Lesjak", "courses": "24", "id": "2",
      "allcourses": [
        {
          "credits": "2",
          "name": "ACCOUNTING I-1, I-2 (4524)",
          "weight": "regular",
          "description": "Accounting introduces the language of business using Generally Accepted Accounting Principles (GAAP) and procedures for proprietorships and partnerships using double-entry accounting. Emphasis is placed on accounting principles as they relate to both manual and automated financial systems. This course involves understanding, analyzing, and recording business transactions and preparing, analyzing, and interpreting financial reports as a basis for decision-making. Accounting 1 begins with bookkeeping concepts and then bridges those skills into concepts and principles of accounting. Students are exposed to the accounting cycle and banking practices for a service oriented business. In Accounting 1-2, students will study accounting and payroll systems and subsystems utilizing journals, ledgers, and financial statements for a merchandising business. This class is year-long. ",
          "id": "4524",
          "semesters": "2",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "ADVANCED ACCOUNTING II-1, II-2 (Previously Financial Services) (4522)",
          "weight": "regular",
          "description": "Advanced Accounting expands on the Generally Accepted Accounting Principles (GAAP) and procedures for proprietorships and partnerships using double-entry accounting covered in Introduction to Accounting. Emphasis is placed on accounting principles as they relate to both manual and automated financial systems. This course involves understanding, analyzing, and recording business transactions and preparing, analyzing, and interpreting financial reports as a basis for decision-making. Approximate student fee ",
          "id": "0",
          "semesters": "4522",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "BUSINESS LAW AND ETHICS I-1, I-2 (4560)",
          "weight": "regular",
          "description": "**Students will have the opportunity to earn dual credit through Ivy Tech Community College as long as they meet the Ivy Tech requirements. Business Law and Ethics provides an overview of the legal system in the business setting. Topics covered include of the judicial system, contract, personal, employment and property law. Application of legal principles and ethical decision-making techniques are presented through problemsolving methods and situation analyses. Students incorporate law-related current events and pertinent legal cases in their work. Real-world applications of the law are also emphasized. Three (3) Ivy Tech State College dual credits are available to qualified students. This class is recommended as a year-long class. ",
          "id": "4560",
          "semesters": "2",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "BUSINESS MANAGEMENT HIGHER LEVEL, INTERNATIONAL BACCALAUREATE (4580)",
          "weight": "full",
          "description": "INTERNATIONAL BACCALAUREATE Business Management Higher Level, International Baccalaureate explores how and why individuals form organizations, organizational problems and life cycles, and the role of individuals and groups within organizations. It is based on the curriculum published by the International Baccalaureate Organization. Students gain a broad understanding of the variety of organizations that exist, including profit and non-profit, and will examine and apply the principles of organizations and the techniques practiced in organizational decision making. Students also develop an understanding of the interdependency of organizations and the effect on problem solving. Approximate student fee $17.90. Students are encouraged to take the IB HL exam. Students are required to participate in DECA. ",
          "id": "4580",
          "semesters": "2",
          "classification": "International Baccalaureate"
        },
        {
          "credits": "2",
          "name": "BUSINESS MANAGEMENT STANDARD LEVEL, INTERNATIONAL BACCALAUREATE (4582)",
          "weight": "full",
          "description": "Business Management Standard Level, International Baccalaureate examines the role of individuals and groups in forming organizations and their roles within organizations. Students gain a broad understanding of the variety of organizations that exist, including profit and nonprofit, and the problems and life cycles of these organizations. This course develops an understanding of the interdependency of organizations, the effect of problem solving, and the application of organizational principles and techniques widely practiced in the process of decision making. Approximate student fee Students are encourage to take the IB SL exam. Students are required to participate in DECA. ",
          "id": "4582",
          "semesters": "2",
          "classification": "International Baccalaureate"
        },
        {
          "credits": "1",
          "name": "INTRODUCTION TO BUSINESS 1 (4518)",
          "weight": "regular",
          "description": "Introduction to Business 1 introduces students to the world of business and marketing. The course develops business vocabulary and provides an overview of business and the role that business plays in economic, social, and political environments. ",
          "id": "4518",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "INTRODUCTION TO BUSINESS 2 (4518)",
          "weight": "regular",
          "description": "Introduction to Business 2 introduces the topic of entrepreneurship. Students explore the concepts, functions and skills required for meeting the challenges of operating a business on local, national and international scales. ",
          "id": "4518",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "GLOBAL ECONOMICS (4558)",
          "weight": "regular",
          "description": "Global Economics is a business course that provides students with an understanding of their role as consumers and producers in domestic and global economies. This course enables students to understand how the economic system operates while comprehending their role in that system. Students deal with public policy, international economics, microeconomics, and macroeconomics in comparing economic systems and using selected economic measures. ",
          "id": "4558",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "PERSONAL FINANCIAL RESPONSIBILITY (4540)",
          "weight": "regular",
          "description": "Personal Financial Responsibility addresses the identification and management of personal financial resources to meet the financial needs and wants of individuals and families, considering a broad range of economic, social, cultural, technological, environmental, and maintenance factors. This course helps students build skills in financial responsibility and decision making; analyze personal standards, needs, wants, and goals; identify sources of income, saving and investing; understand banking, budgeting, record-keeping and managing risk, insurance and credit card debt. Approximate student fee $3.13 ",
          "id": "4540",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "",
          "name": "PRINCIPLES OF BUSINESS MANAGEMENT (4562)",
          "weight": "regular",
          "description": "business courses. Credit 1 RW, Dual Credit **Students will have the opportunity to earn dual credit through Ivy Tech Community College as long as they meet the Ivy Tech requirements. Principles of Business Management focuses on the roles and responsibilities of managers as well as opportunities and challenges of ethically managing a business in the free enterprise system. Students will attain an understanding of management, team building, leadership, problem solving steps and processes that contribute to the achievement of organizational goals. The management of human and financial resources is emphasized. Three (3) Ivy Tech State College dual credits will be earned by students who meet the Ivy Tech requirements. ",
          "id": "4562",
          "semesters": "",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "COMPUTER ILLUSTRATION and GRAPHICS (4516)",
          "weight": "regular",
          "description": "Computer Illustration and Graphics introduces students to the computer\u2019s use in visual communication. The focus of the course is on basic computer terminology and use, mastering fundamental skills, and developing efficient working styles. These skills are then developed by creating work with imaging, drawing, interactive, and page layout software. The course includes organized learning experiences that incorporate a variety of visual art techniques as they relate to the design and execution of layouts and illustrations for advertising, displays, promotional materials, and instructional manuals. Instruction also covers advertising theory and preparation of copy, lettering, posters, produce vector illustrations, graphics and logos, and artwork in addition to incorporation of photographic images. Communication skills will be emphasized through the study of effective methods used to design products that impart information and ideas. ",
          "id": "4516",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "COMPUTER SCIENCE II: SIMULATION AND GAME DEVELOPMENT (5236)",
          "weight": "regular",
          "description": "This course provides the intermediate level programmer with skills in computer programming and games development or simulation. Starting with an introduction to the Python programming language and IDE and continuing with the math principles needed to drive the development of an attractive and interactive computer program, the student will build skills in computer programming, user interface design, games development, and technical writing. Games development and simulation involves application of linear algebra, geometry, trigonometry and calculus \u2013 as objects are made to move across a screen, and respond to keystrokes or numerical quantities. Boolean algebra/logic is also applied through computer programming. Technical writing skills would also be emphasized, as the student will document the code (comments) and provide an algorithm for the design of the game/simulation. ",
          "id": "5236",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "COMPUTER SCIENCE PRINCIPLES, AP",
          "weight": "full",
          "description": "Computer Science Principles introduces students to the central ideas of computer science, instilling the ideas and practices of computational thinking and inviting students to understand how computing changes the world. The rigorous course promotes deep learning of computation content, develops computational thinking skills, and engages students in the creative aspects of the field. Students may elect to take the AP Computer Science Principles Exam administered in May at their own expense. ",
          "id": "0",
          "semesters": "2",
          "classification": "Advanced Placement"
        },
        {
          "credits": "2",
          "name": "COMPUTER SCIENCE A 1-2, AP (4570)",
          "weight": "full",
          "description": "Computer Science and teacher recommendation Recommended It is recommended (but not required) that students take AP Computer Science Principles. Computer Science A assumes that the student has had prior programming experience. Students solve programming problems by planning, entering, and debugging solutions using the Java language. Topics covered include repetition tools, and simple data structures including arrays. The course follows the syllabus of the Advanced Placement (AP) Computer Science, a curriculum as prescribed by the College Board guidelines. Students may elect to take the AP Computer Science A Exam administered in May at their own expense. ",
          "id": "4570",
          "semesters": "2",
          "classification": "Advanced Placement"
        },
        {
          "credits": "2",
          "name": "INFORMATION TECHNOLOGY SUPPORT 1 & 2 (Formerly COMPUTER TECH SUPPORT) (5230)",
          "weight": "regular",
          "description": "**Students will have the opportunity to earn dual credit through Ivy Tech Community College as long as they meet the Ivy Tech requirements. Information Technology Support allows students to explore how computers work. Students learn the functionality of hardware and software components as well as suggested best practices in maintenance and safety issues. Through hands on activities and labs, students learn how to assemble and configure a computer, install operating systems and software, and troubleshoot hardware and software problems. Three (3) Ivy Tech State College dual credits are available to qualified students. Approximate student fee ",
          "id": "5230",
          "semesters": "2",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "DIGITAL APPLICATIONS and RESPONSIBILITY 1 (4528)",
          "weight": "regular",
          "description": "Digital Applications and Responsibility students use Microsoft Office 2016 to create documents applicable to home and school. These applications will apply to academic and workplace tasks. DAR helps students develop efficient and practical computer skills beyond the basics which they may have learned at home or middle school. Students also learn appropriate and effective use of the Internet. This course meets the technology requirement for graduation. Approximate student fee ",
          "id": "4528",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "DIGITAL APPLICATIONS and RESPONSIBILITY 2 (4528)",
          "weight": "regular",
          "description": "**Students will have the opportunity to earn dual credit through Ivy Tech Community College as long as they meet the Ivy Tech requirements. In Digital Applications and Responsibility 2-students learn advanced Microsoft Office 2016 (Word, Excel, PowerPoint and Access) skills to strengthen their computer and problemsolving skills. This course, along with the successful completion of DAR 1, will allow qualified students to apply for three (3) Ivy Tech credits. Students will be given the opportunity to seek an industryrecognized digital literacy certification (MOS Certification) for Word 2016, Excel 2016 and , Access 2016 or and PowerPoint 2016. Approximate student fee ",
          "id": "4528",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "INDEPENDENT STUDY IN COMPUTER SCIENCE 1-2 (4801)",
          "weight": "regular",
          "description": "required This course is provided for students who have already completed the AP Computer Science class and are seriously interested in developing their programming skills. Students will work independently, under the supervision of the instructor, covering advanced programming concepts. Topics include structures (including trees, linked lists, sets, and maps), algorithms, and algorithmic analysis. ",
          "id": "4801",
          "semesters": "2",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "INDEPENDENT STUDY IN INFORMATION TECHNOLOGY (5230)",
          "weight": "regular",
          "description": "Required instructor approval required Instructor Approval Required This course is provided for students who have already completed the I.T. Essentials OR Computer Tech Support course and are interested in pursuing a career in computer repair or computer networking. Students will assist the instructor in helping Computer Tech Support student\u2019s complete handson labs and will also assist in training students to repair and repurpose computers for Net Literacy. Students will also work with the instructor to improve classroom/lab procedures and setups. Approximate student fee ",
          "id": "0",
          "semesters": "5230",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "INTRODUCTION TO COMPUTER SCIENCE (4803)",
          "weight": "regular",
          "description": "Introduction to Computer Science allows students to explore the world of Computer Science. Students will gain a broad, but introductory, understanding of the areas composing Computer Science. Additionally, there will be a focus on the areas of computer programming, gaming/mobile development, and artificial intelligence/robotics. This is a 1 semester class. ",
          "id": "4803",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "1",
          "name": "WEB DESIGN (4574)",
          "weight": "regular",
          "description": "This course is designed to give students a background in beginning web page design. Students will understand the purpose of the Internet, the various services available and methods of accessing the Internet. Design features, functions and considerations in designing web pages will be introduced. By utilizing various web browsers and search engines, students will evaluate web pages for content and design. Various web page-authoring software will be used as well as beginning HTML to create the web pages. This course would give students an advantage in the business world or college in designing web pages. ",
          "id": "4574",
          "semesters": "1",
          "classification": "Regular"
        },
        {
          "credits": "2",
          "name": "MERCHANDISING: FASHION 1 & 2 (5962)",
          "weight": "regular",
          "description": "Merchandising providing instruction as it relates to the marketing of apparel and accessories of all kinds. Units of study include the fashion market and designers, market segmentation and consumer demographics, salesmanship, promotion, and visual merchandising. Competitive activities are provided for students to exercise skills and knowledge gained in the program through the co-curricular organization DECA. Students are expected to participate in DECA. Approximate student fee ",
          "id": "5962",
          "semesters": "2",
          "classification": "Career Technical"
        },
        {
          "credits": "2",
          "name": "PRINCIPLES OF MARKETING 1 & 2 (5914)",
          "weight": "regular",
          "description": "Principles of Marketing provides a basic introduction to the scope and importance of marketing in the global economy. Emphasis is placed on oral and written communications, mathematical applications, problem solving, and critical thinking skills as they relate to advertising/promotion/selling, distribution, financing, marketing- information management, pricing, and product/service management. Competitive activities are provided for students to exercise skills and knowledge gained in the program through the co-curricular organization DECA. Students are expected to participate in DECA. Approximate student fee ",
          "id": "5914",
          "semesters": "2",
          "classification": "Career Technical"
        },
        {
          "credits": "2",
          "name": "STRATEGIC MARKETING I-1, I-2 (5918)",
          "weight": "regular",
          "description": "Strategic Marketing builds upon the foundations of marketing and applies the functions of marketing at an advanced level. Students will study the basic principles of consumer behavior and examine the application of theories from psychology, social psychology and economics. The relationship between consumer behavior and marketing activities are reviewed. The first semester concentrates on researching and developing a business plan for competition through DECA and Hamilton County Business Alliance. Second semester students will study risk management, marketing research, and human relations. Practical experience in store organization is gained through the actual operation of school stores. Students are expected to participate in DECA. Approximate student fee ",
          "id": "5918",
          "semesters": "2",
          "classification": "Career Technical"
        },
        {
          "credits": "6",
          "name": "WORK BASED LEARNING, BUSINESS AND MARKETING: BUSINESS COOPERATIVE EXPERIENCES I-1, I-2 (5260)",
          "weight": "regular",
          "description": "Business Cooperative Experiences builds upon the foundations of marketing and applies the functions of marketing at an advanced level. Students will study the basic principles of consumer behavior and examine the application of theories from psychology, social psychology and economics. The relationship between consumer behavior and marketing activities are reviewed. Release time is scheduled for the work experience every day or every other day. A minimum of 15 hours per week of work is expected. Practical experience in store organization is gained through the actual operation of school stores. Students are expected to participate in DECA. Approximate student fee ",
          "id": "5260",
          "semesters": "6",
          "classification": "Career Technical"
        },
        {
          "credits": "1-4",
          "name": "CTSO (Career and Technical Student Organization) LEADERSHIP DEVELOPMENT IN ACTION\u2014MANAGER 5237",
          "weight": "full",
          "description": "Management 1-2, application, interview and instructor approval required. Leadership Development in Action is a project-based course in which students integrate higher order thinking, communication, leadership, and management processes to conduct DECA leadership projects at the local, state, or national level. Each student will create a vision statement, establish standards and goals, design and implement an action plan and timeline, reflect on accomplishments, and evaluate results. Achievement will be documented through a required student portfolio. Students are required to 1) Participate in DECA and 2) act as DECA or Carmel Café Management in assigned role. ",
          "id": "5237",
          "semesters": "1-4",
          "classification": "Regular"
        }
      ]
    },
    { "name": "Engineering", "chair": "John Coghlan", "courses": "34", "id": "3", "allcourses": [
      {
        "credits": "2",
        "name": "IED-INTRODUCTION TO ENGINEERING DESIGN 1-2 (PLTW) (4812)",
        "weight": "regular",
        "description": "Intended Students 9, 10, 11, 12 Introduction to Engineering Design is an introductory course which develops a student\u2019s problem solving skills with an emphasis placed on the development of three-dimensional solid models. Student work will progress from sketching simple geometric shapes to advanced solid modeling using state of the art computer software. They will learn the engineering design process and how it is used in industry to design products. The Computer Aided Design System (CAD) will also be used to analyze and evaluate the product design. Both techniques and equipment are state of the art technology being used by engineers throughout the United States. Rapid prototyping, CNC and other designing and manufacturing aids will be discussed and demonstrated. This course is recommended for students interested in an engineering career path. As part of the \u201cProject Lead the Way\u201d curriculum, many colleges and Universities across the country offer college credit or advanced placement for this course. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Career Technical"
      },
      {
        "credits": "2",
        "name": "DIGITAL ELECTRONICS 1-2 (PLTW) (4826)",
        "weight": "regular",
        "description": "Open to 10, 11, 12 Digital Electronics allows a student to receive a broad-based, technically oriented education that emphasizes the application of today\u2019s technology to solve problems, design solutions, and improve processes. The course introduces basic gate and flipflop logic devices and their application in digital circuits. Digital Electronics will explore logic application of electronic circuits and devices. Students will use computer simulation software to design and test digital circuitry prior to the actual construction of circuits and devices. This course is recommended for students interested in an engineering career path. As part of the \u201cProject Lead the Way\u201d curriculum, many colleges and Universities across the country offer college credit or advanced placement for this course. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Career Technical"
      },
      {
        "credits": "2",
        "name": "PRINCIPLES OF ENGINEERING 1-2 (PLTW) (4814)",
        "weight": "regular",
        "description": "Students will explore several areas of engineering throughout the course including power, electrical control systems, strength of materials, statics, characteristics and properties of materials, quality control, review of the design process, material testing, and kinematics. By exploring various technology systems and manufacturing processes, students will learn how engineers and technicians use math, science, and technology in an engineering problem solving process to benefit mankind. Autodesk Inventor and other material testing simulation software are used frequently through the course. Hands-on, problem-based activities supplement the lessons provided within the curriculum. As part of the PLTW curriculum, many colleges and Universities across the country offer college credit or advanced placement for this course. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Career-Technical"
      },
      {
        "credits": "2",
        "name": "CIVIL ENGINEERING AND ARCHITECTURE (PLTW) (4820)",
        "weight": "full",
        "description": "Intended Students Civil Engineering and Architecture introduces students to the fundamental design and development aspects of civil engineering and architectural planning activities. Application and design principles will be used in conjunction with mathematical and scientific knowledge. Students will design, simulate, and evaluate the construction of buildings and communities by hand and by computer software. Activities also include the preparation of cost estimates as well as a review of regulatory procedures that would affect the project design. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Career Technical"
      },
      {
        "credits": "2",
        "name": "ROBOTICS DESIGN AND INNOVATION 4728 (RDI)",
        "weight": "regular",
        "description": "Recommended Grade Level maximum FW Robotics Design and Innovation allows students to design, program, and test innovative technological designs related to robotic systems. Topics involve mechanics, pneumatics, control technologies, computer fundamentals, and programmable control technologies. Students design, build, and optimize ENGINEERING & TECHNOLOGY 53 CHS Program of Studies robots to perform a variety of predesignated tasks. Individuals will participate in FIRST (For Inspiration and Recognition of Science and Technology) Robotics competitions or develop their own events during the course. Through this course, students will investigate exciting career and collegiate programs of study. Fee $40 INTRODUCTION TO DESIGN PROCESS 1-2 This design class is a hands-on in depth study into the world of Engineering Graphics and Drafting. Engineering Graphics is the international \u201clanguage\u201d of communicating ideas creative design and all stages of product development in the construction, manufacturing and design industries. Artistic ability for this type of drawing and design is not required as the drawings are accomplished with technical equipment. The student\u2019s time is spent at the drawing board creating drawings and learning the proper use of the equipment and the accepted standards of the industry. Neatness, accuracy, attention to detail and a better understanding of measurement and scale are some of the additional skills students gain throughout the course of study. Demonstrations and discussions give insight into the various industries and career opportunities that incorporate the design process on a regular basis. The ability to better visualize and read a \u201cblueprint\u201d acquired in this class can be a great benefit in several career areas. Students will develop and utilize skills in creating physical models and prototypes. Individual and group design problems reinforce the engineering and design process. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "INTRODUCTION TO MANUFACTURING 1-2 (4784)",
        "weight": "regular",
        "description": "This laboratory materials and processes course explores the technological processes used to obtain resources and change them into industrial materials and finished consumer products. Students will learn the processing of metals, polymers, acrylics, wood and laminates. Manufacturing processes will be learned and performed through the use of hand tools, industrial machines, robots and computer controlled equipment. Students will produce a variety of individual and group produced products and projects. Fee IED - INTRODUCTION TO ENGINEERING DESIGN - NON-PLTW (4802) Recommended Prerequisite Processes 2, Algebra 1 The world of engineering has changed greatly with the introduction of CAD (Computer Aided Design). Students in this class will learn a wide variety of the capabilities of CAD. Using AutoCAD, the students will create drawings and designs representing a variety of industrial areas. From mechanical design and geometric tolerance to topography and civil engineering, students will spend the majority of the time at the CAD station. Students will be creating many objects in 3D, increasing their visualization ability and then assign materials and lighting to their object to create photorealistic renderings. Students will also be introduced to various CNC (computer numerical controlled) machines to understand how an accurate CAD drawing can be used to send data directly to a machine to be milled, grown or cut. This brief introduction into the concept of automated manufacturing and CAM (Computer Aided Manufacturing) presents new opportunities into fast growing world of using computers in all areas of the manufacturing environment. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTRODUCTION TO CONSTRUCTION 1-2 (4792)",
        "weight": "regular",
        "description": "This construction technology course is designed to help students understand how technology is used to produce our constructed environment. In this laboratory-centered course, students will learn plan reading and material estimating as well as structural and component construction techniques and processes. The areas to be explored are carpentry, concrete and masonry, plumbing, electrical, insulation, and wall finishing. Students will build a house in the laboratory. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTRODUCTION TO TRANSPORTATION 1-2 (4798)",
        "weight": "regular",
        "description": "This introductory course exposes the student to the fundamental properties within society\u2019s transportation industry. Students will gain knowledge as well as experience in the service and preventative maintenance of today\u2019s land, air, and sea vehicles. Students will become familiar with EPA laws, ASE certification, vehicle warranty, and manufacturer\u2019s scheduled maintenance pertaining to the service and repair of today\u2019s vehicles. Students will also better understand how to compare and shop for service and repair, as well as purchasing new and used vehicles. Teams of students will learn to problem solve, demonstrate trouble shooting, and gain service knowledge while performing various tasks on school owned vehicles and test engines. Students with interest in careers in the automobile technology, mechanical engineering, and service industry will benefit greatly from this course. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "TECHNOLOGY SYSTEMS (4808)",
        "weight": "regular",
        "description": "This independent study course allows the student to study the technologies used in industrial engineering, modern business and information systems. Each student will set up an individual contract to include creative problem solving activities that address real-world problems and opportunities. The student and instructor will determine his/her goals, objectives and method to accomplish the goals. An application stating the student\u2019s research specialty and intended goals must be mutually agreed upon by teacher and student before acceptance into the course. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "IS TECHNOLOGY ENTERPRISES (4806)",
        "weight": "regular",
        "description": "This course is an application course that allows students to apply technological, engineering, and managerial principles in organizing, financing, and operating a company to produce a product, structure, or service. Students learn through this course how enterprises are developed and operated in an efficient manner. The key focus of this course is to allow students to structure and operate a real -life enterprise within the classroom environment. Students learn about the kinds of productive enterprises; principles of management; how to develop products and services; how to organize an enterprise; how to operate an enterprise; the delivery of products or services; the marketing of products or services and the closing of an enterprise. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      }
    ] },
    { "name": "English", "chair": "Kim Peterson", "courses": "34", "id": "4", "allcourses": [{
      "credits": "2",
      "name": "ENGLISH 9 (1002)",
      "weight": "regular",
      "description": "An English class is required for all ninth grade students. This Indiana Academic Standards-based course provides students grammar, composition, literature, nonfiction, speech, and vocabulary instruction. Composition study includes formal and informal writing assignments for a variety of tasks, purposes, and audiences. Literature and nonfiction study encompasses various literary genres and themes. Oral communication emphasizes effective listening and speaking techniques. ",
      "id": "0",
      "semesters": "2",
      "classification": "Regular"
    },
    {
      "credits": "2",
      "name": "ENGLISH 9, HONORS, 1-2 (1002)",
      "weight": "partial",
      "description": "This class is the honors alternative to English 9 and teaches the 10th grade Indiana Academic Standards. This course provides students with challenging literature, composition, and grammar experiences. Composition study includes formal and informal writing assignments for a variety of tasks, purposes, and audiences. Literature and nonfiction study encompasses various literary genres and various literary themes. Oral communication emphasizes effective listening and speaking techniques. The purpose of the course is to prepare students to take college-level English courses in junior and senior year. ",
      "id": "0",
      "semesters": "2",
      "classification": "Honors"
    },
    {
      "credits": "2",
      "name": "ENGLISH 9, Honors 1-2/WORLD HISTORY AND CIVILIZATION,",
      "weight": "partial",
      "description": "Honors, 1-2 (1002/1548) This course offers in interdisciplinary study of the history, literature, and culture of societies throughout the history of the world, while exploring the essential questions of the human condition. The course emphasizes reading, writing, and critical thinking through the textual analysis of literature and primary historical documents, modern research techniques,and oral presentation. Student will receive .5 weighted credit for Honors English, and .5 weighted credit for World History. It is intended to provide extra support for students who would like to challenge themselves and enroll in an honors-level course, although they have not been a part of the honors program in the past. This course requires a twoperiod block of time and is team- taught and will satisfy the freshman English and social studies requirement. ",
      "id": "0",
      "semesters": "2",
      "classification": "Honors"
    },
    {
      "credits": "2",
      "name": "ENGLISH 10, I-2 (1004)",
      "weight": "regular",
      "description": "In the sophomore year, students must take a full year of English. This Indiana Acadmeic Standards-based course provides students grammar, composition, literature, nonfiction, speech, and vocabulary instruction. Composition study includes formal and informal writing assignments for a variety of tasks, purposes, and audiences. Literature and nonfiction study encompasses various literary genres and themes. Oral communication emphasizes effective listening and speaking techniques. ",
      "id": "0",
      "semesters": "2",
      "classification": "Regular"
    },
    {
      "credits": "2",
      "name": "ENGLISH 10, Honors, I-2 (1004)",
      "weight": "partial",
      "description": "This class is the honors alternative to English 10 and teaches the 11th grade Indiana Academic Standards. This course provides students with challenging literature, composition, and grammar experiences. Composition study includes formal and informal writing assignments for a variety of tasks, purposes, and audiences. Literature and nonfiction study encompasses various literary genres and various literary themes. Oral communication emphasizes effective listening and speaking techniques. The purpose of the course is to prepare students to take college-level English courses in junior and senior year. ENGLISH 11, 1-2 (1006) ",
      "id": "0",
      "semesters": "2",
      "classification": "Honors"
    },
    {
      "credits": "2",
      "name": "Classification: Regular",
      "weight": "regular",
      "description": "English 11 is a two-semester Indiana Acadmeic Standardsbased course designed to help students develop their critical reading, writing, and thinking skills. Students will read from a variety of fiction and nonfiction works in a variety of genres. In addition, this course teaches composition and oral communication skills for a variety of tasks, purposes, and audiences with emphasis on the writing and research process. ",
      "id": "0",
      "semesters": "2",
      "classification": ""
    },
    {
      "credits": "2",
      "name": "ENGLISH 11, 1-2/ U. S. HISTORY 1-2 (AMERICAN STUDIES)",
      "weight": "regular",
      "description": "(1006/1542) The interdisciplinary approach of this course will enhance students\u2019 awareness of the relationship of historical events and literature. In addition to covering American writers, composition, and United States history, students will become aware that the American experience is a conglomerate, not separate historical events or literary movements. Novels, short stories, plays, and poetry will be used to enhance students\u2019 understanding of historical development. Based on the Indiana Academic Standards, successful completion of this course satisfies the junior requirements of two English and two social studies credits. This course requires a two- period block of time and is team-taught. ",
      "id": "0",
      "semesters": "2",
      "classification": "Regular"
    },
    {
      "credits": "2",
      "name": "CAPSTONE SEMINAR 1-2, ADVANCED PLACEMENT (0552)",
      "weight": "full",
      "description": "AP Seminar is the first of two courses in the AP Capstone™ program. Based on the AP Capstone Seminar curriculum, students will think critically, creatively, research, explore, pose solutions, develop arguments, collaborate, and communicate using various media. Students will explore real-world issues through a cross-curricular lens and consider multiple points of view to develop deep understanding of complex issues as they make connections between these issues and their own lives. Students will be prepared for both the internal and external assessments (written and oral) for the AP Capstone Seminar. Successful completion of this course satisfies the junior requirements of two English credits. ",
      "id": "0",
      "semesters": "2",
      "classification": "Advanced Placement"
    },
    {
      "credits": "2",
      "name": "CAPSTONE RESEARCH 1-2, ADVANCED PLACEMENT (551)",
      "weight": "full",
      "description": "Capstone Seminar 1-2 AP Research is the second course in the AP Capstone™ program. AP Seminar is a prerequisite for AP Research. AP Research allows students to deeply explore an academic topic,problem, or issue of individual interest. Through this exploration,students design, plan, and conduct a yearlong mentored, research-based investigation to address a research question. In the AP Research course, students further their skills acquired in the AP Seminar course by understanding research methods; employing ethical research practices; and accessing, analyzing, and synthesizing information as they address a research question. The course culminates in an academic thesis paper of approximately 5,000 words and a presentation, performance, or exhibition with an oral defense. Successful completion of this course satisfies the senior requirements of two English credits. ",
      "id": "0",
      "semesters": "2",
      "classification": "Advanced Placement"
    },
    {
      "credits": "2",
      "name": "CAPSTONE RESEARCH 1-2, Advanced Placement (0551)/",
      "weight": "full",
      "description": "STATISTICS 1-2, Advanced Placement (2570) Capstone Seminar 1-2 and Algebra II-2 This course will be taught collaboratively. The purpose of AP Stats is to help you develop analytical and critical thinking skills as you learn to describe data patterns and departures from patterns, plan and conduct studies, use probability and simulation to explore random phenomena, estimate population parameters, test hypotheses, and make statistical inferences. Given the focus on data analysis and its benefit to you as an AP Research student, who will be exploring an academic topic, problem, or issue that interests you and designing, planning, and conducting a year-long researchbased investigation to address it, AP Stats becomes a great course to pair with AP Research. Essentially, AP Research requires you to collect data, communicate your findings, and then analyze that data; all skills that AP Stats can teach you. Additionally, for students considering AP Stats, pairing the course with AP Research allows you to understand and experiment with the best ways in which to analyze your data. Students taking this course will be required to have a TI-nspire graphing calculator. It does not matter if it is the CAS or CX version. ",
      "id": "0",
      "semesters": "2",
      "classification": "Advanced Placement"
    },
    {
      "credits": "2",
      "name": "AP ENGLISH LITERATURE AND COMPOSITION 1-2, Advanced",
      "weight": "full",
      "description": "Placement (1058) AP English Literature and Composition is a full-year English course. This is an accelerated course for those students who show exceptional ability in English. One part of this course will use challenging reading assignments, mainly fiction, as a basis for close reading and thematic analysis of American and English Literature. Writing assignments include expository, analytical, and argumentative essays that require students to analyze and interpret literary works. Frequent writing assignments, both timed and formal, will encourage students to develop their abilities to critique and interpret readings, in preparation for the AP exam. Though prepared, students enrolled in this course are not required to take the corresponding AP test. ",
      "id": "0",
      "semesters": "2",
      "classification": "Advanced Placement"
    },
    {
      "credits": "2",
      "name": "AP ENGLISH LANGUAGE AND COMPOSITION 1-2, Advanced",
      "weight": "full",
      "description": "Placement (1056) AP English Language and Composition is a full-year English course. The course focuses on the development and revision of evidence-based analytic and argumentative writing and the rhetorical analysis of nonfiction texts. The course aligns to an introductory college-level rhetoric and writing curriculum, which requires students to develop evidence-based analytic and argumentative essays that proceed through several stages or drafts. Students will write numerous expository essays in which they explore and synthesize the effects of rhetorical techniques employed by nonfiction texts. Though prepared, students enrolled in this course are not required to take the corresponding AP test. ",
      "id": "0",
      "semesters": "2",
      "classification": "Advanced Placement"
    },
    {
      "credits": "4",
      "name": "IB LANGUAGE A: LITERATURE HIGHER LEVEL, INTERNATIONAL",
      "weight": "regular",
      "description": "BACCALAUREATE ENGLISH 1-4 (1130) IB English A1 is a course in literature that is the first part of a two-year exploration of literature, studied in the English language. It maintains a world literature and international perspective so as to encourage and build understanding of other countries and diverse cultures. The program is comprised of four semester-long courses Oral Presentation of Literature, Written Analysis of World Literature, Detailed Study of Genres and Oral Commentary, and The Human Condition in World Drama. ",
      "id": "0",
      "semesters": "4",
      "classification": "International Baccalaureate"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-1 COMPOSITION COURSES:",
      "weight": "regular",
      "description": "ENGLISH 12-1 This Indiana Academic Standards-based course is designed to enhance the writing and communication skills of the students through a variety of formal and informal, text-dependent compositions appropriate to a variety of tasks, purposes, and audiences. Students will build upon previous composition experiences and prepare students for future college writing courses. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-1: W131 ACP CC COMPOSITION: ADV. ENGLISH/",
      "weight": "regular",
      "description": "LANGUAGE ARTS COLLEGE CREDIT (1124) W131 is a course in critical reading, writing, and thinking with sources in which students will experience the varied range of academic writing. Students will master the skills of summary, critique, analysis, synthesis, research, and documentation. Students will also learn to adapt the writing process and apply various organizational strategies to match the purpose of the individual assignment. Topics for writing will be developed from reading about and discussing in- depth issues under debate in different disciplinary fields and among the general public. A research paper is required for successful completion of the course. \u2022Students must be eligible for admission to Indiana University in order to be admitted to this course. Regular university fees will be charged, and credits are transferable to most colleges and universities in the country. You must pay the fees to take the course. ",
      "id": "0",
      "semesters": "1",
      "classification": "Advanced College Project"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-2: SPEECH (1076)",
      "weight": "regular",
      "description": "This is a public speaking course requiring students to use proper speech craft, structure, outlining techniques and polished presentations. Students will complete required reading and writing related to speaking opportunities. Students will deliver a variety of speeches appropriate to different audiences and purposes. Speech will help the student develop both self-confidence and the skills needed for success in college speaking courses as well as, future communication activities. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-2: P155 ACP CC SPEECH: ADV. ENGLISH/",
      "weight": "regular",
      "description": "LANGUAGE ARTS COLLEGE CREDIT (1124) Course Length P155 is a course in college-level public speaking, and will focus on research and oral presentation through the study of formal speaking, listening skills, information literacy, and critical reading through in depth research and detailed analysis. This course will examine the two main purposes of presentation, persuasive and informative. In addition to providing instruction in writing clear, coherent, and organized arguments, this course will teach strategies for collecting and transforming data for use in individual student presentations and using criteria to evaluate the validity of the arguments presented by others. \u2022Students must be eligible for admission to Indiana University in order to be admitted to this course. Regular university fees will be charged, and credits are transferable to most colleges and universities in the country. You must pay the fees to take the course. ",
      "id": "0",
      "semesters": "1",
      "classification": "Advanced College Project"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-2: DEBATE 1 (1070)",
      "weight": "regular",
      "description": "This course is open to all high school students regardless of previous speech experience. Students will be exposed to Public Forum, Lincoln-Douglas, and Congressional debate styles as outlined by the National Forensic League. The student will gain skills in doing research, organizational techniques, critical listening critical and creative thinking, persuasive presentation, and self-confidence. Students will read the opinions and writings of philosophers, politicians, academics, and experts who are knowledgeable on specific debate topics. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-2: DEBATE 2 (1070)",
      "weight": "regular",
      "description": "Debate 2 is open to students who have both successfully completed and passed Debate 1. In this course students will continue to use the expertise they acquired while taking Debate 1. Students will continue to develop as in-depth researchers, technical and persuasive writers and speakers, effective communicators, and perceptive and critical listeners. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ENGLISH 12-2: L202 ACP CC: GENRES OF LITERATURE(LITERARY INTERPRETATION): ADV. ENGLISH/LANGUAGE ARTS COLLEGE CREDIT (1124)",
      "weight": "regular",
      "description": "Composition for IU Credit, SAT Critical Reading score of 670 or higher, ACT English score of 32 or higher, AP Language and Composition score of 4 or 5, OR AP Literature and Composition score of 4 or 5 This course emphasizes a close, thoughtful reading of representative literary texts in poetry, drama, fiction, novel (and appropriate nonfiction prose) originally written in English and drawn from a range of historical periods and countries. A major goal is to develop the ability to read and write with precision, responsibility, and imagination through class discussion and the writing of several short, critical responses. \u2022Students must be eligible for admission to Indiana University in order to be admitted to this course. Regular university fees will be charged, and credits are transferable to most colleges and universities in the country. You must pay the fees to take the course. ",
      "id": "0",
      "semesters": "1",
      "classification": "Advanced College Project"
    },
    {
      "credits": "1",
      "name": "AMERICAN LITERATURE (1020)",
      "weight": "regular",
      "description": "Open to 9, 10, 11, 12 American Literature, a one-semester course that is a study of representative works and authors of the United States from pre- Revolutionary times to the present. Students read, analyze, evaluate, critique, and actively respond to a wide variety of literary genres that reflect American culture, including quality works of various ethnic and cultural minorities. Students who are taking or have taken the regular American Studies block or the AP American Studies block are not eligible to take the course. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "BIBLICAL LITERATURE (1022)",
      "weight": "regular",
      "description": "This course is a non-religious approach to the study of selections from the Bible as literature. Sixty percent of the Hebrew and Christian testaments will be read. Emphasis is on authors, plot, characters, themes, and literary techniques. Work will focus on the historical, biographical, cultural, and geographical aspects of each book read. Writing and discussion assessments are included. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ENGLISH LITERATURE (1030)",
      "weight": "regular",
      "description": "Open to 9,10,11, 12 This one-semester course, formerly titled British Literature, is an intense study of English literature including excerpts, poetry, and shorter writings of a variety of eras. In addition to a study of fiction and nonfiction, the historical impact on the literature will be discussed. Composition and oral communication assessments are included. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "CLASSICAL LITERATURE (1026)",
      "weight": "regular",
      "description": "This one-semester course, is an intense study of mythology and classical pieces of literature including excerpts, poetry, and shorter writings of a variety of eras. Composition and oral communication assessments are included. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "CREATIVE WRITING (1092)",
      "weight": "regular",
      "description": "This course is designed for students who seek to improve their writing skills and expand their approach to writing by developing their creative process. It is geared for the student who has mastered the mechanics of writing and standard grammar. Students will work with description, researchedbased analysis, narration, and poetry. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "ETYMOLOGY (1060)",
      "weight": "regular",
      "description": "This intensive course helps students build vocabulary through a knowledge of Greek and Latin prefixes, roots, and suffixes. It also provides connotative and denotative meanings of words in written and oral contexts. Emphasis is on the practical use of derivatives including increased writing skills and better understanding of written material. Recommended for college, this course does require rigorous memorization, intense daily homework, and weekly tests. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1",
      "name": "LITERARY MOVEMENTS (1040)",
      "weight": "regular",
      "description": "Literary Movements provides a genre study of European and American literature through various movements in history. Writing and discussion activities will provide students with opportunities to explore these trends and movements and crucial concepts in developing a philosophy for life. Composition and oral communication assessments are included. ",
      "id": "0",
      "semesters": "1",
      "classification": "Regular"
    },
    {
      "credits": "1-2",
      "name": "ENGLISH READING/SUPPLEMENTAL PROGRAM: DEVELOPMENTAL READING (1120)",
      "weight": "regular",
      "description": "Developmental Reading provides study and practice in the strategies necessary to increase reading comprehension. This course emphasizes strategies for adapting method and speed of reading to the type of material and purpose for reading. It also includes strategies for using reading to gather, retain, and analyze information. Individual diagnostic testing will be done, and an individualized program will be developed to enable each student to read and write with more confidence. ",
      "id": "0",
      "semesters": "1-2",
      "classification": "Supplemental"
    },
    {
      "credits": ".5-2",
      "name": "LANGUAGE ARTS LAB 1-2, 3-4, 5-6, 7 (1010)",
      "weight": "regular",
      "description": "Language Arts Lab is a remediation course designed to give students who have not yet developed proficiency in the application of the reading- language arts standards. Students gain reading and writing skills necessary to perform successfully both in the school and the community. Using an integrated approach to teach the Indiana Academic Standards, the program offers individualized instruction that focuses on reading and writing in both the content and general areas. ",
      "id": "0",
      "semesters": ".5-2",
      "classification": "Supplemental"
    },
    {
      "credits": "2",
      "name": "IB THEORY OF KNOWLEDGE (0560)",
      "weight": "full",
      "description": "with priority given to IB Diploma students) Open to non- IB students as an elective but IB Diploma candiates will have priority if the section fills. IB Diploma students will take it their junior year unless special permision is granted. Theory of Knowledge is an interdisciplinary two-course sequence that is central to the educational philosophy of the International Baccalaureate. It challenges students to reflect critically on diverse ways of knowing and areas of knowledge, and to consider the role which knowledge plays in a global society. It encourages students to become aware of themselves as thinkers, to become aware of the complexity of knowledge, and to recognize the need to act responsibly in an increasingly interconnected world. This is an interdisciplinary two-course sequence. The course challenges students to reflect on what they know academically and personally and on how they know it. Students engage in daily discussions, prepare presentations relevant to course content, read selections from a variety of disciplines, draw on their experiences in other IB classes and outside school, and write regularly. ",
      "id": "0",
      "semesters": "2",
      "classification": "IB"
    }] },
    {"name": "ENL", "chair": "Kim Petersen", "courses": "34", "id": "6", "allcourses": []},
    { "name": "FACS", "chair": "Nancy Spencer", "courses": "34", "id": "6", "allcourses": [
      {
        "credits": "1",
        "name": "PREPARING FOR COLLEGE AND CAREERS (5394)",
        "weight": "regular",
        "description": "Recommended for 9, 10, or 11 Preparing for College and Careers addresses the knowledge, skills, and behaviors all students need to be prepared for success in college, career, and life. The focus of the course is the impact of today\u2019s choices on tomorrow\u2019s possibilities. Topics include \u2022 Learning about the self \u2022 Career exploration and planning \u2022 Investigating post-secondary options \u2022 Decision making \u2022 Personal and professional skills needed for success. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "INTERPERSONAL RELATIONSHIPS (5364)",
        "weight": "regular",
        "description": "Interpersonal Relationships satisfies the health credit required for graduation. Interpersonal Relationships is an introductory course that is especially relevant for students interested in careers that involve interacting with people. Major course topics include communication skills; leadership and collaboration; conflict prevention, resolution, and management; building and maintaining relationships; and individual needs and characteristics and their impacts on relationships. This course provides a foundation for continuing and post-secondary education for all career areas that involve interacting with people both inside and outside of a business/ organization, including team members, clients, patients, customers, and the general public. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "ADULT ROLES & RESPONSIBILITIES (5330)",
        "weight": "regular",
        "description": "Recommended for 11 and 12 Adult Roles and Responsibilities will cover knowledge, skills, and behaviors students will need to be prepared for adulthood and post secondary endeavors. Learning experiences in this course focus on financial responsibility, interpersonal standards, lifespan roles, and resource management. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "NUTRITION AND WELLNESS: ORIENTATION TO FOODS (5342)",
        "weight": "regular",
        "description": "This course is an introduction to food and nutrition, safety and sanitation, consumer buying skills, food storage, and food preparation skills. Lab experiences include a variety of techniques in preparing grains, fruits, vegetables, dairy products and meats. This course will enable students to realize benefits of sound nutrition and apply these principles to their daily lives. It is a prerequisite for all of the following advanced classes. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "ADVANCED NUTRITION AND WELLNESS: BAKING (5340)",
        "weight": "regular",
        "description": "Orientation to Foods Baking offers the advanced foods student an opportunity to concentrate on baking skills and the careers associated with this culinary area. Students will study ingredients and their functions, participate in labs that emphasize experimentation and recipe modifications. Learn to evaluate products made in class by improving sensory evaluation skills. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "ADVANCED NUTRITION AND WELLNESS: REGIONAL AMERICAN AND FOREIGN FOODS (5340)",
        "weight": "regular",
        "description": "This advanced foods class exposes students to international cuisine and fosters an appreciation for cultural differences. Learn about diverse cultures by examining food customs, ceremonial foods, and geographical influences. Traditional recipes and unique methods of food preparation are emphasized through lab experiences, special projects, and guest speakers. European, Asian, and Middle Eastern cuisine is explored, as well as regional foods of the United States. Lab experiences will reinforce learning and enable students to prepare and taste a variety of ethnic recipes. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "INTRODUCTION TO CULINARY ARTS AND HOSPITALITY (5438)",
        "weight": "regular",
        "description": "The course provides students with opportunities to explore career options and entrepreneurial opportunities within the hospitality and tourism industry. Students explore culinary arts history and professionalism in the service industry. Students will investigate preparation foundations, practice and build upon basic culinary skills, explore diverse cuisines and service styles, investigate nutrition and menu development, and examine the economics of food. Participation in Family, Community, Career Leaders of America (FCCLA) and laboratory experiences that emphasize industry practices and develop basic culinary skills are required components of this class. Students will participate and have the opportunity to take leadership roles in the FCCLA Culinary Bakeshop. The Bakeshop prepares baked goods for the Carmel Cafe. Fee CULINARY ARTS AND HOSPITALITY 1 MANAGEMENT I-1, 1-2 (5440) **Students will have the opportunity to earn dual credit through Ivy Tech Community College if they meet the Ivy Tech requirements.** This course is for students considering a career pathway in the field of culinary arts and Hospitality and Tourism. Class experiences emphasize industry practices and basic industry skills. The course allows students to apply the basic industry food safety and sanitation practices. Students will explore the food industry and examine their own goals. Topics include the kitchen brigade, basic food service equipment, knife skills and small ware, simple catering events, and preparing and serving safe food with training for certifications in food safety. Students will have the opportunity to become ServSafe and CPR certified. The course also allows for expansion of basic cooking techniques such as dry heat and moist heat cooking, and frying. This course also provides a background and history of the hospitality industry and introduces students to the broad spectrum of hospitality/food service organizations and career opportunities. Second semester students will learn advanced food preparation techniques and menu planning skills. This lab based course allows students to practice their skills with community catering activities. Students will be exposed to industry professionals problem through problem based learning experiences and field trips. Career and training opportunities are also explored. FCCLA membership is required. Eligible students may earn three (3) Ivy Tech State College dual credits per semester for HOSP 101 (I-1) and HOSP 102 (I-2) Fee semester) FCCLA membership ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "CULINARY ARTS AND HOSPITALITY I: Year Two (5440)",
        "weight": "regular",
        "description": "This course continues to provide students with problem based learning experiences in the hospitality industry. Students will continue to practice their advanced food preparation techniques and menu planning skills. Career and training opportunities are explored and leadership roles will be applied to community catering activities. FCCLA membership and participation in culinary competition is required. Fee $27.73 (1st semester) Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "CULINARY ARTS AND HOSPITALITY II: Hospitality Management (5458)",
        "weight": "regular",
        "description": "credit through Ivy Tech Community College if they meet the Ivy Tech requirements. This course prepares students for employment in the hospitality industry. It provides the foundations for study in higher education that leads to a full spectrum of hospitality careers. This is a broad-based course that introduces students to all segments of hospitality, what it includes,and career opportunities that are available; provides a survey of management functions, highlighting basic theories and facts; and exposes students to current trends and current events within the industry. Three major goals of this course are for students to be able to restaurant management, distinguish the difference between hospitality and tourism, and state differences in front of the house versus back of the house. Eligible students may earn three (3) Ivy Tech State College dual credits per semester for HOSP 104. Fee $2.28 per semester ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "ADVANCED LIFE SCIENCES: FOODS (L) (5072)",
        "weight": "regular",
        "description": "It is a standards-based, interdisciplinary science course that integrates biology, chemistry, and microbiology in an agricultural context. Students enrolled in this course formulate, design, and carry out food based laboratory and field investigations as an essential course component. Students understand how biology, chemistry, and physics principles apply to the composition of foods, food nutrition and development, food processing, and storage. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "NUTRITION AND WELLNESS: SENIOR (5342)",
        "weight": "regular",
        "description": "Emphasis on College and Career Readiness introduction to food, nutrition, safety and sanitation, consumer buying skills, food storage, and food preparation skills. Lab experiences are designed to prepare students to be wise consumers, to be able to prepare healthy meals, and to make healthy food choices. Labs will include preparation of grains, fruits, vegetables, dairy products and meats. This course will enable students to realize benefits of sound nutrition and apply these principles to their daily lives. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "NUTRITION AND WELLNESS: NUTRITION AND FITNESS (5342)",
        "weight": "regular",
        "description": "Special emphasis will be on the nutritional needs of young athletes, as well as current dietary and exercise recommendations. Contemporary nutrition topics will be explored through research, collaboration, guest speakers, field trips, and lab experiences. Self-assessment and monitoring of personal nutrition and fitness is an integral part of this course. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "INTRODUCTION TO HOUSING AND INTERIOR DESIGN (5350)",
        "weight": "regular",
        "description": "This course satisfies one fine arts credit required for Core 40 academic honors diploma. Explore a future in interior design and related careers. This class focuses on selecting and planning living environments to meet the needs and wants of individuals and families. Topics include housing and furniture styles, architecture, floor planning skills, elements and principles of design, and influences related to interiors and furniture styles. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "INTRODUCTION TO FASHION AND TEXTILES I (5380)",
        "weight": "regular",
        "description": "Introduction to Fashion and Textiles satisfies one fine arts credit required for Core 40 academic honors diploma. IFT-1 is an introductory course for those students interested in academic enrichment or a career in the fashion, textile, and apparel industry. The course includes the study of personal, academic, and career success; careers in the fashion, textile, and apparel industry; factors influencing the merchandising and selection of fashion, textile, and apparel goods and their properties, design, and production; and consumer skills. This course addresses knowledge and skills related to design, production, acquisition, and distribution in the fashion, textile, and apparel arena. A project-based approach integrates instruction and experiences including application of the elements and principles of design; selection, production, alteration, repair, and maintenance of apparel and textile products; product research, development, and testing; and application of technical tools and equipment utilized in the industry. This course provides the foundation for continuing and post-secondary education in fashion, textile, and apparel related careers. Students will complete sewing skills samples, a pillowcase and pajama pants. Students are responsible for the expense of their own patterns, fabric and notions to complete their projects. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "INTRODUCTION TO FASHION AND TEXTILES 2 (5380)",
        "weight": "regular",
        "description": "Introduction to Fashion and Textiles satisfies one fine arts credit required for Core 40 academic honors diploma.This one semester course is designed for the student interested in advancing their basic sewing terminology and techniques beyond Introduction to Fashion and Textiles 1. A project-based approach integrates instruction and experiences including application of the elements and principles of design; selection, production, alteration, repair, and maintenance of apparel and textile products; and application of technical tools and equipment utilized in the industry.Students will complete sewing skills samples, and will choose their own patterns and fabric to complete a minimum of 2 garment projects.. Students are responsible for the expense of their own patterns, fabric and notions to complete their projects. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "FASHION AND TEXTILES CAREERS I-1; I-2; I-3; I-4 (5420)",
        "weight": "regular",
        "description": "Students have the opportunity to advance after successfully completing the prerequisite for each year. Fashion and Textiles Careers I prepares students for occupations and higher education programs of study related to the entire spectrum of careers in the fashion industry. This course builds a foundation that prepares students to enter the Fashion Careers II course. Major topics include investigation of design elements and principles, evaluating manufacturing process, reviewing the processes from fiber production to items of clothing being worn, overall review of the textile and apparel industry, investigation of fashion designers, customer relations and best practices, fashion merchandising, forecasting trends, impact of social media on the fashion industry, and career exploration and experience. Students are required to select more challenging patterns to further develop skills using more advanced construction and tailoring techniques. Students are responsible for the expense of their own patterns, fabric, and notions to complete a minimum of five projects. Students must earn a C- or higher to continue second semester. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "FASHION AND TEXTILES CAREERS II-1; II-2 (5421)",
        "weight": "regular",
        "description": "Fashion and Textiles Careers II prepares students for occupations and higher education programs of study related to the entire spectrum of careers in the fashion industry. This course builds a foundation that prepares students to enter into higher education programs of study related to the entire spectrum of the career clusters that encompass careers in fashion, apparel, and other textiles management, production, and services. Students are required to select more challenging patterns to further develop skills using more advanced construction and tailoring techniques. A study of fashion through the ages, an overview of the apparel industry, and careers in the clothing field will also be explored. Students are responsible for the expense of their own patterns, fabric, and notions to complete a minimum of five projects. Students must earn a C- or higher to continue second semester. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "1",
        "name": "CHILD DEVELOPMENT (5362)",
        "weight": "regular",
        "description": "This curriculum benefits students who plan to one day be parents or pursue a profession in a child related career such as education, child psychology, pediatric medicine, or family therapy. Investigate current issues affecting children and families and study conception, prenatal development and the birth process. An in-depth evaluation of a child\u2019s physical, social, emotional, and intellectual development is conducted from birth through the preschool years. Additional child related topics such as brain development, caring for children with special needs, discipline, creative play, and children\u2019s literature are also explored. This one semester course is not intended for student who wish to pursue Early Childhood Education courses. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "EARLY CHILDHOOD EDUCATION I: ADV CHILD DEVELOPMENT (5412)",
        "weight": "regular",
        "description": "**Students will have the opportunity to earn dual credit through Ivy Tech Community College if they meet the Ivy Tech requirements.**  This course is for students who are interested in pursuing careers that work with young children such as education, psychology, pediatrics, nursing or counseling. Students study the physical, social, emotional, and intellectual development of children ages newborn to eight years old. Additional topics covered include pregnancy, brain development, guidance and discipline, child abuse, children\u2019s literature, health and wellness and careers in early child. Students will have the opportunity to have a field experience in the Kids\u2019 Corner Preschool at Carmel High School. Three (3) Ivy Tech State College dual credits are available to qualified students. Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      },
      {
        "credits": "2",
        "name": "EARLY CHILDHOOD EDUCATION I: KIDS\u2019 CORNER I-1, I-2 (5412)",
        "weight": "regular",
        "description": "Development, Education Professions or FCS teacher recommendation; application Full year enrollment is an option, not a requirement. **Students will have the opportunity to earn dual credit through Ivy Tech Community College if they meet the Ivy Tech requirements.** For students interested in pursuing a child related career such as elementary education, early childhood education, child specialist, child psychologist, pediatric medicine or developing a pre-kindergarten program. Responsibilities of Kids\u2019 Corner teachers include planning and preparing learning centers, writing and implementing daily lesson plans, completing observations of children, corresponding regularly with parents, and holding parent-teacher conferences at the end of the semester. A two week rotation at Carmel Clay Schools Edu-Care program provides students with an opportunity to work with infants and toddlers. Class assignments include developing a portfolio, researching the development of elementary school age students, and creating bulletin boards, games and prop boxes. Students must be able to work independently, and demonstrate self-motivation and discipline. The school reserves the right to reassign participants to a study hall if they are unable or unwilling to fulfill the obligations and responsibilities associated with the role of a Kids\u2019 Corner teacher. Six (6) Ivy Tech State College dual credits are available to qualified students. **This course meets two periods on either gold or blue days. ",
        "id": "0",
        "semesters": "2",
        "classification": "CTE"
      }
    ] },
    {"name":"Math","chair":"Jacinda Sohalski", "courses":"34", "id": "7", "allcourses":[
      {
        "credits": "2",
        "name": "ALGEBRA I 1-2 (2520)",
        "weight": "regular",
        "description": "This course provides a formal development of the algebraic skills and concepts necessary for students who will take a geometry course and other advanced college-preparatory courses. The instructional program will provide for the use of algebraic skills in a wide range of problem- solving situations. Topics include functions, linear equations, inequalities, systems of equations and inequalities, quadratic and exponential equations and functions, and data analysis and statistics. No student will be allowed to take Algebra I-2 before earning credit for Algebra I-1. Students taking this course are required to have the scientific calculator, TI-30XIIS. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ALGEBRA II 1-2 (2522)",
        "weight": "regular",
        "description": "Algebra II is a course designed to reinforce skills learned in Algebra I as well as introducing topics necessary for higher-level math courses. The topics given to high priority in Algebra II are solving of all types of equations and inequalities, graphing functions, solving application problems, and an introduction to statistics and probability. Technology is integrated where appropriate. Students taking this course will be required to have a non-CAS scientific calculator. The recommended scientific calculator for the course to have their own. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ALGEBRA II 1-2, Honors (2522)",
        "weight": "partial",
        "description": "NOTE should contact the department chair to arrange a placement test. Waivers are not acceptable if the student hasn\u2019t taken honors geometry. This course is offered to students recommended as most able in mathematics because of its rigor and pace. The content of the course includes all topics in Algebra II, presented from a more abstract and theoretical standpoint. It is recommended that students not only have the Honors Geometry background, but also a strong showing in Honors/ Advanced Algebra I. Students who take this course must have good number sense and be able to think critically. Topics include linear programming, statistics, matrices and their applications and an in-depth analysis of a wide variety of functions. Students taking this course will be required to have a scientific calculator, such as the TI-30XIIS, the TI-36X Pro cannot be used on assessments. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors Prerequisite"
      },
      {
        "credits": "2",
        "name": "GEOMETRY 1-2 (2532)",
        "weight": "regular",
        "description": "The course presents a unified approach to plane and solid geometry. Emphasis is placed on the application of properties, postulates, and theorems of geometric figures in two and three dimensions. Topics include congruence, similarity, parallel lines, polygons, circles, volume and constructions. Students taking this course will be required to have a scientific calculator, such as the TI-30XIIS. There is an approximate fee for this course of $5 for the geometry tool kit. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "GEOMETRY 1-2, Honors (2532)",
        "weight": "partial",
        "description": "This course is designed to introduce the student to the vocabulary and concepts of plane geometry and to apply those concepts using the processes of logical reasoning to attain a better understanding of the world around them. The development of theorems will necessitate a working knowledge of measurement, congruence, similarity, parallelism, perpendicularity, sequences, perimeter, area, volume, trigonometry, and application of algebra concepts of geometry. The scope of Honors Geometry extends beyond the study of geometry with more emphasis on higher order thinking, identifying patterns as well as additional trigonometry and triangle applications. This course also has a strong emphasis on constructions and coordinate geometry. Students taking this course will be required to have a scientific calculator. There is an approximate fee for this course of $5 for the geometry tool kit. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors Prerequisite"
      },
      {
        "credits": "2",
        "name": "PRE-CALCULUS/ TRIGONOMETRY 1-2, INTERMEDIATE (Semester 1: 2564, Semester 2 : 2566 )",
        "weight": "regular",
        "description": "Pre-Calculus Intermediate is a two semester course which is recommended for only those students who have maintained a \u201cC\u201d average or above in previous math courses. First semester topics covered in this course include the theory of equations, exponential and logarithmic functions, polynomial and rational functions, and sequences and series. Second semester this course provides for the development of trigonometric functions, their properties and graphs, inverse trig functions, trig equations and identities, the Law of Sines and the Law of Cosines, as well as applications of the trig functions and conics.This course is intended to prepare students for AP Statistics, Finite Mathematics, Quantitative Reasoning or IB Math. This course does not fulfill the prerequisite for Calculus Survey/ M119, AP Calculus AB 1-2 or AP Calculus BC 1-2. Students taking this course will be required to have a scientific calculator, such as the TI-30XIIS. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "PRE-CALCULUS/ TRIGONOMETRY 1-2 (Semester 1: 2564, Semester 2 : 2566 )",
        "weight": "regular",
        "description": "Algebra II 2, Honors Pre-Calculus blends all of the concepts and skills that must be mastered prior to the enrollment in a collegelevel calculus course or other college-level math courses. A functional approach provides for the integration of trigonometric concepts, relationships of equations and their graphs and applications of real world problems. Students taking this course will be required to complete a summer packet. Students are required to complete a summer review packet. Students taking this course will be required to have a scientific calculator, such as the TI-30XIIS. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "PRE-CALCULUS/ TRIGONOMETRY HONORS (Semester 1: 2564, Semester 2 : 2566 )",
        "weight": "full",
        "description": "Note should contact the department chair to arrange a placement test. Waivers are not acceptable if the student has not taken Honors Algebra II 1-2. This course provides formal development of the algebraic, trigonometric, and other pre-calculus skills. These are the concepts necessary for the students who will take a calculus course and other college level mathematics courses. The instructional program will provide ways to use algebraic skills, graphic techniques, and a wide range of applications. Students will further develop an appreciation of the contributions made by mathematicians such as De Moivre and Euler. Topics include for pre-Calculus, algebraic and transcendental functions and graphs, analytic geometry and trigonometry, matrices, parametric equations, mathematical induction, binomial theorem, series, and sequences. Students taking this course will be required to have a scientific calculator. They are also encouraged to have a TInspire CX CAS graphing calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors"
      },
      {
        "credits": "2",
        "name": "STATISTICS 1-2, AP (2570)",
        "weight": "full",
        "description": "The course is a study of statistics for the motivated student. Its purpose is to introduce students to methods for collecting, analyzing, and drawing conclusions from data. The curriculum is aligned to the College Board guidelines and will discuss topics such as one and two-variable displays and descriptive statistics, linear and non- linear regression, sample surveys, experimental design, probability, sampling distribution and inference procedures. Students completing this course will be able to take the AP Statistics exam in May, part of which may be paid by the state when the student is currently enrolled in the course. Students taking this course will be required to have a TInspire graphing calculator. It does not matter if it is the CAS or CX version. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement"
      },
      {
        "credits": "2",
        "name": "CAPSTONE RESEARCH 1-2, Advanced Placement (0551)/ STATISTICS 1-2, Advanced Placement (2570)",
        "weight": "full",
        "description": "Capstone Seminar 1-2 and Algebra II-2 This course will be taught collaboratively. The purpose of AP Stats is to help you develop analytical and critical thinking skills as you learn to describe data patterns and departures from patterns, plan and conduct studies, use probability and simulation to explore random phenomena, estimate population parameters, test hypotheses, and make statistical inferences. Given the focus on data analysis and its benefit to you as an AP Research student, who will be exploring an academic topic, problem, or issue that interests you and designing, planning, and conducting a year-long research-based investigation to address it, AP Stats becomes a great course to pair with AP Research. Essentially, AP Research requires you to collect data, communicate your findings, and then analyze that data; all skills that AP Stats can teach you. Additionally, for students considering AP Stats, pairing the course with AP Research allows you to understand and experiment with the best ways in which to analyze your data. Students taking this course will be required to have a TI-nspire graphing calculator. It does not matter if it is the CAS or CX version. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement"
      },
      {
        "credits": "2",
        "name": "FINITE MATHEMATICS 1-2, ACP 118 (2530)",
        "weight": "full",
        "description": "Finite Mathematics is a two semester course designed for students who will pursue careers that are not necessarily in the science field. The problem solving emphasis of the course is designed to apply the mathematical concepts to business, economics as well as the social, life and physical sciences. Topics include probability, linear programming and elementary statistics. As part of the Advance College Project students who enroll in Finite Math may apply to earn three (3) hours of college credit through Indiana University at Bloomington under the title Mathematics (M118). Students would be charged reduced university tuition per credit hour and credits are transferable to several colleges and universities in the country. Each student who chooses to participate in the ACP program should inform his/her counselor at the time of scheduling. Fees will be due when billed by Indiana University. Once a student application is accepted by the ACP office of IU, withdrawal from the M118 IU course is available in October. No calculator is required for this course. ",
        "id": "0",
        "semesters": "2",
        "classification": "Dual Credit (May be taken for college credit)"
      },
      {
        "credits": "2",
        "name": "QUANTITATIVE REASONING 1-2 (2550)",
        "weight": "regular",
        "description": "Pre-Requisite Algebra I 1-2, Geometry 1,2 and Algebra II 1-2) Quantitative Reasoning is a one-year course focused on the study of numeracy, ratio and proportional reasoning, modeling, probabilistic reasoning and statistics. Students will build knowledge with basic mathematical/analytical concepts and operations. The class will focus heavily on problem solving with real life applications. It is designed to provide students with a coherent, useful and logical experience in which they can make use of their ability to analyze problem situations. This higher level math course aligns with college-level quantitative reasoning courses and is recommended for students who are not planning to pursue a degree in a STEM related field or do not anticipate a need for advanced mathematics in their future studies. Students taking this course will be required to have a scientific calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "BRIEF SURVEY OF CALCULUS 1-2, ACP M119 (2544)",
        "weight": "full",
        "description": "Brief Survey of Calculus is a two semester course which offers the student the opportunity to learn Calculus with emphasis on applications rather than theory. This course is recommended for only those students who have maintained a \u201cB\u201d average in previous mathematics courses. The course content includes functions, limits, derivatives, applications of the derivative and applications of integration. As part of the Advance College Project, students who enroll in Calculus Survey may apply to earn three (3) hours of college credit through Indiana University at Bloomington under the title Mathematics (M119). Students would be charged reduced university tuition per credit hour and credits are transferable to several colleges and universities in the country. Each student who chooses to take this course for college credit should inform his/her counselor at the time of scheduling. Fees will be due when billed by Indiana University Once a student application is accepted by the ACP office of IU, withdrawal from the M119 course is available in October. Students taking this course will be required to have a TInspire CX or TI-84 plus calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Dual Credit (May be taken for college credit)"
      },
      {
        "credits": "2",
        "name": "CALCULUS AB 1-2, AP/ACP M211 (2562)",
        "weight": "full",
        "description": "Honors or Pre-Calculus/Trig 2 AP Calculus AB introduces the topics of differential and integral calculus. The course covers at least as much material as a standard first semester college calculus course. It is recommended for only those students who have maintained a high B average in previous math courses. The curriculum is aligned to College Board guidelines. AP Calculus AB prepares the student to take the Advanced Placement Calculus AB exam in the spring. If students score well they may be awarded one semester of college credit. Students should check with their chosen universities to see about the need to take the AP exam. Students in this course are encouraged to take the AP exam, part of which may be paid by the state when the student is currently enrolled in the course. As part of the Advance College Project, students who enroll in AP Calculus AB may apply to earn four (4) hours of college credit through Indiana University\u2019s mathematics department. (Course number M211) Students would be charged reduced university tuition per credit hour and credits are transferable to several colleges and universities in the country. Each student who chooses to take this course for college credit should inform his/her counselor at the time of scheduling. Fees will be due within the first two weeks of the first semester. Once a student application is accepted by the ACP office of IU, withdrawal from the M211 IU course is available in October. Students are required to complete a summer review packet. Students taking this course will be required to have a TI-nspire CX, TI-nspire CX CAS or TI 84 Plus graphing calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement (May be taken for college credit)"
      },
      {
        "credits": "2",
        "name": "CALCULUS BC 1-2, AP/ACP M211-212 (2572)",
        "weight": "full",
        "description": "Note the department chair to arrange a placement test. Waivers are not acceptable if the student has not taken Honors PreCalculus/Trig 1-2. AP Calculus BC is a college-level course designed for highly motivated math students. The student should be competent in a range of analytical and technical skills. The curriculum is aligned to College Board guidelines and covers the content of the standard first two semesters of college calculus. Students will be prepared for the AP Calculus BC exam in the spring and may earn up to two semesters of college credit. Students in this course are encouraged to take the AP exam, part of which may be paid by the state when the student is currently enrolled in the course. As part of the Advance College Project through Indiana University, students who enroll in AP Calculus BC may apply to earn four (4) hours of college credit each semester. Students would be enrolled in course numbers M211 and M212 and would be charged reduced university tuition per credit hour. Each student who chooses to participate in the ACP program should inform his/her counselor at the time of scheduling. Fees will be due when billed by Indiana University. Once a student application is accepted by the ACP Office of IU, withdrawal from the course is available in October. Students taking this course will be required to have a TInspire CX CAS graphing calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement (May be taken for college credit)"
      },
      {
        "credits": "2",
        "name": "MULTIVARIABLE CALCULUS/ACP M311 (2544)",
        "weight": "full",
        "description": "Note taken AP Calculus BC 1-2 This course is intended for students with a solid background in mathematics who are competent in a range of analytical and technical skills. The majority of these students will be expecting to include mathematics as a major component of their university studies, either as a subject in its own right, or within courses such as physics, engineering, and technology. Students enrolled in this class enjoy the challenges of mathematics and problem solving. This course includes topics from the third semester of college Calculus. Students will review topics from Calculus BC and previous math courses to meet the requirements of the Mathematics HL in the International Baccalaureate program. The pace of the course is such that ample time could be given to each topic to enhance students understanding through use of technology and explorations. Students taking this course will be required to have a TInspire CX CAS graphing calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "Dual Credit"
      },
      {
        "credits": "2",
        "name": "IB MATHEMATICS: Analysis and Approaches SL 1-2 (2588)",
        "weight": "full",
        "description": "This SL course blends all of the concepts and skills that must be mastered prior to the enrollment in a college-level math course. A functional approach provides for the integration of trigonometric concepts, relationships of equations and their graphs and applications of real world problems. Students in this class will complete various projects in addition to traditional evaluations. The emphasis of this course is to help students obtain a well-rounded understanding of all topics. They will demonstrate this understanding through a mandatory exploration. The exploration is a thesis like project where students will apply the math they\u2019ve learned to an area of interest. Students enrolled in this course will be able to choose to take an external exam, either the SL exam at the end of this school year or continue on to IB MATHEMATICS Analysis and Approaches HL 1-2 and take the HL exam at the end of the second year. Calculator Requirement ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "IB MATHEMATICS: Analysis and Approaches HL 1-2 (2590)",
        "weight": "full",
        "description": "This HL course extends students\u2019 knowledge from Analysis and Approaches SL This course is intended to follow Analysis and Approaches SL. It will review topics from the standard level course and delve deeper into the same syllabus content as the Analysis and Approaches SL Mathematics course description. This course will appeal to students with a good background in mathematics who are competent in a range of analytical and technical skills. This course will help students retain the Calculus they have learned in their sophomore and junior years and prepare them for further mathematics in college. Ample time will be given to explore each topic and to enhance students\u2019 understanding through the use of technology and explorations. Calculator Requirement ",
        "id": "0",
        "semesters": "2",
        "classification": "International Baccalaureate"
      },
      {
        "credits": "2",
        "name": "IB MATHEMATICS: Applications and Interpretations SL 1-2 (2592)",
        "weight": "full",
        "description": "This course is intended for students with varied backgrounds and abilities. More specifically, it is designed to build confidence and encourage an appreciation of mathematics in students who do not anticipate a need for mathematics in their future studies. Students taking this course need to be already equipped with fundamental skills and a rudimentary knowledge of basic processes. This course concentrates on mathematics that can be applied to contexts related as far as possible to other subjects being studied, to common real-world occurrences and to topics that relate to home, work, and leisure situations. The course requires students to produce a project, a piece of written work based on personal research, guided and supervised by the teacher. The project provides an opportunity for students to carry out a mathematical investigation in the context of another course being studied, a hobby or an area of interest of their choice using skills learned before and during the course. Students taking this course will be required to have a TI-nspire CX, TInspire CX CAS or TI 84 Plus graphing calculator. ",
        "id": "0",
        "semesters": "2",
        "classification": "International Baccalaureate"
      },
      {
        "credits": "2",
        "name": "IB MATHEMATICS: Applications and Interpretations HL 1-2 (2594)",
        "weight": "full",
        "description": "Interpretations SL 1-2 This HL course extends students\u2019 knowledge from Applications and Interpretations SL This course is intended to follow Applications and Interpretations SL. It will review topics from the standard level course and delve deeper into the same syllabus content as the Applications and Interpretations SL Mathematics course description. This course is intended to meet the needs of students whose interest in mathematics is more practical than theoretical but seek more challenging content. ",
        "id": "0",
        "semesters": "2",
        "classification": "International Baccalaureate"
      },
      {
        "credits": ".5",
        "name": "ALGEBRA 1 Lab (2516)",
        "weight": "regular",
        "description": "Algebra 1 Lab is a supplemental course. Students will be placed based on their performance in previous math classes and standardized test scores. The focus of this course is two-fold 1) Students will work on strengthening the prerequisite mathematical and study skills needed to be successful in Algebra I 2) Students will be provided additional assistance with the material they are learning in Algebra I. ",
        "id": "0",
        "semesters": ".5",
        "classification": "Supplemental"
      }
    ]},
    {"name":"Performing Arts","chair":"Chris Kreke", "courses":"34", "id": "8", "allcourses":[
      {
        "credits": "2",
        "name": "BEGINNING CONCERT BAND (L) (4160)- CONCERT BAND 1-2",
        "weight": "regular",
        "description": "Students taking this course are provided with a balanced comprehensive study of music through the concert band. Ensemble and solo activities are designed to develop elements of developing musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight- reading Students also have the opportunity to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CONCERT BAND (L) (4170) \u2013 WIND SYMPHONY II 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop elements of advanced musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students will continue to refine their performances to include, but not limited to large and varied repertoire of concert band literature that is developmentally appropriate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CONCERT BAND (L) (4168) \u2013 WIND SYMPHONY III 1-2",
        "weight": "regular",
        "description": "Ensemble and solo activities are designed to develop elements of intermediate musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students will continue to refine their performances to include, but not limited to large and varied repertoire of concert band literature that is developmentally appropriate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CONCERT BAND (L) (4168) \u2013 WIND SYMPHONY IV 1-2",
        "weight": "regular",
        "description": "Students taking this course are provided with a balanced comprehensive study of music through the concert band. Ensemble and solo activities are designed to develop elements of intermediate musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "BEGINNING CONCERT BAND (L) (4160)- CONCERT BAND 1-2",
        "weight": "regular",
        "description": "Students also have the opportunity to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CONCERT BAND (L) (4170) \u2013 WIND SYMPHONY II 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop elements of advanced musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students will continue to refine their performances to include, but not limited to large and varied repertoire of concert band literature that is developmentally appropriate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CONCERT BAND (L) (4168) \u2013 WIND SYMPHONY III 1-2",
        "weight": "regular",
        "description": "Ensemble and solo activities are designed to develop elements of intermediate musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students will continue to refine their performances to include, but not limited to large and varied repertoire of concert band literature that is developmentally appropriate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CONCERT BAND (L) (4168) \u2013 WIND SYMPHONY IV 1-2",
        "weight": "regular",
        "description": "Students taking this course are provided with a balanced comprehensive study of music through the concert band. Ensemble and solo activities are designed to develop elements of intermediate musicianship skills in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have opportunities to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. In addition, students will continue to refine their performances to include, but not limited to and a large and varied repertoire of concert band literature that is developmentally appropriate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CONCERT BAND (L) (4170) - WIND SYMPHONY I 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop elements of advanced musicianship in every student. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students also have the opportunity to experience live performances by professionals during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students are required to participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors"
      },
      {
        "credits": "1",
        "name": "JAZZ ENSEMBLE (L) (4164) \u2013 JAZZ I",
        "weight": "regular",
        "description": "This course meets during 2nd semester only. Students taking this course develop musicianship and specific performance skills through group and individual settings for the study and performance of the varied styles of instrumental jazz. The instruction includes the study of the history, formative, and stylistic elements of jazz. Students develop their creative skills through performing, (5) listening, and (6) analyzing. Students are provided with opportunities to experience live performances by professionals during and outside of the school day. A limited amount of time outside of the school day may be scheduled for dress rehearsals and performances. In addition, a limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend the learning in the classroom. Student participants must also be receiving instruction in another band or orchestra class offering, at the discretion of the director. ",
        "id": "0",
        "semesters": "1",
        "classification": "Honors"
      },
      {
        "credits": "1",
        "name": "JAZZ ENSEMBLE (L) (4164) \u2013JAZZ II",
        "weight": "regular",
        "description": "This course meets during 2nd semester only. Students taking this course develop musicianship and specific performance skills through group and individual settings for the study and performance of the varied styles of instrumental jazz. The instruction includes the study of the history, formative, and stylistic elements of jazz. Students develop their creative skills through performing, (5) listening, and (6) analyzing. Students are provided with opportunities to experience live performances by professionals during and outside of the school day. A limited amount of time outside of the school day may be scheduled for dress rehearsals and performances. In addition, a limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend the learning in the classroom. Student participants must also be receiving instruction in another band or orchestra class offering, at the discretion of the director. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "JAZZ ENSEMBLE (L) (4164)\u2013 JAZZ III",
        "weight": "regular",
        "description": "This course meets during 2nd semester only. Students taking this course develop musicianship and specific performance skills through group and individual settings for the study and performance of the varied styles of instrumental jazz. The instruction includes the study of the history, formative, and stylistic elements of jazz. Students develop their creative skills through performing, (5) listening, and (6) analyzing. Students are provided with opportunities to experience live performances by professionals during and outside of the school day. A limited amount of time outside of the school day may be scheduled for dress rehearsals and performances. In addition, a limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend the learning in the classroom. Student participants must also be receiving instruction in another band or orchestra class offering, at the discretion of the director. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "JAZZ ENSEMBLE (L) (4164) \u2013 JAZZ IV",
        "weight": "regular",
        "description": "This course meets during 2nd semester only. Students taking this course develop musicianship and specific performance skills through group and individual settings for the study and performance of the varied styles of instrumental jazz. The instruction includes the study of the history, formative, and stylistic elements of jazz. Students develop their creative skills through listening, and analyzing. Students are provided with opportunities to experience live performances by professionals during and outside of the school day. Some time outside of the school day may be scheduled for dress rehearsals and performances. In addition, some public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend the learning in the classroom. Student participants must also be receiving instruction in another band or orchestra class offering, at the discretion of the director. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "MARCHING BAND (4162)",
        "weight": "regular",
        "description": "The Marching Band represents the high school at local, state, regional, and national competitions during the fall season. The band also performs at home football games and in area parades. All instrumental and percussion students are encouraged to join this group. Wind and Percussion students must enroll in a concert band or marching percussion class. Auxiliary students must enroll in Auxiliary Class in order to participate. Students should be aware that the Marching Band rehearses approximately five weeks during the summer. Students are required to attend all summer and fall rehearsals and performances unless excused by the Director of Bands. Students must be in good physical condition to participate in this group. Please note financial responsibilities involved with the Marching Band. Required fees for the Marching Band cover the following expenses and other incidental expenses. The marching band fees will be announced prior to auditions each year. Students may apply for a 9th grade PE II waiver for participation in this class. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "MUSIC THEORY AND COMPOSITION (L) (4208) - MUSIC THEORY 1-2",
        "weight": "regular",
        "description": "Students taking this course develop skills in the analysis of music and theoretical concepts. Students training and dictation skills, (2) compose works that illustrate mastered concepts, (3) understand harmonic structures and analysis, (4) understand modes and scales, (5) study a wide variety of musical styles, (6) study traditional and nontraditional music notation and sound sources as tools for musical composition, and (7) receive detailed instruction in other basic elements of music. Students have the opportunity to experience live performances, by professionals, during and outside of the school day. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "DANCE PERFORMANCE (L) (4146) - MARCHING BAND COLOR GUARD 1-2",
        "weight": "regular",
        "description": "This is a performance course that is a direct extension of the band program. This course is only open to members of the Marching Band Auxiliary Unit (Flag, Rifle, and Saber). Sequential and systematic learning experiences are provided in the area of equipment work (Flag, Rifle, and Saber) and Ballet, Modern, and Jazz movement. Students in this class participate in the Marching Band during first semester and in Winter Guard during second semester. Activities utilize a wide variety of materials and experiences and are designed to develop techniques appropriate within the Color Guard genre, including individual and group instruction in performance repertoire and skills. Students develop the ability to express their thoughts, perceptions, feelings, and images through movement. The Marching Band Color Guard and Winter Guard provide opportunities for students to experience degrees of physical prowess, technique, flexibility, and the study of Color Guard performance as an artistic discipline and as a form of artistic communication. Learning activities and experiences develop the student\u2019s ability to \u2022 understand the body\u2019s physical potential, technical functions, and capabilities; \u2022 understand and assimilate the basic elements of technique within the genre offered; \u2022 demonstrate an understanding of \u2022 the varied styles within the genre; \u2022 develop listening, comprehension, and memorization skills; \u2022 use simple to complex and compound dance patterns within the genre; \u2022 identify and use, both orally and in writing, appropriate terminology related to style and technique; and \u2022 understand musical phrasing, rhythmic structures, and meters. Students are able to describe, analyze, interpret, and judge live and recorded dance performances of professional dancers and companies in the genre. Students become aware of the vocational opportunities in the areas of Color Guard and dance. Students may apply for a 9th grade PE II waiver for participation in this class. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular (852-853)"
      },
      {
        "credits": "2",
        "name": "PIANO AND ELECTRONIC KEYBOARD (L) (4204) - BEGINNING CLASS PIANO 1-2",
        "weight": "regular",
        "description": "Students taking this course are offered keyboard classes, including piano and electronic keyboard, in order to develop music proficiency and musicianship. Instruction is designed so that students are enabled to connect, examine, imagine, define, try, extend, refine, and integrate music study into other subject areas. Students position, fingering, rhythm, and articulation; (2) compose and improvise melodic and harmonic material; (3) create and perform simple accompaniments; (4) listen to, analyze, sight-read, and study the literature performed; (5) study the elements of music as exemplified in a variety of styles; and (6) make interpretive decisions. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular Prerequisite"
      },
      {
        "credits": "2",
        "name": "PIANO AND ELECTRONIC KEYBOARD (L) (4204) \u2013 INTERMEDIATE CLASS PIANO 1-2",
        "weight": "regular",
        "description": "Instructor Students taking this course are offered keyboard classes, including piano and electronic keyboard, in order to develop music proficiency and musicianship. Instruction is designed so that students are enabled to connect, examine, imagine, define, try, extend, refine, and integrate music study into other subject areas. Students position, fingering, rhythm, and articulation; (2) compose and improvise melodic and harmonic material; (3) create and perform simple accompaniments; (4) listen to, analyze, sight-read, and study the literature performed; (5) study the elements of music as exemplified in a variety of styles; and (6) make interpretive decisions. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "PIANO AND ELECTRONIC KEYBOARDING (L) (4204) - ADVANCED",
        "weight": "regular",
        "description": "Students taking Advanced Piano develop skills through ensemble and solo playing. Mastery of basic piano technique must be evident. Instruction creates the development of the highest caliber in the diverse styles of piano literature appropriate in difficulty for the students. Instruction is designed so that students are able to connect, examine, imagine, define, try, extend, refine, and integrate music study into their other subject areas. Students with proper posture, hand position, fingering, rhythm, and articulation; (2) compose and improvise melodic ad harmonic material; create and perform intermediate accompaniments; (4) listen to, analyze, sight-read, and study the literature performed. Class recital is given the second semester serving as a culmination of daily practice and musical goals. Students are required to participate. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "BEGINNING CHORUS (L) (4182) - COUNTERPOINTS 1-2",
        "weight": "regular",
        "description": "Students taking Beginning Chorus (The Counterpoints) develop musicianship and specific performance skills through ensemble and solo singing. The Counterpoints is a mixed choir of students in grade nine. Activities create the development of a quality repertoire in the diverse styles of choral literature appropriate in difficulty and range for the students. The Counterpoints provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Beginning instruction of vocal technique and music theory will be a primary focus. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. The Counterpoints perform on all Choral Division concerts as well as a limited number of public appearances. Students are strongly encouraged to participate in Beginning Chorus for future placement in Intermediate and Advanced Chorus. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CHORUS (L) (4186) - BLUE AND GOLD COMPANY 1-2",
        "weight": "regular",
        "description": "Intermediate Chorus (Blue and Gold Company) provides students with opportunities to develop musicianship and specific performance skills through ensemble and solo singing. The Blue and Gold Company is a mixed choir of students in grades 10 through 12 focusing on concert choir repertoire. Activities create the development of a quality repertoire of an intermediate level reflecting the diverse styles of choral literature appropriate in difficulty and range for the students. The Blue and Gold Company provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Additional emphasis is placed on sight-reading, critical listening skills, vocal technique, and music theory. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. The Blue and Gold Company perform on all Choral Division concerts as well as a limited number of public appearances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CHORUS (L) (4186) - ALLEGRO 1-2",
        "weight": "regular",
        "description": "Intermediate Chorus (Allegro) provides students with opportunities to develop musicianship and specific performance skills through ensemble and solo singing. Allegro is a women\u2019s choir of students in grades 10 through 12. Activities create the development of a quality repertoire of an intermediate level reflecting the diverse styles of choral literature appropriate in difficulty and range for the students. Allegro provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Additional emphasis is placed on sight-reading, critical listening skills, vocal technique, and basic stage movement. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Allegro performs on all Choral Division concerts as well as a limited number of public appearances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CHORUS (L) (4186) - SELECT SOUND 1-2",
        "weight": "regular",
        "description": "Intermediate Advanced Chorus (Select Sound) provides students with opportunities to develop musicianship and specific performance skills through ensemble and solo singing. Select Sound is a chorus mixed choir of students in grades 10 through 12 focusing on acapella singing. Activities create the development of a quality repertoire of an advanced level reflecting the diverse styles of choral literature appropriate in difficulty and range for the students. Select Sound provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Additional emphasis is placed on sight-reading, critical listening skills, vocal technique, and music theory. Students have the opportunity to experience live performances by professionals during and outside of the school day. A large amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A large number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Select Sound performs on all Choral Division concerts as well as a limited large number of public appearances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CHORUS (4186) - NEW EDITION 1-2",
        "weight": "regular",
        "description": "Intermediate Chorus (New Edition) provides students with opportunities to develop musicianship and specific performance skills through ensemble and solo singing. New Edition is a mixed choir of students in grades 10-12 focusing on choir literature. Activities create the development of a quality repertoire of an intermediate level reflecting diverse styles of choral literature appropriate in difficulty and range for the students. New Edition provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Additional emphasis is placed on sight-reading, critical listening skills, vocal technique, and higher level stage movement. Students have the opportunity to experience live performance by professionals during and outside the school day. A limited amount of time outside the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities outside of the school day that support and extend learning in the classroom. New Edition performs at all Choral Division concerts as well as a limited number of public appearances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE CHORUS (4186) \u2013 RHAPSODY 1-2",
        "weight": "regular",
        "description": "Intermediate Chorus (Rhapsody) provides students with opportunities to develop musicianship and specific performance skills through ensemble and solo singing. The Rhapsody is a female choir of students in grades 10 through 12. Activities create the development of a quality repertoire of an intermediate level reflecting the diverse styles of choral literature appropriate in difficulty and range for the students. Rhapsody provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Additional emphasis is placed on sight-reading, critical listening skills, vocal technique, and basic stage movement. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Rhapsody performs on all Choral Division concerts as well as a limited number of public appearances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CHORUS (L) (4188) - ACCENTS 1-2",
        "weight": "full",
        "description": "Students taking Advanced Chorus (The Accents) develop musicianship and specific performance skills through ensemble and solo singing. The Accents is a female show/concert choir comprised of highly proficient vocal music students in grades 10 through 12. Mastery of basic vocal technique must be evident. Activities create the development of a quality repertoire of the highest caliber in the diverse styles of choral literature appropriate in difficulty and range for the students. Areas of refinement include a cappella singing, sight-reading, and critical listening skills. The Accents provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Advanced training is offered in stage presence, movement, and poise. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. The Accents perform on all Choral Division concerts as well as public appearances and demonstrate a serious commitment to quality vocal and visual performance. A realistic and appropriate amount of rehearsal time outside the classroom commensurate with such a level will be scheduled. Students may apply for a 9th grade PE II waiver for participation in this class. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED CHORUS (L) (4188) - AMBASSADORS 1-2",
        "weight": "full",
        "description": "Students taking Advanced Chorus (The Ambassadors) develop musicianship and specific performance skills through ensemble and solo singing. The Ambassadors is a mixed show/concert choir comprised of highly proficient vocal music students, generally limited to juniors and seniors. Mastery of basic vocal technique must be evident. Activities create the development of a quality repertoire of the highest caliber in the diverse styles of choral literature appropriate in difficulty and range for the students. Areas of refinement include a cappella singing, sightreading, and critical listening skills. The Ambassadors provides instruction in creating, performing, conducting, listening to, and analyzing, in addition to focusing on the specific subject matter. Advanced training is offered in stage presence, movement, and poise. Students have the opportunity to experience live performances by professionals during and outside of the school day. A limited amount of time, outside the school day, may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and music goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. The Ambassadors perform on all Choral Division concerts as well as public appearances and demonstrate a serious commitment to quality vocal and visual performance. A realistic and appropriate amount of rehearsal time outside the classroom commensurate with such a level will be scheduled. Students may apply for a 9th grade PE II waiver for participation in this class. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors"
      },
      {
        "credits": "2",
        "name": "APPLIED MUSIC (L) (4200) - MUSICAL ARTS 1-2",
        "weight": "regular",
        "description": "Applied Music (Musical Arts) offers students the opportunity to receive small group or private instruction designed to develop vocal performance skills. Instruction is designed so that students are enabled to connect, examine, imagine, define, try, extend, refine, and integrate music study into other subject areas. A variety of music methods and repertoire, including art songs, musical theater, pop, and jazz, is utilized to refine students\u2019 abilities in listening, analyzing, interpreting, and performing. Instruction is offered in basic vocal technique, musical theater history, microphone usage, and audition skills. A weekend workshop and Broadway show tour in New York City occurs in January and is optional for each student. (Extra fees for the trip are charged separately.) Fee ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "BEGINNING ORCHESTRA (L) (4166) - CONCERT ORCHESTRA 1-2",
        "weight": "regular",
        "description": "Ensemble and solo activities are designed to develop elements of developing musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sightreading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestral literature that is developmentally appropriate. Evaluations of music and music performances are included. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE ORCHESTRA (L) (4172) \u2013 SINFONIA ORCHESTRA 1-2",
        "weight": "regular",
        "description": "Ensemble and solo activities are designed to develop elements of intermediate musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestral literature that is developmentally appropriate. Evaluations of music and music performances are included. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "INTERMEDIATE ORCHESTRA (L) (4172) Festival Orchestra 1-2",
        "weight": "regular",
        "description": "Ensemble and solo activities are designed to develop elements of developing musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students will have the opportunities to experience live performances by professional musicians during and outside of the school day. Time outside the school day may be scheduled for dress rehearsal and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestra literature that is developmentally appropriate. Evaluations of music and music performances are included. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED ORCHESTRA (L) (4174) -- PHILHARMONIC ORCHESTRA 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop advanced elements of musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sightreading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestral literature that is developmentally appropriate. Evaluations of music and music performances are included. The Philharmonic Orchestra will perform on at least four major concerts during the school year. Additionally, the Philharmonic Orchestra will participate in Concert Tours, Festivals, and the ISSMA State and District Contests. Philharmonic Orchestra students are required to attend regularly scheduled evening rehearsals, as well as extra rehearsals, which may be needed to insure musically successful performances. Private lessons are strongly encouraged for successful participation in this ensemble. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED ORCHESTRA (L) (4174) -- SYMPHONY ORCHESTRA 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop advanced elements of musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sightreading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestral literature that is developmentally appropriate. Evaluations of music and music performances are included. The Symphony Orchestra will perform on at least four major concerts during the school year. Additionally, the Symphony Orchestra will participate in Concert Tours, Festivals, and the ISSMA State and District Contests. Symphony Orchestra students are required to attend regularly scheduled evening rehearsals, as well as extra rehearsals, which may be needed to insure musically successful performances. Private lessons are strongly encouraged for successful participation in this ensemble. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED ORCHESTRA (L) (4174) -- SYMPHONY ORCHESTRA WITH WINDS AND PERCUSSION 1-2",
        "weight": "full",
        "description": "Ensemble and solo activities are designed to develop advanced elements of musicianship. Experiences include, but not limited to skills, listening skills, analyzing music, and studying historically significant styles of literature. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sightreading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Students must perform, with expression and technical accuracy, a large and varied repertoire of orchestral literature that is developmentally appropriate. Evaluations of music and music performances are included. The Symphony Orchestra will perform on at least four major concerts during the school year. Additionally, the Symphony Orchestra will participate in Concert Tours, Festivals, and the ISSMA State and District Contests. Symphony Orchestra students are required to attend regularly scheduled evening rehearsals, as well as extra rehearsals, which may be needed to insure musically successful performances. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED ORCHESTRA (L) (4174) -- CAMERATA 1-2",
        "weight": "full",
        "description": "This is a small string ensemble of highly proficient players. Participation will generally be limited to juniors and seniors. Sophomores may be selected in exceptional cases at the discretion of the director. Students taking this course are provided with a balanced comprehensive study of music through both string and full orchestra experiences, which is designed to enable students to connect, examine, imagine, define, try, extend, refine, and integrate music study into other subject areas. Ensemble and solo activities are designed to develop advanced elements of musicianship. Experiences include, but are not limited to, improvising, conducting, playing by ear, and sight-reading. Students will have opportunities to experience live performances by professional musicians during and outside of the school day. Time outside of the school day may be scheduled for dress rehearsals and performances. A limited number of public performances may serve as a culmination of daily rehearsal and musical goals. Students must participate in performance opportunities, outside of the school day, that support and extend learning in the classroom. Camerata students will perform in the Symphony Orchestra. The Symphony Orchestra will perform on at least four major concerts during the school year. Additionally, the Symphony Orchestra will participate in Concert Tours, Festivals, and the ISSMA State and District Contests. Symphony Orchestra students are required to attend regularly scheduled evening rehearsals, as well as extra rehearsals, which may be needed to insure musically successful performances. Private lessons are strongly encouraged for successful participation in this ensemble. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors"
      },
      {
        "credits": "4",
        "name": "MUSIC SL & HL INTERNATIONAL BACCALAUREATE (4214) (SL), (4212) (HL)",
        "weight": "regular",
        "description": "Music SL and HL are two-year courses taught in conjunction with our top level performing ensembles. Students will spend majority of their class time in an ensemble or working on the performance requirements of the course. The other portion of the time will be in a classroom setting focusing on musical perception and analysis. Students enrolling in the IB Music courses are expected to have a working knowledge of basic music theory. Throughout the course, students will be analyzing, discussing, and writing about the elements of music as they relate to the genres and styles covered. The first year of the course focuses primarily on the study of the history of Western music from antiquity through the early twentieth century. The second year of the course focuses on movements in twentieth century classical, jazz, and popular music and on the study of non-Western music including, but not limited to, music of Africa, Central Asia, South-east Asia, and South America. The ensemble and performance portion of the course seek to reinforce the concepts of the perception and analysis portion of the course. The HL course seeks to enable students to understand the history of music as an art form, beginning as a product of Western civilization and expanding to global practice, understand the role of historical, social, and cultural factors in shaping music, and understand and enjoy music as a manifestation of human intelligence and creativity. ",
        "id": "0",
        "semesters": "4",
        "classification": "International Baccalaureate SL; HL"
      },
      {
        "credits": "2",
        "name": "THEATRE ARTS 1-2 (L) (4242)",
        "weight": "regular",
        "description": "Students enrolled in this full year course will develop acting skills such as improvisation, improving the voice, stage combat and acting for the camera. They will create scripts, conceive scenic designs, and analyze plays. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Additionally, students explore career opportunities in the theatre, attend and critique theatrical productions, and recognize the responsibilities and the importance of individual theatre patrons in their community. Theatre Arts students are required to audition for at least one production during this course to gain experience. Students will be required to see all Carmel High School dramatic productions performed during this course and write play review papers accordingly. Students will be encouraged to participate in the extra-curricular theatre program both as performers and stage technicians. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED THEATRE ARTS (L) (4240) ADVANCED THEATRE MANAGEMENT 1-2",
        "weight": "regular",
        "description": "Students enrolled in Advanced Theatre Arts will further develop acting skills through monologues, scenes, improvisation and script analysis. They will create scenic designs for existing plays and will build characters through observation, improvisation and script analysis. They will also have the opportunity to participate in the Young Authors Project, in which students will adapt elementary school stories and produce them for the elementary audience. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Additionally, students explore careers in theater arts and begin to develop a portfolio of their work. Students also attend and critique theatre productions and identify ways to support the theatre in their community. Advanced Theatre Arts students are required to prepare and audition for at least two Carmel High School productions to gain experience. In addition, they are required to gain backstage experience on a crew; as well as attend all Carmel High School productions performed during the course and write play reviews accordingly. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED ACTING 1-2 (L) (4250)",
        "weight": "regular",
        "description": "Students enrolled in Advanced Acting will research, create, and perform characters through script analysis, observation, collaboration and rehearsal. Activities include the production of original scenes for the Red Ribbon Players and exploring the skills of a director. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Advanced Acting students are required to prepare and audition for at least two Carmel High School productions. In addition, they are expected to learn leadership skills and are encouraged to take an active role in extracurricular productions both as a performer and technician. They are required to attend all Carmel High School productions performed during the course and write play reviews accordingly. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "THEATRE PRODUCTION 1-2 (L) (4248)",
        "weight": "regular",
        "description": "Students enrolled in Theatre Production will take on responsibilities associated with rehearsing and presenting a fully- mounted theatre production. They will read and analyze plays to prepare for production; conceive and realize a design for a production, including set, lighting, sound and costumes; rehearse and perform roles in a production; and direct or serve as assistant director for a production. Various acting, directing and design approaches will be explored and utilized. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Theatre Production students are required to prepare and audition for all Carmel High School productions. In addition, they are expected to develop their leadership skills and are required to take a leadership role in extracurricular productions both as a performer and a crew head. They are required to attend all Carmel High School productions performed during the course and write play reviews accordingly. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "TECHNICAL THEATRE 1-2 (L) (4244)",
        "weight": "regular",
        "description": "Students enrolled in Technical Theatre will actively engage in the process of designing, building, managing, and implementing the technical aspects of a production. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Additionally, students explore career opportunities in the theatre, attend and critique theatrical productions and recognize the responsibilities and the importance of individual theatre patrons in their community. Students will be required to work at least 25 hours after school per semester. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED TECHNICAL THEATRE 1-2 (L) (4252)",
        "weight": "regular",
        "description": "Students enrolled in Advanced Technical Theatre will actively lead and supervise in the process of designing, building, managing, programming, drafting and implementing the technical aspects of a production. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Additionally, students investigate technical theater careers and then develop a plan for potential employment or further education through audition, interview or presentation of a portfolio. Students also attend and critique theatrical productions and volunteer to support theatre in their community. Students will be required to work at least 35 hours after school per semester. Advanced Technical Theatre students begin to lead projects which may mandate additional time management. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED THEATRE ARTS: DESIGN 1-2 (L) (4240)",
        "weight": "regular",
        "description": "Advanced Theatre Design 1-2 Students enrolled in Technical Theatre will actively lead and supervise in the process of designing, building, managing, programming, drafting and implementing the technical aspects of a production. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Additionally, students investigate technical theater careers and then develop a plan for potential employment or further education through audition, interview or presentation of a portfolio. Students also attend and critique theatrical productions and volunteer to support theatre in their community. Students will be required to work at least 50 hours after school per semester. Advanced Theatre Management students are expected to manage projects and this will mandate additional time management. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "ADVANCED THEATRE ARTS (L) (4240) Advanced Theatre Design 1-2",
        "weight": "regular",
        "description": "Management 2 Students enrolled in Technical Theatre will actively lead and supervise in the process of designing, building, managing, programming, drafting and implementing the technical aspects of a production. These activities should incorporate elements of theatre history, culture, analysis, response, creative process and integrated studies. Students will be required to work after school in leadership positions. Advanced Theatre Design students must serve as designers, crew heads, stage managers, student technical directors. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "4",
        "name": "THEATER ARTS SL & HL, INTERNATIONAL BACCALAUREATE (4264) (SL), (4262) (HL)",
        "weight": "regular",
        "description": "Theater Arts SL and HL involves the development of performance skills through working on devised and scripted scenes, working collaboratively in an ensemble, exploring new performance techniques, acting techniques and characterization. Students will also study drama from the point of view of the director and will investigate methods of turning a script into performance. Students will reflect upon personal and universal concerns revealed in dramatic literature from other cultures and develop a global perspective. Specifically, students will focus on ways that theatre and those who work in all aspects of theatre reflect and influence culture. Students will apply their practical and theoretical studies to at least two productions. Students electing to pursue the Higher Level Theatre Arts course will also need to complete the INDIVIDUAL PROJECT. This project requires the student to complete a practical study based on ",
        "id": "0",
        "semesters": "4",
        "classification": "International Baccalaureate (SL) (HL)"
      }
    ]},
    { "name": "Physical Education", "chair": "Kim Tenbrink", "courses": "34", "id": "9", "allcourses": [
      {
        "credits": "1",
        "name": "ADAPTIVE PHYSICAL EDUCATION 1-2 (3542) 3560A APPLIED ELECTIVE PHYSICAL EDUCATION (3544)",
        "weight": "regular",
        "description": "Counts as the Health & Wellness Requirement for the Certificate of Completion Applied Elective Physical Education, a course based on selected standards from Indiana\u2019s Academic Standards for Physical Education, identifies what a student should know and be able to do as a result of a quality physical education program. The goal of a physically educated student is to maintain appropriate levels of cardiorespiratory endurance,muscular strength and endurance, flexibility, and body composition necessary for a healthy and productive life. Elective Physical Education promotes lifetime sport and recreational activities and provides an opportunity for an in-depth study in one or more specific areas. This course includes the study of physical development concepts and principles of sport and exercise as well as opportunities to develop or refine skills and attitudes that promote lifelong fitness. With staff support,students have the opportunity to design and develop an appropriate personal fitness program that enables them to achieve a desired level of fitness and includes self monitoring. Ongoing assessment may include individual progress and/or performance-based skill evaluation. This course is designed to provide educationally and/or physically challenged students with a variety of physical activities. Peer tutors help provide opportunities for individualized instruction. ",
        "id": "0",
        "semesters": "1",
        "classification": "Special Services"
      },
      {
        "credits": "1",
        "name": "HEALTH AND WELLNESS EDUCATION (3506)",
        "weight": "regular",
        "description": "Students are provided opportunities to explore the effect of health behaviors on an individual\u2019s quality of life. This course assists students in understanding health is a lifetime commitment by analyzing individual risk factors and wellness decisions that promote health and prevent disease. Students are also encouraged to assume individual responsibility for becoming competent health consumers. Class discussions, group activities, individual assignments and guest speakers are included to develop sound health principles. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "PHYSICAL EDUCATION I (3542)",
        "weight": "regular",
        "description": "This course emphasizes health- related fitness and helps develop skills and habits necessary for a lifetime of physical activity. Skill development, application of rules and strategies in a variety of activities are included (activities are different than P.E. II). A Carmel Clay Schools P.E. uniform and a heart rate strap are required. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "PHYSICAL EDUCATION II (3544)",
        "weight": "regular",
        "description": "This course emphasizes health- related fitness and helps develop skills and habits necessary for a lifetime of physical activity. Skill development, application of rules and strategies in a variety of activities are included (activities are different than P.E. I). A Carmel Clay Schools P.E. uniform and a heart rate strap are required. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "PHYSICAL EDUCATION II (ALTERNATIVE) (3544)",
        "weight": "regular",
        "description": "Students may earn course credit by participating in the following alternative activities accents, coquettes, charisma, cheerleading, or a Carmel High School varsity sport. Applications are available in the Activities office or from the team coach/activity sponsor. Students in a fall sport/activity should sign up for the fall course. Students in a winter sport/activity should sign up for the winter/spring course. Student must participate in at least 90% of group activities (injury free), or 66% due to major injury (CHS Athletic Trainer or physician signature required). Activities must be completed before the start of the junior year unless otherwise approved by the P.E department chair and counselor. ELECTIVE HEALTH AND PHYSICAL EDUCATION OPTIONS (For Physical Education electives, students must have taken P.E. I and P.E. II, or taken P.E. I and be currently enrolled in the P.E. II waiver class). ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "LIFETIME FITNESS (3560)",
        "weight": "regular",
        "description": "enrolled in the P.E. II alternative class Open to 9,10, 11, 12 This course is designed to foster proficiencies, competition, and fitness in team and individual activities including softball, tennis, volleyball, basketball, flag football, pickleball, badminton, golf, archery, and ultimate Frisbee. Students will develop strategies and skills for each activity with an emphasis on lifetime fitness. The uniform is a CHS P.E. elective t-shirt, dark athletic shorts and tie tennis shoes. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "PHYSICAL CONDITIONING (3560)",
        "weight": "regular",
        "description": "enrolled in the P.E. II alternative class This course allows for in-depth work in physical development through various forms of fitness. Strength training and cardiovascular fitness will be emphasized. Some classroom work related to these topics will be included. The uniform is a CHS P.E. elective t-shirt, dark athletic shorts, tie tennis shoes, and a heart rate strap. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "ADVANCED PHYSICAL CONDITIONING (3560)",
        "weight": "regular",
        "description": "This course allows the student to achieve maximum performance in physical activities and athletics. Designed primarily for the physically active student, this course emphasizes weight training, flexibility, agility, quickness, speed improvement, and cardiovascular endurance. Specific lifts are taught that allow each athlete to enhance athletic performance. Some classroom work related to these topics will be required. Students must be on a current CHS athletic roster in an IHSAA sport, or have the P.E. Department Chair\u2019s written permission to enroll. The uniform is a CHS P.E. elective t- shirt, dark athletic shorts and tie tennis shoes. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "FUNCTIONAL FITNESS (3560)",
        "weight": "regular",
        "description": "This course includes the most current fitness activities. Students will develop a personal fitness profile, set personal goals, and learn the importance of including exercise and physical activity in their lives. Fitness activities include aerobics, flexibility training, Pilates,Yoga, exercise walking, and toning. The uniform is a CHS P.E. elective t-shirt, dark athletic shorts and tie tennis shoes. A heart rate strap is required. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "AQUATIC FITNESS & SPORTS (3560)",
        "weight": "regular",
        "description": "This course introduces students to different forms of aquatic fitness and sports. Students will be exposed to a variety of water activities including water polo, water volleyball, casting, snorkeling, rowing, canoeing, kayaking and water fitness. Students will be able to update their American Red Cross Lifeguard Training and CPR for the Professional Rescuer certifications. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "SPORTS MEDICINE 1 (3500)",
        "weight": "regular",
        "description": "Interpersonal Relations This course is designed for the student who has an interest in medicine and athletics. The course is a combination of lecture and laboratory experiences, with emphasis in the areas of prevention, first-aid, AED and Community CPR certifications, taping techniques, physical conditioning, rehabilitation of injuries, and sports nutrition. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "SPORTS MEDICINE II (3500)",
        "weight": "regular",
        "description": "Education/IPR, Sports Medicine I Open to 10, 11, and 12 Sports Medicine II is designed for students interested in the student athletic program and/or the sports medicine field, and provides a more in-depth study and application of the components of sports medicine including but not limited to rehabilitative techniques; therapeutic modalities; prevention, recognition, and care of injuries to the upper and lower extremities; drugs in sports; and modern issues in sports medicine. Individualized and independent assignments will be included. Fee ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "CARDIOVASCULAR DEVELOPMENT (3560)",
        "weight": "regular",
        "description": "enrolled in the P.E. II alternative class) Students in this course will learn the latest trends, methods and techniques of cardiovascular development. This includes examining the five components of fitness, learning proper stretching techniques, improving cardiovascular fitness through running and other activities, and analyzing and applying fitness principles. Students will be setting personal goals and evaluating their fitness ability. The uniform is a light colored-shirt, dark athletic shorts, and tie tennis shoes. A heart rate strap is required. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "",
        "name": "CURRENT HEALTH ISSUES (3508)",
        "weight": "regular",
        "description": "Credit 1 RW This course focuses on emerging trends in health including, but not limited to (1) medical technology (2) local, state, and national health policies (3) health care issues (4) health careers and (5) chronic and communicable diseases. Student selection of topics and individual learning techniques are emphasized. ",
        "id": "0",
        "semesters": "",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "LIFEGUARD CERTIFICATION (3560)",
        "weight": "regular",
        "description": "must be 15 or turn 15 during the semester) Students in this course will have the opportunity to become certified as an American Red Cross Lifeguard.This includes CPR for the Professional Rescuer, Basic First Aid, and learning to use an Automated External Defibrillator. Students will be charged fees for an American Red Cross certification card. Students must be 15 years of age on or before the end of the semester and successfully complete a swimming assessment consisting of front crawl, breaststroke or a combination of both. (2) Tread water for 2 minutes using only the legs. (3) Complete a timed event within 1 minute, 40 seconds. Starting in the water, swim 20 yards surface dive, feet- first or head-first, to a depth of 7-10 feet to retrieve a 10 pound object return to the surface and swim 20 yards on the back to return to the starting point with both hands holding the object and keeping the face at or near the surface. You must exit the water without using a ladder or steps. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "OUTDOOR EXPLORATION (3560)",
        "weight": "regular",
        "description": "enrolled in the P.E. II alternative class) This course offers students the opportunity to learn technical skills, implement safe practices, and build confidence as they try something new or hone an existing passion. Course activities (most will be on=-site at CHS) include orienteering, team challenges, kayaking, paddle boarding, fishing, physical pursuit games, map and compass reading, first aid and gear maintenance. Students will become skilled and confident in their ability to be lifelong outdoor enthusiasts while fostering social interaction and being aware of the important of maintaining physical fitness. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      }
    ] },
    {"name":"Science","chair":"Jennfer Drudge", "courses":"34", "id": "10", "allcourses":[
      {
        "credits": 2,
        "name": "BIOLOGY I (3024)",
        "weight": "regular",
        "description": "Biology I is a course based on regular laboratory investigations that include a study of the characteristics of living organisms as outlined in the Indiana Academic Standards. Students enrolled in Biology I explore the functions and processes of cells, including cellular chemistry, matter and energy cycles, cellular reproduction, and the molecular basis of heredity. In addition, the topics of genetics, biological evolution, and the ecology are explored. Throughout the course, students will gain an understanding of the nature of science including the history and development of biological knowledge. This is a required Core 40 and AHD course. The ECA will be administered in the spring. Fee $7.00/yr ",
        "id": 0,
        "semesters": 2,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "BIOLOGY I, Honors (3024)",
        "weight": "partial",
        "description": "Honors Biology I provides an in depth study of life at different levels of organization as outlined in the Indiana Academic Standards. All content is covered with an emphasis on the nature of scientific inquiry. Topics include cellular chemistry, cell structure and function, matter and energy cycles, DNA and gene expression, cellular reproduction, genetics, biological evolution, and ecology. Peer collaboration, laboratory investigations, communication of scientific data, and student projects are major components of this course. This is a required Core 40 and AHD course. The ISTEP will be administered in the spring. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Honors Recommendation"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, ZOOLOGY (3092)",
        "weight": "regular",
        "description": "Course Length This Advanced Science Core 40 course will present an in-depth study of evolutionary relationships used in the classification of organisms into their representative phyla. Students will study comparative embryology, taxonomy, anatomy and physiology of the major phyla of invertebrates and vertebrates. Students will do laboratory work in dissection and histology. The purpose of a study in invertebrate and vertebrate zoology is to expose the students to an evolutionary, embryological, systematic, and physical comparison of phyla of the animal kingdom. This Advanced Science, Special Topics course qualifies for Core 40 and AHD credit. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, BOTANY (3092)",
        "weight": "regular",
        "description": "Botany is an upper level science course that will study plant varieties, functions and environmental roles. The course will include laboratory and field work. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "ADVANCED SCIENCE, HUMAN ANATOMY AND PHYSIOLOGY BIOLOGY (5276)",
        "weight": "full",
        "description": "better) Course Length Human Anatomy and Physiology is the study of the structure and function of the body and how those parts relate to one another. The course begins at the molecular/cellular level and proceeds through the study of tissues and organ systems. Discussions on disease and injuries are an integral part of the course. Dissections of animal organs and a fetal pig will also be performed. This is a college level anatomy and physiology class. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "IB"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, HUMAN GENETICS (3092)",
        "weight": "regular",
        "description": "This one-semester course in Human Genetics will include a review of basic genetics, embryology, human traits and variations, causes and prevention of birth defects, karyotyping, pedigrees, blood groups, cloning, DNA fingerprinting, telomeres and aging, the Human Genome Project, chromosome syndromes and bioethics. This is an Advanced Science Core 40 and AHD course. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "BIOLOGY, ADVANCED PLACEMENT (3020)",
        "weight": "full",
        "description": "AP Biology is a challenging course designed for students who may be interested in studying a life sciences major in college. Topics covered include evolution, ecology, biochemistry, cells, microbiology, animals, plants, and genetics. The AP Biology curriculum centers on four \u201cBig Ideas\u201d evolution drives the diversity and unity of life. 2) Biological systems utilize energy and molecular building blocks to grow, to reproduce and to maintain homeostasis. 3) Living systems store, retrieve, transmit and respond to information essential to life processes. 4) Biological systems interact, and these systems and their interactions possess complex properties. This course qualifies for Core 40 and AHD credit. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "AP"
      },
      {
        "credits": 2,
        "name": "PLTW, PRINCIPLES OF BIOMEDICAL SCIENCE (5218)",
        "weight": "full",
        "description": "In the introductory course of the PLTW Biomedical Science program, students explore concepts of biology and medicine to determine factors that led to the death of a fictional person. While investigating the case, students examine autopsy reports, investigate medical history, and explore medical treatments that might have prolonged the person\u2019s life. The activities and projects introduce students to human physiology, basic biology, medicine, and research processes while allowing them to design their own experiments to solve problems. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "PLTW"
      },
      {
        "credits": 2,
        "name": "PLTW, HUMAN BODY SYSTEMS (5216)",
        "weight": "full",
        "description": "Students examine the interactions of human body systems as they explore identity, power, movement, protection, and homeostasis. Exploring science in action, students build organs and tissues on a skeletal Maniken®; use data acquisition software to monitor body functions such as muscle movement, reflex and voluntary action, and respiration; and take on the roles of biomedical professionals to solve real-world medical cases. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "PLTW"
      },
      {
        "credits": 2,
        "name": "PLTW, MEDICAL INTERVENTIONS (5217)",
        "weight": "full",
        "description": "Body Systems Students follow the life of a fictitious family as they investigate how to prevent, diagnose, and treat disease. Students explore how to detect and fight infection; screen and evaluate the code in human DNA; evaluate cancer treatment options; and prevail when the organs of the body begin to fail. Through realworld cases, students are exposed to a range of interventions related to immunology, surgery, genetics, pharmacology, medical devices, and diagnostics. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "PLTW"
      },
      {
        "credits": 2,
        "name": "PLTW, BIOMEDICAL INNOVATIONS (5219)",
        "weight": "regular",
        "description": "In this capstone course, students apply their knowledge and skills to answer questions and solve problems related to the biomedical sciences. Students design innovative solutions for the health challenges of the 21st century as they work through progressively challenging open-ended problems, addressing topics such as clinical medicine, physiology, biomedical engineering, and public health. Students will also spend the final quarter working on an independent project. In addition to the regular coursework, students will be provided opportunities to shadow professionals with careers in biomedical science and health care. Because students will be expected to shadow a minimum of 20 hours, students should be motivated to explore biomedical related careers. Applicants will be responsible for arranging his/her own transportation to and from the shadowing locations. The school reserves the right to reassign participants to a study hall if they are unwilling or unable to satisfactorily represent Carmel High School in a professional setting. For students to be successful in this course, they need strong time management skills, an enthusiasm for learning, the ability to take initiative and be self directed, a positive attitude, and strong work ethic. Shadowing could be done on designated school days if student\u2019s senior schedule allows for it. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "PLTW"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, MATERIALS CHEMISTRY",
        "weight": "regular",
        "description": "Materials chemistry course is a 1 semester course that will focus on solids. Students will do numerous labs for various types of solids. This class is intended for students who enjoyed Chemistry I but are not inclined to take AP Chemistry. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "INTEGRATED CHEMISTRY PHYSICS (3108)",
        "weight": "regular",
        "description": "have earned credit in Chemistry or Physics Integrated Chemistry-Physics is an introductory, laboratory-based course in which students explore fundamental chemistry and physics principles. Students will examine the structure and properties of matter, chemical reactions, motion, forces, and the interactions between energy and matter. Students in need of a more conceptual introduction to either Chemistry or Physics should consider this course. ICP is not a substitute for full-year chemistry or physics, but it does satisfy Indiana Core 40 diploma requirements in the physical sciences category. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "CHEMISTRY I (3064)",
        "weight": "regular",
        "description": "Course Length In this course, students will study aspects of chemistry such as physical and chemical changes, matter, the arrangement of the periodic table, the mole, chemical reactions, gas laws, thermochemistry and other various topics. This course requires good problem solving skills and is a laboratory course. Students will need a scientific calculator. This is a Core 40 and AHD Physical Science course. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "CHEMISTRY I, HONORS (3064)",
        "weight": "partial",
        "description": "recommendation Honors Chemistry students will be challenged to a depth of understanding and analytical problem solving skills in the following topics structure, periodic law, chemical bonding and nomenclature, reaction types and balancing, stoichiometry, gas laws, solutions and colligative properties, acids and bases, energy and kinetics, equilibrium, redox and electrochemistry, and the basics of organic chemistry. This is a Core 40 and AHD Physical Science course. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Honors"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, INTRODUCTION TO ORGANIC CHEMISTRY/BIO CHEMISTRY (3092)",
        "weight": "regular",
        "description": "Organic chemistry studies carbon compounds and their reactions to produce new and unique molecules. The course focuses on the application of chemical concepts to understanding how and why reactions occur, and ultimately how reactions can be used to create a desired product. Laboratory work and independent research are used to build essential skills and learn important applications such as aspirin synthesis and alcohol fermentation. This course qualifies for Core 40 and AHD credit under the Advanced Science, Special Topics category. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "CHEMISTRY, AP (3060)",
        "weight": "full",
        "description": "Honors Chemistry with a B or better or Regular Chemistry with an A or better Chemistry, Advanced Placement (L) is a course that follows the College Board\u2019s Advanced Placement course outline. The course is intended for the students who are planning on pursuing a career in a field of science. The course emphasizes problem solving. Approximately 30-50% of class time will be devoted to laboratory activities. The course meets Indiana Core 40 and AHD requirements in the area of Physical Science. Students enrolled in the course prepare for the College Board\u2019s Chemistry Advanced Placement Examination. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "AP"
      },
      {
        "credits": 2,
        "name": "PHYSICS I (3084)",
        "weight": "regular",
        "description": "Physics I is a laboratory-based course in which students will study the laws which dictate our universe. Topics include mechanics (kinematics, forces, energy and momentum), electricity, magnetism, waves (sound, light and optics), temperature and some aspects of modern physics. Regular laboratory experiments will be performed in small groups promoting collaboration among peers. Physics I will emphasize problem solving using mathematics. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "PHYSICS-I, AP (3080)",
        "weight": "full",
        "description": "only for students with Bs or better. AP Physics 1 follows the College Board guidelines for Advanced Placement Physics 1. This course is intended for the students who plan to major in science in college or for those who plan to take AP Physics 2 or AP Physics C the following year. It is a laboratory-based course in which students will study the laws which dictate our universe. Topics include mechanics (kinematics, forces, energy and momentum), electricity, magnetism, waves (sound, light and optics), thermodynamics, fluid mechanics and modern physics. AP Physics 1 will emphasize problem solving using higher levels of mathematics than required in regular Physics I and the pace of AP Physics 1 is faster than Physics I since more material is covered during the year. Trigonometry will be taught to the extent it is needed. This course prepares students for the Physics 1 Advanced Placement Exam. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "AP"
      },
      {
        "credits": 2,
        "name": "PHYSICS-II, AP (3080)",
        "weight": "full",
        "description": "Algebra II 1-2; Physics 1, AP Physics 1, or IB Physics SL AP Physics II follows the College Board guidelines for Advanced Placement Physics II. AP Physics II is an algebrabased, introductory college-level physics course that explores topics such as fluid statics and dynamics; thermodynamics with kinetic theory; PV diagrams and probability; electrostatics; electrical circuits with capacitors; magnetic fields; electromagnetism; physical and geometric optics; and quantum, atomic, and nuclear physics. Through inquiry-based learning, students will develop scientific critical thinking and reasoning skills. This course prepares students for the Physics 2 Advanced Placement Exam. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "AP"
      },
      {
        "credits": 2,
        "name": "PHYSICS C, ADVANCED PLACEMENT (3088)",
        "weight": "full",
        "description": "or BC (concurrent or already taken) or Calculus Survey with physics teacher recommendation Course Length AP Physics C follows the College Board guidelines for Advanced Placement Physics C. This course is designed for students who plan to major in science or engineering in college. The first semester of this course covers advanced topics in Mechanics. A basic working knowledge of Calculus will be taught and applied to Physics problems and concepts. The second semester of this course covers advanced topics in Electricity and Magnetism. Students enrolled in this course prepare for the College Board\u2019s Physics C Advanced Placement Examination. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Advanced Placement"
      },
      {
        "credits": 2,
        "name": "EARTH AND SPACE SCIENCE I (3044)",
        "weight": "regular",
        "description": "Meteorology or Physical Geology) Earth Science is a laboratory science course which explores the origins and connections between the physical, chemical, and biological processes of the Earth system. This course examines Earth\u2019s materials, and changes of the surface and interior. Included is a look at the forces which cause these changes, interpreted within the context of plate tectonics. Earth Science also examines the interaction between Earth\u2019s weather and climate. Finally, a major division of Earth Science is astronomy, the study of our solar system, stars and the universe. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Regular"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, ASTRONOMY (3092)",
        "weight": "regular",
        "description": "Core 40 science This course is available for dual credit in partnership with the University of Indianapolis. If students are interested and meet the requirements, there will be an approximate cost of $500. Astronomy is the study of the physical nature of objects in the universe and methods used by scientists to understand them. Topics covered in this course are nebulae, galaxies and cosmology. Current and future NASA projects and research are a key aspect of the course. Students use the Carmel Planetarium as a classroom. This course is recognized for Core 40 and AHD credit. Students wishing to enroll in Astronomy must successfully complete a full year of Core 40/AHD science prerequisite. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular, Dual Credit Available"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, METEOROLOGY (3092)",
        "weight": "regular",
        "description": "This course will focus on the basic principles of weather. Topics include developing an understanding of physical processes responsible for daily weather changes, through laboratory and field studies. We will begins with an overview of the components making up the atmospheric environment. Weather fronts, air masses, and severe weather will be examined. Various types of technology will be used in monitoring weather patterns. Guest speakers may be used to discuss how professional services develop forecasts on a daily basis. Students enrolled in this course will research and prepare class presentations. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 1,
        "name": "ADVANCED SCIENCE, PHYSICAL GEOLOGY (3092)",
        "weight": "regular",
        "description": "This course is an overview of concepts studied in physical geology. Students will study the structure and dynamics of Planet Earth and their impact on human beings. Plate tectonics and its relationship to landforms and catastrophic events, weathering and erosion, and earth resources are some topics that will be studied. This course is an Advanced Science, Special Topics course qualifying for Core 40 and AHD credit. Fee ",
        "id": 0,
        "semesters": 1,
        "classification": "Regular"
      },
      {
        "credits": 2,
        "name": "ENVIRONMENTAL SCIENCE, AP (3012)",
        "weight": "full",
        "description": "Honors Biology or Honors Chemistry AP Environmental Science integrates concepts from Biology, Earth Science, Chemistry, and Social Sciences in the study of modern environmental issues. This college-level course is designed to provide students with the scientific principles, concepts and methodologies required to understand the interrelationships of the natural world, to identify and analyze environmental problems, both natural and humanmade, to evaluate the relative risks associated with these problems, and to examine alternative solutions for resolving or preventing them. Through lab and field investigations, students will explore ecosystems, populations, renewable and non-renewable resources, land and water use, pollution, and global change. Curriculum is aligned to that recommended by the College Board and is designed to prepare students for the Advanced Placement Environmental Science Examination. Fee ",
        "id": 0,
        "semesters": 2,
        "classification": "Advanced Placement"
      },
      {
        "credits": 2,
        "name": "INDEPENDENT RESEARCH: SCIENCE RESEARCH, INDEPENDENT STUDY (3008)",
        "weight": "regular",
        "description": "approval In Science Research, Independent Study, students will build on the knowledge and skills gained from previous PLTW courses. Students will focus on the most pressing health challenges of the 21st century. Students will address a variety of topics in the health science field and will have the opportunity to work on an independent or small group project. A student wanting to take Independent Study that has not had PLTW Medical Interventions will need approval from the department chair. ",
        "id": 0,
        "semesters": 2,
        "classification": "Science Research"
      },
      {
        "credits": 4,
        "name": "BIOLOGY, HIGH LEVEL, IB (3032) 1-2;3-4",
        "weight": "full",
        "description": "Chemistry I, Honors IB Biology is a \u201cHigh Level\u201d two-year course which all IB Diploma candidates need to take here at Carmel High School. Alternately, students who are not IB Diploma candidates may earn an \u201cIB certificate\u201d for completing this course. This class also fulfills the requirements for Human Anatomy & Physiology and the AP Biology curriculum. Students will be prepared to sit for the IB Biology HL exam and AP exam. Topics covered include human anatomy & physiology, evolution, ecology, biochemistry, cells, microbiology, animals, plants, and genetics. Lab work is very student- driven and each student will have many opportunities to design and carry out his or her own labs. Fee ",
        "id": 0,
        "semesters": 4,
        "classification": "IB"
      },
      {
        "credits": 4,
        "name": "PHYSICS, STANDARD LEVEL IB (3098)",
        "weight": "full",
        "description": "Chemistry I or Chemistry I Honors, Geometry and Algebra II-2. IB Physics (SL) is a course focused on the study of Newtonian mechanics, forces, thermal physics, waves, electricity, magnetism, and nuclear physics. Students will have opportunities to learn the historical development of physics through models, laws, theories, and their applications. The course emphasizes problem solving and student-driven lab inquiry. This course intends to develop student understanding, use, and evaluation of scientific facts, concepts, methods, and techniques. IB Physics SL is a beneficial class to students pursuing a science-related field in college and/or an IB diploma. This course is a 2 year commitment. ",
        "id": 0,
        "semesters": 4,
        "classification": "IB"
      },
      {
        "credits": 4,
        "name": "PHYSICS, HIGH LEVEL IB (3096)",
        "weight": "full",
        "description": "Chemistry I Honors, Geometry and Algebra II-2. IB HL Physics is a two-year course. IB Physics HL is a course focused on the study of Newtonian mechanics, thermal physics, waves, electricity, magnetism, and nuclear physics. Students will have opportunities to learn the historical development of physics through models, laws, theories, and their applications. The course emphasizes problem solving and student-driven lab inquiry. The level of the course is comparable to a first-year course in physics at a university, but with an emphasis on conceptual understanding. The HL Physics course is designed to give students a good preparation for the demands of university calculus-based courses in physics. IB Physics HL is ideal for students with a strong interest in fields such as engineering, physics, mathematics, or architecture. Fee ",
        "id": 0,
        "semesters": 4,
        "classification": "IB"
      }
    ]},
    {"name":"Social Studies","chair":"Justin Quick", "courses":"34", "id": "11", "allcourses":[
      {
        "credits": "2",
        "name": "WORLD HISTORY AND CIVILIZATION (1548)",
        "weight": "regular",
        "description": "This first-semester curriculum is designed to provide students with a general survey of world history with an emphasis on teaching critical reading and writing skills. This twosemester course emphasizes key events and developments in the past that influenced peoples and places in subsequent eras. Students are expected to practice skills and processes of historical thinking and historical research. They examine the key concepts of continuity and change, universality and particularity, and unity and diversity among various peoples and cultures from the past to the present. This course focuses on beginning to build skills for college bound students. This course provides sufficient background for students who plan to take a more challenging social studies courses (AP, IB, or ACP) in the future and will satisfy the freshman social studies requirement. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "HONORS WORLD HISTORY AND CIVILIZATION/HONORS ENGLISH 9 BLOCK (1548/1002)",
        "weight": "partial",
        "description": "Recommended taken honors courses in the past and would like to challenge themselves. This course offers in interdisciplinary study of the history, literature, and culture of societies throughout the history of the world, while exploring the essential questions of the human condition. The course emphasizes reading, writing, and critical thinking through the textual analysis of literature and primary historical documents, modern research techniques, and oral presentation. Student will receive .5 weighted credit for Honors English, and .5 weighted credit for World History. It is intended to provide extra support for students who would like to challenge themselves and enroll in an honors-level course, although they have not been a part of the honors program in the past. This course requires a two-period block of time and is team- taught and will satisfy the freshman English and social studies requirement. ",
        "id": "0",
        "semesters": "2",
        "classification": "Honors English and Regular World History"
      },
      {
        "credits": "2",
        "name": "AP WORLD HISTORY MODERN (1612)",
        "weight": "full",
        "description": "This two-semester class recommended for college bound students and is specifically designed for students who are planning to take the AP examination in World History and is the only AP social studies offering open to freshmen. AP World History will emphasize the intellectual, cultural, political, economic, social, and diplomatic developments in world history and will serve as a springboard for students electing to take AP European history as a sophomore or beyond. In order to do well in this course, the student should be highly motivated as a social studies student and be willing to challenge themselves through a rigorous national college level curriculum. While it is not required that students take the AP World History exam at the approximate cost of $90.00, it is expected \u2014 the focus of the class is to adequately prepare students toward that end. A summer reading will be assigned. Although it is open to all students, counselors will identify students most likely to be successful in this course; it will satisfy the freshman social studies requirement. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement"
      },
      {
        "credits": "2",
        "name": "AP EUROPEAN HISTORY (1556)",
        "weight": "full",
        "description": "Recommended 3.0 GPA or higher, World History or AP World History European History AP gives students a thorough understanding of the major themes in modern European history (1450-present) in preparation for the national AP exam in May. The course\u2019s primary emphasis on the intellectual, cultural, political, diplomatic, social, and economic developments in modern European history serve to give students a comprehensive understanding of this period in European history .In order to do well in this course, the student should be highly motivated as a social studies student and be willing to challenge himself through a rigorous national college level curriculum. While it is not required that students take the AP European History exam at the approximate cost of $90.00, it is expected that students will be prepared. ",
        "id": "0",
        "semesters": "2",
        "classification": "Advanced Placement"
      },
      {
        "credits": "",
        "name": "AP HUMAN GEOGRAPHY (1572)",
        "weight": "regular",
        "description": "Recommended Credit 2 FW AP Human Geography is a two- semester introductory course of college-level geography designed to challenge students in furthering critical thinking about the world in which we live. Students are introduced to fundamental concepts of geography including the systematic study of patterns and processes that have shaped human understanding, use and alteration of the Earth\u2019s surface. Students will use spatial concepts and landscapes to analyze human social organization and its environmental consequences. Also, students will learn the methods geographers use in their science and practice and meet the goals determined by the National Geographic Standards. While not required, students will be encouraged to take the AP Human Geography exam given in the spring. The cost of the test is approximately $90.00. ",
        "id": "0",
        "semesters": "",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "UNITED STATES HISTORY (1542)",
        "weight": "regular",
        "description": "This two-semester course builds upon concepts developed in previous studies of American history and emphasizes national development from the late nineteenth century into the twenty-first century. After a brief review of early development of the nation, students study the key events, people, groups and movements in the late nineteenth, the twentieth and early twenty-first centuries as they relate to life in the United States. This course will satisfy the United States History requirement for graduation from Carmel High School and is open to all level of students. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "4",
        "name": "AMERICAN STUDIES: (1542) UNITED STATES HISTORY 1-2/ ENGLISH 11, 1-2",
        "weight": "regular",
        "description": "Course content includes the basic requirements of American literature, composition and United States history. The interdisciplinary approach will enhance students\u2019 awareness of the relationship of historical events and literature from the Puritan period to the twenty-first century. Writing skills will be emphasized. Successful completion of this course satisfies the junior requirements for junior level English and Social Studies. The second semester of the course will be devoted to 20th -Century American literature and history. This course requires a two-period block of time and is team-taught. It satisfies the United States History requirement for graduation from Carmel High School. ",
        "id": "0",
        "semesters": "4",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "AP UNITED STATES HISTORY 1-2 (1562)",
        "weight": "full",
        "description": "Recommended History or AP Human Geography This is a two-semester course designed for the highly academically motivated student who has a very strong interest and aptitude in United States history and strong analytical writing skills. During the first semester, course content covers from the colonial period to the end of the 19th Century. The second semester is devoted to the 20th Century. While it is not required that students take the AP U.S. History exam at the approximate cost of $90.00, it is expected\u2014the focus of the class is to adequately prepare students toward this end. Extensive reading and writing in American history is required. This course will satisfy the full year requirement in United States history. Students enrolling in AP United States History will be given a summer reading assignment covering the first five chapters in the Advanced Placement text. Students may pick up their rental texts from the CHS bookstore after the first week of summer school. Students are encouraged to purchase their texts. An examination over summer reading material will be given in the first week of class. It satisfies the United States History requirement for graduation from Carmel High School. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "IB HISTORY OF THE AMERICAS 1-2 HL (YEAR 1 OF A 2 Year Course) (1590)",
        "weight": "full",
        "description": "Recommended Human Geography The High Level (HL) history program is a two-year curriculum. It will include History of the Americas in the first year and study of 20th century topics in the second year. The Americas course will integrate the histories of Canada, Latin America, and United States with special focus on a study of the Civil War, the Age of Imperialism, and World War II. It is designed to promote and enhance an awareness of international understanding through focusing on the Western Hemisphere. This two- year program will introduce students to the common experience of the Americas through a comparative analysis of cultural, political, social, and economic issues. History of the Americas 1-2 HL satisfies the United States History requirement for graduation from Carmel High School. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "IB HISTORY OF THE AMERICAS 3-4 HL (YEAR 2 OF A 2 YEAR COURSE) (1590)",
        "weight": "full",
        "description": "This course takes a topical approach to studying the 20th century world, focusing on the causes, practices, and effects of war, the rise of single-party states, the Cold War, and rights and protests at the end of the century. It is to be taken as a continuation of History of the Americas 1-2 to fulfill the IB HL curriculum and prepare students for the HL exam at the end of their senior year. Students will also complete a historical investigation of their choosing. The IB approach to history seeks to pose questions without providing definitive answers. Students are taught to engage with it both through exposure to primary historical sources and through the work of historians. Students will are taught to select and interpret data and then begin a critical evaluation of it. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "1",
        "name": "UNITED STATES GOVERNMENT (1540)",
        "weight": "regular",
        "description": "This course examines the tripartite organization of government in the United States\u2014the legislative, executive and judicial branches\u2014at the federal, state and local levels. Consideration is given to the relationships between and responsibilities of the three branches, as well as the various governmental levels. Included will be a study of 1) how laws are made by the legislative bodies\u2014Congress, the Indiana General Assembly, county councils, city councils and other representative or regulatory bodies; and 2) administration of the laws by the President, the governor, and various county officials and mayors. This course satisfies the United States Government requirement for graduation from Carmel High School. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "AP UNITED STATES GOVERNMENT AND POLITICS (1560)",
        "weight": "full",
        "description": "This course will give students an analytical perspective on government and politics in the United States. The course will include both the study of general concepts used to interpret U.S. politics and the analysis of specific examples. It also will include the study of various institutions, groups, beliefs, and ideas that constitute U.S. politics. Students will become acquainted with a variety of theoretical perspectives and explanations for various behaviors and outcomes. The course will be presented at a college freshman instructional level and students should be highly motivated and possess superior writing skills. While it is not required that students take the appropriate AP exam at the approximate cost of $90.00 it is expected\u2014the focus of the class is to adequately prepare students toward this end. This course satisfies the United States Government requirement for graduation from Carmel High School. ",
        "id": "0",
        "semesters": "1",
        "classification": "AP"
      },
      {
        "credits": "1",
        "name": "AP COMPARATIVE GOVERNMENT AND POLITICS (1552)",
        "weight": "full",
        "description": "Recommended This is an elective course for seniors with a strong interest in the field of political science. Within this challenging curriculum, students will develop an understanding of some of the world\u2019s diverse political structures and practices by studying both specific countries as well as the general concepts used to interpret the political relationships and institutions found in virtually all national polities. General topics covered will include the following authority and political power; the relationship between state and society; the relationships between citizens and states; political institutions and frameworks; political change; and the comparative method. The course will follow the national Advanced Placement curriculum in Comparative Government. This course will satisfy one semester as an elective in Social Studies, but does NOT meet the United States Government requirement for graduation. ",
        "id": "0",
        "semesters": "1",
        "classification": "AP"
      },
      {
        "credits": "1",
        "name": "INTERNATIONAL RELATIONS (1520)",
        "weight": "regular",
        "description": "This course is a study of United States foreign policy. This class will take a current events approach to examining the US role in international affairs. This course will also utilize guest speakers with a focus on real-world application. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "SOCIOLOGY (1534)",
        "weight": "regular",
        "description": "This course consists of the study of the relationships among people and the social conditions in which those relationships occur. The sociological concepts of culture, socialization, social structure and social inequality are the primary areas of study. Included within these general areas of study are the topics of deviance, social control, organizations, stratification, social institutions and the family. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "ECONOMICS (1514)",
        "weight": "regular",
        "description": "This course for college-bound students concentrates on the overall view of America\u2019s economic operation. Special emphasis will be placed on the basic theories that are the backbone of the American economic system. Emphasis will be placed on the comparison of the capitalistic economic system to those of other nations. Attention will be given to the role of the individual as he is involved in the total process. The forces of supply and demand will be studied as they originate in the specific behavior of buyers and sellers. Investment, employment, and consumption will be related to individual decisions to expand or curtail production, to hire or fire workers, or to buy a commodity. Emphasis will be on the behavior patterns of individuals and firms. The role of the individual in other economic systems and international trade and its implications will also be studied. The course will be a combination of lecture, research, group work, and independent study. This course satisfies the state graduation requirement in economics for the Core 40 Diploma. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "AP MACROECONOMICS (1564)",
        "weight": "full",
        "description": "This college-level course gives students a thorough understanding of the principles of economics that apply to an economic system as a whole. Such a course places particular emphasis on the study of national income and price determination, and also develops students\u2019 familiarity with economic performance measures, economic growth, and international economics. While it is not required that students take the AP Macroeconomics exam, it is expected\u2014the focus of the class is to adequately prepare students toward this end. An (approximate) $90.00 fee covers both the AP exams in economics. This course satisfies the state graduation requirement in economics for the Core 40 and Academic Honors Diploma. This course also qualifies as a quantitative reasoning course. It would be wise to check with potential universities on their acceptance of AP Micro versus AP Macro credit. ",
        "id": "0",
        "semesters": "1",
        "classification": "Advanced Placement"
      },
      {
        "credits": "1",
        "name": "AP MICROECONOMICS (1566)",
        "weight": "full",
        "description": "This college-level course gives students a thorough understanding of economics that apply to the functions of individual decision makers within the larger economy. While it is not required that students take the AP Microeconomics exam at the approximate cost of $80.00, it is expected\u2014the focus of the class is to adequately prepare students toward this end. This course satisfies the state graduation requirement in economics for the Core 40 and Academic Honors Diploma. This course also qualifies as a quantitative reasoning course. It would be wise to check with potential universities on their acceptance of AP Micro versus AP Macro credit. ",
        "id": "0",
        "semesters": "1",
        "classification": "AP"
      },
      {
        "credits": "1",
        "name": "LAW EDUCATION (1526)",
        "weight": "regular",
        "description": "This course is designed to provide students with a practical understanding of law and the legal system and its development, the United States and Indiana constitutions, criminal and juvenile law, consumer law, family law, housing law and individual rights and liberties. This course will satisfy one semester as an elective in social studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "PSYCHOLOGY (1532)",
        "weight": "regular",
        "description": "This course takes a general look at the field of Psychology. Psychology is the study of mental processes and human behavior. Six theories or approaches to studying Psychology are used throughout the semester to examine why we do the things we do and how we react to the environment. In accordance with state standards, the curriculum focuses on Brain, Body and Awareness, Cognition, Principles of Learning, Information Processing, Intelligence, Personality, Mental Disorders and Treatment. Students will be challenged to complete an experiment project as well as a mental health project. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "AP PSYCHOLOGY (1558)",
        "weight": "full",
        "description": "Recommended This college-level two-semester course is designed for qualified students who wish to complete studies in secondary school equivalent to a college psychology introductory course. The aim is to provide the student with learning experience in the study of behavior and mental processes of humans and animals. The Advanced Placement course introduces students to the discipline of psychology by emphasizing the history of psychology as a science, the different theoretical approaches that underlie explanations of behavior and the contemporary research methods used by psychologists. Students will learn about methods psychologists use in their science and practice. While it is not required that students take the AP Psychology exam (at the approximate cost of $90.00), it is expected. This course will satisfy two semesters as an elective in Social Studies. This course is only open to juniors and seniors because of the maturity necessary for some of the content. This course will satisfy one semester as an elective in Social Studies. It is not open to students who have received credit for regular Psychology. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "IB PSYCHOLOGY SL (1606)",
        "weight": "full",
        "description": "Psychology Standard Level is two semester course designed to develop the student\u2019s capacity to identify, to analyze critically, and to evaluate theories, concepts and arguments about the nature and activities of the individual and society. Students will be asked to promote the appreciation of the way in which learning is relevant to both the culture in which the student lives and the culture of other societies. Over the course of one year, students will interpret and/or conduct psychological research to apply the resulting knowledge for the benefit of human beings. Students will develop an understanding of the biological, cognitive-learning and socio-cultural influences on behavior. An emphasis will be placed on the students developing an awareness of how applications of psychology in everyday life are derived from psychological theories. This course is open to students who have received credit for regular Psychology. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "1",
        "name": "AFRICAN STUDIES (1500)",
        "weight": "regular",
        "description": "Recommended European History African Studies provides students with the opportunity to explore the rich history, cultures, and peoples of Africa. Included in this is the study of African kingdoms, European imperialism and the 20th Century independence movements that lead to the formation of modern African states. This course will also offer insight on the African diaspora and impact of African culture in the Americas. Additionally, African Studies will create opportunities for students to explore African cultural expressions through music, food, dance, literature, and art. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "ETHNIC STUDIES (1516)",
        "weight": "regular",
        "description": "Ethnic Studies is a course designed to broaden students\u2019 perspectives and increase awareness of ethnic pluralism in the United States. This course will provide students with the opportunity to explore topics such as politics, migration, and acculturation contextualized to ethnic group experiences and interrelationships. Students will learn about the contribution different ethnic groups have made that have promoted the cultural mosaic of the United States. Diversity within the United States will be analyzed from both a historical and current perspective to provide students with a comprehensive course of study. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      },
      {
        "credits": "1",
        "name": "INDIANA STUDIES (1518)",
        "weight": "regular",
        "description": "Indiana Studies is a course that provides students with a unique approach to studying the paradigm between state and national levels of government within our federal system. Themes of economics, history, politics, and culture will be examined throughout this course. This course will dive into founding documents of Indiana and the United States and examine how they function as tools of democratic governance. Students will also analyze the political role that individuals have played in the development of Indiana and the United States. This course will satisfy one semester as an elective in Social Studies. ",
        "id": "0",
        "semesters": "1",
        "classification": "Regular"
      }
    ]},
    {"name":"World Language","chair":"Andrea Yokum", "courses":"34", "id": "12", "allcourses":[
      {
        "credits": "2",
        "name": "AMERICAN SIGN LANGUAGE I 1-2 (2156)",
        "weight": "regular",
        "description": "Greetings, exchanging personal, background information, telling about your family, and describing your typical school days are the topics covered in the first semester. Sports, activities, describing physical and personal qualities of people, giving directions, telling about jobs, food, and animals are what we will explore in the second semester. Some of typical classroom activities include building vocabulary, learning basic grammar through translation, and maintaining conversations in ASL with partners. Signing skills are assessed in both receptive and expressive manner. We have discussions and journal entries based on a variety of topics in Deaf Culture. Attending and/or participating in a Deaf Culture Event per grading period is required. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "AMERICAN SIGN LANGUAGE II 1-2 (2158)",
        "weight": "regular",
        "description": "Expanding vocabulary and exploration of advanced narrative techniques are several of the objectives in the second level. When learning how to locate objects, we will be using new classifiers and master our signing space. Temporal inflection is a concept we will learn how to demonstrate and apply to recurring and continuous events. Complaining about annoying behaviors or problems, making requests and suggestions are some of the topics covered in the first semester. We will be signing songs before the winter break. Life events, family nationalities, physical qualities of objects, recipes, and narrating about trips are the topics of the second semester. Throughoutlevel two, we will be reading a book and participate in chapter discussions online. Our ASL II students will host our annual Deaf Deaf World event and teach our visitors basic signs. Attending and/or participating in a Deaf Culture Event per grading period is required. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "CHINESE I 1-2 (2000)",
        "weight": "regular",
        "description": "This is an introductory Chinese course. The focus of the content begins by exploring the topics relating to the individual, family, and school activities. Students will learn basic skills of listening, speaking, reading, and writing for daily communication and further study. Students will learn basic vocabulary and sentence structures in essential everyday situations, such as greetings, exchanging names and nationalities, introducing self and others, making a phone call, saying the time and date, asking appropriate questions and describing the daily routines. Students will also master approximately 200 words and expressions in Pinyin and characters to write simple passages about self, family, and daily routines. They will recognize perspectives, practices, and products of the social and cultural background of the Chinese culture, such as the major holidays, Chinese families, Chinese names, and the Chinese educational system. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "CHINESE II 1-2 (2002)",
        "weight": "regular",
        "description": "This course builds upon the foundation established in Chinese I. The focus of the content gradually expands to include wider social occasions and cultural contexts. Students will continue to learn more essential skills of listening, speaking, reading, and writing for everyday communication. Building upon the vocabulary and sentence structures taught in the first year, students will learn more practical expressions and the sentence patterns necessary for use in daily life, such as ordering food at a restaurant, going shopping, talking about travel plans, describing the four seasons, describing the symptoms of an illness and expressing feelings. Students will continue to learn to read and write core Chinese characters and grammar structures in each lesson. They will write questions and responses to various situations, and write short letters using culturally appropriate format and style. They will also investigate different aspects of Chinese culture and society, such as Chinese food, Chinese traditional dress, Chinese Zodiac, Chinese traffic signs and rules, and Traditional Chinese Medicine. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "",
        "name": "CHINESE III 1-2 (2004)",
        "weight": "regular",
        "description": "This course is intermediate Chinese and the continuation of Chinese II. The focus of the content expands to various topics related to modern Chinese society. Students learn various expressions and complicated sentence structures so they can continue to expand the breadth and depth of their skills in listening, speaking, reading, and writing for daily communication as well as their knowledge of Chinese societies. Students will learn a broad variety of expressions and sentence structures so that they can participate in conversations on various topics related to modern Chinese society. Students will complete authentic forms and documents, and write brief summaries and short compositions as well as discuss significant events unique to the target cultures. ",
        "id": "0",
        "semesters": "",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "CHINESE LANGUAGE, AP (2014)",
        "weight": "full",
        "description": "The purpose of the materials and activities of the AP level Chinese class is to expand on previously learned grammatical, communicative and cultural concepts of the Chinese language and culture. This year serves as a review and an expansion of grammatical, historical, and cultural concepts studied in the previous levels, thus it is essential that every student has completed level I - IV. The AP-level course will prepare students to successfully take the AP Exam and/or college placement tests by emphasizing the 3 modes of communication in written and spoken forms and formal and informal settings. To facilitate these higher level thinking skills, students will engage in a variety of presentational, interpersonal, and interpretive speaking, writing and reading activities, while working on grammatical accuracy and cultural competence. The course is conducted entirely in the target language. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "FRENCH I 1-2 (2020)",
        "weight": "regular",
        "description": "French I an introduction to the French language and the cultures of French-speaking peoples throughout the world. Students are taught to apply effective language learning strategies and to communicate through speaking and listening. Students will also learn to read and comprehend simple dialogs, letters and short narrative texts. We will also be doing some collaborative projects that will enhance your understanding of the French speaking world. In addition, students will listen to current French music, will enjoy French films and will explore the language through authentic video and other varied media sources. You will also have the opportunity to enjoy some French food! ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "FRENCH II 1-2 (2022)",
        "weight": "regular",
        "description": "Come join us on un voyage fantastique avec le cours de français 2! In French II students review the basic material learned in French I before proceeding with the French II curriculum. At this level students will participate in conversations dealing with daily activities, personal interests and meeting personal needs. This course will bring French to life for you! At this level students will participate in conversations dealing with daily activities, personal interests and meeting personal needs. You will actually begin to speak authentic French! We will dive deeper into the French speaking world using authentic resources such as video, music and text. In this course you will also become familiar with music from around the French speaking world and enjoy two French films. And, let\u2019s not forget FOOD! We will have French cultural exploration with food tasting days such as the Mardi Gras celebration in class. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "FRENCH III 1-2 (2024)",
        "weight": "regular",
        "description": "Come join us on un voyage magnifique avec le cours de français 3! In French III, students review the material acquired in French I and II before proceeding with the French III curriculum. At this level, students will learn about the cultures of French countries in Africa as well as traditional French culture such as the unit on Les Miserables by Victor Hugo. Students will be given the opportunity to explore francophone culture through modern and traditional music, modern French films and French Internet sites as well. Students will communicate orally by responding to factual and interpretive questions, interacting in more complex social situations and giving short presentations/dialogs in a cultural context. Students read for comprehension from a variety of authentic materials. In writing, students respond to questions on a variety of topics preparing them to live/stay for an extended time in a French\u2013speaking country. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "FRENCH IV 1-2/PRE -IB (2026)",
        "weight": "full",
        "description": "Come join us on un voyage fantastique avec le cours de français 4! In French 4 students review and expand the material of French 1-3 and nearly all of the class is conducted in the French language. Students will be given the opportunity to depthfully explore francophone culture through modern and traditional music, modern French films and French Internet sites as well. There are multiple cultural field trips for this course, all of which involve using French in the Carmel community. Time will be spent on vocabulary building and grammar, with the focus being on how to use these vocabulary phrases and grammatical structures in speaking and writing. Students will review and expand their knowledge of the geography of the francophone world, including emphasis on French speaking areas in Africa. Students will read modern, authentic texts from French newspapers and magazines and they will write summaries in French of these articles as well as present those summaries to the class. Students will participate in group and partner discussions and debates on various topics concerning the French speaking world. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "FRENCH V 1-2/ WORLD LANGUAGE B SL, IB (2028) (2308)",
        "weight": "full",
        "description": "In French V students participate in a wide variety of conversations dealing with daily life and news in the francophone cultures as well as their own. They learn the tools for gaining maximum comprehension in reading authentic literary texts, articles and novels. They summarize these texts and learn to analyze the texts and their reactions to the content of the texts. During second semester the students choose a research topic on an aspect of French culture, and then, using the internet to locate French- language web sites, prepare an oral and written project to be shared with their peers. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "FRENCH LANGUAGE, AP (2032)",
        "weight": "full",
        "description": "The purpose of AP French Language is to expand on previously learned grammatical, communicative and cultural concepts of the French language and culture. This course serves as a review and an expansion of the concepts studied in levels I-IV; thus it is essential that every student has completed the previous levels. This AP course will prepare students to successfully take the AP Exam and/or college placement tests. The emphasis will be on journal and essay writing, conversational skills, as well as reading and listening comprehension, grammatical accuracy and cultural competence. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "GERMAN I 1-2 (2040)",
        "weight": "regular",
        "description": "Level I German is an introduction to the German language, reasons for studying the language, and understanding the customs and culture of German speaking countries. Students will apply effective strategies for acquisition of both written and oral language skills in order to perform in various cultural situations. Students will also be able to read and comprehend simple directions, as well as write basic questions and phrases. Additionally, students will learn appropriate behavior for social greetings and nonverbal communications of German speaking countries. Level I also provides the opportunity for students to learn about traditional celebrations and geographic regions of German speaking countries. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "GERMAN II 1-2 (2042)",
        "weight": "regular",
        "description": "Level II German enables students to utilize their language skills in extracurricular activities as well as in the classroom by expressing personal interests and daily routines. Students will verbally interact by narrating an experience, reading aloud, and asking appropriate questions in German. Students will also be able to write responses to various situations using acquired vocabulary and grammar knowledge. Short stories and poems are introduced along with the geographical, historical and political make-up of the German speaking countries. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "GERMAN III 1-2 (2044)",
        "weight": "regular",
        "description": "Level III German provides students with information fostering an understanding and appreciation of foreign cultures. Basic skills of reading, writing, listening, and speaking are enhanced. Level III students will read and understand more challenging texts, by reading a variety of readers and interpreting authentic materials, such as films, articles, and fairy tales. Students will write brief texts with clear messages using an appropriate level of grammar and structure. Students will also initiate their own expression of emotions and desires without memorized phrases through presentations, interviews, and dialogs and will work towards using the target language almost exclusively during the second semester. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "GERMAN IV 1-2 Pre- IB (2046)",
        "weight": "full",
        "description": "Level IV German allows students to participate in leadership roles in the classroom and extracurricular activities related to German. Students of this level will be able to give presentations, interpret complex situations, and read for comprehension. Level IV German students creatively use the language to produce poetry, prose, and compositions. Students will read a full-length work of historical fiction. Students also combine their knowledge of historical periods and artistic genres to make connections in their relationship. A concise review of grammar is also included. The course is conducted in German and students are expected to use as much German as possible. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "GERMAN V 1-2/ WORLD LANGUAGE B SL, IB (2048) (2308)",
        "weight": "full",
        "description": "Level V German encourages authentic activities for students such as attending concerts, plays, and community activities in German or pertaining to German culture. Students are also given opportunities to actively promote the study of German by participating in the German Honor Society. Students will read a full-length work of fiction, analyze and create their own literature, expressing concerns as well as possible solutions to current events, by reading authentic material, watching news programs, and current German TV shows and films. Students will also demonstrate culturally appropriate behaviors for both adults and adolescents. They will refine their communication and writing skills by engaging in a variety of presentational, interpersonal, and interpretive speaking, writing and reading activities. The course is conducted entirely in the target language. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "GERMAN LANGUAGE, AP (2052)",
        "weight": "full",
        "description": "The purpose of the materials and activities of the AP level German class is to expand on previously learned grammatical, communicative and cultural concepts of the German language and culture. This year serves as a review and an expansion of grammatical, historical, and cultural concepts studied in the previous levels, thus it is essential that every student has completed level I - IV. The AP-level course will prepare students to successfully take the AP Exam and/or college placement tests by emphasizing the 3 modes of communication in written and spoken forms and formal and informal settings. To facilitate these higher level thinking skills, students will engage in a variety of presentational, interpersonal, and interpretive speaking, writing and reading activities, while working on grammatical accuracy and cultural competence. The course is conducted entirely in the target language. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "HEBREW I (2240)",
        "weight": "regular",
        "description": "Hebrew I, a course based on Indiana\u2019s Academic Standards for World Languages, introduces students to effective strategies for beginning Hebrew language learning, and to various aspects of Hebrew-speaking culture. This course encourages interpersonal communication through speaking and writing, providing opportunities to make and respond to basic requests and questions, understand and use appropriate greetings and forms of address, participate in brief guided conversations on familiar topics, and write short passages with guidance. This course also emphasizes the development of reading and listening comprehension skills, such as reading isolated words and phrases in a situational context and comprehending brief written or oral directions. Additionally, students will examine the practices, products and perspectives of Hebrew-speaking culture; recognize basic routine practices of the target culture; and recognize and use situation-appropriate non-verbal communication. This course further emphasizes making connections across content areas and the application of understanding Hebrew language and culture outside of the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "HEBREW II (2242)",
        "weight": "regular",
        "description": "Hebrew II, a course based on Indiana\u2019s Academic Standards for World Languages, builds upon effective strategies for Hebrew language learning by encouraging the use of the language and cultural understanding for self-directed purposes. This course encourages interpersonal communication through speaking and writing, providing opportunities to make and respond to requests and questions in expanded contexts, participate independently in brief conversations on familiar topics, and write cohesive passages with greater independence and using appropriate formats. This course also emphasizes the development of reading and listening comprehension skills, such as using contextual clues to guess meaning and comprehending longer written ororal directions. Students will address the presentational mode by presenting prepared material on a variety of topics, as well as reading aloud to practice appropriate pronunciation and intonation. Additionally, students will describe the practices, products and perspectives of Hebrew-speaking culture; report on basic family and social practices of the target culture; and describe contributions from the target culture. This course further emphasizes making connections across content areas and the application of understanding Hebrew language and culture outside of the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "HEBREW III (2244)",
        "weight": "regular",
        "description": "In this course students continue to develop their listening, reading, writing and speaking skills based upon Indiana\u2019s Academic Standards for World Language. They will expand their Hebrew vocabulary. They will continue to master advanced Hebrew grammar. They will learn the uniqueness of the active and passive voice in Hebrew grammar patterns. They will understand the way that Hebrew verbs and nouns are connected to grammatical family roots, and the way that they are intertwined with the general meaning of the root, as is the case with the verb to learn and to teach which are connected; or the verbs to pay, to complete and to improve are related to the same root as the word peace, which are also related to the name of the city of Jerusalem and to common words when people greet each other. By grasping a deeper understanding of the concept of family roots, students can comprehend the meaning of words that they never learned or words that are newly created daily by the Hebrew Language Academy which uses ancient forms for modern inventions. Students will regularly write short compositions on a variety of topics related to a wide range of daily, leisure and cultural activities such as traveling, going to a classical concerts, applying for college, writing an official letter, etc,. Students will read a selection of contemporary Hebrew writers and gain a deeper understanding of Modern Hebrew literature. At the end of the course students should have a deeper appreciation of the breadth and depth of the Hebrew language and have the ability to confidently speak and write on an intermediate level. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "HEBREW IV (2246)",
        "weight": "regular",
        "description": "This course provides a context for integration and continued development of language skills and cultural understanding with other content areas and the community beyond the classroom. Students continue to work and to develop their Hebrew language skills based upon Indiana\u2019s Academic Standards for World Language. They will be introduced to a selection of contemporary Hebrew as well as limited selection of Hebrew literature from nineteenth century and the first half of the twenty century. They will continue to master advanced Hebrew grammar. They will learn the uniqueness of the class action meaning (Hebrew concept for \u201cBINYANIM\u201d a unique form of verb conjugation.) They will understand the way that Hebrew \u201cBINYANIM\u201d are connected to grammatical family roots, and the way that they are intertwined with the general meaning of the root so they can understand the meaning of Hebrew words in familiar and unfamiliar contexts. Students will regularly write short essays on a variety of topics. At the end of the course students should have a deeper understanding of the Hebrew language and have the ability to confidently speak and write on an advanced level. This class will prepare students to successfully pass the IB Hebrew Test. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "HEBREW V (2248)",
        "weight": "regular",
        "description": "Hebrew V is based on Indiana\u2019s Academic Standards for World Languages. In this level students will be provided with opportunities to interact and exchange information in culturally and socially authentic simulated situations. They will be able to integrate the Hebrew language skills that they have acquired in lower level courses with an understanding of Hebrew speaking culture through investigating and discussing current events both in Israel and throughout the world. Global issues such as the environment, social issues, etc. will be examined in Modern Hebrew texts. They will be introduced to a selection of contemporary Hebrew literature. This course emphasizes the student\u2019s use of appropriate vocabulary and complex language structures for both oral and written communication. At the end of the course students should have a deeper understanding of the Hebrew language and the culture of Israel and the Middle East. They will have the language skills and ability to confidently speak and write on an advanced level. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "JAPANESE I 1-2 (2060)",
        "weight": "regular",
        "description": "One of the main points of emphasis of this beginning course is the written language. Students will master the two native Japanese writing systems, hiragana and katakana, and will begin learning the third writing system borrowed from the Chinese language, kanji. Students will be able to respond to classroom requests, use familiar words and phrases both orally and in writing, and answer short-answer questions in the target language. They will learn the days of the week, the months of the year, how to tell time and how to ask for and give personal information such as phone numbers, age, grade level in school, number of family members, etc. Students will be able to give information about their family both orally and in writing. Students will create a family project, such as a family tree or photo album in this course. They will also be holidays, and talk about their daily school schedules in the target language. They will compare/contrast what goes on in Japanese and American schools. Students will use newly learned descriptive words to describe their school, classes and teachers. They will learn the basics of how to express what they want and what they want to do. Students will be introduced to simple sickness vocabulary and to the 4 seasons in Japan. Students will be briefly introduced to places, clothing and food vocabulary. They will learn how to properly use giving/receiving verbs. Lastly, students will be introduced to many aspects of Japanese culture such as shopping, money, eating, etc. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "JAPANESE II 1-2 (2062)",
        "weight": "regular",
        "description": "In this course students will be expected to build upon previously learned material. Students will learn and have lots of practice with verb and adjective conjugation, particles, and many new vocabulary words. Students will learn how to make suggestions. They will expand their knowledge of counters. Students will be introduced to the two existence verbs and will learn to use them properly in simple location phrases. Students will learn days of the month, research important Japanese deal of verb, adjective and noun kanji. They will be introduced to the plain (dictionary) form of verbs. Creating complex compound sentences is a goal in this course. Students will become familiar with the map of Japan, learning the kanji for all 4 directions, the 4 main islands and Okinawa. Students will also be expected to recognize the kanji for the major cities, learn important facts for each and be able to place each on a map. Students will learn to use the present tense to be able to describe what someone is doing. Students will learn how to create more complex location phrases and will be expected to use the kanji for locations when writing. Students will be given many opportunities to speak in the target language. Class will begin each day with a discussion over what they did the night before. Students will be expected to use complex rather than simple sentences. Students will learn about birthdays in Japan. They will be target language during class. Students will go in depth about ailments/ sickness and they will also be able to have a proper phone conversation. Students will have contact with native speakers daily and will be required to ask/answer questions in the target language as much as possible. Students will be able to discuss what they plan on doing and what they are expected to do. They will learn about how Christmas is celebrated in Japan and about the most important Japanese holiday, New Year\u2019s Day. Students will create and send traditional Japanese new year\u2019s cards to classmates. They will learn about Japanese religions and compare those to religions in the United States. Students will continue learning informal Japanese and will be encouraged to use it in conversations with their classmates. Students will create and give their own weather report. Students will learn how to compare two or more items and will ask/answer comparison questions orally in the target language. They will learn about Japanese department stores and go into depth with shopping terminology and grammatical concepts used in shopping. Students will learn to use noun modifiers and the potential forms of verbs. Students will read two novels during the year. Memoirs of a Geisha and Lost Names. Students will answer discussion questions as they read and each class will begin with a class discussion of the assigned reading. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "JAPANESE III 1-2 (2064)",
        "weight": "regular",
        "description": "In this course students will be expected to build upon all previously introduced to six different wearing verbs and many new clothing vocabulary words. They will learn how to use colors as adjectives so that they can describe what people are wearing. Students will learn how to say that something is or is not allowed so that they are able to speak and write about their school regulations in the target language. Students will be introduced to the informal way of speaking Japanese. Students will be introduced to Japanese cuisine and will learn how to order food in Japanese. They will discuss proper table etiquette at home and at restaurants in Japan. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "JAPANESE IV 1-2 (2066)",
        "weight": "regular",
        "description": "In this course students will be expected to build upon previously learned material. Students will continue the transition from writing Japanese to speaking Japanese. They will be required to utilize learned nationalities, occupations, languages, and body parts. Students will be presented with a minimal amount of action verbs and will learn some very basic grammatical sentence structures. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "LATIN I 1-2 (2080)",
        "weight": "regular",
        "description": "Latin I, a course based on Indiana\u2019s Academic Standards for World Languages, introduces students to effective strategies for beginning Latin language learning, and to various aspects of classical Roman culture. This course emphasizes the development of reading and listening comprehension skills, such as reading isolated words and phrases in a situational context and comprehending brief written or oral directions. Though interpersonal communication is not an explicit emphasis of this course, opportunities may be provided for students to make and respond to basic requests and questions, understand and use appropriate greetings and forms of address, participate in brief guided conversations on familiar topics, and write short passages with guidance. Additionally, students will examine the practices, products and perspectives of classical Roman culture; recognize basic routine practices of the target culture; and recognize and use situation- appropriate non-verbal communication. This course further emphasizes making connections across content areas and the application of understanding Latin language and culture outside of the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "LATIN II 1-2 (2082)",
        "weight": "regular",
        "description": "Latin II, a course based on Indiana\u2019s Academic Standards for World Languages, builds upon effective strategies for Latin language learning by encouraging the use of the language and cultural understanding for self-directed purposes. This course emphasizes the development of reading and listening comprehension skills, such as using contextual clues to guess meaning and comprehending longer written or oral directions. Students will address the presentational mode by presenting prepared material on a variety of topics, as well as reading aloud to practice appropriate pronunciation and intonation. Though interpersonal communication is not an explicit emphasis of this course, opportunities may be provided for students to make and respond to requests and questions in expanded contexts, participate independently in brief conversations on familiar topics, and write cohesive passages with greater independence and using appropriate formats. Additionally, students will describe the practices, products and perspectives of classical Roman culture; report on basic family and social practices of the target culture; and describe contributions from the target culture. This course further emphasizes making connections across content areas and the application of understanding Latin language and culture outside of the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "LATIN III 1-2, IB (2084) (2308)",
        "weight": "full",
        "description": "Latin III, a course based on Indiana\u2019s Academic Standards for World Languages, builds upon effective strategies for Latin language learning by facilitating the use of the language and cultural understanding for self- directed purposes. This course emphasizes the continued development of reading and listening comprehension skills, such as using cognates, synonyms and antonyms to derive meaning from written and oral information, as well as comprehending details written or oral directions. Students will address the presentational mode by presenting student-created material on a variety of topics, as well as reading aloud to practice appropriate pronunciation and intonation. Although interpersonal communication is not an explicit emphasis of this course, opportunities may be provided for students to initiate, sustain and close conversations; exchange detailed information in oral and written form; and write cohesive information with greater detail. Additionally, students will continue to develop understanding of classical Roman culture through recognition of the interrelations among the practices, products and perspectives of the target culture; discussion of significant events in the target culture; and investigation of elements that shape cultural identity in the target culture. This course further emphasizes making connections across content areas as well the application of understanding Latin language and culture outside of the classroom. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular/IB"
      },
      {
        "credits": "2",
        "name": "LATIN, AP (2092)",
        "weight": "full",
        "description": "Fulfills a World Language requirement for the Core 40 with Academic Honors diploma or counts as a Directed Elective or Elective for any diploma. A Career Academic Sequence or Flex Credit course Latin course prepares students to take the AP Latin examination. Students develop the ability to read, translate, understand analyze and interpret the entire text in English of Vergil\u2019s Aeneid, and Caesar\u2019s Gallic War (Books 1,6,7) the historical, social, cultural, and political context of Vergil\u2019s Aeneid, Caesar\u2019s Gallic War and the examination of sight passages from other Roman authors. Student work will be required outside of class time. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "LATIN IV/ 1-2 CLASSICAL LANGUAGE SL, IB (2086) (2302)",
        "weight": "full",
        "description": "The Level IV Latin course enables students to participate in classroom and extracurricular activities related to the Latin language such as presentations to student body and to parent groups as well as taking leadership roles in language clubs. Students will read for comprehension from a variety of longer authentic materials and make judgments about what is read. Students will learn to use the language creatively in writing poetry, prose and essays. Students are aware of the relationship between various artistic and literary genres and history. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "SPANISH I 1-2 (2120)",
        "weight": "regular",
        "description": "In Spanish Level I, students are introduced to the Spanish language. Students acquire elementary grammar (present tense verbs, nouns and gender, adjectives and agreement, formation of statements and questions), vocabulary, and Spanish pronunciation, and an introduction to Hispanic culture. Students develop foundational listening, speaking, reading, and writing skills. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "SPANISH II 1-2 (2122)",
        "weight": "regular",
        "description": "After a review of level one material, students move to more advanced grammar concepts (past tenses, reflexive and irregular verbs, object pronouns), and expand their vocabulary. Students become familiar with cultural aspects of various Hispanic areas within the United States, Puerto Rico, Costa Rica, and Mexico. Students practice reading, speaking, listening, and writing, within the context of shopping, travel, art, food and other similar themes. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "SPANISH III 1-2 (2124)",
        "weight": "regular",
        "description": "After a review of materials from Spanish II, students master more advanced grammar concepts (future, conditional, commands, and present subjunctive) additional vocabulary, and culture. Students rely more on Spanish as the means of communication in class, and further develop listening, reading, writing, and speaking skills. Students write short compositions to improve writing skills, and read short literary selections to improve reading skills, going deeper into the vocabulary of personal information, professions, travel, and daily activities. Students will work towards using the target language almost exclusively towards the end of semester 2. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "SPANISH IV 1-2 Pre- IB (2126)",
        "weight": "full",
        "description": "or placement exam In Spanish IV/IB students will review and expand upon the material of Spanish 1-3 and nearly all of the class is conducted in Spanish. Time will be spent on vocabulary building and grammar, with the focus on how to use these vocabulary phrases and grammatical structures. Students will review and expand their knowledge of the geography, history, and culture of the Spanish speaking world. Students read authentic material such as poems, short stories, and current events. Journal and essay writing, presentational and conversational skills, as well as reading and listening comprehension are also emphasized. ",
        "id": "0",
        "semesters": "2",
        "classification": "Regular"
      },
      {
        "credits": "2",
        "name": "SPANISH V 1-2/ WORLD LANGUAGE B SL, IB (2308) (2128)",
        "weight": "full",
        "description": "The emphasis of Spanish V IB is the use of 100% Spanish for communication in speaking, reading, writing, and listening. Students move from Spanish IV IB to more complex vocabulary and grammar. Students greatly increase their vocabulary, refine their knowledge of grammar, and focus on speaking, writing, and reading skills. Students read short stories, poems, magazines and newspaper articles. Students learn in- depth information about traditions, customs, and cultures of all Spanish- speaking countries. This rigorous course is conducted entirely in Spanish, and students are expected to speak in Spanish daily. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "SPANISH LANGUAGE, AP (2132)",
        "weight": "full",
        "description": "The purpose of AP Spanish Language is to expand on previously learned grammatical, communicative and cultural concepts of the Spanish language and culture. This course serves as a review and an expansion of the concepts studied in levels I-IV; thus it is essential that every student has completed the previous levels. This AP course will prepare students to successfully take the AP Exam and/or college placement tests. The emphasis will be on journal and essay writing, presentational and conversational skills, as well as reading and listening comprehension, grammatical accuracy and cultural competence. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "SPANISH LITERATURE AND CULTURE, AP (2134)",
        "weight": "full",
        "description": "Students who have not taken Sp IV, by teacher recommendation only. AP Spanish Literature approximates a 3rd year introductory literature course at the college level. Students read a variety of discourse The reading list includes works from the 17th-20th century literature of Spain and 19th and 20th century literature of Latin America and Latinos in the US. Students study the historical and cultural context of each work and analyze themes such as race, gender differences, social inequality, social corruption, and the perception of reality. Class discussions and written and oral presentations help students to think deeply, make judgments and support their opinions in Spanish while connecting these universal themes to their own lives and the present world. ",
        "id": "0",
        "semesters": "2",
        "classification": "AP"
      },
      {
        "credits": "2",
        "name": "INTERNATIONAL BACCALAUREATE: (2308) SPANISH B SL",
        "weight": "full",
        "description": "The emphasis of the Spanish B SL course is speaking, reading, writing, and listening. Students will communicate through listening and speaking in cultural contexts and within the students\u2019 own culture. Students will apply effective thought processes in order to comprehend appropriate reading materials and writing strategies. Students will recognize an awareness of the interrelatedness of languages, literatures, and cultures through Hispanic traditions. The primary language of instruction is Spanish. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      },
      {
        "credits": "2",
        "name": "FRENCH B SL (2308)",
        "weight": "full",
        "description": "In French B SL equal emphasis is placed on the skills of speaking, reading, writing and listening. Students will communicate through listening and speaking in various cultural contexts within various Francophone cultures and within the student\u2019s own culture. Students will learn to recognize and demonstrate an awareness of the interrelatedness of languages, literatures, and cultures through knowledge of the artifacts, expressions, and traditions of Francophone cultures. Lastly, students will demonstrate behaviors appropriate in the culture(s) of the Francophone world. ",
        "id": "0",
        "semesters": "2",
        "classification": "IB"
      }
    ]}
     ];

  allDeptsAsObjs = [];
  allCoursesAsObjs = [];
  
  constructor() { 
  }


 objectify()
 {

   for (let index = 0; index < this.allDepts.length;  index++) {
     var dept = new CHSDept(this.allDepts[index]);
     for (let courseIndex = 0; courseIndex < this.allDepts[index].allcourses.length; courseIndex++) {
      var deptCourse = new CHSCourse(this.allDepts[index].allcourses[courseIndex]);
       dept.allcourses.push(deptCourse);
       }
     this.allDeptsAsObjs = this.allDeptsAsObjs.concat(dept);
    }
    console.log("Open service:");
    console.log(this.allDeptsAsObjs);
   }

 getAllDeptsAsObjs(){
   return this.allDeptsAsObjs;
 }


  getAllDepartments() {
    return this.allDepts;
  }

  getDeptCourses(id) {
    // Convert id to a number
    console.log("The dept id is : " + id);
    return this.allDepts[id].allcourses;
  }

  getDeptCoursesAsObjs(id) {
    // Convert id to a number
    console.log("AS OBJS - The dept id is : " + id);
    console.log(this.allDeptsAsObjs[id].allcourses);
    return this.allDeptsAsObjs[id].allcourses;
  }

  getDeptName(id) {
    return this.allDepts[+id].name;
  }

  getDeptChair(id) {
    return this.allDepts[+id].chair;
  }

  getAllCourses() {
    this.allCourses = [];
    for (let index = 0; index < this.allDepts.length; index++) // foreach  
    {
      this.allCourses = this.allCourses.concat(this.allDepts[index].allcourses);
      //console.log("JSON OBJ : " + this.allDepts[index].allcourses);
      //console.log("Concatenated array:");
      //console.log(this.allCourses);
    }
    return this.allCourses;
  }
  getAllCoursesAsObjs() {
    this.allCoursesAsObjs = [];
    for (let index = 0; index < this.allDeptsAsObjs.length; index++) // foreach  
    {
      this.allCoursesAsObjs = this.allCoursesAsObjs.concat(this.allDeptsAsObjs[index].allcourses);
      //console.log("JSON OBJ : " + this.allDepts[index].allcourses);
      //console.log("Concatenated array:");
      //console.log(this.allCourses);
    }
    return this.allCoursesAsObjs;
  }
  getCoursesBasedOnCriteria(credits, weighted) {
    var coursesToFilter = this.getAllCourses();
    var filtered;
    filtered = coursesToFilter.filter(u =>
      u.credits == credits);
    return filtered;
  }
  getCoursesAsObjsBasedOnCriteria(credits, weighted) {
    var coursesToFilter = this.getAllCoursesAsObjs();
    console.log("Courses filter based on credits");
    console.log(coursesToFilter);
    var filtered;
    filtered = coursesToFilter.filter(u =>
      u.credits == credits);
      console.log("Credits :"+credits);
      console.log("In filtered courses:"+filtered);
    return filtered;
  }
  isLikedCourseDuplicate(course) {
    //for (let likedCourse of this.likedCourses) {
      for (let index = 0; index < this.likedCourses.length; index++) // foreach  
      {
      console.log("courses: " + course.id + " " + this.likedCourses[index].id);
      if (course.id === this.likedCourses[index].id) {
        return true;
      }
    }
    console.log("No duplicate");
    return false;
  }
 
  addLikedCourse(course) {
    let isDuplicate: boolean =  this.isLikedCourseDuplicate(course);
    console.log("isDuplicate:"+isDuplicate);
    if (isDuplicate) {
    console.log("DUPLICATE"+this.likedCourses);
    }
    else {
      this.likedCourses = this.likedCourses.concat(course);
      console.log(course);
    }
  }


  removeLikedCourse(course) {
    this.likedCourses = this.likedCourses.filter(obj => obj.id !== course.id);
    console.log(this.likedCourses);
  }
  
}
