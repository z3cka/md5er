## Install
```npm install md5-file```

## Usage
```node md5er.js DIR-1 DIR-2```

Inspect output manually.
### TODO
1. put results in data model
2. compare parts of data to find matches and diffs

## Sample output
```
$ node md5er.js DRUP-640 DRUP-641
DRUP-640/.gitignore  md5: ba9dcac2d0c438c5d6a24d825821be47
DRUP-640/README.md  md5: ad9417ff192440d7dbf035c9323262c8
DRUP-640/license.txt  md5: ed08083dba4f02cead20e256e302c47f
DRUP-640/preservation.wordpress.2015-06-08.xml  md5: a0d2ed7acfebe6688e68dc309bc021bb
DRUP-641/.DS_Store  md5: ed5ec6f5043d9ec13e582610b35eab2b
DRUP-641/README.md  md5: ad9417ff192440d7dbf035c9323262c8
DRUP-641/license.txt  md5: ed08083dba4f02cead20e256e302c47f
DRUP-641/.gitignore  md5: ba9dcac2d0c438c5d6a24d825821be47
```