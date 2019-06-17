import React from 'react'

class Student extends React.Component {
    render() {
        const { student } = this.props  
        return (
            <div style={{height: '100px'}}>
                {student.name}
            </div>
        )
    }
}
export default Student
