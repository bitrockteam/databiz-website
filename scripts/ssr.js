const puppeteer = require('puppeteer');
const express = require('express');
const fse = require('fs-extra');
const path = require('path');

const app = express();

async function start(urlToFetch) {
  console.log('Puppeteer fetching...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(urlToFetch);
  await page.waitForSelector('header.topbar nav li');
  const content = await page.content();

  const filePath = path.resolve(`./dist/index.html`);
  fse.outputFile(filePath, content);

  await browser.close();
  console.log('Puppeteer finished!');
  process.exit();
}

app.use(express.static(__dirname + './../dist'));

console.log('Starting server...');
app.listen(8080);

console.log('Starting Puppeteer...');
start('http://localhost:8080/index.tmpl.html');