#!/bin/sh

step="patch"

npm version "${step}"
npm publish
