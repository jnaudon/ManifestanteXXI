#!/bin/bash

cat README.md | pandoc -f markdown \
-c css/markdown.css \
--table-of-contents \
-t html5 \
> index.html
