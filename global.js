#!/usr/bin/env node

let x = process.versions;
const { node, v8 } = x;
console.log(`node.js version: ${node}\nv8 version: ${v8}`);

