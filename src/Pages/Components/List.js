import { styled } from '@mui/styles';
import mock from '/Node/todo-app/src/mock.json';

 
  const List = styled('div') ({
  backgroundColor: '#053735',
  width: '400px',
  height: '400px',
  position: 'absolute',
  top: '10%',
  left: '10%',
          
'& h2' : {  fontSize: '50px',
           letterSpacing: '6px',
           color: '#04FBF1',
           textAlign: 'center',
           boxShadow: '5px 10px #1FAEA8', 
        },

'& button' : { fontSize: '20px',
              padding: '5px 10px',
              marginTop: '20px',
              marginLeft: '30px',
              borderRadius: '6px',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              backgroundColor: '#04FBF1' 
            },        

'& button:hover' : { backgroundColor: '#1FAEA8',
                    color: 'white',
                    transitionDuration: '0.8s',
                  },      
});

const Items = styled('div') ({
 display: 'flex',
 textAlign: 'center',
 flexDirection: 'column',
 marginTop: '20px',
 marginLeft: '50px',

'& input' : {  fontSize: '20px',
         color: 'grey',
         borderBottom: '1px solid #A8EB12',
         width: '300px',
         textAlign: 'center',
         marginTop:'10px',
         borderRadius: '6px',
         border: 'none',
         outline: 'none',
         backgroundColor: '#D0E0AF',
      },
 
 '& [type="date"]' : { width: '218px',
                      cursor: 'pointer',
      },     
  
  '& [type="time"]' : { width: '120px',
                        cursor: 'pointer',

  },    

 '& button' : { width: '200px',
            marginTop: '40px',
},

});

 
 function ListItems() {  
 
 
  return (
  
   <List>
    <h2>Work</h2>
    <button type="button">Show items</button>
     
   <Items>
     <input type="text" placeholder="Title" name="title"></input>
     <input type="text" placeholder="Some text" name="text"></input>
     <input type="date" placeholder="Date" name="date"></input>
     <input type="time" name="time"></input> 
     <button type="submit">Add new event</button>
   </Items> 
     <div>
       {mock.map((item) =>(
        <>
          <p>{item.title}</p>
          <p>{item.text}</p>
          <p>{item.date}</p>
          <p>{item.time}</p>
        </>
       
         
       ))}
       
     </div>

  </List>
 
  )
}


export default ListItems;


