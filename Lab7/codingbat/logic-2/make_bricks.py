def make_bricks(small, big, goal):
    max_big = min(big, goal // 5)
    return (goal - max_big * 5) <= small