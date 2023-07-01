def combinations(processed, unprocessed):

        result = []
        # base condition, when unprocessed is empty, return the processed 
        if unprocessed == "":
            print(processed)
            result.append(processed)
            return result
 
        # take the first character/ digit from unprocessed to be processed
        digit = int(unprocessed[0])

        start_range = (digit-2) * 3
        end_range = (digit-1 ) * 3

        
        for i in range(start_range, end_range+1):         
            if i == end_range and digit != 9 :      # since 9 has four chars
                break

            phone_char = chr(ord("a") + i)
            result.extend(combinations(processed+phone_char, unprocessed[1:]))

        return result


res = combinations("","29")
print(res)
