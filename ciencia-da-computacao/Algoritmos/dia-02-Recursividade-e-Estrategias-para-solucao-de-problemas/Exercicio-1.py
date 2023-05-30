def conta_pares(n):
    pares = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            pares += 1
    return pares


print(conta_pares(12))
