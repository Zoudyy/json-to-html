function load_from_json(data) {
    if (!(data instanceof Array)) return new TypeError("Provided a non-array object.");
    const dom = document.implementation.createHTMLDocument("");

    function parseElement(raw_data) {
        var _element = document.createElement(raw_data.tag || "p");
        let is_a_link_element = false;

        if (raw_data.text)
            _element.innerText = String(raw_data.text);

        if (raw_data.content) 
            _element.innerHTML = String(raw_data.content);
           
        if (raw_data.id)
            _element.id = String(raw_data.id);

        if (raw_data.src)
            _element.src = String(raw_data.src);

        if (raw_data.link)
            is_a_link_element = true;

        if (raw_data.size) {
            if (raw_data.size[0])
                _element.width = raw_data.size[0];
            if (raw_data.size[1])
                _element.height = raw_data.size[1];
        }
       
        if (raw_data.classes && (raw_data.classes instanceof Array))
            for (var i = 0; i < raw_data.classes.length; ++i)
                _element.classList.add(String(raw_data.classes[i]));

        if (raw_data.children && (raw_data.children instanceof Array))
            for (var i = 0; i < raw_data.children.length; ++i)
                _element.appendChild(parseElement(raw_data.children[i]));

        if (is_a_link_element) {
            // NOTE: This is a hack to allow href links to work. This isn't a good hack
            // so, in the future this needs to change.
            let _a = document.createElement("a");
            _a.href = raw_data.link;
            _a.appendChild(_element);
            for (var i = 0; i < raw_data.classes.length; ++i)
                _a.classList.add(String(raw_data.classes[i]));
            return _a;
        }

        return _element;
    }

    for (var i = 0; i < data.length; ++i) {
        var ele = parseElement(data[i]);
        if (ele.tagName == "HEAD") {  
            var ele_child_head = ele.children;
            for (var j = 0; j < ele_child_head.length; ++i) {
                if (ele_child_head[j].tagName == "TITLE") {
                    dom.title = ele_child_head[j].innerText;
                    break;
                }
            }
        }  
        if (ele.tagName == "BODY")
            dom.body = ele;        
    }

    return dom;
} 