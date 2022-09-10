import React from 'react'


const Repo = ({data}) => {
  return (
    <div className='repo-container'>
        {
            data.map((item)=>{
                return(
                    <ul key={item.id}>
                        <li>
                        <a href={item.html_url}>{item.name}</a> :{item.description}
                        </li>
                    </ul>
                )

            })
        }
    </div>
  )
}

export default Repo