var targetIndices = function(nums, target) {
    nums=nums.sort((a,b)=>{
        return a-b;
    })
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            result.push(i);
        }
    }
    return result;
    
};
console.log(targetIndices([1,2,5,2,3],3))