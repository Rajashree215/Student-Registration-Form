// To check values in localstorage
if(localStorage.length!=0)
{
    const keys=Object.keys(localStorage);
    keys.sort();
    for(var i=0;i<keys.length;i++)
    {
        var obj=JSON.parse(localStorage.getItem(keys[i]));
        card(obj,keys[i]);
        // console.log(obj,typeof(obj));
        // console.log(obj.rollno,obj.fname,obj.dob,obj.course);
    }
    function card(a,key)
    {
        // Name
        var h5=document.createElement('h5');
        h5.className="card-title";
        h5.innerHTML=a.fname;

        // Course
        var h6=document.createElement('h6');
        h6.className="card-subtitle mb-2 text-muted";
        h6.innerHTML="Course: "+a.course;

        // Roll NO
        var span1=document.createElement('span');
        span1.className="card-text";
        var b1=document.createElement('b');
        b1.innerHTML="ROLL NO: ";
        span1.appendChild(b1);
        span1.innerHTML=a.rollno;

        // Date of birth
        var span2=document.createElement('span');
        span2.className="card-text";
        var b2=document.createElement('b');
        b2.innerHTML="D.O.B: ";
        span2.appendChild(b2);
        span2.innerHTML=a.dob;
        
        // Edit Button
        var btn1=document.createElement('button');
        btn1.className="btn btn-primary me-2";
        btn1.innerHTML="Edit Profile";
        btn1.id=key;

        // Edit Event
        btn1.addEventListener("click",()=>{
            // To show the edit window
            document.getElementById('edit').style.display="block";
            document.getElementById('main').style.display='none';
            var id=event.target.id; 
            document.getElementById('rollno').value=a.rollno;
            document.getElementById('fname').value=a.fname;
            document.getElementById('dob').value=a.dob;
            document.getElementById('course').value=a.course;
            var update=document.getElementById('editbtn');
            update.addEventListener("click",()=>{
                var editval={
                    'rollno':document.getElementById('rollno').value,
                    'fname':document.getElementById('fname').value,
                    'dob':document.getElementById('dob').value,
                    'course':document.getElementById('course').value
                };
                localStorage.setItem(id,JSON.stringify(editval));
                alert("Updated Successfully");
                window.location.reload();
                // document.getElementById('edit').style.display="none";
                // document.getElementById('main').style.display='block';    
                console.log(editval);
            })
            console.log(id);
        });

        // Delete Button
        var btn2=document.createElement('button');
        btn2.className="btn btn-primary";
        btn2.innerHTML="Delete Profile";
        document.body.appendChild(btn1);
        document.body.appendChild(btn2);
        btn2.id=key;

        // Delete Event
        btn2.addEventListener("click",()=>{
            id=event.target.id;
            console.log(id);
            var profile=document.getElementById(id);
            localStorage.removeItem(id);
            profile.remove();
        });

        // Card Body
        var cardbody=document.createElement('div');
        cardbody.className="card-body";
        cardbody.appendChild(h5);
        cardbody.appendChild(h6);
        cardbody.appendChild(b1);
        cardbody.appendChild(span1);
        cardbody.appendChild(document.createElement('br'));
        cardbody.appendChild(b2);
        cardbody.appendChild(span2);
        cardbody.appendChild(document.createElement('br'));
        cardbody.appendChild(document.createElement('br'));
        cardbody.appendChild(btn1);
        cardbody.appendChild(btn2);
        
        // Card div
        var card=document.createElement('div');
        card.className="card ms-2";
        card.style.width="18rem";
        card.appendChild(cardbody);
        card.id=key;

        // Main Div
        var main=document.getElementById('main');
        main.appendChild(card); 
    }
}
else
{
    alert("No Profiles. Register to view profiles");
    window.location.href="./index.html";
}
const show=document.getElementById("view");
show.addEventListener("click",()=>{
    window.location.reload();
})
