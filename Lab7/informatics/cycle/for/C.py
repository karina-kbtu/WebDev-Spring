a = int(input())
b = int(input())

for n in range(a, b + 1): 
    square = n * n  
    if square > b: 
        break
    if square >= a: 
        print(square, end=" ")