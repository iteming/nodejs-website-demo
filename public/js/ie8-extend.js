var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
        "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",

    wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },

    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    rtagName = /<([\w:]+)/,
    rtbody = /<tbody/i,
    rhtml = /<|&#?\w+;/,
    rleadingWhitespace = /^\s+/,
    rcheckableType = /^(?:checkbox|radio)$/,
    rscriptType = /\/(java|ecma)script/i;


// 设置复选框checkbox或单选框radio表单元素的默认选中状态
function fixDefaultChecked(elem) {
    if (rcheckableType.test(elem.type)) {
        elem.defaultChecked = elem.checked;
    }
}

// 创建一个安全的文档碎片
function createSafeFragment(document) {
    var list = nodeNames.split("|"),
    safeFrag = document.createDocumentFragment(); // ie6,7,8浏览器把safeFrage作为HTMLDocument类型

    // 针对ie9以下浏览器
    if (safeFrag.createElement) {
        while (list.length) {
            safeFrag.createElement(
                list.pop()
            );
        }
    }
    return safeFrag;
}

// 模拟ES5中Array的新功能
// 该函数API：http://www.css88.com/jqapi-1.8/#p=jQuery.grep
jQuery.extend({
    grep: function (elems, callback, inv) {
        var retVal,
            ret = [],
            i = 0,
            length = elems.length;
        inv = !!inv;

        // Go through the array, only saving the items
        // that pass the validator function
        for (; i < length; i++) {
            retVal = !!callback(elems[i], i);
            if (inv !== retVal) {
                ret.push(elems[i]);
            }
        }
        return ret;
    }
});


jQuery.extend({
    clean: function (elems, context, fragment, scripts) {

        // 声明变量
        var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
            safe = context === document && safeFragment,
            ret = [];

        // 确保变量context为文档根节点document
        if (!context || typeof context.createDocumentFragment === "undefined") {
            context = document;
        }

        // Use the already-created safe fragment if context permits
        for (i = 0; (elem = elems[i]) != null; i++) {

            // 如果elem为数字,则将其转换为字符串
            if (typeof elem === "number") {
                elem += "";
            }

            // 如果elem为undefined,跳出本次循环
            if (!elem) {
                continue;
            }

            // Convert html string into DOM nodes
            // 转换数组项(字符串)为DOM节点
            if (typeof elem === "string") {

                // 如果不存在html实体编号或标签,则创建文本节点
                if (!rhtml.test(elem)) {
                    elem = context.createTextNode(elem);
                }
                    // 处理是html标签字符串的数组项
                else {
                    // Ensure a safe container in which to render the html
                    // safe为#document-fragment类型,在ie9以下浏览器中,safe为HTMLDocument类型节点,且nodeNames数组为空
                    safe = safe || createSafeFragment(context);

                    // 创建一个div元素并将其插入到文档碎片中
                    div = context.createElement("div");
                    safe.appendChild(div);

                    // Fix "XHTML"-style tags in all browsers
                    // 除了area,br,col,embed,hr,img,input,link,meta,param这些标签外,
                    // 将开始标签末尾加入斜杠的标签转换为开始和结束标签
                    elem = elem.replace(rxhtmlTag, "<$1></$2>");

                    // Go to html and back, then peel off extra wrappers
                    // 获取左边第一个标签元素
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();

                    // 获取最外层元素的包裹元素,并将元素包裹在其中
                    wrap = wrapMap[tag] || wrapMap._default;
                    depth = wrap[0];
                    div.innerHTML = wrap[1] + elem + wrap[2];

                    // Move to the right depth
                    // 如果元素的包裹深度大于1,div重新赋值为元素最近的包裹元素(即:包含第一层包裹元素)
                    while (depth--) {
                        div = div.lastChild;
                    }

                    // Remove IE's autoinserted <tbody> from table fragments
                    // 在IE6,7中,清除字符串中空table标签中自动加入的tbody标签(手动加入的除外)
                    if (!jQuery.support.tbody) {

                        // String was a <table>, *may* have spurious(伪造的) <tbody>
                        // 判断字符串中是否拥有空tbody标签
                        hasBody = rtbody.test(elem);

                        // 如果最外层标签为table且table中没有手动加入tbody
                        // 变量tbody为div.firstChild.childNodes(自动加入的tbody标签集合)
                        tbody = tag === "table" && !hasBody ?
                            div.firstChild && div.firstChild.childNodes :

                            // String was a bare <thead> or <tfoot>
                            // 如果字符串中仅有一个空thead或tfoot标签
                            // 变量tbody为div.childNodes(字符串中的thead和tfoot标签集合)
                            wrap[1] === "<table>" && !hasBody ?
                                div.childNodes :
                                [];

                        for (j = tbody.length - 1; j >= 0 ; --j) {

                            // 排除thead或tfoot标签
                            if (jQuery.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {

                                // 清除空table标签中自动加入的tbody
                                tbody[j].parentNode.removeChild(tbody[j]);
                            }
                        }
                    }

                    // IE completely kills leading whitespace when innerHTML is used
                    // 在ie9以下浏览器中,字符串以空白字符串开头,将空白字符串作为div元素的第一个文本子节点
                    if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                        div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
                    }

                    // 获取已经处理完毕的div子节点集合(nodeList对象)
                    elem = div.childNodes;

                    // Take out of fragment container (we need a fresh div each time)
                    // 在下一次循环处理字符串数组项前,清除处理创建过的div元素
                    div.parentNode.removeChild(div);
                }
            }

            // 如果elem为DOM节点(文本节点)
            if (elem.nodeType) {
                ret.push(elem);
            }
                // 将nodeList对象中节点合并到返回的数组中
            else {
                jQuery.merge(ret, elem);
            }
        }

        // Fix #11356: Clear elements from safeFragment
        if (div) {
            elem = div = safe = null;
        }

        // Reset defaultChecked for any radios and checkboxes
        // about to be appended to the DOM in IE 6/7 (#8060)
        // 在ie6,7中,拥有checked属性的单选按钮,复选框在插入到其他标签后,选中状态会失效(下面代码修复该bug)
        if (!jQuery.support.appendChecked) {
            for (i = 0; (elem = ret[i]) != null; i++) {
                if (jQuery.nodeName(elem, "input")) {
                    fixDefaultChecked(elem);
                } else if (typeof elem.getElementsByTagName !== "undefined") {
                    jQuery.grep(elem.getElementsByTagName("input"), fixDefaultChecked);
                }
            }
        }

        // Append elements to a provided document fragment
        // 将ret数组中的各DOM节点插入到提供的文档碎片中
        // 提取dom节点中的script节点，并添加到ret数组中，位置为其原父元素索引位置后
        if (fragment) {
            // Special handling of each script element
            handleScript = function (elem) {
                // Check if we consider it executable
                // 如果elem元素不存在type属性或者type值为javascript或者为ecmascript
                if (!elem.type || rscriptType.test(elem.type)) {
                    // Detach the script and store it in the scripts array (if provided) or the fragment
                    // Return truthy to indicate that it has been handled
                    return scripts ?
                        scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) :
                        fragment.appendChild(elem);
                }
            };

            for (i = 0; (elem = ret[i]) != null; i++) {
                // Check if we're done after handling an executable script
                if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {

                    // Append to fragment and handle embedded scripts
                    // 将elem元素添加到文档碎片中并处理嵌入的脚本(script标签元素)
                    fragment.appendChild(elem);
                    if (typeof elem.getElementsByTagName !== "undefined") {
                        // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
                        jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);

                        // Splice the scripts into ret after their former ancestor and advance our index beyond them
                        // 将script标签添加到数组，位置为其原父元素索引位置后
                        ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                        i += jsTags.length;
                    }
                }
            }
        }

        return ret;
    }
});