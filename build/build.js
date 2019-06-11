const spawn = require('child_process').spawn;
const path = require("path");
const cwd = __dirname;
const rootDir = path.join(cwd, "..");
const glob = require("glob");
const fs = require("fs-extra");

(async () => {
    try {
        await ts();
        await beautify();
        await template();
    } catch (error) {
        console.error("error happened: " + JSON.stringify(error))
    }
})();

async function addScriptToHtml(scriptName) {
    //  <script src="snippets/button.js"></script>
    //   <!--##script tags##-->
    return new Promise(async (resolve, reject) => {
        const htmlPath = path.join(rootDir, "index.html");
        var htmlFile = (await fs.readFile(htmlPath)).toString();

        if (htmlFile.indexOf(scriptName) < 0) {
            console.log("write html: " + scriptName);
            htmlFile = htmlFile.replace("<!--##script tags##-->", "<!--##script tags##-->\r\n<script src='dist/snippets/" + scriptName + "'></script>");
            await fs.writeFile(htmlPath, htmlFile);
        }

        resolve();
    });
}

async function template() {
    return new Promise(async (resolve, reject) => {
        const snippetsJsDir = path.join(rootDir, "dist", "snippets");
        const files = await _glob(path.join(snippetsJsDir, "*"));

        files.forEach(async (f) => {
            f = path.basename(f);
            const filePath = path.join(snippetsJsDir, f);
            const tsFilePath = path.join(rootDir, "snippets", f.replace("js", "tsx"));
            var jsFile = (await fs.readFile(filePath)).toString();
            const tsFile = (await fs.readFile(tsFilePath)).toString();
            const tsContent = tsFile.match(/.*\/\/to_display(.*)\/\/to_display_end.*/s)[1];
            const jsContent = jsFile.match(/.*\/\/to_display(.*)\/\/to_display_end.*/s)[1];
            
            jsFile = jsFile.replace("##tsx-code##", tsContent);
            jsFile = jsFile.replace("##js-code##", jsContent);
            jsFile = jsFile.replace(/.*require.*/g, "");
            jsFile = jsFile.replace('exports', "{}");
            await fs.writeFile(filePath, jsFile);
            await addScriptToHtml(f);
        });
    });
}

async function _glob(p) {
    return new Promise((resolve, reject) => {
        glob(p, {}, function (er, files) {
            resolve(files);
        });
    });
}

async function ts() {

    return new Promise((resolve, reject) => {
        const clientBuild = spawn("npm.cmd", ["run", "tsc"], { cwd: rootDir, shell: true });
        clientBuild.on("close", code => {
            if (code !== 0) {
                console.error(`client build fails with code: ${code}`);
                reject();
            } else {
                console.info(`client build ends with code: ${code}`);
                resolve();
            }
        });

        clientBuild.stdout.on('data', function(data) {
            console.log(data.toString()); 
        });
        clientBuild.stderr.on('data', function(data) {
            console.log(data.toString()); 
        });
    })
}

async function beautify() {
    return new Promise((resolve, reject) => {
        const clientBuild = spawn("js-beautify", ["dist/snippets/*"], { cwd: rootDir, shell: true });
        clientBuild.on("close", code => {
            if (code !== 0) {
                console.error(`client build fails with code: ${code}`);
                reject();
            } else {
                console.info(`client build ends with code: ${code}`);
                resolve();
            }
        });

        clientBuild.stdout.on('data', function(data) {
            console.log(data.toString()); 
        });
        clientBuild.stderr.on('data', function(data) {
            console.log(data.toString()); 
        });
    });
}