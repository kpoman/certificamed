import os
import sys

with open(sys.argv[1]) as f:
    for l in f:
        l = l.rstrip()
        l = l.replace(' }', '\n}')
        print(l)
