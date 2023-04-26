//taking isLoading and listOfUser as props

const UserList =  (props) => {

    //return the props ternary operator
    return props.isLoading ? (<h1>Loading...</h1>) 

        : (props.listOfUSer.map( (item,index)=> (
        <div   
        key={index}>

    <ul>
     <li>{item.name}</li>
     <li>{item.email}</li>
     <li>{item.company.name}</li>
     <li>{item.phone}</li><br></br>
    </ul>


        </div>
    )))

}

//export userList
export default UserList;

