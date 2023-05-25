const SingleTech = ({id, name, removeTech}) => {
    return <>
        <h3>{name}</h3>
        <button onClick={()=>removeTech(id)}>Remove</button>
    </>
};

export default SingleTech;