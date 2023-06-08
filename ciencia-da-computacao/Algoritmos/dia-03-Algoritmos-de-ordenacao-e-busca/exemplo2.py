def find_duplicate(nums):
    nums_sorted = sorted(nums)
    print(nums_sorted)

    for n in range(len(nums_sorted) - 1):
        if nums_sorted[n] == nums_sorted[n + 1] and nums_sorted[n] >= 1:
            return nums_sorted[n]

    return False        


print(find_duplicate([3, 1, 2, 4, 6, 5, 7, 7, 7, 8]))