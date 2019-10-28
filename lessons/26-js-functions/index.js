function showEvennumbers(max)
{
    for(let i=0;i<=max;i++)
    {
        if(i%2===0)
        {
            console.log(`${i} is even`);
        }
    }
}

function showUser(name,age,phoneNumber,street,postalCode,isMarried)
{
    console.log("Name",name);
    console.log("Age",age);
    console.log("Phone Number",phoneNumber);
    console.log("Street",street);
    console.log("Postal Code",postalCode);
    console.log("Married",isMarried);
}

const showEvenNumber2=function()
{
    for(let i=0;i<=100;i++)
    {
        if(i%2===0)
        {
            console.log(`${i} is even`);
        }
    }
}
showEvennumbers(100);
showUser("ABC",22,222222,"123 bds rd","s7l1k6",false);
showEvenNumber2();
showEvenNumber2();
showEvenNumber2();
showEvenNumber2();
showEvenNumber2();
