import React, {component} from "react";

class registerTable extends component{
    render(){
        let rows = this.props.list.map(element =>{
            return(
                <registerRow
                    key = {element._id}
                    student = {element}
                    onDelete = {()=>{
                        this.props.onDelete
                    }}
                />
            )
        })
        return(
            <div>
                <table className = "table table-hover">
                    <thead>
                        <tr className = "table table-hover">
                            <th scope = "col">carnet</th>
                            <th scope = "col">Horario de laboratorio</th>
                            <th scope = "col">Hora de ingreso</th>
                            <th scope = "col">Tarde?</th>
                            <th scope = "col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}

export default registerTable;