def caught_speeding(speed, is_birthday):
    limit1 = 60 + (5 if is_birthday else 0)
    limit2 = 80 + (5 if is_birthday else 0)

    if speed <= limit1:
        return 0 
    elif speed <= limit2:
        return 1 
    else:
        return 2 