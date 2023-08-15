var i=1;

// To start from next value if previous profiles exists
if(localStorage.length!=0)
{
    const keys=Object.keys(localStorage);
    keys.sort();
    var k=Number(keys[keys.length-1])+1;
    i=k;
}

function check()
{
    var rollno=document.getElementById('rollno');
    var fname=document.getElementById('fname');
    var dob=document.getElementById('dob');
    var course=document.getElementById('course');
    if(rollno.value.trim()==='' && fname.value.trim()==='' && dob.value.trim()==='' && course.value.trim()==='')
    {
        alert("Please Enter all values");
    }
    else 
    {
        var obj={
        'rollno':rollno.value,
        'fname':fname.value,
        'dob':dob.value,
        'course':course.value
        };
        console.log(obj);
        localStorage.setItem(i,JSON.stringify(obj));
        var op=JSON.parse(localStorage.getItem(i));
        rollno.value='';
        fname.value='';
        dob.value='';
        course.value='';
        console.log(i);
        alert("Successfully Registered");
        i++;
    }
}

// Showing Profiles
const show=document.getElementById("view");
show.addEventListener("click",()=>{
    window.location.href='./profiles.html';
})