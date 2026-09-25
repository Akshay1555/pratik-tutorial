export const courses = [
  {
    id: "neet",
    name: "NEET (UG)",
    fullName: "National Eligibility cum Entrance Test",
    tagline: "Your Gateway to a Career in Medicine and Healthcare",
    description:
      "NEET is the national level entrance examination for admission to MBBS, BDS and other undergraduate medical courses across India. It tests your understanding of Physics, Chemistry and Biology based on the Class 11 & 12 NCERT syllabus.",
    whyChoose: [
      "Single national level examination",
      "Opportunities across India",
      "Wide range of medical and allied healthcare courses",
      "Based on NCERT syllabus",
    ],
    patternBadges: [
      { icon: "Clock", label: "Time", value: "3 hrs" },
      { icon: "Monitor", label: "Mode of Exam", value: "Offline (OMR based)" },
      { icon: "BookOpen", label: "NCERT Based", value: "Syllabus" },
      { icon: "Trophy", label: "National Level", value: "Exam" },
    ],
    pattern: [
      { subject: "Physics", questions: 45, marksEach: "+4 / −1", total: 180 },
      { subject: "Chemistry", questions: 45, marksEach: "+4 / −1", total: 180 },
      { subject: "Biology (Botany + Zoology)", questions: 90, marksEach: "+4 / −1", total: 360 },
    ],
    patternTotal: { questions: 180, total: 720 },
    textbooks: [
      { subject: "Physics", label: "Class 11 & 12" },
      { subject: "Chemistry", label: "Class 11 & 12" },
      { subject: "Biology", label: "Class 11 & 12" },
    ],
    booksNote:
      "NCERT textbooks are the foundation for NEET preparation. We recommend thorough reading, understanding and regular revision.",
    cutoff: {
      title: "Year-Wise Cutoff for MBBS, BDS & AYUSH",
      subtitle:
        "Download the year-wise cutoff ranks and cutoff scores for MBBS, BDS and AYUSH (Maharashtra).",
      years: [
        { label: "2024 - 25", note: "MBBS, BDS & AYUSH Cutoff", available: true },
        { label: "2025 - 26", note: "MBBS, BDS & AYUSH Cutoff", available: true },
        { label: "2026 - 27", note: "MBBS, BDS & AYUSH Cutoff", available: false },
      ],
    },
  },
  {
    id: "mht-cet",
    name: "MHT-CET (PCB)",
    fullName: "Maharashtra Common Entrance Test",
    tagline: "Your Pathway to Engineering, Pharmacy, Agriculture and More",
    description:
      "MHT-CET is a state level entrance examination conducted for admission to professional courses in Maharashtra, including Engineering, Pharmacy, Agriculture and other allied courses. The PCB group is a popular choice among students interested in healthcare and life sciences.",
    whyChoose: [
      "State level entrance examination",
      "Opportunities in Maharashtra",
      "Wide range of professional courses",
      "Based on HSC syllabus",
    ],
    patternBadges: [
      { icon: "Clock", label: "Time", value: "3 hrs" },
      { icon: "Monitor", label: "Mode of Exam", value: "Online (Computer Based)" },
      { icon: "Target", label: "No Negative", value: "Marking" },
      { icon: "Trophy", label: "National Level", value: "Exam" },
    ],
    pattern: [
      { subject: "Physics", questions: 50, marksEach: "+1", total: 50 },
      { subject: "Chemistry", questions: 50, marksEach: "+1", total: 50 },
      { subject: "Biology", questions: 100, marksEach: "+1", total: 100 },
    ],
    patternTotal: { questions: 200, total: 200 },
    textbooks: [
      { subject: "Physics", label: "Class 11 & 12" },
      { subject: "Chemistry", label: "Class 11 & 12" },
      { subject: "Biology", label: "Class 11 & 12" },
    ],
    booksNote:
      "HSC textbooks are essential for MHT-CET preparation. We recommend conceptual understanding and regular practice using the board syllabus.",
    cutoff: {
      title: "Year-Wise Cutoff for B.Pharm Course in Maharashtra",
      subtitle:
        "Download the year-wise cutoff ranks and cutoff scores for B.Pharm admissions in Maharashtra.",
      years: [
        { label: "2024 - 25", note: "B.Pharm Cutoff, Maharashtra", available: true },
        { label: "2025 - 26", note: "B.Pharm Cutoff, Maharashtra", available: true },
        { label: "2026 - 27", note: "B.Pharm Cutoff, Maharashtra", available: false },
      ],
    },
  },
];
