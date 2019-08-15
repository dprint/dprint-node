import { createProject } from "./createProject";
import { BabelAnalyzer, BabelNode } from "./babel";
import { DPrintAnalyzer } from "./dprint";
import { BabelNodeProperty } from "./babel/BabelNodeProperty";

const project = createProject();
const babelAnalyzer = new BabelAnalyzer(project);
const dprintAnalyzer = new DPrintAnalyzer(project);
const fileSystem = project.getFileSystem();

const implementedTypes = new Set(dprintAnalyzer.getParserParseObjKeys());
const flowNodeNames = new Set(dprintAnalyzer.getIgnoredFlowNodeNames());
const ignoredNodeNames = new Set(dprintAnalyzer.getIgnoredUnknownNodeNames());
const implementedNodes: BabelNode[] = [];
const unImplementedNodes: BabelNode[] = [];

for (const node of babelAnalyzer.getNodes().filter(n => !flowNodeNames.has(n.getName()) && !ignoredNodeNames.has(n.getName()))) {
    if (node.isReferenced() || implementedTypes.has(node.getType()) && verifyNodeHasNoProperties(node))
        implementedNodes.push(node);
    else
        unImplementedNodes.push(node);
}

let output = `# Implemented Nodes\n\n`;
output += `This file is automatically generated with the help of [ts-morph](https://github.com/dsherret/ts-morph).\n\n`;

// ~~ Implemented Section ~~
outputHeader("Implemented", implementedNodes);

for (const node of implementedNodes) {
    output += `* ${node.getName()}\n`;
    for (const prop of node.getProperties()) {
        if (isAllowedProperty(prop))
            outputProperty(prop);
    }
}

output += "\n";

// ~~ Not Implemented Section ~~
outputNameSection("Not implemented", Array.from(unImplementedNodes).map(n => n.getName()));

// ~~ Ignored Section ~~
outputNameSection("Ignored", Array.from(ignoredNodeNames), "These are ignored for now because they are new language features "
    + "or not supported (ex. WithStatement).\nPlease open an issue if you see a mistake here or would like any of these supported.");

// ~~ Flow Section ~~
outputNameSection("Ignored - Flow", Array.from(flowNodeNames), "These nodes are ignored because Flow is not supported and probably never will be.\n"
    + "Please open an issue if you see a mistake here.");

fileSystem.writeFileSync("implemented-nodes.md", output);

function verifyNodeHasNoProperties(node: BabelNode) {
    const props = node.getProperties().filter(p => p.getName() !== "type");
    if (props.length > 0)
        throw new Error(`The node '${node.getName()}' was expected to have no properties, but it did: ${props.map(p => p.getName()).join(", ")}`);

    return true;
}

function outputNameSection(header: string, names: string[], additionalText?: string) {
    outputHeader(header, names, additionalText);

    for (const name of names)
        output += `* ${name}\n`;

    output += "\n";
}

function outputHeader(header: string, nodes: unknown[], additionalText?: string) {
    output += `## ${header}\n\n`;
    if (additionalText != null)
        output += additionalText + "\n\n";
    output += `**Total:** ${nodes.length}\n\n`;
}

function outputProperty(prop: BabelNodeProperty) {
    output += `    * `;
    const isIgnored = prop.isIgnored();
    if (isIgnored)
        output += "~~"
    else if (prop.isReferenced())
        output += ":heavy_check_mark: ";
    else
        output += ":x: ";
    output += `${prop.getName()}`;
    if (isIgnored)
        output += "~~";
    output += "\n";
}

function isAllowedProperty(prop: BabelNodeProperty) {
    switch (prop.getName()) {
        case "type":
            return false;
    }

    return true;
}
