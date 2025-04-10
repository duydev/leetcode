export function twoSum(nums: number[], target: number): number[] {
    const hashTable: Record<number, number[]> = nums.reduce((obj, num, idx) => {
        if(!obj[num]) {
            obj[num] = [];
        }

        obj[num].push(idx);

        return obj;
    }, {} as Record<number, number[]>);

    console.log(hashTable);

    for(let num of nums) {
        console.log(num, target - num, hashTable[num], hashTable[target - num]);
        
        if(hashTable[target - num] !== undefined) {
            if(target - num === num) {
                if(hashTable[num].length < 2) {
                    continue;
                }

                return [hashTable[num][0], hashTable[num][1]];
            }

            return [hashTable[num][0], hashTable[target - num][0]];
        }
    }

    return [-1, -1];
};