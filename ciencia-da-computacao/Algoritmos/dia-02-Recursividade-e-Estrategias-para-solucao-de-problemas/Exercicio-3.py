def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


maiorinteiro([1, 10, 5, 59, 13, 200])
