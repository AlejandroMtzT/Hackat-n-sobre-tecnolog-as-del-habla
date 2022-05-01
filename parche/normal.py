file = open("admin.jsonl", "r")
out = open("output.jsonl", "w", encoding='utf-8')
dict = file.readlines()
for string in dict:
    string = string.encode('utf-8')
    print(string)
    tr = string.decode('unicode-escape')
    print(tr)
    out.write(tr)
