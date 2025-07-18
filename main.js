// ===== main.js =====

// --------- Navigation toggle for mobile ----------
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('show');
  });
}

// --------- Theme switcher ----------
const themeSelect = document.getElementById('theme-select');
if (themeSelect) {
  themeSelect.addEventListener('change', function () {
    switch (this.value) {
      case "light": document.documentElement.setAttribute('data-theme', 'light'); break;
      case "dark": document.documentElement.setAttribute('data-theme', 'dark'); break;
      default: document.documentElement.removeAttribute('data-theme');
    }
  });
}

// ===================== FILTERS & COURSES =====================
// Define language data by category
const languageData = {
  all: [
    "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "C#", "PHP", "Ruby", "Go", "Rust", "Kotlin",
    "Swift", "Dart", "SQL", "Bash", "Scala", "Haskell", "Elixir", "R", "C", "C++", "Perl"
  ],
  web: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "PHP", "Ruby"],
  mobile: ["Java", "Kotlin", "Swift", "Dart", "JavaScript"],
  backend: ["Python", "Java", "C#", "PHP", "Ruby", "Go", "Rust", "Kotlin", "TypeScript", "Node.js", "Scala", "Elixir", "C", "C++", "Perl"],
  datascience: ["Python", "R", "SQL", "Scala", "Julia", "Haskell"],
  devops: ["Bash", "Python", "Go", "Ruby", "Perl"],
  other: ["C", "C++", "Haskell", "Elixir", "Perl", "R", "Verilog"]
};

// ========== ADD YOUR FULL COURSES ARRAY HERE ==========
const courses = [
  // Place your course objects here (see your previous lists).
  // Example:

  
 {
    "title": "PHP For Backend",
    "category": "backend",
    "language": "PHP",
    "level": "advanced",
    "desc": "Build a desired backend using PHP.",
    "link": "php.html"
  },
  {
    "title": "HTML for Beginners",
    "category": "web",
    "language": "HTML",
    "level": "beginner",
    "desc": "Learn the fundamentals of HTML and how to build your first web page.",
    "link": "htm.html"
  },
  {
    "title": "Modern CSS Mastery",
    "category": "web",
    "language": "CSS",
    "level": "intermediate",
    "desc": "Take your web design to the next level with advanced CSS techniques.",
    "link": "css.html"
  },
  {
    "title": "JavaScript Crash Course",
    "category": "web",
    "language": "JavaScript",
    "level": "beginner",
    "desc": "A hands-on introduction to JavaScript programming for dynamic websites.",
    "link": "javascript.html"
  },
  {
    "title": "Backend with Python",
    "category": "backend",
    "language": "Python",
    "level": "intermediate",
    "desc": "Build scalable backends and APIs using Python frameworks like Django and Flask.",
    "link": "python.html"
  },
  {
    "title": "Data Science with R",
    "category": "datascience",
    "language": "R",
    "level": "intermediate",
    "desc": "Analyze and visualize data using R and its powerful libraries.",
    "link": "r.html"
  },
  {
    "title": "Mobile Apps with Kotlin",
    "category": "mobile",
    "language": "Kotlin",
    "level": "beginner",
    "desc": "Start developing Android apps with Kotlin, the official language for Android.",
    "link": "kotlin.html"
  },
  {
    "title": "Go for DevOps",
    "category": "devops",
    "language": "Go",
    "level": "advanced",
    "desc": "Automate systems and build efficient DevOps tools with Go.",
    "link": "go.html"
  },
  {
    "title": "Fullstack with TypeScript",
    "category": "web",
    "language": "TypeScript",
    "level": "intermediate",
    "desc": "Master TypeScript in both frontend and backend for robust apps.",
    "link": "typescript.html"
  },
  {
    "title": "Ruby on Rails Bootcamp",
    "category": "web",
    "language": "Ruby",
    "level": "beginner",
    "desc": "Create rapid web applications with Ruby on Rails.",
    "link": "ruby.html"
  },
  {
    "title": "C++ for High Performance",
    "category": "backend",
    "language": "C++",
    "level": "advanced",
    "desc": "Build high-performance applications and systems using C++.",
    "link": "cpp.html"
  },
  {
    "title": "Swift for iOS Development",
    "category": "mobile",
    "language": "Swift",
    "level": "beginner",
    "desc": "Learn to create beautiful iOS apps from scratch using Swift.",
    "link": "swift.html"
  },
  {
    "title": "C# for Enterprise Apps",
    "category": "backend",
    "language": "C#",
    "level": "intermediate",
    "desc": "Develop robust enterprise applications and services with C# and .NET.",
    "link": "csharp.html"
  },
  {
    "title": "Java Enterprise Essentials",
    "category": "backend",
    "language": "Java",
    "level": "advanced",
    "desc": "Master enterprise Java architectures and build scalable applications.",
    "link": "java.html"
  },
  {
    "title": "Scala Functional Programming",
    "category": "backend",
    "language": "Scala",
    "level": "advanced",
    "desc": "Dive into functional programming paradigms using Scala.",
    "link": "scala.html"
  },
  {
    "title": "Rust Systems Programming",
    "category": "backend",
    "language": "Rust",
    "level": "advanced",
    "desc": "Learn to build safe and fast systems software with Rust.",
    "link": "rust.html"
  },
  {
    "title": "Perl for Scripting",
    "category": "scripting",
    "language": "Perl",
    "level": "intermediate",
    "desc": "Automate tasks and process data efficiently using Perl scripts.",
    "link": "perl.html"
  },
  {
    "title": "Shell Scripting Basics",
    "category": "devops",
    "language": "Shell",
    "level": "beginner",
    "desc": "Automate command-line tasks and system administration with shell scripting.",
    "link": "shell.html"
  },
  {
    "title": "SQL for Data Analysis",
    "category": "datascience",
    "language": "SQL",
    "level": "beginner",
    "desc": "Query, analyze, and manipulate data using SQL.",
    "link": "sql.html"
  },
  {
    "title": "MATLAB for Engineers",
    "category": "datascience",
    "language": "MATLAB",
    "level": "intermediate",
    "desc": "Solve engineering and scientific problems using MATLAB.",
    "link": "matlab.html"
  },
  {
    "title": "Dart for Flutter Apps",
    "category": "mobile",
    "language": "Dart",
    "level": "beginner",
    "desc": "Build cross-platform mobile applications using Dart and Flutter.",
    "link": "dart.html"
  },
  {
    "title": "C for Systems Programming",
    "category": "backend",
    "language": "C",
    "level": "advanced",
    "desc": "Gain mastery over low-level programming and memory management with C.",
    "link": "c.html"
  },
  {
    "title": "F# for Functional Apps",
    "category": "backend",
    "language": "F#",
    "level": "intermediate",
    "desc": "Develop functional-first applications and services using F#.",
    "link": "fhash.html"
  },
  {
    "title": "Haskell for Pure Functions",
    "category": "backend",
    "language": "Haskell",
    "level": "advanced",
    "desc": "Explore pure functional programming and type systems with Haskell.",
    "link": "haskell.html"
  },
  {
    "title": "Elixir for Scalable Web",
    "category": "backend",
    "language": "Elixir",
    "level": "intermediate",
    "desc": "Build scalable and fault-tolerant web apps with Elixir and Phoenix.",
    "link": "elixir.html"
  },
  {
    "title": "Objective-C for iOS",
    "category": "mobile",
    "language": "Objective-C",
    "level": "advanced",
    "desc": "Develop legacy and advanced iOS/macOS apps using Objective-C.",
    "link": "objectivec.html"
  },
  {
    "title": "PowerShell for Admins",
    "category": "devops",
    "language": "PowerShell",
    "level": "intermediate",
    "desc": "Automate Windows administration tasks with PowerShell scripts.",
    "link": "powershell.html"
  },
  {
    "title": "Groovy for Automation",
    "category": "devops",
    "language": "Groovy",
    "level": "intermediate",
    "desc": "Streamline build and automation pipelines using Groovy.",
    "link": "groovy.html"
  },
  {
    "title": "Lua Game Scripting",
    "category": "game",
    "language": "Lua",
    "level": "beginner",
    "desc": "Start scripting games and applications with Lua.",
    "link": "lua.html"
  },
  {
    "title": "Julia for Scientific Computing",
    "category": "datascience",
    "language": "Julia",
    "level": "intermediate",
    "desc": "Perform high-performance scientific computing with Julia.",
    "link": "julia.html"
  },
  {
    "title": "Assembly Language Fundamentals",
    "category": "backend",
    "language": "Assembly",
    "level": "advanced",
    "desc": "Understand low-level programming and architecture with Assembly language.",
    "link": "assembly.html"
  },
  {
    "title": "SAS for Data Analytics",
    "category": "datascience",
    "language": "SAS",
    "level": "intermediate",
    "desc": "Analyze large datasets and generate insights using SAS.",
    "link": "sas.html"
  },
  {
    "title": "COBOL for Business Apps",
    "category": "backend",
    "language": "COBOL",
    "level": "advanced",
    "desc": "Maintain and develop business systems with COBOL.",
    "link": "cobol.html"
  },
  {
    "title": "Fortran for Scientific Research",
    "category": "datascience",
    "language": "Fortran",
    "level": "advanced",
    "desc": "Tackle computational science problems with Fortran.",
    "link": "fortran.html"
  },
  {
    "title": "VB.NET Application Development",
    "category": "backend",
    "language": "VB.NET",
    "level": "intermediate",
    "desc": "Develop Windows applications and services using VB.NET.",
    "link": "vbnet.html"
  },
  {
    "title": "Scratch Coding for Kids",
    "category": "web",
    "language": "Scratch",
    "level": "beginner",
    "desc": "Learn programming basics with fun, visual blocks using Scratch.",
    "link": "scratch.html"
  },
  {
    "title": "Delphi for Desktop Apps",
    "category": "backend",
    "language": "Delphi",
    "level": "advanced",
    "desc": "Build powerful desktop applications with Delphi.",
    "link": "delphi.html"
  },
  {
    "title": "Pascal Programming Basics",
    "category": "backend",
    "language": "Pascal",
    "level": "beginner",
    "desc": "Get started with structured programming using Pascal.",
    "link": "pascal.html"
  },
  {
    "title": "ABAP for SAP Development",
    "category": "backend",
    "language": "ABAP",
    "level": "advanced",
    "desc": "Customize and extend SAP systems with ABAP programming.",
    "link": "abap.html"
  },
  {
    "title": "Prolog Logic Programming",
    "category": "backend",
    "language": "Prolog",
    "level": "intermediate",
    "desc": "Solve problems with logic programming and artificial intelligence in Prolog.",
    "link": "prolog.html"
  },
  {
    "title": "Erlang for Concurrent Systems",
    "category": "backend",
    "language": "Erlang",
    "level": "advanced",
    "desc": "Build concurrent and distributed systems with Erlang.",
    "link": "erlang.html"
  },
  {
    "title": "Scheme Functional Programming",
    "category": "backend",
    "language": "Scheme",
    "level": "intermediate",
    "desc": "Learn functional programming concepts with Scheme.",
    "link": "scheme.html"
  },
  {
    "title": "Visual Basic Essentials",
    "category": "backend",
    "language": "Visual Basic",
    "level": "beginner",
    "desc": "Learn the basics of application development with Visual Basic.",
    "link": "visualbasic.html"
  },
  {
    "title": "Ada for Safety-Critical Systems",
    "category": "backend",
    "language": "Ada",
    "level": "advanced",
    "desc": "Develop reliable systems for aviation, defense, and more with Ada.",
    "link": "ada.html"
  },
  {
    "title": "PL/SQL for Oracle Databases",
    "category": "datascience",
    "language": "PL/SQL",
    "level": "intermediate",
    "desc": "Manage and optimize Oracle databases using PL/SQL.",
    "link": "plsql.html"
  },
  {
    "title": "D for Modern Applications",
    "category": "backend",
    "language": "D",
    "level": "intermediate",
    "desc": "Build efficient and fast applications with the D programming language.",
    "link": "d.html"
  },
  {
    "title": "Classic Lisp Programming",
    "category": "backend",
    "language": "Lisp",
    "level": "intermediate",
    "desc": "Explore symbolic computation and AI with Lisp.",
    "link": "lisp.html"
  },
  {
    "title": "Elm for Frontend Web Apps",
    "category": "web",
    "language": "Elm",
    "level": "beginner",
    "desc": "Build reliable and maintainable frontend apps with Elm.",
    "link": "elm.html"
  },
  {
    "title": "Crystal for Fast APIs",
    "category": "backend",
    "language": "Crystal",
    "level": "intermediate",
    "desc": "Write fast, type-safe backend services with Crystal.",
    "link": "crystal.html"
  },
  {
    "title": "Nim for Efficient Coding",
    "category": "backend",
    "language": "Nim",
    "level": "intermediate",
    "desc": "Create efficient, cross-platform software with Nim.",
    "link": "nim.html"
  },
  {
    "title": "OCaml for Functional Systems",
    "category": "backend",
    "language": "OCaml",
    "level": "advanced",
    "desc": "Develop robust systems with OCaml's powerful type system.",
    "link": "ocaml.html"
  },
  {
    "title": "AWK for Text Processing",
    "category": "scripting",
    "language": "AWK",
    "level": "beginner",
    "desc": "Streamline text processing and reporting with AWK.",
    "link": "awk.html"
  },

  {
    "title": "Solidity Smart Contracts",
    "category": "blockchain",
    "language": "Solidity",
    "level": "intermediate",
    "desc": "Design and deploy decentralized applications and smart contracts on Ethereum blockchain using Solidity.",
    "link": "solidity.html"
  },
  {
    "title": "VHDL for Hardware Design",
    "category": "hardware",
    "language": "VHDL",
    "level": "advanced",
    "desc": "Model, simulate, and implement digital systems using VHDL for FPGA and ASIC.",
    "link": "vhdl.html"
  },
  {
    "title": "Verilog Digital Design",
    "category": "hardware",
    "language": "Verilog",
    "level": "advanced",
    "desc": "Design and simulate digital circuits and systems using Verilog HDL.",
    "link": "verilog.html"
  },
  {
    "title": "Clojure Functional Development",
    "category": "backend",
    "language": "Clojure",
    "level": "intermediate",
    "desc": "Harness the power of functional programming for modern applications with Clojure.",
    "link": "clojure.html"
  },
  {
    "title": "Racket Programming Fundamentals",
    "category": "backend",
    "language": "Racket",
    "level": "beginner",
    "desc": "Explore functional and academic programming with Racket.",
    "link": "racket.html"
  },
  {
    "title": "Smalltalk Object-Oriented Programming",
    "category": "backend",
    "language": "Smalltalk",
    "level": "beginner",
    "desc": "Discover pure object-oriented programming with Smalltalk.",
    "link": "smalltalk.html"
  },
  {
    "title": "Tcl Scripting Essentials",
    "category": "scripting",
    "language": "Tcl",
    "level": "beginner",
    "desc": "Automate tasks and embed scripting in applications using Tcl.",
    "link": "tcl.html"
  },
  {
    "title": "ActionScript for Flash Apps",
    "category": "web",
    "language": "ActionScript",
    "level": "beginner",
    "desc": "Create interactive web and multimedia content with ActionScript.",
    "link": "actionscript.html"
  },
  {
    "title": "CoffeeScript for JavaScript Developers",
    "category": "web",
    "language": "CoffeeScript",
    "level": "beginner",
    "desc": "Write concise and clear JavaScript code using CoffeeScript syntax.",
    "link": "coffeescript.html"
  },
  {
    "title": "XSLT for XML Transformations",
    "category": "web",
    "language": "XSLT",
    "level": "intermediate",
    "desc": "Transform and manipulate XML documents efficiently using XSLT.",
    "link": "xslt.html"
  },
  {
    "title": "Bash Scripting Advanced",
    "category": "devops",
    "language": "Bash",
    "level": "intermediate",
    "desc": "Master automation and complex system administration using Bash scripts.",
    "link": "bash.html"
  },
  {
    "title": "LabVIEW for Engineers",
    "category": "hardware",
    "language": "LabVIEW",
    "level": "intermediate",
    "desc": "Develop graphical programs for data acquisition and instrument control with LabVIEW.",
    "link": "labview.html"
  },
  {
    "title": "Q# Quantum Programming",
    "category": "quantum",
    "language": "Q#",
    "level": "beginner",
    "desc": "Dive into quantum computing by writing quantum algorithms with Q#.",
    "link": "qsharp.html"
  },
  {
    "title": "Haxe Cross-Platform Apps",
    "category": "web",
    "language": "Haxe",
    "level": "intermediate",
    "desc": "Build cross-platform apps and games efficiently with Haxe.",
    "link": "haxe.html"
  },
  {
    "title": "Logo Programming for Kids",
    "category": "education",
    "language": "Logo",
    "level": "beginner",
    "desc": "Introduce children to programming concepts with Logo and turtle graphics.",
    "link": "logo.html"
  },
  {
    "title": "Maple for Mathematics",
    "category": "datascience",
    "language": "Maple",
    "level": "intermediate",
    "desc": "Solve advanced mathematical problems and visualize data using Maple.",
    "link": "maple.html"
  },
  {
    "title": "PostScript Document Programming",
    "category": "scripting",
    "language": "PostScript",
    "level": "advanced",
    "desc": "Program documents, graphics, and printers using PostScript.",
    "link": "postscript.html"
  },
  {
    "title": "Forth Embedded Systems",
    "category": "backend",
    "language": "Forth",
    "level": "advanced",
    "desc": "Develop compact and efficient embedded systems using Forth.",
    "link": "forth.html"
  },
  {
    "title": "Simula Object-Oriented Pioneers",
    "category": "backend",
    "language": "Simula",
    "level": "advanced",
    "desc": "Explore the origins of object-oriented programming with Simula.",
    "link": "simula.html"
  },
  {
    "title": "ReasonML Typed JS",
    "category": "web",
    "language": "ReasonML",
    "level": "intermediate",
    "desc": "Develop type-safe web and backend apps with ReasonML.",
    "link": "reasonml.html"
  },
  {
    "title": "FoxPro Database Programming",
    "category": "datascience",
    "language": "FoxPro",
    "level": "intermediate",
    "desc": "Create and manage databases with FoxPro.",
    "link": "foxpro.html"
  },
  {
    "title": "Eiffel for Reliable Software",
    "category": "backend",
    "language": "Eiffel",
    "level": "advanced",
    "desc": "Develop robust and maintainable software systems with Eiffel.",
    "link": "eiffel.html"
  },

  {
    "title": "Apex for Salesforce Development",
    "category": "cloud",
    "language": "Apex",
    "level": "intermediate",
    "desc": "Create custom business logic and automate workflows on Salesforce using Apex.",
    "link": "apex.html"
  },
  {
    "title": "ABCL for Japanese Lisp",
    "category": "backend",
    "language": "ABCL",
    "level": "advanced",
    "desc": "Explore advanced Lisp programming with the ABCL dialect, popular in Japan.",
    "link": "abcl.html"
  },
  {
    "title": "Chapel Parallel Programming",
    "category": "backend",
    "language": "Chapel",
    "level": "advanced",
    "desc": "Write scalable parallel applications for high-performance computing with Chapel.",
    "link": "chapel.html"
  },
  {
    "title": "OpenCL for GPU Computing",
    "category": "datascience",
    "language": "OpenCL",
    "level": "advanced",
    "desc": "Harness the power of GPUs and multicore CPUs for compute-intensive apps using OpenCL.",
    "link": "opencl.html"
  },
  {
    "title": "Vala for GNOME Apps",
    "category": "web",
    "language": "Vala",
    "level": "beginner",
    "desc": "Develop modern GNOME desktop applications with Vala.",
    "link": "vala.html"
  },
  {
    "title": "Modula-2 Structured Programming",
    "category": "backend",
    "language": "Modula-2",
    "level": "intermediate",
    "desc": "Learn structured and modular software design with Modula-2.",
    "link": "modula2.html"
  },
  {
    "title": "Rebol Lightweight Scripting",
    "category": "scripting",
    "language": "Rebol",
    "level": "beginner",
    "desc": "Build lightweight, expressive scripts for data exchange and automation using Rebol.",
    "link": "rebol.html"
  },
  {
    "title": "PureBasic Desktop Development",
    "category": "backend",
    "language": "PureBasic",
    "level": "beginner",
    "desc": "Create fast and portable desktop applications with PureBasic.",
    "link": "purebasic.html"
  },
  {
    "title": "AutoHotkey Automation Scripts",
    "category": "scripting",
    "language": "AutoHotkey",
    "level": "beginner",
    "desc": "Automate repetitive tasks and customize Windows using AutoHotkey scripts.",
    "link": "autohotkey.html"
  },
  {
    "title": "Pike for Network Programming",
    "category": "backend",
    "language": "Pike",
    "level": "intermediate",
    "desc": "Develop scalable network services and applications with Pike.",
    "link": "pike.html"
  },
  {
    "title": "Xtend for JVM Projects",
    "category": "backend",
    "language": "Xtend",
    "level": "intermediate",
    "desc": "Write expressive and concise code for the JVM using Xtend.",
    "link": "xtend.html"
  },
  {
    "title": "NATURAL for Business Applications",
    "category": "backend",
    "language": "NATURAL",
    "level": "advanced",
    "desc": "Develop business applications on mainframe systems using NATURAL.",
    "link": "natural.html"
  },
  {
    "title": "Dylan for Multi-Paradigm Dev",
    "category": "backend",
    "language": "Dylan",
    "level": "intermediate",
    "desc": "Combine OOP and functional programming in commercial software projects with Dylan.",
    "link": "dylan.html"
  },
  {
    "title": "J for Array Programming",
    "category": "datascience",
    "language": "J",
    "level": "advanced",
    "desc": "Perform complex data analysis and manipulation with concise syntax using J.",
    "link": "j.html"
  },
  {
    "title": "Kotlin Native for Cross-Platform",
    "category": "mobile",
    "language": "Kotlin Native",
    "level": "intermediate",
    "desc": "Build high-performance native apps for multiple platforms using Kotlin Native.",
    "link": "kotlinnative.html"
  },
  {
    "title": "Mercury Logic Programming",
    "category": "backend",
    "language": "Mercury",
    "level": "advanced",
    "desc": "Write reliable and efficient logic-based applications with Mercury.",
    "link": "mercury.html"
  },
  {
    "title": "Seed7 for General Programming",
    "category": "backend",
    "language": "Seed7",
    "level": "intermediate",
    "desc": "Develop general-purpose applications with high abstraction using Seed7.",
    "link": "seed7.html"
  },
  {
    "title": "Max/MSP Visual Audio Programming",
    "category": "media",
    "language": "Max/MSP",
    "level": "beginner",
    "desc": "Create interactive music and multimedia software with Max/MSP's visual language.",
    "link": "maxmsp.html"
  },
  {
    "title": "Idris Type-Driven Development",
    "category": "backend",
    "language": "Idris",
    "level": "advanced",
    "desc": "Leverage dependent types for robust software with Idris.",
    "link": "idris.html"
  },
  {
    "title": "QlikView Scripting for BI",
    "category": "datascience",
    "language": "QlikView",
    "level": "intermediate",
    "desc": "Create business intelligence dashboards and analyses with QlikView scripting.",
    "link": "qlikview.html"
  },
  {
    "title": "Mathematica for Symbolic Computation",
    "category": "datascience",
    "language": "Mathematica",
    "level": "advanced",
    "desc": "Solve symbolic mathematics and visualize results with Mathematica.",
    "link": "mathematica.html"
  },
  {
    "title": "AWK Advanced Text Processing",
    "category": "scripting",
    "language": "AWK",
    "level": "intermediate",
    "desc": "Master advanced text processing and reporting with AWK.",
    "link": "awk_advanced.html"
  },
  {
    "title": "GeneXus for Rapid Development",
    "category": "backend",
    "language": "GeneXus",
    "level": "intermediate",
    "desc": "Generate applications automatically from high-level specifications using GeneXus.",
    "link": "genexus.html"
  },
  {
    "title": "ColdFusion for Web Apps",
    "category": "web",
    "language": "ColdFusion",
    "level": "intermediate",
    "desc": "Build dynamic and interactive websites quickly with ColdFusion.",
    "link": "coldfusion.html"
  },
  {
    "title": "Hack for Facebook Backends",
    "category": "backend",
    "language": "Hack",
    "level": "intermediate",
    "desc": "Build reliable backends with static typing using Hack, a language from Facebook.",
    "link": "hack.html"
  },
  {
    "title": "Squirrel for Embedded Games",
    "category": "game",
    "language": "Squirrel",
    "level": "beginner",
    "desc": "Develop lightweight embedded scripts for games and applications with Squirrel.",
    "link": "squirrel.html"
  },
  {
    "title": "Io Prototype-Based Programming",
    "category": "backend",
    "language": "Io",
    "level": "intermediate",
    "desc": "Explore prototype-based object-oriented programming with Io.",
    "link": "io.html"
  },
  {
    "title": "Processing for Visual Arts",
    "category": "media",
    "language": "Processing",
    "level": "beginner",
    "desc": "Create visual art and interactive installations using Processing.",
    "link": "processing.html"
  },
  {
    "title": "Zig for Systems Programming",
    "category": "backend",
    "language": "Zig",
    "level": "intermediate",
    "desc": "Write robust and efficient low-level code with the Zig programming language.",
    "link": "zig.html"
  },
  {
    "title": "SuperCollider for Audio Synthesis",
    "category": "media",
    "language": "SuperCollider",
    "level": "intermediate",
    "desc": "Design audio synthesis and algorithmic compositions using SuperCollider.",
    "link": "supercollider.html"
  },
  {
    "title": "APL Array Programming",
    "category": "datascience",
    "language": "APL",
    "level": "advanced",
    "desc": "Perform concise and powerful data analysis with APL's unique notation.",
    "link": "apl.html"
  },
  {
    "title": "Fantom for Portable Apps",
    "category": "backend",
    "language": "Fantom",
    "level": "intermediate",
    "desc": "Create portable apps that run on multiple platforms with Fantom.",
    "link": "fantom.html"
  },
  {
    "title": "QBasic Programming Fundamentals",
    "category": "backend",
    "language": "QBasic",
    "level": "beginner",
    "desc": "Learn the basics of programming and logic using QBasic.",
    "link": "qbasic.html"
  },
  {
    "title": "Red for Fast Prototyping",
    "category": "backend",
    "language": "Red",
    "level": "intermediate",
    "desc": "Rapidly prototype and build cross-platform apps with Red.",
    "link": "red.html"
  },
  {
    "title": "Harbour for Clipper Migration",
    "category": "backend",
    "language": "Harbour",
    "level": "intermediate",
    "desc": "Modernize Clipper applications and develop new ones with Harbour.",
    "link": "harbour.html"
  },
  {
    "title": "IoT with Node-RED",
    "category": "iot",
    "language": "Node-RED",
    "level": "beginner",
    "desc": "Build IoT flows and integrate devices easily with Node-RED's visual programming.",
    "link": "nodered.html"
  },
  {
    "title": "PL/I for Mainframes",
    "category": "backend",
    "language": "PL/I",
    "level": "advanced",
    "desc": "Develop robust enterprise software for mainframes using PL/I.",
    "link": "pli.html"
  },
  {
    "title": "Simulink for System Modeling",
    "category": "hardware",
    "language": "Simulink",
    "level": "intermediate",
    "desc": "Model, simulate, and analyze dynamic systems using Simulink.",
    "link": "simulink.html"
  },
  {
    "title": "Vyper Smart Contracts",
    "category": "blockchain",
    "language": "Vyper",
    "level": "intermediate",
    "desc": "Develop secure and auditable smart contracts on Ethereum with Vyper.",
    "link": "vyper.html"
  },
  {
    "title": "Turing Programming Concepts",
    "category": "backend",
    "language": "Turing",
    "level": "beginner",
    "desc": "Explore introductory programming concepts using the Turing language.",
    "link": "turing.html"
  },
  {
    "title": "OCaml ReasonML for Modern Apps",
    "category": "web",
    "language": "ReasonML",
    "level": "intermediate",
    "desc": "Write type-safe and expressive web apps with ReasonML, a friendly syntax for OCaml.",
    "link": "reasonml_2.html"
  },
  {
    "title": "QB64 for Modern BASIC",
    "category": "backend",
    "language": "QB64",
    "level": "beginner",
    "desc": "Develop cross-platform BASIC applications using QB64.",
    "link": "qb64.html"
  },
  {
    "title": "XQuery for XML Data",
    "category": "web",
    "language": "XQuery",
    "level": "intermediate",
    "desc": "Query and transform XML data sources efficiently with XQuery.",
    "link": "xquery.html"
  },
  {
    "title": "Futhark for GPU Arrays",
    "category": "datascience",
    "language": "Futhark",
    "level": "advanced",
    "desc": "Write high-performance array code that runs on GPUs with Futhark.",
    "link": "futhark.html"
  },
  {
    "title": "Janet Scripting for Embedding",
    "category": "scripting",
    "language": "Janet",
    "level": "intermediate",
    "desc": "Embed a modern Lisp-like scripting language into your apps using Janet.",
    "link": "janet.html"
  },
  {
    "title": "Elmish for Functional UIs",
    "category": "web",
    "language": "Elmish",
    "level": "intermediate",
    "desc": "Build functional user interfaces in .NET with Elmish architecture.",
    "link": "elmish.html"
  },
  {
    "title": "LiveScript for JavaScript Lovers",
    "category": "web",
    "language": "LiveScript",
    "level": "beginner",
    "desc": "Write succinct and expressive JavaScript with LiveScript.",
    "link": "livescript.html"
  },
  {
    "title": "RPG for IBM iSeries",
    "category": "backend",
    "language": "RPG",
    "level": "advanced",
    "desc": "Maintain and develop business systems on IBM iSeries with RPG.",
    "link": "rpg.html"
  },
  {
    "title": "Gosu for JVM Applications",
    "category": "backend",
    "language": "Gosu",
    "level": "intermediate",
    "desc": "Develop expressive and type-safe applications for the JVM using Gosu.",
    "link": "gosu.html"
  },
  {
    "title": "Stata for Statistical Analysis",
    "category": "datascience",
    "language": "Stata",
    "level": "intermediate",
    "desc": "Analyze data and develop statistical models with Stata programming.",
    "link": "stata.html"
  },
  {
    "title": "UnrealScript for Game Development",
    "category": "game",
    "language": "UnrealScript",
    "level": "intermediate",
    "desc": "Create immersive games for Unreal Engine 3 with UnrealScript.",
    "link": "unrealscript.html"
  },
  {
    "title": "Bosque for Regularized Programming",
    "category": "backend",
    "language": "Bosque",
    "level": "intermediate",
    "desc": "Write regularized, error-free code with the Bosque language by Microsoft.",
    "link": "bosque.html"
  },
  {
    "title": "Monkey for Indie Game Dev",
    "category": "game",
    "language": "Monkey",
    "level": "beginner",
    "desc": "Develop cross-platform indie games quickly with Monkey.",
    "link": "monkey.html"
  },

  {
    "title": "Algol for Algorithmic Programming",
    "category": "backend",
    "language": "Algol",
    "level": "advanced",
    "desc": "Explore the foundations of structured programming and algorithms with Algol.",
    "link": "algol.html"
  },
  {
    "title": "Ballerina for Cloud-Native Apps",
    "category": "cloud",
    "language": "Ballerina",
    "level": "intermediate",
    "desc": "Build cloud-native, integration-ready applications effortlessly with Ballerina.",
    "link": "ballerina.html"
  },
  {
    "title": "BlitzMax for Game Development",
    "category": "game",
    "language": "BlitzMax",
    "level": "beginner",
    "desc": "Create fast cross-platform games and multimedia apps with BlitzMax.",
    "link": "blitzmax.html"
  },
  {
    "title": "Boo for .NET Scripting",
    "category": "backend",
    "language": "Boo",
    "level": "intermediate",
    "desc": "Leverage Python-like syntax for .NET projects with Boo.",
    "link": "boo.html"
  },
  {
    "title": "Clipper for Database Apps",
    "category": "datascience",
    "language": "Clipper",
    "level": "intermediate",
    "desc": "Develop and maintain database management applications using Clipper.",
    "link": "clipper.html"
  },
  {
    "title": "DCL for VMS Automation",
    "category": "scripting",
    "language": "DCL",
    "level": "intermediate",
    "desc": "Automate tasks on OpenVMS with the Digital Command Language (DCL).",
    "link": "dcl.html"
  },
  {
    "title": "Euphoria for Rapid Prototyping",
    "category": "backend",
    "language": "Euphoria",
    "level": "beginner",
    "desc": "Write clear and simple code for quick prototyping using Euphoria.",
    "link": "euphoria.html"
  },
  {
    "title": "F* for Program Verification",
    "category": "backend",
    "language": "F*",
    "level": "advanced",
    "desc": "Prove program correctness and safety with the F* verification language.",
    "link": "fstar.html"
  },
  {
    "title": "Factor for Stack Programming",
    "category": "backend",
    "language": "Factor",
    "level": "intermediate",
    "desc": "Explore powerful stack-based programming with Factor.",
    "link": "factor.html"
  },
  {
    "title": "GAP for Group Theory",
    "category": "datascience",
    "language": "GAP",
    "level": "intermediate",
    "desc": "Perform advanced computations in algebra and discrete mathematics with GAP.",
    "link": "gap.html"
  },
  {
    "title": "GML for GameMaker Studio",
    "category": "game",
    "language": "GML",
    "level": "beginner",
    "desc": "Develop 2D and 3D games using the GameMaker Language (GML).",
    "link": "gml.html"
  },
  {
    "title": "Icon for String Processing",
    "category": "scripting",
    "language": "Icon",
    "level": "intermediate",
    "desc": "Handle complex string and data processing tasks using the Icon language.",
    "link": "icon.html"
  },
  {
    "title": "IoTivity for IoT Interoperability",
    "category": "iot",
    "language": "IoTivity",
    "level": "intermediate",
    "desc": "Enable interoperability among IoT devices using IoTivity.",
    "link": "iotivity.html"
  },
  {
    "title": "JAL for Embedded Microcontrollers",
    "category": "hardware",
    "language": "JAL",
    "level": "beginner",
    "desc": "Program PIC microcontrollers easily with Just Another Language (JAL).",
    "link": "jal.html"
  },
  {
    "title": "KRL for Rule-Based Automation",
    "category": "cloud",
    "language": "KRL",
    "level": "intermediate",
    "desc": "Automate cloud and IoT interactions with Kinetic Rule Language (KRL).",
    "link": "krl.html"
  },
  {
    "title": "Ladder Logic for PLCs",
    "category": "hardware",
    "language": "Ladder Logic",
    "level": "intermediate",
    "desc": "Design industrial automation and control systems with Ladder Logic.",
    "link": "ladderlogic.html"
  },
  {
    "title": "Lingo for Multimedia Authoring",
    "category": "media",
    "language": "Lingo",
    "level": "intermediate",
    "desc": "Create interactive multimedia and games with Lingo scripting.",
    "link": "lingo.html"
  },
  {
    "title": "ML for Type Inference",
    "category": "backend",
    "language": "ML",
    "level": "advanced",
    "desc": "Master functional programming and type inference with ML.",
    "link": "ml.html"
  },
  {
    "title": "MonkeyX for Indie Games",
    "category": "game",
    "language": "MonkeyX",
    "level": "beginner",
    "desc": "Develop indie and mobile games efficiently with MonkeyX.",
    "link": "monkeyx.html"
  },
  {
    "title": "MQL4 for MetaTrader Automation",
    "category": "finance",
    "language": "MQL4",
    "level": "intermediate",
    "desc": "Automate forex trading strategies and indicators using MQL4.",
    "link": "mql4.html"
  },
  {
    "title": "Nimrod (Nim) Early Programming",
    "category": "backend",
    "language": "Nimrod",
    "level": "beginner",
    "desc": "Explore the early days of Nim (formerly Nimrod) for fast native code.",
    "link": "nimrod.html"
  },
  {
    "title": "Oberon for Modular Programming",
    "category": "backend",
    "language": "Oberon",
    "level": "intermediate",
    "desc": "Build modular and efficient software systems with Oberon.",
    "link": "oberon.html"
  },
  {
    "title": "OpenEdge ABL for Business Apps",
    "category": "backend",
    "language": "OpenEdge ABL",
    "level": "intermediate",
    "desc": "Develop scalable business applications using OpenEdge Advanced Business Language.",
    "link": "openedgeabl.html"
  },
  {
    "title": "Parrot Assembly for VMs",
    "category": "backend",
    "language": "Parrot Assembly",
    "level": "advanced",
    "desc": "Target the Parrot virtual machine for dynamic languages with Parrot Assembly.",
    "link": "parrotassembly.html"
  },
  {
    "title": "PL/M for Embedded Systems",
    "category": "hardware",
    "language": "PL/M",
    "level": "advanced",
    "desc": "Program embedded systems and microprocessors with PL/M.",
    "link": "plm.html"
  },
  {
    "title": "POP-11 for AI Research",
    "category": "datascience",
    "language": "POP-11",
    "level": "intermediate",
    "desc": "Prototype artificial intelligence systems using POP-11.",
    "link": "pop11.html"
  },
  {
    "title": "PureScript Functional Frontends",
    "category": "web",
    "language": "PureScript",
    "level": "intermediate",
    "desc": "Build robust, type-safe frontend apps with PureScript.",
    "link": "purescript.html"
  },
  {
    "title": "Q for Financial Data Analysis",
    "category": "finance",
    "language": "Q",
    "level": "advanced",
    "desc": "Analyze and query large time-series data sets with Q language.",
    "link": "q.html"
  },
  {
    "title": "REBOL for Distributed Apps",
    "category": "backend",
    "language": "REBOL",
    "level": "intermediate",
    "desc": "Develop distributed internet applications with REBOL.",
    "link": "rebol2.html"
  },
  {
    "title": "Ring for Scripting and Apps",
    "category": "backend",
    "language": "Ring",
    "level": "beginner",
    "desc": "Write simple scripts and full applications using the Ring language.",
    "link": "ring.html"
  },
  {
    "title": "Sather for OOP Research",
    "category": "backend",
    "language": "Sather",
    "level": "intermediate",
    "desc": "Experiment with object-oriented programming and algorithms using Sather.",
    "link": "sather.html"
  },
  {
    "title": "ScratchJr for Young Programmers",
    "category": "education",
    "language": "ScratchJr",
    "level": "beginner",
    "desc": "Introduce preschoolers to coding with ScratchJr's visual language.",
    "link": "scratchjr.html"
  },
  {
    "title": "Seed for WebKit Extensions",
    "category": "web",
    "language": "Seed",
    "level": "intermediate",
    "desc": "Extend WebKit browsers and build web apps using Seed scripting.",
    "link": "seed.html"
  },
  {
    "title": "Self for Prototype OOP",
    "category": "backend",
    "language": "Self",
    "level": "advanced",
    "desc": "Explore prototype-based object-oriented programming with Self.",
    "link": "self.html"
  },
  {
    "title": "Simscript for Simulation",
    "category": "datascience",
    "language": "Simscript",
    "level": "advanced",
    "desc": "Model complex systems and processes using Simscript.",
    "link": "simscript.html"
  },
  {
    "title": "SLang for S-Lang Library",
    "category": "backend",
    "language": "SLang",
    "level": "intermediate",
    "desc": "Automate text-based applications and scientific computing with SLang.",
    "link": "slang.html"
  },
  {
    "title": "SPARK Ada for Verified Systems",
    "category": "backend",
    "language": "SPARK Ada",
    "level": "advanced",
    "desc": "Create high-assurance and safety-critical software with SPARK Ada.",
    "link": "sparkada.html"
  },
  {
    "title": "SPSS Syntax for Statistics",
    "category": "datascience",
    "language": "SPSS",
    "level": "intermediate",
    "desc": "Automate statistical analyses and reporting with SPSS Syntax.",
    "link": "spss.html"
  },
  {
    "title": "Standard ML for Type Safety",
    "category": "backend",
    "language": "Standard ML",
    "level": "advanced",
    "desc": "Master robust type systems and functional programming with Standard ML.",
    "link": "sml.html"
  },
  {
    "title": "SuperBASIC for Retro Computing",
    "category": "backend",
    "language": "SuperBASIC",
    "level": "beginner",
    "desc": "Relive the classic era of computing with SuperBASIC.",
    "link": "superbasic.html"
  },
  {
    "title": "Tcl/Tk for GUI Scripting",
    "category": "web",
    "language": "Tcl/Tk",
    "level": "intermediate",
    "desc": "Build cross-platform GUIs and automate tasks using Tcl/Tk.",
    "link": "tcltk.html"
  },
  {
    "title": "Terra for Low-Level Metaprogramming",
    "category": "backend",
    "language": "Terra",
    "level": "advanced",
    "desc": "Perform low-level code generation in scientific and graphics applications with Terra.",
    "link": "terra.html"
  },
  {
    "title": "Unicon for High-Level Scripting",
    "category": "scripting",
    "language": "Unicon",
    "level": "intermediate",
    "desc": "Combine goal-directed evaluation with high-level scripting using Unicon.",
    "link": "unicon.html"
  },
  {
    "title": "Vyper (Pythonic Smart Contracts)",
    "category": "blockchain",
    "language": "Vyper",
    "level": "intermediate",
    "desc": "Develop secure Ethereum smart contracts with the Python-inspired Vyper language.",
    "link": "vyper2.html"
  },
  {
    "title": "Wolfram Language for Computation",
    "category": "datascience",
    "language": "Wolfram",
    "level": "advanced",
    "desc": "Use symbolic computation and knowledge-based programming in Wolfram Language.",
    "link": "wolfram.html"
  },
  {
    "title": "Xojo for Cross-Platform Apps",
    "category": "backend",
    "language": "Xojo",
    "level": "intermediate",
    "desc": "Build cross-platform desktop, web, and mobile apps with Xojo.",
    "link": "xojo.html"
  },
  {
    "title": "Yorick for Scientific Computing",
    "category": "datascience",
    "language": "Yorick",
    "level": "intermediate",
    "desc": "Analyze scientific data and create visualizations with Yorick.",
    "link": "yorick.html"
  },
  {
    "title": "ZPL for Parallel Programming",
    "category": "backend",
    "language": "ZPL",
    "level": "advanced",
    "desc": "Write array-based parallel programs for high-performance computing with ZPL.",
    "link": "zpl.html"
  },
  {
    "title": "Zsh Scripting for Shell Power",
    "category": "devops",
    "language": "Zsh",
    "level": "intermediate",
    "desc": "Automate and enhance the command-line experience with Zsh scripting.",
    "link": "zsh.html"
  },
  {
    "title": "VHDL-AMS for Mixed-Signal Design",
    "category": "hardware",
    "language": "VHDL-AMS",
    "level": "advanced",
    "desc": "Model analog and mixed-signal circuits using VHDL-AMS.",
    "link": "vhdlams.html"
  },
  {
    "title": "Vala for GNOME Apps",
    "category": "web",
    "language": "Vala",
    "level": "intermediate",
    "desc": "Create modern GNOME desktop applications efficiently with Vala.",
    "link": "vala2.html"
  },
  {
    "title": "Verilog-AMS for Analog Circuits",
    "category": "hardware",
    "language": "Verilog-AMS",
    "level": "advanced",
    "desc": "Design analog and mixed-signal systems with Verilog-AMS.",
    "link": "verilogams.html"
  },
  {
    "title": "Zeno for Education",
    "category": "education",
    "language": "Zeno",
    "level": "beginner",
    "desc": "Introduce algorithmic thinking to students with the Zeno language.",
    "link": "zeno.html"
  },
  {
    "title": "AMPL for Mathematical Optimization",
    "category": "datascience",
    "language": "AMPL",
    "level": "intermediate",
    "desc": "Model and solve large-scale optimization problems with AMPL.",
    "link": "ampl.html"
  },
  {
    "title": "APL2 for Advanced Array Programming",
    "category": "datascience",
    "language": "APL2",
    "level": "advanced",
    "desc": "Expand array programming techniques for data analysis with APL2.",
    "link": "apl2.html"
  },
  {
    "title": "Befunge for Esoteric Programming",
    "category": "scripting",
    "language": "Befunge",
    "level": "beginner",
    "desc": "Experiment with two-dimensional, esoteric programming in Befunge.",
    "link": "befunge.html"
  },
  {
    "title": "Chef for Configuration Management",
    "category": "devops",
    "language": "Chef",
    "level": "intermediate",
    "desc": "Automate server configuration and deployment with Chef.",
    "link": "chef.html"
  },

  // ... (add all your course objects here) ...
];

// Helper to capitalize
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// State for selected languages (persist after rerender)
let selectedLangs = [];

// Renders language checkboxes, keeps checked state
function renderLanguageToggles(category) {
  const container = document.getElementById('language-toggles');
  const langs = [...new Set(languageData[category] || languageData.all)];
  container.innerHTML = langs.map(lang =>
    `<label><input type="checkbox" name="language" value="${lang}"${selectedLangs.includes(lang) ? " checked" : ""}> ${lang}</label>`
  ).join(' ');
}

// Main function to filter and show courses
function renderCoursesList() {
  const category = document.querySelector('[name="category"]:checked').value;
  const level = document.querySelector('[name="level"]:checked').value;
  const langCheckboxes = document.querySelectorAll('[name="language"]:checked');
  selectedLangs = Array.from(langCheckboxes).map(cb => cb.value);

  // Search
  const searchInput = document.getElementById('ai-search');
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

  let filtered = courses.filter(course => {
    // Category
    let categoryMatch = (category === "all" || course.category === category);
    // Level
    let levelMatch = (level === "all" || course.level === level);
    // Language
    let langMatch = (selectedLangs.length === 0 || selectedLangs.includes(course.language));
    // Search
    let searchMatch = true;
    if (searchTerm.length > 0) {
      searchMatch =
        (course.title && course.title.toLowerCase().includes(searchTerm)) ||
        (course.desc && course.desc.toLowerCase().includes(searchTerm)) ||
        (course.language && course.language.toLowerCase().includes(searchTerm)) ||
        (course.category && course.category.toLowerCase().includes(searchTerm)) ||
        (course.level && course.level.toLowerCase().includes(searchTerm));
    }
    return categoryMatch && levelMatch && langMatch && searchMatch;
  });

  const container = document.getElementById('courses-list');
  const noCoursesMsg = document.getElementById('no-courses-msg');
  if(filtered.length === 0) {
    container.innerHTML = "";
    noCoursesMsg.style.display = "block";
  } else {
    noCoursesMsg.style.display = "none";
    container.innerHTML = filtered.map(course => `
      <a href="${course.link}" target="_blank" class="course-link" style="text-decoration:none;color:inherit;">
        <div class="course-card">
          <span class="language-badge">${course.language}</span>
          <h3>${course.title}</h3>
          <p class="course-desc">${course.desc}</p>
          <div class="course-meta">
            <span class="course-cat"><i class="fa-solid fa-layer-group"></i> ${capitalize(course.category)}</span>
            <span class="course-lvl"><i class="fa-solid fa-signal"></i> ${capitalize(course.level)}</span>
          </div>
          <button class="cta enroll-btn">Enroll for Free</button>
        </div>
      </a>
    `).join("");
  }
}

// ---------- On DOM ready ----------
document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  renderLanguageToggles('all');
  renderCoursesList();

  // Category change
  document.querySelectorAll('[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
      renderLanguageToggles(this.value);
      renderCoursesList();
    });
  });
  // Level change
  document.querySelectorAll('[name="level"]').forEach(radio => {
    radio.addEventListener('change', renderCoursesList);
  });
  // Language toggles (event delegation)
  document.getElementById('language-toggles').addEventListener('change', function(e){
    if (e.target && e.target.name === 'language') {
      renderCoursesList();
    }
  });

  // Search logic
  const searchInput = document.getElementById('ai-search');
  const searchBtn = document.getElementById('ai-search-btn');
  if(searchInput){
    searchInput.addEventListener('input', renderCoursesList);
    searchInput.addEventListener('keyup', function(e){
      if(e.key === 'Enter') renderCoursesList();
    });
  }
  if(searchBtn){
    searchBtn.addEventListener('click', renderCoursesList);
  }
});


// ===================== SMART AI SEARCH (with real results) =====================
const aiSearch = document.getElementById('ai-search');
const aiSearchBtn = document.getElementById('ai-search-btn');
const aiSearchResults = document.getElementById('ai-search-results');

function aiSmartSearch() {
  let query = aiSearch.value.trim().toLowerCase();
  if (!query) {
    aiSearchResults.innerHTML = '';
    aiSearchResults.style.display = 'none';
    return;
  }
  // Search in courses
  let found = courses.filter(course =>
    (course.title && course.title.toLowerCase().includes(query)) ||
    (course.language && course.language.toLowerCase().includes(query)) ||
    (course.desc && course.desc.toLowerCase().includes(query))
  );
  if (found.length === 0) {
    aiSearchResults.innerHTML = `<div><b>Results for "${query}":</b><ul><li>No course found.</li></ul></div>`;
  } else {
    aiSearchResults.innerHTML = `<div><b>Results for "${query}":</b><ul>` +
      found.map(course =>
        `<li><a href="${course.link}" target="_blank">${course.title} <span style="color:#888;">(${course.language}, ${capitalize(course.level)})</span></a></li>`
      ).join('') + `</ul></div>`;
  }
  aiSearchResults.style.display = 'block';
  // Hide results if user clicks outside box or on blur
  document.addEventListener('mousedown', closeAISearchResultsOnClick);
}
function closeAISearchResultsOnClick(e) {
  if (!aiSearchResults.contains(e.target) && e.target !== aiSearch && e.target !== aiSearchBtn) {
    aiSearchResults.style.display = 'none';
    document.removeEventListener('mousedown', closeAISearchResultsOnClick);
  }
}
if(aiSearchBtn) aiSearchBtn.addEventListener('click', aiSmartSearch);
if(aiSearch) {
  aiSearch.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') aiSmartSearch();
  });
}


// ===================== VOICE SEARCH =====================
const voiceBtn = document.querySelector('.voice-btn');
if (voiceBtn && aiSearch) {
  voiceBtn.addEventListener('click', function () {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      aiSearch.value = "Sorry, voice recognition is not supported in this browser.";
      return;
    }
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = function(event) {
      aiSearch.value = event.results[0][0].transcript;
      aiSearch.focus();
      renderCoursesList();
      aiSmartSearch();
    };
    recognition.onerror = function(event) {
      aiSearch.value = "Voice recognition failed.";
    };
  });
}


// ===================== CHATBOT =====================
const openChatbotBtn = document.getElementById('open-chatbot');
const closeChatbotBtn = document.getElementById('close-chatbot');
const chatbotContainer = document.getElementById('chatbot-container');

if (openChatbotBtn && closeChatbotBtn && chatbotContainer) {
  openChatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    setTimeout(() => {
      const inp = document.getElementById('chatbot-input');
      if (inp) inp.focus();
    }, 160);
  });
  closeChatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
  });

  // Close chatbot if user clicks outside the chatbot area
  document.addEventListener('mousedown', function(event) {
    if (
      chatbotContainer.style.display !== 'none' &&
      !chatbotContainer.contains(event.target) &&
      event.target !== openChatbotBtn
    ) {
      chatbotContainer.style.display = 'none';
    }
  });
}

function sendChatbotMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (!message) return;
  const messagesDiv = document.getElementById('chatbot-messages');
  messagesDiv.innerHTML += `<div style="margin-bottom:7px;"><b>You:</b> ${message}</div>`;
  input.value = '';
  // Simulate AI response
  setTimeout(() => {
    messagesDiv.innerHTML += `<div style="margin-bottom:13px;"><b>AI:</b> <span style="color:#00ffe7;">This is a sample response. Soon, you'll get real coding help, explanations, and recommendations here.</span></div>`;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 700);
}

// Quick ask AI (from hero)
const quickAskAiBtn = document.getElementById('quick-ask-ai');
if (quickAskAiBtn && chatbotContainer) {
  quickAskAiBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    setTimeout(() => {
      const inp = document.getElementById('chatbot-input');
      if (inp) inp.focus();
    }, 160);
  });
}