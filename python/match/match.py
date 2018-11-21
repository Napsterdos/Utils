# -*- coding: utf-8 -*-

from reader import Reader
from tests import *
import re

r = Reader("configFile.txt")

a = r.openAllFiles()

lines = r.getLines(0)


for i in range(1, r.getFilesNumber()):
  file = r.getLines(i)
  for line in lines:
    line = re.findall('#[A-Za-z0-9]+', line)
    if(len(line)> 0):
      line = line[0].split('#')[1]
      test1(line, file)
r.closeAllFile()
