#!/bin/bash
refs="refs/tags/$2";
output=$1:$2

patchGitRef="{\"spec\":{\"source\":{\"git\":{\"ref\":\"$refs\"}}}}"
patchOutputRef="{\"spec\":{\"output\":{\"to\":{\"name\":\"$output\"}}}}"


echo $patchGitRef
echo $patchOutputRef

oc patch bc/$1 -n showcase -p $patchGitRef && \
oc patch bc/$1 -n showcase -p $patchOutputRef && \
oc set triggers dc/$1 -n showcase --remove-all && \
oc set triggers dc/$1 -n showcase --from-image=$1:$2 --containers $1
