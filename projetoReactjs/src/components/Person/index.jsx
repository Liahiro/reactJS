
function Person({data}) {
    return ( 
        <li>
        <h2>{data.title}</h2>
        <img src={data.image} alt=""/>
        <p>{data.description}</p>
        </li>
     );
}

export default Person;