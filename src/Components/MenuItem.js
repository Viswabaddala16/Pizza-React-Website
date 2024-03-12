


function MenuItem({name,image,price}) {
  return (
    <div className="menuItem">
        <div  style={{backgroundImage : `url(${image})`,marginTop:'-6.6%'}}>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
    </div>
    
  )
}

export default MenuItem
