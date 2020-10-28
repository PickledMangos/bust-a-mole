#!/bin/bash

npm run build
gzip -9 -k ./build/
aws s3 sync ./build/ s3://fuzzypickles.xyz/
