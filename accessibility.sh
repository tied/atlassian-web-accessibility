#!/usr/bin/env bash
####################################
# Confluence Accessibility Modifications
####################################
# Created By Zach Mitchell
# Last Update 12/15/2018
# chmod a+x <this file>.sh to be able to run it
# Use this file at your own risk

####################################
# Script Variables
####################################
temp=/var/tmp
DATE=$(date +%Y-%m-%d)
# Example Full Path to Confluence Folder - /opt/atlassian-confluence-6.13.4/confluence
installdir=/<full-path-to-confluence-folder>/confluence
backuplocation=/<full-path-to-confluence-folder>/originals_files-$DATE
modifiedfiles=$temp/modifiedfiles
version='6.13.4'
# this number corresponds with the folder version in GitHub

####################################
# Downloading Modifications
####################################
if [ ! -d "$modifiedfiles" ]; then
	mkdir "$modifiedfiles"
else
	sudo rm -rf "$modifiedfiles" $temp/master.zip
	mkdir "$modifiedfiles"
fi
cd $temp
curl -L https://github.com/SU-ITS-AASC/atlassian-web-accessibility/archive/master.zip -O
unzip $temp/master.zip -d $modifiedfiles
mv $modifiedfiles/atlassian-web-accessibility-master/confluence-edits-$version $modifiedfiles/
mv $modifiedfiles/confluence-edits-$version/layouts $modifiedfiles/
rm -rf $modifiedfiles/atlassian-web-accessibility-master $modifiedfiles/**/*.md
cd $modifiedfiles/confluence-edits-$version/
files=$(ls **/**/*.*)
files+=" "
files+=$(ls **/*.*)
files+=" "
files+=$(ls *.*)

####################################
# Modifications
####################################
if [ ! -d "$backuplocation" ]; then
	sudo mkdir "$backuplocation"
fi
for f in $files; do
	filedir=$(dirname $f)
	originalfile=$(echo $f | sed "s/-zlm\.jar$/\.jar/" )
	if [ ! -d "$backuplocation" ]; then
		sudo mkdir "$backuplocation"
	fi
	echo -e "\e[93mBacking up $originalfile\e[0m"
	sudo mkdir -p "$backuplocation"/$filedir
	sudo mv "$installdir"/"$originalfile" "$backuplocation"/"$originalfile"
	echo -e "\e[93mInstalling modified $f\e[0m"
	sudo cp $modifiedfiles/confluence-edits-$version/$f $installdir/$f
done
rm -rf $modifiedfiles $temp/master.zip
exit 0
