#!/bin/bash


RESULT_DIR=/tmp/htmlhint_result.json
dir=$1

commit=$2

cmd=$3

run(){
	node ~/codeResource/HTMLHint/bin/htmlhint -f json $dir > $RESULT_DIR
	cat $RESULT_DIR
}

case "$3" in 
	run)
		run "$1" "$2" "$3"
		;;
	applicable)
		echo "true"
		;;
	version)
		echo 1
		;;
esac			




