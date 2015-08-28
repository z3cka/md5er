## Install
```npm install md5-file```

## Usage
```node md5er.js DIR-1 DIR-2```

Inspect output manually.
### TODO
~~1. put results in data model~~  
2. compare parts of data to find matches and diffs

## Sample output
```
$ node md5er-obj.js DRUP-640 DRUP-641
Done processing dirs:
{ 'DRUP-640':
   { '.gitignore': 'ba9dcac2d0c438c5d6a24d825821be47',
     'README.md': '57511de7dd70936f29556e36d6f97fd5',
     'license.txt': 'ed08083dba4f02cead20e256e302c47f',
     'preservation.wordpress.2015-06-08.xml': 'a0d2ed7acfebe6688e68dc309bc021bb' },
  'DRUP-641':
   { '.DS_Store': 'ed5ec6f5043d9ec13e582610b35eab2b',
     '.gitignore': 'ba9dcac2d0c438c5d6a24d825821be47',
     'README.md': 'ad9417ff192440d7dbf035c9323262c8',
     'license.txt': 'ed08083dba4f02cead20e256e302c47f' } }
```