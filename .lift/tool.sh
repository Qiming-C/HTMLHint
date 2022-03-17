#!/bin/bash

dir=$1

commit=$2

cmd=$3

run(){
	node ~/codeResource/HTMLHint/bin/htmlhint -f json $dir > output.json
	cat output.json
}

if [[ "$cmd" = "run" ]]; then
	run
fi

if [[ "$cmd" = "applicable" ]]; then
	echo "true"
fi

if [[ "$cmd" = "version" ]]; then
	echo 1
fi




#node ~/codeResource/HTMLHint/bin/htmlhint htmlhint.js -f json ~/codeResource/HTMLHint/test/html/executable.html  > output.json