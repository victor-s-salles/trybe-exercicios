def mergesort(string, start=0, end=None):
    if end is None:
        end = len(string)

    if end - start > 1:
        middle = (end + start) // 2
        mergesort(string, start, middle)
        mergesort(string, middle, end)
        merge(string, start, middle, end)
    return string


def merge(string, start, middle, end):
    left = string[start:middle]
    right = string[middle:end]
    top_left, top_right = 0, 0
    for k in range(start, end):
        if top_left >= len(left):
            string[k] = right[top_right]
            top_right += 1
        elif top_right >= len(right):
            string[k] = left[top_left]
            top_left += 1
        elif left[top_left] < right[top_right]:
            string[k] = left[top_left]
            top_left += 1
        else:
            string[k] = right[top_right]
            top_right += 1


def is_anagram(first_string, second_string):

    first_string_sorted = "".join(mergesort(list(first_string.lower())))
    second_string_sorted = "".join(mergesort(list(second_string.lower())))
    if first_string == "" or second_string == "":
        return (first_string_sorted, second_string_sorted, False)

    if first_string_sorted == second_string_sorted:
        return (first_string_sorted, second_string_sorted, True)
    else:
        return (first_string_sorted, second_string_sorted, False)



print(is_anagram("perda", ""))