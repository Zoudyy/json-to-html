# json-to-html
I coded it so that you can generate html from json!

Output/End Result:
[example](https://github.com/Zoudyy/json-to-html/blob/main/example_image.png?raw=true)

JSON:
```js
[
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
]```
