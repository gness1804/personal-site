#!/bin/bash

function removeImports ()
{
  sed -i -e 's/import/\/\/import/g' flow/$1
  echo 'Commented out import statements.'
}

files=( $(ls flow) )

for i in "${files[@]}"
do
  removeImports "$i"
done


