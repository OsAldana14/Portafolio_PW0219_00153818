import React, {component} from "react";

class RegisterRow extends Component{
    render(){
        let studen = this.props.student;
        return(
            <tr className = "table-active">
                <th className = "row">{student.carnet}</th>
                <td>{student.schedule}</td>
                <td>{new Date(student.datetime).toLocaleString}</td>
                <td>{parseLate(student.isLate)}</td>
                <td>
                    <button
                        type="button"
                        className = "btn btn-ddanger"
                        onClick = {() =>{
                            this.props.onDelete();
                        }}
                        Drop
                    />
                </td>
            </tr>
        );
    }
}

const parseLate = value => {
    if(value){
        return "tardisimo";
    }
    return "A tiempo"
};

export default RegisterRow;