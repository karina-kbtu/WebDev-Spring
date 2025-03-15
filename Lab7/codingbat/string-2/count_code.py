import re

def count_code(s):
    return len(re.findall(r"co.e", s))