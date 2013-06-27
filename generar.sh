#!/bin/bash

cat README.md | pandoc -f markdown -c css/markdown.css -t html > index.html
