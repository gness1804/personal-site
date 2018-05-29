#!/bin/bash

function removeEFiles ()
{
  if test $( ls flow | grep -c '\-e') != 0; then
     rm flow/*-e;
  fi
}

function removeImports ()
{
  sed -i -e 's/import/\/\/import/g' flow/$1
  echo 'Commented out import statements in flow/'$1'.'
}

function fixModuleExports ()
{
  sed -i -e 's/export default/module.exports = /g' flow/$1
  echo 'Fixed export defaults in flow/'$1'.'
}

files=( $(ls flow) )

for i in "${files[@]}"
do
  removeImports "$i"
  fixModuleExports "$i"
done

removeEFiles


