const json_page = [
    {
        tag: "head",
        children: [
            { 
                tag: "title", 
                text: "JSON Page" 
            }
        ]
    },
    {
        tag: "body",
        children: [
            {
                tag: "h2", 
                text: "Hello, your page loaded!",
                link: "#img_b",
                id: "title_t",
                classes: ["align-left", "blue"]
            },
            {
                tag: "div",
                id: "fake_dom",
                children: [
                    {
                        tag: "p", 
                        text: "Click me!",
                        link: "https://www.google.com/",
                        classes: ["align-center", "red"]
                    },
                    {
                        tag: "img", 
                        src: "fox.jpg",
                        id: "img_b",
                        size: [750]
                    }
                ]
            }
        ]
    }
];

// LOAD DOM INTO A FAKE DOM - FAKEDOM -> DIV
const fake_dom_container = document.getElementById("fake_dom");
const fake_dom_document = load_from_json(json_page);

document.title = fake_dom_document.title;

for (var i = 0; i < fake_dom_document.children.length; ++i) 
    fake_dom_container.appendChild(fake_dom_document.children[i]);
