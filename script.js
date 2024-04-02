function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length == 0) return 0;
	let totalCost = 0;
	while (arr.length > 1) {
		arr.sort((a,b) => a - b);
		const min1 = arr.shift();
		const min2 = arr.shift();
		const combineLength = min1 + min2;
		totalCost += combineLength;
		arr.push(combineLength);
	}
	return totalCost;
}

module.exports=mincost;
