def maxArrayQueries(n, queries):
    # Write your code here
    arr = [0]*n
    for index in queries:
        arr[index[0] - 1] += index[2]
        if index[1] != len(arr):
            arr[index[1]] -= index[2]
    value = 0
    iteration = 0
    print(arr)
    for q in arr:
        iteration += q
        if iteration > value:
            value = iteration
    return value


    def partitionArray(k, numbers):
    # Write your code here
        if not numbers and k == 1:
            return 'Yes'
        numLength = len(numbers)
        if k > numLength or numLength%k:
            return 'No'
        groupnum = numLength//k
        theCount = collections.Counter(numbers)
        if groupnum < max(theCount.values()):
            return 'No'
        return 'Yes'