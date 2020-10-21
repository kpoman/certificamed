import os
import sys

jsfile = sys.argv[1]
tmpdir = sys.argv[2]
outdir = sys.argv[3]

filename = os.path.basename(jsfile)
file_parts = filename.split('.')

if len(file_parts) == 4:
    tmp_filename = file_parts[2]+'.js'
elif len(file_parts) == 5:
    tmp_filename = file_parts[2]+'.'+file_parts[3]+'.js'


tmp_out = []
with open(jsfile) as f:
    for l in f:
        if l.find('<script>')<0 and l.find('</script>')<0:
            tmp_out.append(l.rstrip())

tmp_file = os.path.join(tmpdir, tmp_filename)
res = open(tmp_file, 'w')
res.write('\n'.join(tmp_out))
res.close()

os.system('javascript-obfuscator '+tmp_file+' -o '+os.path.join(outdir, tmp_filename)) 
