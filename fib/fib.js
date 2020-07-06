function fn(n){
if(n==1 || n==2)
	{
	return 1;}

	return fn(n-1)+fn(n-2);

}
module.exports = fn;