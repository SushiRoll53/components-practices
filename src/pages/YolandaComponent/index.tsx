const dog = {
    src:'https://upload.wikimedia.org/wikipedia/commons/b/b4/Golden_Retriever_puppy_standing.jpg',
     alt: 'Dog',
     width: '200px'
}
function Dog(){
    return (
         
    
        <div style={{ fontFamily: 'Open Sans', textAlign: 'center', background: '#F1ECE4' }}>
            <h1>Benefits of owning a dog</h1>
            <img
            src={dog.src}
            alt= {dog.alt}
            width={dog.width}/>
        </div>
        
    )
}
export default Dog;

