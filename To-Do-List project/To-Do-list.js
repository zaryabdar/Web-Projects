let todoarray=JSON.parse(localStorage.getItem('to-do-list'))||[];

        function storetodolist(){
        let namele = document.querySelector('.input-bar');
        let name =namele.value;
        let dateele= document.querySelector('.js-date-btn');
        let duedate=dateele.value;
        if(name&&duedate){
         todoarray.push({name,
            duedate 
         });
         savetostorage();
         document.querySelector('.input-bar').value='';
         showtodo();
         
        }
    }
    
    function showtodo(){
        let todoHTML='';
        // for (let i = 0; i < todoarray.length; i++)
        todoarray.forEach((elementobj,index)=>{
        let {name,duedate}=elementobj;
        const html=`
        <div>${name}</div>
        <div>${duedate}</div>
        <button class="delete-btn" onclick="todoarray.splice(${index},1); showtodo(); savetostorage();">Delete</button>
        `;
        todoHTML+=html;
        });

        document.querySelector('.to-do-list-display').innerHTML=todoHTML;
    }

    function savetostorage(){
        localStorage.setItem('to-do-list',JSON.stringify(todoarray));
    }
    window.onload= showtodo();