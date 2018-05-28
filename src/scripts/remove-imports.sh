#!/bin/bash

sed -i -e 's/import/\/\/import/g' flow/truncate.js

echo 'Commented out import statements.'
