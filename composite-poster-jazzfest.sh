#!/usr/bin/env bash

set -e

magick composite \
    -gravity center \
    -geometry 61x+405+1138 \
    riverview-jazz_bg_square.png \
    BikeJC_WardTour_Poster_logos.png \
    poster-rna.png
