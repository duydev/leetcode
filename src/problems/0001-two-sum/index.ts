export function twoSum(nums: number[], target: number): number[] {
    const positions: Record<number, number> = {};

    for(let i = 0; i < nums.length; i++) {
        const newNum = target - nums[i];

        // console.log(positions, newNum);

        if(positions[newNum] !== undefined) {
            return [i, positions[newNum]];
        }

        positions[nums[i]] = i;
    }

    return [];
};