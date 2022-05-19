#!/usr/bin/env bash

set -e

# Build sprite from "Titanium" sponsors
montage \
    -background white \
    -geometry '280x280>+2+2' \
    Citi_Bike_logo_padded.png \
    vaccaro_280.png \
    city-of-jersey-city.png \
    cultural-affairs.jpg \
    titaniums.png

# Build sprite from "Steel" sponsors
montage \
    -background white \
    -geometry '189x189>+3+3' \
    oonee-square.png \
    hudson-tma.png \
    roadid-square.png \
    silverman_square.png \
    JCBC_square_negated.png \
    steels.png

# Concatenate 3 sponsor levels
convert -append \
    Grove_Logo_Final_568x.jpg \
    titaniums.png \
    steels.png \
    sponsors.png
