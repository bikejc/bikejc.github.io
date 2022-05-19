#!/usr/bin/env bash

set -ex

cd "$(dirname "${BASH_SOURCE[0]}")"
cd public/files

# Build sprite from "Titanium" sponsors
montage \
    -background white \
    -geometry '284x284>+2+2' \
    Citi_Bike_logo_padded.png \
    vaccaro_280.png \
    city-of-jersey-city.png \
    cultural-affairs.jpg \
    titaniums.png

# Build sprite from "Steel" sponsors
montage \
    -background white \
    -geometry '105x105+5+2' \
    -tile 5x2 \
    oonee-square.png \
    hudson-tma.png \
    roadid-square.png \
    silverman_square.png \
    JCBC_square_negated.png \
    JerseyCyclesLogo_square.jpg \
    davidsankey_square.png \
    suez-vertical_square.png \
    riverview-jazz_bg_square.png \
    "LSM Logo_25p.jpg" \
    steels.png

# Concatenate 3 sponsor levels
convert -append \
    -resize '568x>' \
    Grove_Logo_Final_568x.jpg \
    titaniums.png \
    steels.png \
    sponsors.png
