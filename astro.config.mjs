import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Ultimate Docs',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                { label: "Low Level",
				  collapsed: true,
				  items: [
					{ label: "C",
					  collapsed: true,
					  autogenerate: { directory: 'low-level/c' }
					},
					{ label: "C++",
					  collapsed: true,
					  autogenerate: { directory: 'low-level/cpp' }
					},
					{ label: "Rust",
						collapsed: true,
						items: [
						  { label: "Basics", slug: "low-level/rust/overview" },
						  { label: "Variables and Mutability", slug: "low-level/rust/variables" },
						  { label: "Data Types", slug: "low-level/rust/data-types" },
						  { label: "Functions", slug: "low-level/rust/functions" },
						  { label: "Comments", slug: "low-level/rust/comments" },
						  { label: "Control Flow", slug: "low-level/rust/control-flow" },
						  { label: "Ownership", slug: "low-level/rust/ownership" },
						  { label: "Slice" , slug: "low-level/rust/slice" },
						  { label: "Structures", slug: "low-level/rust/structs" },
						  { label: "Enums", slug: "low-level/rust/enums" },
						  /*{ label: "Cargo",
							collapsed: true,
							items: [
							  { label: "Creating a Package", slug: "code/rust/cargo/package" },
							  { label: "Dependencies", slug: "code/rust/cargo/dependencies" },
							  { label: "Commands", slug: "code/rust/cargo/commands" }
							]
						  }*/
						]
					},
					{ label: "NASM",
					  collapsed: true,
					  autogenerate: { directory: 'low-level/nasm' }
					},
					{ label: "FORTRAN",
					  collapsed: true,
					  autogenerate: { directory: 'low-level/fortran' }
					},
					{ 
					  label: "Pascal",
					  collapsed: true,
					  autogenerate: { directory: 'low-level/pascal' }
					}
				]
				},
				{ label: "High Level",
				  collapsed: true,
				  items: [
					{ label: "Python",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/python' }
					},
					{ label: "QML",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/qml' }
					},
					{ label: "Java",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/java' }
					},
					{ label: "C#",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/csharp' }
					},
					{ label: "TypeScript",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/typescript' }
					},
					{ label: "R",
					  collapsed: true,
					  autogenerate: { directory: '/high-level/r' }
					},
					{ label: "PHP",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/php' }
					},
					{ label: "SQL",
					  collapsed: true,
					  autogenerate: { directory: 'high-level/sql' }
					},
					{
						label: "HTML",
						collapsed: true,
						items: [
						  { label: "Elements", slug: "high-level/html/elements" },
						  { label: "Attributes", slug: "high-level/html/attributes" },
						  { label: "Comments", slug: "high-level/html/comments" },
						  { label: "Head", slug: "high-level/html/head" },
						  { label: "Headings", slug: "high-level/html/headings" },
						  { label: "Paragraphs", slug: "high-level/html/paragraphs" },
						  { label: "Formatting", slug: "high-level/html/text-formatting" },
						  { label: "Links", slug: "high-level/html/links" },
						  { label: "Iframes", slug: "high-level/html/iframes" },
						  { label: "Images", slug: "high-level/html/images" },
						  { label: "Tables", slug: "high-level/html/tables" },
						  { label: "lists", slug: "high-level/html/lists" },
						  { label: "Classes and IDs", slug: "high-level/html/identifiers" },
						  { label: "Symbols", slug: "high-level/html/symbols" },
						  { label: "Favicons", slug: "high-level/html/favicons" },
						  { label: "Media",
							collapsed: true,
							items: [
							  { label: "Audio", slug: "high-level/html/media/audio" },
							  { label: "Video", slug: "high-level/html/media/video" }
							]
						  }
						]
					  },
					  { label: "CSS",
						collapsed: true,
						items: [
						  { label: "Basics", slug: "high-level/css/basics" },
						  { label: "Syntax", slug: "high-level/css/syntax" },
						  { label: "Comments", slug: "high-level/css/comments" },
						  { label: "Colors", slug: "high-level/css/colors" },
						  { label: "Backgrounds", slug: "high-level/css/backgrounds" },
						  { label: "Borders", slug: "high-level/css/borders" },
						  { label: "Dimensions", slug: "high-level/css/aspects" },
						  { label: "Align", slug: "high-level/css/align" },
						  { label: "Margins", slug: "high-level/css/margins" },
						  { label: "Padding", slug: "high-level/css/padding" },
						  { label: "Text", slug: "high-level/css/text" },
						  { label: "Links", slug: "high-level/css/links" },
						  { label: "lists", slug: "high-level/css/lists" },
						  { label: "Position", slug: "high-level/css/position" },
						  { label: "Z-Index", slug: "high-level/css/z-index" },
						  { label: "Overflow", slug: "high-level/css/overflow" },
						  { label: "Inline-Block", slug: "high-level/css/inline-block" },
						  { label: "Opacity", slug: "high-level/css/opacity" },
						  { label: "Combinators" , slug: "high-level/css/combinators" },
						  { label: "Pseudo-Classes", slug: "high-level/css/pseudo-classes" },
						  { label : "Pseudo-Elements", slug: "high-level/css/pseudo-elements" },
						  { label: "Visibility", slug: "high-level/css/visibility" },
						  { label: "Advanced",
							collapsed: true,
							items: [
							  { label: "Multiple Columns", slug: "high-level/css/advanced/columns" },
							  { label: "Gradients", slug: "high-level/css/advanced/gradients" },
							  { label: "Shadows", slug: "high-level/css/advanced/shadows" },
							  { label: "Rounded Borders", slug: "high-level/css/advanced/rounded-corners" },
							  { label: "Transitions", slug: "high-level/css/advanced/transitions" },
							  { label: "Media Queries", slug: "high-level/css/advanced/media-queries" },
							]
						  }
						]
					  },
					  { label: "JavaScript",
						collapsed: true,
						items: [
						  { label: "Variables", slug: "high-level/javascript/variables" },
						  { label: "Operators", slug: "high-level/javascript/operators" },
						  { label: "Conditions", slug: "high-level/javascript/conditions" },
						  { label: "Loops", slug: "high-level/javascript/loops" },
						  { label: "Functions", slug: "high-level/javascript/functions" },
						  { label: "Events", slug: "high-level/javascript/events" },
						  { label: "DOM", slug: "high-level/javascript/dom" },
						  { label: "Objects", slug: "high-level/javascript/objects" },
						  { label: "Arrays", slug: "high-level/javascript/arrays" },
						  { label: "Strings", slug: "high-level/javascript/strings" },
						  { label: "Numbers", slug: "high-level/javascript/numbers" },
						  { label: "Dates", slug: "high-level/javascript/dates" },
						  { label: "Math", slug: "high-level/javascript/math" },
						  { label: "Type Conversion", slug: "high-level/javascript/type-conversion" },
						  { label: "Error Handling", slug: "high-level/javascript/error-handling" },
						  { label: "Arrays", slug: "high-level/javascript/arrays" },
						  { label: "Classes", slug: "high-level/javascript/classes" }
						]
					  }
				]
				},
				{ label: "Build Systems",
				  collapsed: true,
				  items: [
					{ label: "CMake",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/cmake' }
					},
					{ label: "Meson",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/meson' }
					},
					{ label: "Cargo",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/cargo' }
					},
					{ label: "QMake",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/qmake' }
					},
					{ label: "Autoconf",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/autoconf' }
					},
					{ label: "Justfile",
					  collapsed: true,
					  autogenerate: { directory: 'build-systems/justfile' }
					}
				]
				}
            ],
        }),
    ],
});