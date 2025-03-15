def make_chocolate(small, big, goal):
    max_big_bars = min(goal // 5, big)
    remaining_weight = goal - (max_big_bars * 5) 

    if remaining_weight <= small:  
        return remaining_weight
    return -1 