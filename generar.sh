#!/bin/bash

pandoc -f markdown \
	-c css/markdown.css \
	--standalone \
	-t html5 \
	README.md \
	> index.html

#	--table-of-contents \
