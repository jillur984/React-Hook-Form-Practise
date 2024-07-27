import React from "react"

const Field = ({label,children,htmlFor,error}) => {
    const id=htmlFor || getChildId(children)
  return (
    <>
    <div className="flex flex-col justify-start items-start mt-2 p-0 w-full mr-2">
        {label && <label className="mb-1" htmlFor={id}>{label}</label>}
        {children}
        {!!error && <div className="text-red-500">{error.message}</div>}
    </div>
    </>
  )
}

const getChildId=(children)=>{
   const child=React.Children.only(children)

   if("id" in child?.props){
    return child.props.id
   }
}

export default Field