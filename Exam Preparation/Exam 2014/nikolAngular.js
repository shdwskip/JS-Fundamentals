function solve(args) {
    let i, j, k;
    const n = +args[0];
    const model = {};
    const m = +args[n + 1];
    const result = [];
    const modelOpenTag = '<nk-model>';
    const modelCloseTag = '</nk-model>';
    const templateOpenTag = '<nk-template name="';
    const templateCloseTag = '</nk-template>';
    const templateRendering = '<nk-template render="';
    const conditionOpenTag = '<nk-if condition="';
    const conditionCloseTag = '</nk-if>';
    const escapeOpen = '{{';
    const escapeClose = '}}';
    let currentModel = '';
    let currentTemplateName = '';
    let currentTemplateContent = [];
    const allTemplates = {};
    let inModel = false;
    let escaped = false;
    let inTemplate = false;
    let render = true;
    let skipNewLine = false;


    for (i = 0; i < n; i += 1) {
        const keyValuePair = args[i + 1].split('-');
        const key = keyValuePair[0];
        let value = keyValuePair[1];

        if (value == 'true') {
            value = true;
        } else if (value == 'false') {
            value = false;
        } else if (value.indexOf(';') > - 1) {
            value = value.split(';');
        }
        model[key] = value;
    }

    for (j = n + 2; j < n + m + 2; j += 1) {
        let currentLine = args[j];
        if (currentLine == undefined) {
            currentLine = '';
        }
        if (inTemplate) {
            currentTemplateContent.push('\n');
        }
        for (k = 0; k < currentLine.length; k += 1) {
            const currentSymbol = currentLine[k];

            if (checkForCommand(currentLine, escapeOpen)) {
                escaped = true;
                k += 1;
                continue;
            }
            // escape ends
            if (escaped && checkForCommand(currentLine, escapeClose)) {
                escaped = false;
                k += 1;
                continue;
            }
            // escaped content, push to result
            if (escaped) {
                if (render) {
                    result.push(currentSymbol);
                }
                continue;
            }
            // check for if start
            if (checkForCommand(currentLine, conditionOpenTag)) {
                const currentCondition = currentLine.split('"')[1];
                conditionStatement = true;
                if (!model[currentCondition]) {
                    render = false;
                } else {
                    skipNewLine = true;
                }
                break;
            }
            // check for condition end
            if (checkForCommand(currentLine, conditionCloseTag)) {
                render = true;
                skipNewLine = true;
                break;
            }
            // check for template rendering
            if (checkForCommand(currentLine, templateRendering)) {
                const templateToRender = currentLine.split('"')[1];
                const templateContentToRender = allTemplates[templateToRender];
                if (render) {
                    result.push(templateContentToRender);
                }
                break;
            }
            // check if section is defined
            if (checkForCommand(currentLine, templateOpenTag)) {
                inTemplate = true;
                currentTemplateName = currentLine.split('"')[1];
                break;
                // TO DO: check for whitespaces
            }

            // check ending of section definition
            if (inTemplate && checkForCommand(currentLine, templateCloseTag)) {
                inTemplate = false;
                allTemplates[currentTemplateName] = currentTemplateContent.join('').trim();
                currentTemplateName = '';
                currentTemplateContent = [];
                break;
            }

            // append to current template
            if (inTemplate) {
                currentTemplateContent.push(currentSymbol);
                continue;
            }
            // check if model tag is opened
            if (checkForCommand(currentLine, modelOpenTag)) {
                inModel = true;
                k += modelOpenTag.length - 1;
                continue;
            }
            // check if model rendering ends
            if (inModel && checkForCommand(currentLine, modelCloseTag)) {
                inModel = false;
                // console.log(currentModel);
                if (model[currentModel] && render) {
                    result.push(model[currentModel]);
                }
                currentModel = '';
                k += modelCloseTag.length - 1;
                continue;
            }
            // check if in model
            if (inModel) {
                currentModel += currentSymbol;
                continue;
            }
            if (render) {
                result.push(currentSymbol);
            }
        }
        if (render && !skipNewLine) {
            result.push('\n');
        }

        if (skipNewLine) {
            skipNewLine = false;
        }
    }
    console.log(result.join('').trim());

    function checkForCommand(currentLine, tag) {
        return currentLine.substr(k, tag.length) == tag;
    }
}

solve([
    '6',
    'title-Telerik Academy',
    'showSubtitle-true',
    'subTitle-Free training',
    'showMarks-false',
    'marks-3;4;5;6',
    'students-Ivan;Gosho;Pesho',
    '42',
    '<nk-template name="menu">',
    '    <ul id="menu">',
    '        <li>Home</li>',
    '        <li>About us</li>',
    '    </ul>',
    '</nk-template>',
    '<nk-template name="footer">',
    '    <footer>',
    '        Copyright Telerik Academy 2014',
    '    </footer>',
    '</nk-template>',
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '    <title>Telerik Academy</title>',
    '</head>',
    '<body>',
    '    <nk-template render="menu" />',
    '',
    '    <h1><nk-model>title</nk-model></h1>',
    '    <nk-if condition="showSubtitle">',
    '        <h2><nk-model>subTitle</nk-model></h2>',
    '        <div>{{<nk-model>subTitle</nk-model>}} ;)</div>',
    '    </nk-if>',
    '',
    '    <ul>',
    '        <nk-repeat for="student in students">',
    '            <li>',
    '                <nk-model>student</nk-model>',
    '            </li>',
    '            <li>Multiline <nk-model>title</nk-model></li>',
    '        </nk-repeat>',
    '    </ul>',
    '    <nk-if condition="showMarks">',
    '        <div>',
    '            <nk-model>marks</nk-model> ',
    '        </div>',
    '    </nk-if>',
    '',
    '    <nk-template render="footer" />',
    '</body>',
    '</html>']);
