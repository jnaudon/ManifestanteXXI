#!/bin/bash

pandoc -f markdown \
	-c css/markdown.css \
	--standalone \
	-t html5 \
	README.md \
	-o index.html

pandoc -f markdown \
	README.md \
	-c css/markdown.css \
	-t epub \
	-o ManifestanteDIY.epub

#	--table-of-contents \
