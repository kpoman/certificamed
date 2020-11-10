ls -la ~/Dev/empatizo/webapp.certificamed/src/html/inc.js.*|grep -v js.base|awk '{print "python build_libfile.py " $9" ../drafts/ lib/"}'
