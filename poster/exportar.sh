#!/bin/sh
#
#	export la imagen svg en png y crea versiones en diferentes tamaños
#

# exportar en png
inkscape -z poster.svg --export-png poster.png

# convierte en 800px
convert poster.png -resize x800 poster_revolucionario_de_accion_chico.png

# export en el tamaño y es plano
inkscape -z poster.svg --export-height=1024 --export-plain-svg=poster_plano.svg
