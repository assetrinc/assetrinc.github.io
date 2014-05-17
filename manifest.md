# Manifest Files

Manifest files are CSS and JS files with special comments that list CSS or JS files to include.

Assetrinc uses [Sprocketeer](http://github.com/zacharyrankin/sprocketeer) to parse manifest files.  Sprocketeer manifest files are similar to Ruby's Sprockets library manifest files, but keep in mind that Sprocketeer simplifies behavior by using named category paths instead of search paths.