


const para = document.getElementById('para')
const oddeven = document.getElementById('oddeven')
let count=0;


    

function incr()
{
    if(count<25)
    {
        count++;
    
        para.textContent = count;
    }
    else{
        alert('Dont increase value greater than 25')
    }
    if(count==0)
    {
        
        oddeven.textContent = 'Zero'
    }
    else if(count%2==0){
        oddeven.textContent = 'Even'
    }
    else{
        oddeven.textContent='Odd'
    }
}
function decr()
{
    if(count>0)
    {
        count--;
        para.textContent = count;
    }
    else{
        alert('Dont decrease value less than zero')
    }
    if(count==0)
    {
        
        oddeven.textContent = 'Zero'
    }
    else if(count%2==0){
        oddeven.textContent = 'Even'
    }
    else{
        oddeven.textContent='Odd'
    }
}
function reset()
{
    count=0;
    para.textContent = count;
    if(count==0)
    {
        oddeven.textContent = 'Odd/Even';
    }
}
























/*const para = document.getElementsByTagName('p')
let count = 0;
function incr ()
{
    
       count++
				para[0].textContent = count
				para[1].textContent = "incremented" 
   
    
}
function decr ()
{
    if (count > 0)
    {
      count--
			para[0].textContent = count
			para[1].textContent = "decremented"  
    }
    else
    {
        alert("don't decrease than zerooo")
        }
    
}
function reset ()
{
    count = 0;
    para[0].textContent = count
    para[1].textContent = ""
}*/