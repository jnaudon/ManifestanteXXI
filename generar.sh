#!/bin/bash

pandoc -f markdown \
	-c css/markdown.css \
	--standalone \
	README.md \
	-o index.html
#	-t html5 \

pandoc -f markdown \
	README.md \
	-c css/markdown.css \
	-t epub \
	-o ManifestanteDIY.epub

#	--table-of-contents \
